(function () {
    'use strict';

    const config = window.FIREBASE_CONFIG;
    const enabled = Boolean(config && config.apiKey && config.projectId && config.appId);
    const listeners = { auth: [], data: [], error: [] };

    const api = {
        enabled: enabled,
        user: null,
        ready: null,
        readyState: 'idle',
        onAuth: (cb) => {
            listeners.auth.push(cb);
            if (api.readyState === 'done' && authResolved) cb(api.user);
        },
        onData: (cb) => listeners.data.push(cb),
        onError: (cb) => listeners.error.push(cb),
        signInGoogle: null,
        signInEmail: null,
        signUpEmail: null,
        signOut: null,
        load: null,
        save: null,
        startSync: null,
        stopSync: null
    };

    window.PaymentsCloud = api;
    if (!enabled) return;

    const SDK = 'https://www.gstatic.com/firebasejs/10.14.1';
    let authModule = null;
    let fireModule = null;
    let auth = null;
    let docRef = null;
    let user = null;
    let unsubscribe = null;
    let saveTimer = 0;
    let pendingItems = null;
    let lastWriteAt = 0;
    let authResolved = false;

    const emit = (type, payload) => {
        listeners[type].forEach((cb) => {
            try { cb(payload); } catch (error) { /* ignore listener errors */ }
        });
    };

    const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

    function stopSync() {
        if (unsubscribe) {
            unsubscribe();
            unsubscribe = null;
        }
    }

    async function flush() {
        saveTimer = 0;
        if (!user || !docRef || !pendingItems) return;
        const items = pendingItems;
        pendingItems = null;
        const stamp = Date.now();
        lastWriteAt = stamp;
        try {
            await fireModule.setDoc(docRef, {
                items: items,
                updatedAt: stamp,
                email: user.email || ''
            });
        } catch (error) {
            emit('error', { code: 'sync' });
        }
    }

    api.save = (items) => {
        if (!user || !docRef) return;
        pendingItems = items;
        window.clearTimeout(saveTimer);
        saveTimer = window.setTimeout(flush, 700);
    };

    api.load = async () => {
        await api.ready;
        if (!user || !docRef) throw new Error('not-signed-in');
        const snapshot = await fireModule.getDoc(docRef);
        if (!snapshot.exists()) return null;
        const data = snapshot.data();
        const stamp = Number(data && data.updatedAt) || 0;
        if (stamp > lastWriteAt) lastWriteAt = stamp;
        return Array.isArray(data && data.items) ? data.items : null;
    };

    api.startSync = () => {
        stopSync();
        if (!user || !docRef) return;
        unsubscribe = fireModule.onSnapshot(docRef, (snapshot) => {
            if (snapshot.metadata.hasPendingWrites) return;
            const data = snapshot.data();
            if (!data || !Array.isArray(data.items)) return;
            const stamp = Number(data.updatedAt) || 0;
            if (stamp && stamp <= lastWriteAt) return;
            lastWriteAt = stamp;
            emit('data', data.items);
        }, () => emit('error', { code: 'sync' }));
    };

    api.stopSync = stopSync;

    api.signInGoogle = async () => {
        await api.ready;
        const provider = new authModule.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            await authModule.signInWithPopup(auth, provider);
        } catch (error) {
            const code = error && error.code;
            const popupUnavailable = code === 'auth/popup-blocked'
                || code === 'auth/operation-not-supported-in-this-environment'
                || code === 'auth/web-storage-unsupported';
            if (!popupUnavailable) throw error;
            await authModule.signInWithRedirect(auth, provider);
        }
    };

    api.signInEmail = async (email, password) => {
        await api.ready;
        await authModule.signInWithEmailAndPassword(auth, email, password);
    };

    api.signUpEmail = async (email, password) => {
        await api.ready;
        await authModule.createUserWithEmailAndPassword(auth, email, password);
    };

    api.signOut = async () => {
        await api.ready;
        window.clearTimeout(saveTimer);
        saveTimer = 0;
        pendingItems = null;
        stopSync();
        await authModule.signOut(auth);
    };

    api.readyState = 'loading';
    api.ready = (async () => {
        try {
            const modules = await Promise.race([
                Promise.all([
                    import(`${SDK}/firebase-app.js`),
                    import(`${SDK}/firebase-auth.js`),
                    import(`${SDK}/firebase-firestore.js`)
                ]),
                delay(15000).then(() => { throw new Error('import-timeout'); })
            ]);
            const appModule = modules[0];
            authModule = modules[1];
            fireModule = modules[2];

            const app = appModule.initializeApp(config);
            auth = authModule.getAuth(app);
            let db;
            try {
                db = fireModule.initializeFirestore(app, {
                    localCache: fireModule.persistentLocalCache({
                        tabManager: fireModule.persistentMultipleTabManager()
                    })
                });
            } catch (error) {
                db = fireModule.getFirestore(app);
            }

            const persistenceTask = authModule
                .setPersistence(auth, authModule.browserLocalPersistence)
                .catch(() => undefined);
            await Promise.race([persistenceTask, delay(4000)]);

            authModule.onAuthStateChanged(auth, (nextUser) => {
                user = nextUser;
                api.user = nextUser;
                authResolved = true;
                docRef = nextUser ? fireModule.doc(db, 'accounts', nextUser.uid) : null;
                if (!nextUser) stopSync();
                emit('auth', nextUser);
            });

            api.readyState = 'done';

            authModule.getRedirectResult(auth).catch((error) => {
                emit('error', { code: 'redirect', authCode: error && error.code ? error.code : '' });
            });
        } catch (error) {
            api.readyState = 'failed';
            emit('error', { code: 'setup' });
            emit('auth', null);
        }
    })();
})();
