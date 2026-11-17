(() => {
    'use strict';

    const STORAGE_KEY = 'app_payments_data_pure';
    const BACKUP_KEY = 'app_payments_data_backup_v1';
    const LAST_BACKUP_KEY = 'app_payments_backup_at_v1';
    const HINT_KEY = 'payments_install_hint_dismissed_v1';
    const LANG_KEY = 'app_lang_v1';
    const SNAPSHOT_KEY = 'app_payments_device_snapshot_v1';
    const LAST_CLOUD_KEY = 'app_payments_last_cloud_save_v1';

    const LANG_META = {
        ku: { htmlLang: 'ckb', dir: 'rtl', numberLocale: 'en-US', dateLocale: 'ckb-IQ' },
        ar: { htmlLang: 'ar', dir: 'rtl', numberLocale: 'ar-IQ', dateLocale: 'ar-IQ' },
        en: { htmlLang: 'en', dir: 'ltr', numberLocale: 'en-US', dateLocale: 'en-GB' }
    };

    const STRINGS = {
        ku: {
            appTitle: 'سیستەمی پارەدان',
            appSubtitle: 'تۆماری ناو و بڕی پارەدان',
            docTitle: 'سیستەمی بەڕێوەبردنی پارەدان',
            metaDescription: 'تۆمارکردن و بەڕێوەبردنی ناو و بڕی پارەدان بە دیناری عێراقی و دۆلاری ئەمریکی.',
            more: 'زیاتر',
            changeLanguage: 'گۆڕینی زمان',
            language: 'زمان',
            installHint: 'بۆ دانانی وەک ئەپ: لە Safari دوگمەی <strong>هاوبەشکردن</strong> دابگرە، پاشان <strong>Add to Home Screen</strong> هەڵبژێرە.',
            dismissHint: 'داخستنی ئاگادارکردنەوە',
            summaryLabel: 'کورتەی زانیاری',
            heroLabel: 'پارەی ماوە بەپێی دراو',
            currencyIQD: 'دینار',
            currencyUSD: 'دۆلار',
            currencyShortIQD: 'د.ع',
            currencyShortUSD: 'USD',
            currencyTabsLabel: 'دراو',
            and: ' و ',
            paidLabel: 'دراوە',
            totalLabel: 'نرخی گشتی',
            paidCountLabel: 'پارەدراوە',
            totalCountLabel: 'کۆی تۆمارەکان',
            searchPlaceholder: 'گەڕان بەدوای ناو، مۆبایل، بڕ، یان دۆخ...',
            search: 'گەڕان',
            resultOne: 'ئەنجام',
            resultMany: 'ئەنجام',
            records: 'تۆمارەکان',
            addNew: 'زیادکردنی ناوی نوێ',
            menuTitle: 'کردارەکان',
            menuShare: 'ناردنی لیستە بۆ واتسئەپ',
            menuCopy: 'کۆپیکردنی لیستە',
            menuBackup: 'پاشەکەوتکردنی نسخە (فایل)',
            menuRestore: 'گەڕاندنەوە لە فایل',
            menuPrint: 'چاپکردن',
            menuClear: 'سڕینەوەی هەموو تۆمارەکان',
            authSubtitle: 'بۆ پاراستنی داتاکانت بچۆ ژوورەوە',
            authEmail: 'ئیمەیل',
            authPassword: 'وشەی نهێنی',
            authSignIn: 'چوونەژوورەوە',
            authCreate: 'دروستکردنی هەژمار',
            authToSignUp: 'هەژمارت نییە؟ دروستی بکە',
            authToSignIn: 'هەژمارت هەیە؟ بچۆ ژوورەوە',
            authGoogle: 'بەردەوامبوون بە گووگڵ',
            authOr: 'یان',
            authChecking: 'چاوەڕوان بە...',
            authPrivate: 'داتاکانت تەنها بۆ خۆت دەبینرێن',
            authRequired: 'تکایە ئیمەیل و وشەی نهێنی بنووسە',
            authErrorInvalid: 'ئیمەیل یان وشەی نهێنی هەڵەیە',
            authErrorEmailUsed: 'ئەم ئیمەیلە پێشتر تۆمارکراوە — بچۆ ژوورەوە',
            authErrorWeak: 'وشەی نهێنی لانیکەم ٦ پیت بێت',
            authErrorEmail: 'ئیمەیلی دروست بنووسە',
            authErrorNetwork: 'کێشەی ئینتەرنێت هەیە — دواتر هەوڵبدەرەوە',
            authErrorNotEnabled: 'چوونەژوورەوە بەم ڕێگایە لە سێرڤەر چالاک نییە',
            authErrorGeneric: 'هەڵەیەک ڕوویدا — دووبارە هەوڵبدەرەوە',
            authErrorDomain: 'دۆمەینی ماڵپەڕە لە Firebase ڕێگەپێدراو نییە — ئەمە زیاد بکە: {domain}',
            authErrorConfig: 'چوونەژوورەوە لە پڕۆژەی Firebase ڕێک نەخراوە — لە Authentication دەستپێبکە و Email/Password و Google چالاک بکە',
            authErrorPopup: 'چوونەژوورەوە بە گووگڵ تەواو نەبوو — دووبارە هەوڵبدەرەوە',
            authErrorExists: 'ئەم ئیمەیلە بە شێوەیەکی تر تۆمارکراوە — بە ئیمەیل و وشەی نهێنی بچۆ ژوورەوە',
            authErrorCancelled: 'چوونەژوورەوە پاشگەزکرایەوە',
            authIosHint: 'لە ئایفۆن، بە ئیمەیل و وشەی نهێنی بچۆ ژوورەوە — گووگڵ لە ئەپی سەر شاشە لەوانەیە کار نەکات.',
            authSignOut: 'دەرچوون لە هەژمار',
            authSignOutConfirm: 'دەرچوون لە هەژمار؟ داتاکانت لەم ئامێرە دەمێننەوە و لە هەژمارەکەشتدا پارێزراون.',
            cloudUploaded: 'داتاکانت بۆ هەژمارەکەت بارکران',
            cloudSyncFailed: 'هاوکاتکردن لەگەڵ هەژمار نەکرا — داتاکان لەم ئامێرە پارێزراون',
            menuSaveNow: 'هاوکاتکردنەوەی ئێستا',
            menuRestoreDevice: 'گەڕاندنەوەی داتای ئەم ئامێرە',
            saveNowDone: 'داتاکانت ئێستا لەگەڵ هەژمار هاوکات کران',
            saveNowFailed: 'هاوکاتکردنەوە سەرکەوتوو نەبوو — داتاکانت لەم ئامێرە پارێزراون',
            restoreDeviceConfirm: 'داتای ئەم ئامێرە بگەڕێندرێتەوە؟ داتای ئێستا دەگۆڕدرێت بۆ داتای پێشووی ئەم ئامێرە.',
            restoreDeviceDone: 'داتای ئەم ئامێرە گەڕێندرایەوە',
            restoreDeviceNone: 'داتایەکی پێشوو لەم ئامێرە نەدۆزرایەوە',
            cloudStateSaved: 'دوایین هاوکاتکردن لەگەڵ هەژمار: {time}',
            cloudStatePending: 'هاوکاتکردن لەگەڵ هەژمار نەکراوە',
            cloudStateError: 'هاوکاتکردن سەرکەوتوو نەبوو',
            cloudLockedNotice: 'هاوکاتکردن لەگەڵ هەژمار ئێستا کار ناکات — داتاکانت لەم ئامێرە پارێزراون. لە Firebase Console، لە Firestore مافی خوێندنەوە و نووسین بۆ بەکارهێنەرانی چووەژوور پێبدە.',
            cloudSetupNotice: 'بنکەدراوەی Firestore لە پڕۆژەکەت چالاک نەکراوە — لە Firebase Console: Build ← Firestore Database ← Create database. داتاکانت لەم ئامێرە پارێزراون.',
            cloudRulesNotice: 'یاساکانی Firestore ڕێگەی پاشەکەوتکردن نادات — لە Firebase Console: Firestore Database ← Rules. داتاکانت لەم ئامێرە پارێزراون.',
            close: 'داخستن',
            addTitle: 'زیادکردنی ناوی نوێ',
            editTitle: 'دەستکاریکردنی تۆمار',
            nameLabel: 'ناوی کڕیار یان کۆگا',
            namePlaceholder: 'ناوی نوێ داخڵ بکە...',
            phoneLabel: 'ژمارەی مۆبایل',
            phonePlaceholder: '07XX XXX XXXX',
            phoneHint: 'ئارەزوومەندانە — بۆ پەیوەندیکردن',
            callPhone: 'پەیوەندیکردن',
            fieldTotalLabel: 'نرخی گشتی',
            fieldPaidLabel: 'بڕی دراوە',
            groupIQD: 'دیناری عێراقی',
            groupUSD: 'دۆلاری ئەمریکی',
            amountHint: 'بڕی ٠ واتا حیسابەکە پارەدراوە.',
            remainingLine: 'ماوە: {amount} {currency}',
            noteLabel: 'تێبینی',
            notePlaceholder: 'تێبینی بنووسە... (ئارەزوومەندانە)',
            addBtnText: 'زیادکردن',
            updateBtnText: 'نوێکردنەوە',
            cancel: 'پاشگەزبوونەوە',
            payTitle: 'تۆمارکردنی پارەدان',
            payAction: 'پارەدان',
            payName: 'ناو',
            paidBeforeLabel: 'پێشتر دراوە',
            remainingLabel: 'ماوە',
            payFillTitle: 'بڕی ماوە بخەرە خانەی بڕی ئێستا',
            payAmountLabel: 'بڕی ئێستا',
            payHint: 'ماوە: {amount} {currency}',
            payHintAfter: 'ماوە دوای تۆمارکردن: {amount} {currency}',
            payRowInfo: 'گشتی {total} · دراوە {paid} · ماوە {remaining}',
            fillRemaining: 'هەموو ماوە',
            paySubmit: 'تۆمارکردن',
            saveFailed: 'پاشەکەوتکردنی داتا سەرکەوتوو نەبوو',
            backupRestored: 'داتاکان لە پاشەکەوتی ناوخۆیی گەڕێندرایەوە',
            backupReminder: 'پاشەکەوتی داتاکانت بکە بۆ پاراستن — لە لیستەکە «پاشەکەوتکردنی نسخە (فایل)» هەڵبژێرە',
            deleted: 'تۆمارەکە سڕایەوە',
            noRecords: 'هیچ تۆمارێک نییە',
            confirmClear: 'ئایا دڵنیایت لە سڕینەوەی سەرجەم ناوەکان؟ ئەم کردارە ناگەڕێتەوە.',
            cleared: 'سەرجەم تۆمارەکان سڕانەوە',
            confirmDelete: 'ئایا دڵنیایت لە سڕینەوەی «{name}»؟',
            copyFailed: 'کۆپیکردن سەرکەوتوو نەبوو',
            noBackup: 'هیچ تۆمارێک نییە بۆ پاشەکەوتکردن',
            backupTitle: 'پاشەکەوتی پارەدان',
            backupReady: 'نسخەکە ئامادە کرا',
            backupSaved: 'نسخەکە پاشەکەوت کرا',
            noPrint: 'هیچ تۆمارێک نییە بۆ چاپکردن',
            printNow: 'چاپکردن',
            backToApp: 'گەڕانەوە بۆ ئەپ',
            printMobileHint: 'ئەگەر چاپ نەکرا، لاپەڕەکە لە Safari بکەرەوە و Share ← Print هەڵبژێرە.',
            noSend: 'هیچ تۆمارێک نییە بۆ ناردن',
            noCopy: 'هیچ تۆمارێک نییە بۆ کۆپیکردن',
            copiedAll: 'تەواوی لیستەکە کۆپی کرا',
            copiedItem: 'زانیاری «{name}» کۆپی کرا',
            invalidPay: 'تکایە بڕی پارەدان بنووسە',
            payRecorded: 'پارەدان تۆمارکرا — ماوە: {amount}',
            fullyPaid: '«{name}» بە تەواوی پارەدرا',
            nameRequired: 'تکایە ناوێک بنووسە',
            noCurrencyAmount: 'تکایە بڕی دینار یان دۆلار بنووسە',
            updated: 'تۆمارەکە نوێکرایەوە',
            added: 'ناوی نوێ زیادکرا',
            confirmRestore: 'داتای {count} تۆمار دەگەڕێندرێتەوە و داتای ئێستا دەگۆڕێت. بەردەوام بیت؟',
            restored: 'داتا بە سەرکەوتوویی گەڕێندرایەوە',
            badFile: 'فایلەکە دروست نییە یان تێکچووە',
            newVersion: 'وەشانی نوێی ئەپ ئامادەیە — دواتر دووبارە بیکەرەوە',
            langChanged: 'زمان گۆڕدرا',
            statusPaid: 'پارەدراوە',
            statusPartial: 'بەشێکی دراوە',
            statusDue: 'ماوە',
            itemTotalLabel: 'نرخی گشتی',
            itemRemainingLabel: 'ماوە',
            breakdownPaid: 'دراوە',
            breakdownTotal: 'نرخی گشتی',
            toolShare: 'ناردن بۆ واتسئەپ',
            toolCopy: 'کۆپیکردن',
            toolEdit: 'دەستکاریکردن',
            toolDelete: 'سڕینەوە',
            emptySearchTitle: 'هیچ ئەنجامێک نەدۆزرایەوە',
            emptySearchText: 'گەڕانەکە بگۆڕە یان بیسڕەوە',
            clearSearch: 'سڕینەوەی گەڕان',
            emptyTitle: 'هیچ ناوێک تۆمار نەکراوە',
            emptyText: 'ناوێک زیاد بکە بۆ دەستپێکردنی تۆمارەکەت',
            reportTitle: 'تۆماری پارەدان',
            reportHeading: 'ڕاپۆرتی بەڕێوەبردنی پارەدان',
            sumTotal: 'کۆی نرخی گشتی',
            sumPaid: 'کۆی دراوە',
            sumRemaining: 'کۆی ماوە',
            paidOf: 'پارەدراوە: {paid} لە {total}',
            printTitle: 'تۆماری بەڕێوەبردنی ناوەکان و پارەدان',
            printDateLabel: 'بەرواری چاپکردن',
            thName: 'ناوی کڕیار / کۆگا',
            thCurrencyIQD: 'دینار (گشتی / دراوە / ماوە)',
            thCurrencyUSD: 'دۆلار (گشتی / دراوە / ماوە)',
            printTotalShort: 'گشتی',
            printPaidShort: 'دراوە',
            printRemainingShort: 'ماوە',
            thNote: 'تێبینی',
            thStatus: 'دۆخ',
            grandTotal: 'کۆی گشتی',
            noRecordsPrint: 'هیچ تۆمارێک نییە',
            printFooter: 'سیستەمی بەڕێوەبردنی پارەدان'
        },
        ar: {
            appTitle: 'نظام الدفع',
            appSubtitle: 'سجل الأسماء والمبالغ',
            docTitle: 'نظام إدارة المدفوعات',
            metaDescription: 'تسجيل وإدارة الأسماء ومبالغ الدفع بالدينار العراقي والدولار الأمريكي.',
            more: 'المزيد',
            changeLanguage: 'تغيير اللغة',
            language: 'اللغة',
            installHint: 'لتثبيت التطبيق: في Safari اضغط على <strong>مشاركة</strong>، ثم اختر <strong>إضافة إلى الشاشة الرئيسية</strong>.',
            dismissHint: 'إغلاق التنبيه',
            summaryLabel: 'ملخص المعلومات',
            heroLabel: 'المتبقي حسب العملة',
            currencyIQD: 'دينار',
            currencyUSD: 'دولار',
            currencyShortIQD: 'د.ع',
            currencyShortUSD: 'USD',
            currencyTabsLabel: 'العملة',
            and: ' و ',
            paidLabel: 'المدفوع',
            totalLabel: 'الإجمالي',
            paidCountLabel: 'مدفوع',
            totalCountLabel: 'إجمالي السجلات',
            searchPlaceholder: 'ابحث بالاسم أو رقم الهاتف أو المبلغ أو الحالة...',
            search: 'بحث',
            resultOne: 'نتيجة',
            resultMany: 'نتائج',
            records: 'السجلات',
            addNew: 'إضافة اسم جديد',
            menuTitle: 'الإجراءات',
            menuShare: 'إرسال القائمة إلى واتساب',
            menuCopy: 'نسخ القائمة',
            menuBackup: 'حفظ نسخة احتياطية (ملف)',
            menuRestore: 'استعادة من ملف',
            menuPrint: 'طباعة',
            menuClear: 'حذف جميع السجلات',
            authSubtitle: 'سجّل الدخول للحفاظ على بياناتك آمنة',
            authEmail: 'البريد الإلكتروني',
            authPassword: 'كلمة المرور',
            authSignIn: 'تسجيل الدخول',
            authCreate: 'إنشاء حساب',
            authToSignUp: 'ليس لديك حساب؟ أنشئ واحدًا',
            authToSignIn: 'لديك حساب؟ سجّل الدخول',
            authGoogle: 'المتابعة باستخدام Google',
            authOr: 'أو',
            authChecking: 'جارٍ التحقق...',
            authPrivate: 'بياناتك مرئية لك فقط',
            authRequired: 'أدخل البريد الإلكتروني وكلمة المرور',
            authErrorInvalid: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
            authErrorEmailUsed: 'هذا البريد مسجّل بالفعل — سجّل الدخول',
            authErrorWeak: 'كلمة المرور ٦ أحرف على الأقل',
            authErrorEmail: 'أدخل بريدًا إلكترونيًا صحيحًا',
            authErrorNetwork: 'مشكلة في الاتصال — حاول لاحقًا',
            authErrorNotEnabled: 'هذه الطريقة غير مفعّلة في الخادم',
            authErrorGeneric: 'حدث خطأ — حاول مجددًا',
            authErrorDomain: 'نطاق الموقع غير مصرّح به في Firebase — أضف هذا في الكونسول: {domain}',
            authErrorConfig: 'تسجيل الدخول غير مُهيأ في مشروع Firebase — افتح Authentication واضغط Get started وفعّل Email/Password وGoogle',
            authErrorPopup: 'لم يكتمل الدخول عبر Google — حاول مجددًا',
            authErrorExists: 'هذا البريد مسجّل بطريقة أخرى — سجّل الدخول بالبريد وكلمة المرور',
            authErrorCancelled: 'تم إلغاء تسجيل الدخول',
            authIosHint: 'على iPhone، سجّل الدخول بالبريد وكلمة المرور — قد لا يعمل Google داخل تطبيق الشاشة الرئيسية.',
            authSignOut: 'تسجيل الخروج',
            authSignOutConfirm: 'تسجيل الخروج؟ ستبقى بياناتك على هذا الجهاز وفي حسابك.',
            cloudUploaded: 'تم رفع بياناتك إلى حسابك',
            cloudSyncFailed: 'تعذرت المزامنة مع الحساب — بياناتك محفوظة على هذا الجهاز',
            menuSaveNow: 'مزامنة الآن',
            menuRestoreDevice: 'استعادة بيانات هذا الجهاز',
            saveNowDone: 'تمت مزامنة بياناتك مع حسابك الآن',
            saveNowFailed: 'تعذرت المزامنة — بياناتك محفوظة على هذا الجهاز',
            restoreDeviceConfirm: 'استعادة بيانات هذا الجهاز؟ سيتم استبدال البيانات الحالية ببيانات هذا الجهاز السابقة.',
            restoreDeviceDone: 'تمت استعادة بيانات هذا الجهاز',
            restoreDeviceNone: 'لا توجد بيانات سابقة محفوظة على هذا الجهاز',
            cloudStateSaved: 'آخر مزامنة مع الحساب: {time}',
            cloudStatePending: 'لم تتم المزامنة مع الحساب',
            cloudStateError: 'تعذرت المزامنة مع الحساب',
            cloudLockedNotice: 'المزامنة مع الحساب لا تعمل حاليًا — بياناتك محفوظة على هذا الجهاز. افتح Firebase Console وفعّل صلاحية القراءة والكتابة في Firestore للمستخدمين المسجّلين.',
            cloudSetupNotice: 'قاعدة بيانات Firestore غير مفعّلة في مشروعك — من Firebase Console: Build ← Firestore Database ← Create database. بياناتك محفوظة على هذا الجهاز.',
            cloudRulesNotice: 'قواعد Firestore تمنع الحفظ — من Firebase Console: Firestore Database ← Rules. بياناتك محفوظة على هذا الجهاز.',
            close: 'إغلاق',
            addTitle: 'إضافة اسم جديد',
            editTitle: 'تعديل السجل',
            nameLabel: 'اسم العميل أو المتجر',
            namePlaceholder: 'أدخل اسمًا جديدًا...',
            phoneLabel: 'رقم الموبايل',
            phonePlaceholder: '07XX XXX XXXX',
            phoneHint: 'اختياري — للتواصل',
            callPhone: 'اتصال',
            fieldTotalLabel: 'الإجمالي',
            fieldPaidLabel: 'المدفوع',
            groupIQD: 'الدينار العراقي',
            groupUSD: 'الدولار الأمريكي',
            amountHint: 'المبلغ ٠ يعني أن الحساب مدفوع.',
            remainingLine: 'المتبقي: {amount} {currency}',
            noteLabel: 'ملاحظة',
            notePlaceholder: 'اكتب ملاحظة... (اختياري)',
            addBtnText: 'إضافة',
            updateBtnText: 'تحديث',
            cancel: 'إلغاء',
            payTitle: 'تسجيل دفعة',
            payAction: 'دفع',
            payName: 'الاسم',
            paidBeforeLabel: 'المدفوع سابقًا',
            remainingLabel: 'المتبقي',
            payFillTitle: 'ضع المبلغ المتبقي في حقل المبلغ الحالي',
            payAmountLabel: 'المبلغ الحالي',
            payHint: 'المتبقي: {amount} {currency}',
            payHintAfter: 'المتبقي بعد التسجيل: {amount} {currency}',
            payRowInfo: 'الإجمالي {total} · المدفوع {paid} · المتبقي {remaining}',
            fillRemaining: 'كل المتبقي',
            paySubmit: 'تسجيل',
            saveFailed: 'تعذر حفظ البيانات',
            backupRestored: 'تمت استعادة البيانات من النسخة الاحتياطية المحلية',
            backupReminder: 'احفظ نسخة احتياطية من بياناتك للحماية — اختر «حفظ نسخة احتياطية (ملف)» من القائمة',
            deleted: 'تم حذف السجل',
            noRecords: 'لا توجد سجلات',
            confirmClear: 'هل أنت متأكد من حذف جميع الأسماء؟ لا يمكن التراجع عن هذا الإجراء.',
            cleared: 'تم حذف جميع السجلات',
            confirmDelete: 'هل أنت متأكد من حذف «{name}»؟',
            copyFailed: 'تعذر النسخ',
            noBackup: 'لا توجد سجلات للحفظ',
            backupTitle: 'نسخة احتياطية للمدفوعات',
            backupReady: 'النسخة جاهزة',
            backupSaved: 'تم حفظ النسخة',
            noPrint: 'لا توجد سجلات للطباعة',
            printNow: 'طباعة',
            backToApp: 'العودة إلى التطبيق',
            printMobileHint: 'إذا لم تنجح الطباعة، افتح الصفحة في Safari واختر Share ← Print.',
            noSend: 'لا توجد سجلات للإرسال',
            noCopy: 'لا توجد سجلات للنسخ',
            copiedAll: 'تم نسخ القائمة كاملة',
            copiedItem: 'تم نسخ معلومات «{name}»',
            invalidPay: 'يرجى إدخال مبلغ الدفعة',
            payRecorded: 'تم تسجيل الدفعة — المتبقي: {amount}',
            fullyPaid: 'تم دفع «{name}» بالكامل',
            nameRequired: 'يرجى إدخال اسم',
            noCurrencyAmount: 'يرجى إدخال مبلغ بالدينار أو الدولار',
            updated: 'تم تحديث السجل',
            added: 'تمت إضافة الاسم الجديد',
            confirmRestore: 'سيتم استعادة بيانات {count} سجل واستبدال البيانات الحالية. هل تريد المتابعة؟',
            restored: 'تمت استعادة البيانات بنجاح',
            badFile: 'الملف غير صالح أو تالف',
            newVersion: 'إصدار جديد من التطبيق جاهز — أعد فتحه لاحقًا',
            langChanged: 'تم تغيير اللغة',
            statusPaid: 'مدفوع',
            statusPartial: 'مدفوع جزئيًا',
            statusDue: 'متبقٍ',
            itemTotalLabel: 'الإجمالي',
            itemRemainingLabel: 'المتبقي',
            breakdownPaid: 'مدفوع',
            breakdownTotal: 'الإجمالي',
            toolShare: 'إرسال إلى واتساب',
            toolCopy: 'نسخ',
            toolEdit: 'تعديل',
            toolDelete: 'حذف',
            emptySearchTitle: 'لا توجد نتائج',
            emptySearchText: 'غيّر البحث أو امسحه',
            clearSearch: 'مسح البحث',
            emptyTitle: 'لا توجد أسماء مسجلة',
            emptyText: 'أضف اسمًا لبدء سجلك',
            reportTitle: 'سجل الدفع',
            reportHeading: 'تقرير إدارة المدفوعات',
            sumTotal: 'إجمالي المبالغ',
            sumPaid: 'إجمالي المدفوع',
            sumRemaining: 'إجمالي المتبقي',
            paidOf: 'مدفوع: {paid} من {total}',
            printTitle: 'سجل إدارة الأسماء والمدفوعات',
            printDateLabel: 'تاريخ الطباعة',
            thName: 'اسم العميل / المتجر',
            thCurrencyIQD: 'دينار (الإجمالي / المدفوع / المتبقي)',
            thCurrencyUSD: 'دولار (الإجمالي / المدفوع / المتبقي)',
            printTotalShort: 'الإجمالي',
            printPaidShort: 'المدفوع',
            printRemainingShort: 'المتبقي',
            thNote: 'ملاحظة',
            thStatus: 'الحالة',
            grandTotal: 'الإجمالي',
            noRecordsPrint: 'لا توجد سجلات',
            printFooter: 'نظام إدارة المدفوعات'
        },
        en: {
            appTitle: 'Payment system',
            appSubtitle: 'Names and payment records',
            docTitle: 'Payment management system',
            metaDescription: 'Record and manage names and payment amounts in Iraqi dinars and US dollars.',
            more: 'More',
            changeLanguage: 'Change language',
            language: 'Language',
            installHint: 'To install as an app: in Safari tap <strong>Share</strong>, then choose <strong>Add to Home Screen</strong>.',
            dismissHint: 'Dismiss hint',
            summaryLabel: 'Summary',
            heroLabel: 'Remaining by currency',
            currencyIQD: 'IQD',
            currencyUSD: 'USD',
            currencyShortIQD: 'IQD',
            currencyShortUSD: 'USD',
            currencyTabsLabel: 'Currency',
            and: ' and ',
            paidLabel: 'Paid',
            totalLabel: 'Total',
            paidCountLabel: 'Paid',
            totalCountLabel: 'Total records',
            searchPlaceholder: 'Search by name, phone, amount, or status...',
            search: 'Search',
            resultOne: 'result',
            resultMany: 'results',
            records: 'Records',
            addNew: 'Add new name',
            menuTitle: 'Actions',
            menuShare: 'Send list to WhatsApp',
            menuCopy: 'Copy list',
            menuBackup: 'Save backup (file)',
            menuRestore: 'Restore from file',
            menuPrint: 'Print',
            menuClear: 'Delete all records',
            authSubtitle: 'Sign in to keep your data safe',
            authEmail: 'Email',
            authPassword: 'Password',
            authSignIn: 'Sign in',
            authCreate: 'Create account',
            authToSignUp: 'No account? Create one',
            authToSignIn: 'Have an account? Sign in',
            authGoogle: 'Continue with Google',
            authOr: 'or',
            authChecking: 'Checking...',
            authPrivate: 'Your data is visible only to you',
            authRequired: 'Enter your email and password',
            authErrorInvalid: 'Incorrect email or password',
            authErrorEmailUsed: 'This email is already registered — sign in',
            authErrorWeak: 'Password must be at least 6 characters',
            authErrorEmail: 'Enter a valid email address',
            authErrorNetwork: 'Network problem — try again later',
            authErrorNotEnabled: 'This sign-in method is not enabled on the server',
            authErrorGeneric: 'Something went wrong — try again',
            authErrorDomain: 'This site domain is not authorized in Firebase — add this in the console: {domain}',
            authErrorConfig: 'Sign-in is not set up in the Firebase project — open Authentication, click Get started, and enable Email/Password and Google',
            authErrorPopup: 'Google sign-in did not complete — try again',
            authErrorExists: 'This email is registered differently — sign in with email and password',
            authErrorCancelled: 'Sign-in was cancelled',
            authIosHint: 'On iPhone, sign in with email and password — Google may not work inside the home-screen app.',
            authSignOut: 'Sign out',
            authSignOutConfirm: 'Sign out? Your data stays on this device and in your account.',
            cloudUploaded: 'Your data was uploaded to your account',
            cloudSyncFailed: "Couldn't sync with your account — data is kept on this device",
            menuSaveNow: 'Sync now',
            menuRestoreDevice: 'Restore this device’s data',
            saveNowDone: 'Your data is now synced with your account',
            saveNowFailed: "Couldn't sync — your data is kept on this device",
            restoreDeviceConfirm: 'Restore this device’s data? Current data will be replaced by this device’s previous data.',
            restoreDeviceDone: "This device's data was restored",
            restoreDeviceNone: 'No previous data was found on this device',
            cloudStateSaved: 'Last sync with account: {time}',
            cloudStatePending: 'Not synced with your account yet',
            cloudStateError: "Couldn't sync with your account",
            cloudLockedNotice: "Account sync isn't working right now — your data is kept on this device. In Firebase Console, allow Firestore read/write for signed-in users.",
            cloudSetupNotice: 'Firestore is not enabled in your Firebase project — in Firebase Console: Build → Firestore Database → Create database. Your data stays on this device.',
            cloudRulesNotice: 'Firestore rules block saving — in Firebase Console: Firestore Database → Rules. Your data stays on this device.',
            close: 'Close',
            addTitle: 'Add new name',
            editTitle: 'Edit record',
            nameLabel: 'Customer or store name',
            namePlaceholder: 'Enter a new name...',
            phoneLabel: 'Mobile number',
            phonePlaceholder: '07XX XXX XXXX',
            phoneHint: 'Optional — for contacting',
            callPhone: 'Call',
            fieldTotalLabel: 'Total',
            fieldPaidLabel: 'Paid',
            groupIQD: 'Iraqi dinar',
            groupUSD: 'US dollar',
            amountHint: 'An amount of 0 means the account is paid.',
            remainingLine: 'Remaining: {amount} {currency}',
            noteLabel: 'Note',
            notePlaceholder: 'Write a note... (optional)',
            addBtnText: 'Add',
            updateBtnText: 'Update',
            cancel: 'Cancel',
            payTitle: 'Record payment',
            payAction: 'Pay',
            payName: 'Name',
            paidBeforeLabel: 'Paid before',
            remainingLabel: 'Remaining',
            payFillTitle: 'Fill the remaining amount into the current amount field',
            payAmountLabel: 'Current amount',
            payHint: 'Remaining: {amount} {currency}',
            payHintAfter: 'Remaining after recording: {amount} {currency}',
            payRowInfo: 'Total {total} · Paid {paid} · Remaining {remaining}',
            fillRemaining: 'All remaining',
            paySubmit: 'Record',
            saveFailed: 'Could not save data',
            backupRestored: 'Data restored from the local backup',
            backupReminder: 'Save a backup file of your data — choose “Save backup (file)” from the menu',
            deleted: 'Record deleted',
            noRecords: 'No records',
            confirmClear: 'Delete all names? This action cannot be undone.',
            cleared: 'All records deleted',
            confirmDelete: 'Delete “{name}”?',
            copyFailed: 'Copy failed',
            noBackup: 'No records to back up',
            backupTitle: 'Payments backup',
            backupReady: 'Backup is ready',
            backupSaved: 'Backup saved',
            noPrint: 'No records to print',
            printNow: 'Print',
            backToApp: 'Back to app',
            printMobileHint: 'If printing does not start, open this page in Safari and choose Share → Print.',
            noSend: 'No records to send',
            noCopy: 'No records to copy',
            copiedAll: 'Full list copied',
            copiedItem: '“{name}” copied',
            invalidPay: 'Enter a payment amount',
            payRecorded: 'Payment recorded — remaining: {amount}',
            fullyPaid: '“{name}” is fully paid',
            nameRequired: 'Enter a name',
            noCurrencyAmount: 'Enter an amount in dinars or dollars',
            updated: 'Record updated',
            added: 'New name added',
            confirmRestore: 'Restore data for {count} records and replace current data?',
            restored: 'Data restored successfully',
            badFile: 'The file is invalid or corrupted',
            newVersion: 'A new app version is ready — reopen the app later',
            langChanged: 'Language changed',
            statusPaid: 'Paid',
            statusPartial: 'Partially paid',
            statusDue: 'Due',
            itemTotalLabel: 'Total',
            itemRemainingLabel: 'Remaining',
            breakdownPaid: 'Paid',
            breakdownTotal: 'Total',
            toolShare: 'Send to WhatsApp',
            toolCopy: 'Copy',
            toolEdit: 'Edit',
            toolDelete: 'Delete',
            emptySearchTitle: 'No results found',
            emptySearchText: 'Change or clear the search',
            clearSearch: 'Clear search',
            emptyTitle: 'No names recorded',
            emptyText: 'Add a name to start your records',
            reportTitle: 'Payment record',
            reportHeading: 'Payment management report',
            sumTotal: 'Total amount',
            sumPaid: 'Total paid',
            sumRemaining: 'Total remaining',
            paidOf: 'Paid: {paid} of {total}',
            printTitle: 'Names and payments management record',
            printDateLabel: 'Print date',
            thName: 'Customer / store',
            thCurrencyIQD: 'IQD (total / paid / remaining)',
            thCurrencyUSD: 'USD (total / paid / remaining)',
            printTotalShort: 'Total',
            printPaidShort: 'Paid',
            printRemainingShort: 'Remaining',
            thNote: 'Note',
            thStatus: 'Status',
            grandTotal: 'Grand total',
            noRecordsPrint: 'No records',
            printFooter: 'Payment management system'
        }
    };

    const $ = (sel) => document.querySelector(sel);

    const list = $('#list');
    const searchInput = $('#searchInput');
    const totalIQDEl = $('#totalIQD');
    const paidTotalIQDEl = $('#paidTotalIQD');
    const grandTotalIQDEl = $('#grandTotalIQD');
    const totalUSDEl = $('#totalUSD');
    const paidTotalUSDEl = $('#paidTotalUSD');
    const grandTotalUSDEl = $('#grandTotalUSD');
    const totalCountEl = $('#totalCount');
    const paidCountEl = $('#paidCount');
    const filteredCountEl = $('#filteredCount');
    const resultLabel = $('#resultLabel');
    const langBtn = $('#langBtn');
    const langMenu = $('#langMenu');
    const langShort = $('#langShort');
    const langOptions = Array.from(document.querySelectorAll('[data-lang-option]'));
    const menuScrim = $('#menuScrim');
    const formScrim = $('#formScrim');
    const formTitle = $('#formTitle');
    const entryForm = $('#entryForm');
    const editIdInput = $('#editId');
    const inputName = $('#inputName');
    const inputPhone = $('#inputPhone');
    const inputIQDTotal = $('#inputIQDTotal');
    const inputIQDPaid = $('#inputIQDPaid');
    const inputUSDTotal = $('#inputUSDTotal');
    const inputUSDPaid = $('#inputUSDPaid');
    const remainingIQD = $('#remainingIQD');
    const remainingUSD = $('#remainingUSD');
    const inputNote = $('#inputNote');
    const formInputs = {
        iqd: { total: inputIQDTotal, paid: inputIQDPaid, hint: remainingIQD },
        usd: { total: inputUSDTotal, paid: inputUSDPaid, hint: remainingUSD }
    };
    const payScrim = $('#payScrim');
    const payForm = $('#payForm');
    const payIdInput = $('#payId');
    const payPerson = $('#payPerson');
    const payInputs = { iqd: $('#inputPayIQD'), usd: $('#inputPayUSD') };
    const payHints = { iqd: $('#payHintIQD'), usd: $('#payHintUSD') };
    const payInfos = { iqd: $('#payInfoIQD'), usd: $('#payInfoUSD') };
    const payRows = {
        iqd: document.querySelector('[data-pay-row="iqd"]'),
        usd: document.querySelector('[data-pay-row="usd"]')
    };
    const saveBtn = $('#saveBtnText');
    const importInput = $('#importInput');
    const toastEl = $('#toast');
    const toastMessage = $('#toastMessage');
    const toastIcon = $('#toastIcon');
    const installHint = $('#installHint');
    const printBody = $('#printBody');
    const printDate = $('#printDate');
    const printTotalEls = { iqd: $('#printTotalIQD'), usd: $('#printTotalUSD') };
    const printPaidCount = $('#printPaidCount');
    const printToolbar = $('#printToolbar');
    const printMobileTip = $('#printMobileTip');
    const authGate = $('#authGate');
    const authLoading = $('#authLoading');
    const authBody = $('#authBody');
    const authForm = $('#authForm');
    const authEmail = $('#authEmail');
    const authPassword = $('#authPassword');
    const authSubmit = $('#authSubmit');
    const authToggle = $('#authToggle');
    const authError = $('#authError');
    const authGoogleBtn = $('#authGoogleBtn');
    const authIosNote = $('#authIosNote');
    const gateLangBtns = Array.from(document.querySelectorAll('[data-gate-lang]'));
    const menuAccount = $('#menuAccount');
    const cloudState = $('#cloudState');
    const syncNowItem = $('#syncNowItem');
    const restoreDeviceItem = $('#restoreDeviceItem');
    const signOutItem = $('#signOutItem');

    const RLM = '\u200F';
    const CURRENCIES = ['iqd', 'usd'];
    let lang = getSavedLang();
    let numberFormat = new Intl.NumberFormat(LANG_META[lang].numberLocale);

    const icons = {
        check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
        clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
        wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
        copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"/></svg>',
        pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="m14 8 2 2"/></svg>',
        trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13"/><path d="M10 11v5M14 11v5"/></svg>',
        folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h3.6l2 2.5H18a2.5 2.5 0 0 1 2.5 2.5v7.5A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M8 13h8"/></svg>',
        checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.4 12.3 2.4 2.4 4.8-5"/></svg>',
        note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5h8.5L19 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-13A2 2 0 0 1 6 4.5z"/><path d="M14 4.5V9h4.5M8.5 13h7M8.5 16.5h4.5"/></svg>',
        phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 4h3l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4z"/></svg>',
        search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
        xCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>'
    };

    let recoveredFromBackup = false;
    let cloudActive = false;
    let cloudSyncTrouble = false;
    let cloudIssueKind = '';
    let authMode = 'signin';
    let pendingAuthError = '';
    let items = loadItems();
    let editingId = '';
    let openScrim = null;
    let lastFocus = null;
    let toastTimer = 0;
    let focusTimer = 0;
    const printMode = new URLSearchParams(window.location.search).has('print');

    /* ---------- یارمەتیدەرەکان ---------- */

    function uid() {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return window.crypto.randomUUID();
        }
        return Date.now().toString(36) + Math.random().toString(16).slice(2, 10);
    }

    function getSavedLang() {
        try {
            const saved = localStorage.getItem(LANG_KEY);
            if (saved && LANG_META[saved]) return saved;
        } catch (error) { /* ignore */ }
        return 'ku';
    }

    function t(key, vars) {
        const dictionary = STRINGS[lang] || STRINGS.ku;
        let text = dictionary[key] !== undefined ? dictionary[key] : (STRINGS.ku[key] || key);
        if (vars) {
            Object.keys(vars).forEach((name) => {
                text = text.split(`{${name}}`).join(vars[name]);
            });
        }
        return text;
    }

    function isRtl() {
        return LANG_META[lang].dir === 'rtl';
    }

    function formatDate(date = new Date()) {
        return new Intl.DateTimeFormat(LANG_META[lang].dateLocale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    function fmt(value) {
        return numberFormat.format(Number(value) || 0);
    }

    function esc(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function normalizeDigits(value) {
        return String(value).replace(/[٠-٩۰-۹]/g, (digit) => {
            const code = digit.charCodeAt(0);
            return String(code >= 0x06F0 ? code - 0x06F0 : code - 0x0660);
        });
    }

    function getRawAmount(value) {
        const cleaned = normalizeDigits(value).replace(/[^0-9]/g, '');
        return parseInt(cleaned, 10) || 0;
    }

    function normalizePhone(value) {
        const cleaned = normalizeDigits(String(value == null ? '' : value))
            .replace(/[^0-9+\s()-]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 20);
        return cleaned.replace(/\D/g, '').length >= 3 ? cleaned : '';
    }

    function phoneHref(phone) {
        const digits = String(phone || '').replace(/[^\d+]/g, '');
        return digits ? `tel:${digits}` : '';
    }

    function currencyName(code) {
        return t(code === 'usd' ? 'currencyUSD' : 'currencyIQD');
    }

    function currenciesOf(item) {
        const active = CURRENCIES.filter((code) => hasCurrency(item, code));
        return active.length ? active : ['iqd'];
    }

    function amountOf(item, code) {
        return Math.max(0, Math.round(Number(item[code]) || 0));
    }

    function paidOf(item, code) {
        return Math.min(Math.max(Math.round(Number(item[code + 'Paid']) || 0), 0), amountOf(item, code));
    }

    function remainingOf(item, code) {
        return Math.max(0, amountOf(item, code) - paidOf(item, code));
    }

    function hasCurrency(item, code) {
        return amountOf(item, code) > 0 || paidOf(item, code) > 0;
    }

    function isPaidItem(item) {
        return CURRENCIES.every((code) => paidOf(item, code) >= amountOf(item, code));
    }

    function statusOf(item) {
        if (isPaidItem(item)) return t('statusPaid');
        const partial = CURRENCIES.some((code) => paidOf(item, code) > 0);
        return partial ? t('statusPartial') : t('statusDue');
    }

    function toAmount(value) {
        if (typeof value === 'number' && Number.isFinite(value)) {
            return Math.max(0, Math.round(value));
        }
        return getRawAmount(value == null ? '' : value);
    }

    function normalizeItem(raw) {
        const legacyPaid = raw.paid === true;
        const previous = toAmount(raw.previousAmount);
        let legacyAmount = toAmount(raw.amount);
        if (legacyAmount === 0 && legacyPaid && previous > 0) legacyAmount = previous;

        const isNewShape = CURRENCIES.some((code) => raw[code] !== undefined || raw[code + 'Paid'] !== undefined);
        const iqd = isNewShape ? toAmount(raw.iqd) : legacyAmount;
        let iqdPaid;
        if (isNewShape) {
            iqdPaid = toAmount(raw.iqdPaid);
        } else if (raw.paidAmount !== undefined && raw.paidAmount !== null) {
            iqdPaid = toAmount(raw.paidAmount);
        } else {
            iqdPaid = legacyPaid ? iqd : 0;
        }

        const item = {
            id: typeof raw.id === 'string' && raw.id ? raw.id : uid(),
            name: String(raw.name).trim().slice(0, 80),
            iqd,
            iqdPaid: Math.min(iqdPaid, iqd),
            usd: toAmount(raw.usd),
            usdPaid: 0
        };
        item.usdPaid = Math.min(item.usd, toAmount(raw.usdPaid));
        const phone = normalizePhone(raw.phone);
        if (phone) item.phone = phone;
        const note = typeof raw.note === 'string' ? raw.note.trim().slice(0, 200) : '';
        if (note) item.note = note;
        return item;
    }

    function readItemsFrom(key) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return null;
            return parsed
                .filter((item) => item && typeof item.name === 'string' && item.name.trim())
                .map(normalizeItem);
        } catch (error) {
            return null;
        }
    }

    function loadItems() {
        const primary = readItemsFrom(STORAGE_KEY);
        if (primary) return primary;
        const backup = readItemsFrom(BACKUP_KEY);
        if (backup && backup.length) {
            recoveredFromBackup = true;
            return backup;
        }
        return [];
    }

    function persistLocal() {
        const payload = JSON.stringify(items);
        try {
            localStorage.setItem(STORAGE_KEY, payload);
        } catch (error) {
            showToast(t('saveFailed'), true);
            return false;
        }
        try {
            localStorage.setItem(BACKUP_KEY, payload);
        } catch (error) {
            /* the mirror copy is best-effort */
        }
        try {
            if (items.length) {
                localStorage.setItem(SNAPSHOT_KEY, JSON.stringify({ at: Date.now(), items: items }));
            }
        } catch (error) {
            /* the device snapshot is best-effort */
        }
        return true;
    }

    function readDeviceSnapshot() {
        try {
            const raw = localStorage.getItem(SNAPSHOT_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || !Array.isArray(parsed.items) || !parsed.items.length) return null;
            return { at: Number(parsed.at) || 0, items: parsed.items.map(normalizeItem) };
        } catch (error) {
            return null;
        }
    }

    function cloudSavedAt() {
        const cloud = window.PaymentsCloud;
        if (cloud && cloud.lastSavedAt) return cloud.lastSavedAt;
        return Number(localStorage.getItem(LAST_CLOUD_KEY) || 0) || 0;
    }

    function classifyCloudError(source) {
        const code = String((source && (source.firestoreCode || source.code)) || '');
        const message = String((source && (source.firestoreMessage || source.message)) || '');
        if (/has not been used in project|SERVICE_DISABLED|is disabled/i.test(message)) return 'setup';
        if (code === 'permission-denied') return 'rules';
        return 'sync';
    }

    function cloudIssueText(kind) {
        if (kind === 'setup') return t('cloudSetupNotice');
        if (kind === 'rules') return t('cloudRulesNotice');
        return t('cloudStateError');
    }

    function refreshCloudState() {
        if (!cloudState) return;
        if (!cloudActive) {
            cloudState.hidden = true;
            return;
        }
        cloudState.hidden = false;
        cloudState.classList.toggle('menu__cloud--error', cloudSyncTrouble);
        if (cloudSyncTrouble) {
            cloudState.textContent = cloudIssueText(cloudIssueKind);
            return;
        }
        const at = cloudSavedAt();
        cloudState.textContent = at
            ? t('cloudStateSaved', { time: new Intl.DateTimeFormat(LANG_META[lang].dateLocale, { dateStyle: 'short', timeStyle: 'short' }).format(new Date(at)) })
            : t('cloudStatePending');
    }

    function persist() {
        if (!persistLocal()) return false;
        if (cloudActive && window.PaymentsCloud && window.PaymentsCloud.save) {
            window.PaymentsCloud.save(items);
        }
        return true;
    }

    /* ---------- پیشاندان ---------- */

    function matchesQuery(item, query) {
        if (!query) return true;
        const name = item.name.toLowerCase();
        const note = (item.note || '').toLowerCase();
        const phone = normalizeDigits(item.phone || '').replace(/\D/g, '');
        const numeric = query.replace(/[,٬\s]/g, '');
        const status = statusOf(item).toLowerCase();
        const currencyHit = CURRENCIES.some((code) => hasCurrency(item, code)
            && currencyName(code).toLowerCase().includes(query));
        const amountHit = CURRENCIES.some((code) => {
            const totalText = normalizeDigits(fmt(amountOf(item, code))).replace(/[,٬\s]/g, '');
            const paidText = normalizeDigits(fmt(paidOf(item, code))).replace(/[,٬\s]/g, '');
            return totalText.includes(numeric) || paidText.includes(numeric);
        });
        const phoneHit = phone && query.replace(/\D/g, '').length >= 2 && phone.includes(query.replace(/\D/g, ''));
        return name.includes(query) || note.includes(query) || amountHit || currencyHit || status.includes(query) || phoneHit;
    }

    function currencyBlock(item, code) {
        const total = amountOf(item, code);
        const paid = paidOf(item, code);
        const remaining = total - paid;
        const settled = paid >= total;
        const percent = total > 0 ? Math.round((paid / total) * 100) : 100;
        return `
            <div class="item__currency">
                <div class="item__currency-head">
                    <span class="item__currency-name">${currencyName(code)}</span>
                    <span class="item__currency-state${settled ? ' is-paid' : ''}">${settled ? t('statusPaid') : t('itemRemainingLabel')}</span>
                </div>
                <div class="item__currency-value">${fmt(settled ? total : remaining)}</div>
                ${paid > 0 ? `<div class="item__breakdown">
                    <span>${t('breakdownPaid')}: <strong>${fmt(paid)}</strong></span>
                    ${!settled ? `<span>${t('breakdownTotal')}: <strong>${fmt(total)}</strong></span>` : ''}
                </div>` : ''}
                ${paid > 0 && !settled ? `<div class="item__bar" aria-hidden="true"><span style="width:${percent}%"></span></div>` : ''}
            </div>`;
    }

    function itemCard(item) {
        const paid = isPaidItem(item);
        return `
            <article class="item${paid ? ' item--paid' : ''}" data-id="${esc(item.id)}">
                <div class="item__top">
                    <div class="item__name">${esc(item.name)}</div>
                    <span class="badge ${paid ? 'badge--paid' : 'badge--due'}">
                        ${paid ? icons.check : icons.clock}${statusOf(item)}
                    </span>
                </div>
                ${item.phone ? `<a class="item__phone" href="${esc(phoneHref(item.phone))}" aria-label="${t('callPhone')}">
                    ${icons.phone}<span dir="ltr">${esc(item.phone)}</span>
                </a>` : ''}
                <div class="item__currencies">
                    ${currenciesOf(item).map((code) => currencyBlock(item, code)).join('')}
                </div>
                ${item.note ? `<div class="item__note">${icons.note}<span>${esc(item.note)}</span></div>` : ''}
                <div class="item__actions">
                    ${paid ? '' : `<button type="button" class="pay-btn" data-action="pay">${icons.check}${t('payAction')}</button>`}
                    <div class="item__tools">
                        <button type="button" class="tool-btn tool-btn--wa" data-action="share" aria-label="${t('toolShare')}">${icons.wa}</button>
                        <button type="button" class="tool-btn" data-action="copy" aria-label="${t('toolCopy')}">${icons.copy}</button>
                        <button type="button" class="tool-btn" data-action="edit" aria-label="${t('toolEdit')}">${icons.pen}</button>
                        <button type="button" class="tool-btn tool-btn--danger" data-action="delete" aria-label="${t('toolDelete')}">${icons.trash}</button>
                    </div>
                </div>
            </article>`;
    }

    function emptyCard(hasQuery = false) {
        if (hasQuery) {
            return `
                <div class="empty">
                    ${icons.search}
                    <div class="empty__title">${t('emptySearchTitle')}</div>
                    <div class="empty__text">${t('emptySearchText')}</div>
                    <button type="button" class="empty__btn" data-action="clear-search">${t('clearSearch')}</button>
                </div>`;
        }
        return `
            <div class="empty">
                ${icons.folder}
                <div class="empty__title">${t('emptyTitle')}</div>
                <div class="empty__text">${t('emptyText')}</div>
                <button type="button" class="empty__btn" data-action="add">${t('addNew')}</button>
            </div>`;
    }

    function render() {
        const query = normalizeDigits(searchInput.value).trim().toLowerCase();
        const filtered = items.filter((item) => matchesQuery(item, query));

        list.innerHTML = filtered.length ? filtered.map(itemCard).join('') : emptyCard(Boolean(query));

        const totals = {};
        CURRENCIES.forEach((code) => {
            totals[code] = { grand: 0, paid: 0 };
            items.forEach((item) => {
                totals[code].grand += amountOf(item, code);
                totals[code].paid += paidOf(item, code);
            });
        });
        const paidCount = items.filter(isPaidItem).length;

        totalIQDEl.textContent = fmt(totals.iqd.grand - totals.iqd.paid);
        paidTotalIQDEl.textContent = fmt(totals.iqd.paid);
        grandTotalIQDEl.textContent = fmt(totals.iqd.grand);
        totalUSDEl.textContent = fmt(totals.usd.grand - totals.usd.paid);
        paidTotalUSDEl.textContent = fmt(totals.usd.paid);
        grandTotalUSDEl.textContent = fmt(totals.usd.grand);
        totalCountEl.textContent = fmt(items.length);
        paidCountEl.textContent = fmt(paidCount);
        filteredCountEl.textContent = fmt(filtered.length);
        resultLabel.textContent = filtered.length === 1 ? t('resultOne') : t('resultMany');

        renderPrint(totals, paidCount);
    }

    function printMoney(total, paid, remaining) {
        return `<div class="print-money">
            <span><em>${t('printTotalShort')}</em>${fmt(total)}</span>
            <span><em>${t('printPaidShort')}</em>${fmt(paid)}</span>
            <span><em>${t('printRemainingShort')}</em>${fmt(remaining)}</span>
        </div>`;
    }

    function printCurrencyCell(item, code) {
        const label = esc(code === 'iqd' ? t('currencyIQD') : t('currencyUSD'));
        if (!hasCurrency(item, code)) {
            return `<td class="col-money print-money--empty" data-label="${label}">—</td>`;
        }
        return `<td class="col-money" data-label="${label}">${printMoney(amountOf(item, code), paidOf(item, code), remainingOf(item, code))}</td>`;
    }

    function renderPrint(totals, paidCount) {
        printBody.innerHTML = items.length
            ? items.map((item, index) => `
                <tr>
                    <td class="col-index">${fmt(index + 1)}</td>
                    <td class="col-name">${esc(item.name)}${item.phone ? `<span class="print-phone" dir="ltr">${esc(item.phone)}</span>` : ''}</td>
                    ${printCurrencyCell(item, 'iqd')}
                    ${printCurrencyCell(item, 'usd')}
                    <td class="col-note" data-label="${esc(t('thNote'))}">${esc((item.note || '—').replace(/\s+/g, ' '))}</td>
                    <td class="col-status" data-label="${esc(t('thStatus'))}">${esc(statusOf(item))}</td>
                </tr>`).join('')
            : `<tr><td colspan="6" style="text-align:center;color:#64748b">${t('noRecordsPrint')}</td></tr>`;

        printTotalEls.iqd.innerHTML = printMoney(totals.iqd.grand, totals.iqd.paid, totals.iqd.grand - totals.iqd.paid);
        printTotalEls.usd.innerHTML = printMoney(totals.usd.grand, totals.usd.paid, totals.usd.grand - totals.usd.paid);
        printTotalEls.iqd.setAttribute('data-label', t('currencyIQD'));
        printTotalEls.usd.setAttribute('data-label', t('currencyUSD'));
        printPaidCount.textContent = t('paidOf', { paid: fmt(paidCount), total: fmt(items.length) });
    }

    /* ---------- پەیام ---------- */

    function showToast(message, isError = false) {
        toastMessage.textContent = message;
        toastIcon.innerHTML = isError ? icons.xCircle : icons.checkCircle;
        toastEl.classList.toggle('toast--error', isError);
        toastEl.classList.add('is-show');
        clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => toastEl.classList.remove('is-show'), 2600);
    }

    /* ---------- پەنجەرەکان ---------- */

    function openSheet(scrim) {
        closeLangMenu();
        if (openScrim && openScrim !== scrim) closeSheet(openScrim, true);
        lastFocus = document.activeElement;
        openScrim = scrim;
        scrim.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => scrim.classList.add('is-open'));
    }

    function closeSheet(scrim, instant = false) {
        if (!scrim) return;
        clearTimeout(focusTimer);
        scrim.classList.remove('is-open');
        const hide = () => {
            if (!scrim.classList.contains('is-open')) scrim.hidden = true;
        };
        if (instant) {
            scrim.hidden = true;
        } else {
            window.setTimeout(hide, 190);
        }
        if (openScrim === scrim) openScrim = null;
        if (!openScrim) document.body.style.overflow = '';
        if (lastFocus && typeof lastFocus.focus === 'function') {
            try { lastFocus.focus({ preventScroll: true }); } catch (error) { /* ignore */ }
            lastFocus = null;
        }
    }

    function openMenu() {
        syncNowItem.hidden = !cloudActive;
        restoreDeviceItem.hidden = !readDeviceSnapshot();
        refreshCloudState();
        openSheet(menuScrim);
    }

    function openForm(id = '') {
        const item = id ? items.find((entry) => entry.id === id) : null;
        editingId = item ? item.id : '';
        formTitle.textContent = item ? t('editTitle') : t('addTitle');
        saveBtn.textContent = item ? t('updateBtnText') : t('addBtnText');
        inputName.value = item ? item.name : '';
        inputPhone.value = item && item.phone ? item.phone : '';
        CURRENCIES.forEach((code) => {
            const total = item ? amountOf(item, code) : 0;
            const paid = item ? paidOf(item, code) : 0;
            formInputs[code].total.value = total ? fmt(total) : '';
            formInputs[code].paid.value = paid ? fmt(paid) : '';
        });
        inputNote.value = item && item.note ? item.note : '';
        editIdInput.value = item ? item.id : '';
        inputName.classList.remove('is-invalid');
        updateRemainingHints();
        openSheet(formScrim);
        clearTimeout(focusTimer);
        focusTimer = window.setTimeout(() => {
            if (!formScrim.hidden) inputName.focus({ preventScroll: true });
        }, 200);
    }

    function updateRemainingHints() {
        CURRENCIES.forEach((code) => {
            const inputs = formInputs[code];
            const amount = getRawAmount(inputs.total.value);
            const paid = Math.min(getRawAmount(inputs.paid.value), amount);
            inputs.hint.textContent = t('remainingLine', {
                amount: fmt(amount - paid),
                currency: currencyName(code)
            });
        });
    }

    /* ---------- کردارەکان ---------- */

    function updatePayRow(code) {
        const item = items.find((entry) => entry.id === payIdInput.value);
        const input = payInputs[code];
        if (!item || !input) return;
        const total = amountOf(item, code);
        const paid = paidOf(item, code);
        const remaining = total - paid;
        payInfos[code].textContent = t('payRowInfo', {
            total: fmt(total),
            paid: fmt(paid),
            remaining: fmt(remaining)
        });
        input.disabled = remaining <= 0;
        const fillBtn = payRows[code].querySelector('[data-fill]');
        if (fillBtn) fillBtn.disabled = remaining <= 0;
        const now = Math.min(getRawAmount(input.value), remaining);
        payHints[code].textContent = now > 0
            ? t('payHintAfter', { amount: fmt(remaining - now), currency: currencyName(code) })
            : t('payHint', { amount: fmt(remaining), currency: currencyName(code) });
    }

    function openPay(id) {
        const item = items.find((entry) => entry.id === id);
        if (!item || isPaidItem(item)) return;
        payIdInput.value = item.id;
        payPerson.innerHTML = `${t('payName')}: <strong>${esc(item.name)}</strong>`
            + (item.phone ? `<span class="pay-person__phone" dir="ltr">${esc(item.phone)}</span>` : '');
        CURRENCIES.forEach((code) => {
            const input = payInputs[code];
            input.value = '';
            input.disabled = false;
            payRows[code].hidden = !hasCurrency(item, code);
            updatePayRow(code);
        });
        openSheet(payScrim);
        const target = CURRENCIES.find((code) => remainingOf(item, code) > 0);
        clearTimeout(focusTimer);
        focusTimer = window.setTimeout(() => {
            if (!payScrim.hidden && target) payInputs[target].focus({ preventScroll: true });
        }, 200);
    }

    /* ---------- زمان ---------- */

    function applyStaticTranslations() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            el.innerHTML = t(el.dataset.i18nHtml);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
            el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
        });
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            el.setAttribute('title', t(el.dataset.i18nTitle));
        });
    }

    function refreshFormLabels() {
        if (!formScrim.hidden) {
            formTitle.textContent = editingId ? t('editTitle') : t('addTitle');
            saveBtn.textContent = editingId ? t('updateBtnText') : t('addBtnText');
            CURRENCIES.forEach((code) => {
                const inputs = formInputs[code];
                const amount = getRawAmount(inputs.total.value);
                const paid = getRawAmount(inputs.paid.value);
                inputs.total.value = amount ? fmt(amount) : '';
                inputs.paid.value = paid ? fmt(paid) : '';
            });
            updateRemainingHints();
        }
        if (!payScrim.hidden) {
            const item = items.find((entry) => entry.id === payIdInput.value);
            if (!item) return;
            payPerson.innerHTML = `${t('payName')}: <strong>${esc(item.name)}</strong>`
                + (item.phone ? `<span class="pay-person__phone" dir="ltr">${esc(item.phone)}</span>` : '');
            CURRENCIES.forEach((code) => {
                const input = payInputs[code];
                const raw = getRawAmount(input.value);
                input.value = raw ? fmt(raw) : '';
                updatePayRow(code);
            });
        }
    }

    function closeLangMenu() {
        if (langMenu.hidden) return;
        langMenu.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
    }

    function setLanguage(next, initial = false) {
        lang = LANG_META[next] ? next : 'ku';
        try { localStorage.setItem(LANG_KEY, lang); } catch (error) { /* ignore */ }
        document.documentElement.lang = LANG_META[lang].htmlLang;
        document.documentElement.dir = LANG_META[lang].dir;
        numberFormat = new Intl.NumberFormat(LANG_META[lang].numberLocale);
        langShort.textContent = lang.toUpperCase();
        document.title = t('docTitle');
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', t('metaDescription'));
        langOptions.forEach((btn) => {
            btn.setAttribute('aria-checked', String(btn.dataset.langOption === lang));
        });
        applyStaticTranslations();
        printDate.textContent = formatDate();
        refreshFormLabels();
        refreshAuthMode();
        render();
        if (!initial) showToast(t('langChanged'));
    }

    function deleteItem(id) {
        const item = items.find((entry) => entry.id === id);
        if (!item) return;
        if (!window.confirm(t('confirmDelete', { name: item.name }))) return;
        items = items.filter((entry) => entry.id !== id);
        persist();
        render();
        showToast(t('deleted'), true);
    }

    function clearAll() {
        if (!items.length) {
            showToast(t('noRecords'), true);
            return;
        }
        if (!window.confirm(t('confirmClear'))) return;
        items = [];
        persist();
        render();
        showToast(t('cleared'), true);
    }

    function singleItemText(item) {
        const prefix = isRtl() ? RLM : '';
        let text = `${prefix}📌 *${t('reportTitle')}*\n${prefix}👤 ${t('nameLabel')}: ${item.name}`;
        if (item.phone) text += `\n${prefix}📞 ${t('phoneLabel')}: ${item.phone}`;
        currenciesOf(item).forEach((code) => {
            text += `\n${prefix}💰 ${currencyName(code)}: ${t('totalLabel')} ${fmt(amountOf(item, code))} · ${t('paidLabel')} ${fmt(paidOf(item, code))} · ${t('remainingLabel')} ${fmt(remainingOf(item, code))}`;
        });
        if (item.note) text += `\n${prefix}📝 ${t('noteLabel')}: ${item.note}`;
        text += `\n${prefix}📊 ${t('thStatus')}: ${isPaidItem(item) ? '✅' : '⏳'} ${statusOf(item)}`;
        return text;
    }

    function fullReportText() {
        const today = formatDate();
        const prefix = isRtl() ? RLM : '';
        let text = `${prefix}📋 *${t('reportHeading')} (${today})*\n`;
        text += `${prefix}━━━━━━━━━━━━━━━\n`;

        items.forEach((item, index) => {
            text += `${prefix}${fmt(index + 1)} - *${item.name}* (${statusOf(item)})\n`;
            if (item.phone) text += `${prefix}   📞 ${item.phone}\n`;
            currenciesOf(item).forEach((code) => {
                text += `${prefix}   ${currencyName(code)}: ${t('printTotalShort')} ${fmt(amountOf(item, code))} · ${t('printPaidShort')} ${fmt(paidOf(item, code))} · ${t('printRemainingShort')} ${fmt(remainingOf(item, code))}\n`;
            });
            if (item.note) text += `${prefix}   📝 ${item.note}\n`;
        });

        const totals = {};
        CURRENCIES.forEach((code) => {
            totals[code] = items.reduce((sum, item) => ({
                grand: sum.grand + amountOf(item, code),
                paid: sum.paid + paidOf(item, code)
            }), { grand: 0, paid: 0 });
        });
        const paidCount = items.filter(isPaidItem).length;

        text += `${prefix}━━━━━━━━━━━━━━━\n`;
        text += `${prefix}💰 *${t('sumTotal')}:*\n`;
        CURRENCIES.forEach((code) => {
            if (!totals[code].grand && !totals[code].paid) return;
            text += `${prefix}   ${currencyName(code)}: ${t('printTotalShort')} ${fmt(totals[code].grand)} · ${t('printPaidShort')} ${fmt(totals[code].paid)} · ${t('printRemainingShort')} ${fmt(totals[code].grand - totals[code].paid)}\n`;
        });
        text += `${prefix}📊 *${t('paidOf', { paid: fmt(paidCount), total: fmt(items.length) })}*`;
        return text;
    }

    async function shareText(text) {
        if (navigator.share) {
            try {
                await navigator.share({ text });
                return;
            } catch (error) {
                if (error && error.name === 'AbortError') return;
            }
        }
        window.location.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }

    async function copyText(text, successMessage) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                showToast(successMessage);
                return;
            }
            throw new Error('clipboard-unavailable');
        } catch (error) {
            const area = document.createElement('textarea');
            area.value = text;
            area.setAttribute('readonly', '');
            area.style.position = 'fixed';
            area.style.top = '-1000px';
            area.style.opacity = '0';
            document.body.appendChild(area);
            area.select();
            let copied = false;
            try { copied = document.execCommand('copy'); } catch (copyError) { copied = false; }
            document.body.removeChild(area);
            showToast(copied ? successMessage : t('copyFailed'), !copied);
        }
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 4000);
    }

    function markBackupDone() {
        try { localStorage.setItem(LAST_BACKUP_KEY, new Date().toISOString()); } catch (error) { /* ignore */ }
    }

    async function backupData() {
        if (!items.length) {
            showToast(t('noBackup'), true);
            return;
        }        const payload = JSON.stringify({
            app: 'payments',
            version: 2,
            exportedAt: new Date().toISOString(),
            items
        }, null, 2);
        const filename = `payment-backup-${new Date().toISOString().slice(0, 10)}.json`;
        const file = new File([payload], filename, { type: 'application/json' });

        let canShareFile = false;
        try {
            canShareFile = Boolean(navigator.canShare && navigator.canShare({ files: [file] }));
        } catch (error) {
            canShareFile = false;
        }

        if (canShareFile) {
            try {
                await navigator.share({ files: [file], title: t('backupTitle') });
                markBackupDone();
                showToast(t('backupReady'));
                return;
            } catch (error) {
                if (error && error.name === 'AbortError') return;
            }
        }
        downloadBlob(new Blob([payload], { type: 'application/json' }), filename);
        markBackupDone();
        showToast(t('backupSaved'));
    }

    function doPrint() {
        if (!items.length) {
            showToast(t('noPrint'), true);
            return;
        }
        printDate.textContent = formatDate();
        const url = new URL(window.location.href);
        url.search = '?print=1';
        url.hash = '';
        window.location.href = url.toString();
    }

    function setupPrintMode() {
        if (!printMode) return;
        document.body.classList.add('print-mode');
        printToolbar.hidden = false;
        printDate.textContent = formatDate();
        document.title = t('printTitle');
        if (isIOS) printMobileTip.hidden = false;
        window.setTimeout(() => {
            if (!document.hidden) window.print();
        }, 400);
    }

    /* ---------- هەژمار و هاوکاتکردن ---------- */

    function showAuthError(message) {
        if (!message) {
            authError.hidden = true;
            authError.textContent = '';
            return;
        }
        authError.textContent = message;
        authError.hidden = false;
    }

    function refreshAuthMode() {
        const signup = authMode === 'signup';
        authSubmit.textContent = t(signup ? 'authCreate' : 'authSignIn');
        authToggle.textContent = t(signup ? 'authToSignIn' : 'authToSignUp');
        authPassword.autocomplete = signup ? 'new-password' : 'current-password';
    }

    function showAuthForm() {
        authGate.hidden = false;
        document.body.classList.add('auth-locked');
        authLoading.hidden = true;
        authBody.hidden = false;
        showAuthError('');
        if (pendingAuthError) {
            showAuthError(pendingAuthError);
            pendingAuthError = '';
        }
        refreshAuthMode();
        window.setTimeout(() => {
            try { authEmail.focus({ preventScroll: true }); } catch (error) { /* ignore */ }
        }, 120);
    }

    function hideAuthGate() {
        authGate.hidden = true;
        document.body.classList.remove('auth-locked');
        showAuthError('');
    }

    function authErrorMessage(code) {
        switch (code) {
            case 'auth/invalid-credential':
            case 'auth/invalid-login-credentials':
            case 'auth/wrong-password':
            case 'auth/user-not-found':
                return t('authErrorInvalid');
            case 'auth/email-already-in-use':
                return t('authErrorEmailUsed');
            case 'auth/weak-password':
                return t('authErrorWeak');
            case 'auth/invalid-email':
                return t('authErrorEmail');
            case 'auth/network-request-failed':
                return t('authErrorNetwork');
            case 'timeout':
                return t('authErrorNetwork');
            case 'auth/operation-not-allowed':
                return t('authErrorNotEnabled');
            case 'auth/configuration-not-found':
            case 'auth/invalid-api-key':
            case 'auth/api-key-not-valid.-please-pass-a-valid-api-key.':
                return t('authErrorConfig');
            case 'auth/unauthorized-domain':
                return t('authErrorDomain', { domain: window.location.hostname });
            case 'auth/popup-blocked':
            case 'auth/popup-closed-by-user':
            case 'auth/cancelled-popup-request':
            case 'auth/redirect-cancelled-by-user':
                return t('authErrorPopup');
            case 'auth/account-exists-with-different-credential':
                return t('authErrorExists');
            case 'auth/user-cancelled':
                return t('authErrorCancelled');
            default:
                return t('authErrorGeneric');
        }
    }

    function cloudCall(promise, ms) {
        return Promise.race([
            promise,
            new Promise((resolve, reject) => {
                window.setTimeout(() => {
                    const error = new Error('timeout');
                    error.code = 'timeout';
                    reject(error);
                }, ms);
            })
        ]);
    }

    function initCloud() {
        const cloud = window.PaymentsCloud;
        if (!cloud || !cloud.enabled || printMode) return;

        authGate.hidden = false;
        document.body.classList.add('auth-locked');
        authLoading.hidden = false;
        authBody.hidden = true;
        if (isIOS) authIosNote.hidden = false;

        const stuckTimer = window.setTimeout(() => {
            if (cloud.readyState === 'done') return;
            pendingAuthError = t('authErrorNetwork');
            showAuthForm();
        }, 12000);

        cloud.onError((payload) => {
            const code = payload && payload.code;
            if (code === 'redirect') {
                pendingAuthError = payload.authCode ? authErrorMessage(payload.authCode) : '';
                if (!authBody.hidden) {
                    showAuthError(pendingAuthError);
                    pendingAuthError = '';
                }
                return;
            }
            if (code === 'setup') {
                hideAuthGate();
                showToast(t('cloudSyncFailed'), true);
                return;
            }
            if (code === 'sync') {
                const kind = classifyCloudError(payload);
                const first = !cloudSyncTrouble;
                cloudSyncTrouble = true;
                cloudIssueKind = kind;
                refreshCloudState();
                if (first) showToast(cloudIssueText(kind), true);
                return;
            }
            showToast(t('cloudSyncFailed'), true);
        });

        cloud.onSaved((stamp) => {
            cloudSyncTrouble = false;
            cloudIssueKind = '';
            try {
                localStorage.setItem(LAST_CLOUD_KEY, String(stamp));
            } catch (error) {
                /* display-only timestamp */
            }
            refreshCloudState();
        });

        cloud.onData((cloudItems) => {
            if (!cloudItems || !cloudItems.length) return;
            items = cloudItems.map(normalizeItem);
            cloudSyncTrouble = false;
            cloudIssueKind = '';
            persistLocal();
            render();
        });

        cloud.onAuth(async (user) => {
            window.clearTimeout(stuckTimer);
            if (!user) {
                cloudActive = false;
                cloudSyncTrouble = false;
                cloudIssueKind = '';
                menuAccount.hidden = true;
                signOutItem.hidden = true;
                refreshCloudState();
                showAuthForm();
                return;
            }
            hideAuthGate();
            menuAccount.textContent = user.email || '';
            menuAccount.hidden = false;
            signOutItem.hidden = false;
            try {
                const cloudItems = await cloudCall(cloud.load(), 15000);
                if (cloudItems && cloudItems.length) {
                    items = cloudItems.map(normalizeItem);
                    persistLocal();
                    render();
                } else {
                    if (!items.length) {
                        const snap = readDeviceSnapshot();
                        if (snap) {
                            items = snap.items;
                            persistLocal();
                            render();
                            showToast(t('restoreDeviceDone'));
                        }
                    }
                    if (items.length) {
                        await cloudCall(cloud.saveNow(items), 15000);
                        showToast(t('cloudUploaded'));
                    }
                }
                cloudSyncTrouble = false;
                cloudIssueKind = '';
                cloudActive = true;
                cloud.startSync();
            } catch (error) {
                cloudActive = true;
                cloudSyncTrouble = true;
                cloudIssueKind = classifyCloudError(error);
                cloud.startSync();
                showToast(cloudIssueText(cloudIssueKind), true);
            }
            refreshCloudState();
        });

        authForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = authEmail.value.trim();
            const password = authPassword.value;
            if (!email || !password) {
                showAuthError(t('authRequired'));
                return;
            }
            showAuthError('');
            authSubmit.disabled = true;
            try {
                if (authMode === 'signup') await cloudCall(cloud.signUpEmail(email, password), 20000);
                else await cloudCall(cloud.signInEmail(email, password), 20000);
            } catch (error) {
                const message = authErrorMessage(error && error.code);
                if (message) showAuthError(message);
            } finally {
                authSubmit.disabled = false;
            }
        });

        authToggle.addEventListener('click', () => {
            authMode = authMode === 'signup' ? 'signin' : 'signup';
            showAuthError('');
            refreshAuthMode();
        });

        authGoogleBtn.addEventListener('click', async () => {
            showAuthError('');
            authGoogleBtn.disabled = true;
            try {
                await cloudCall(cloud.signInGoogle(), 20000);
            } catch (error) {
                const message = authErrorMessage(error && error.code);
                showAuthError(message || t('authErrorGeneric'));
            } finally {
                authGoogleBtn.disabled = false;
            }
        });

        gateLangBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                setLanguage(btn.dataset.gateLang);
                refreshAuthMode();
            });
        });
    }

    async function signOutCloud() {
        const cloud = window.PaymentsCloud;
        if (!cloud || !cloud.enabled) return;
        if (!window.confirm(t('authSignOutConfirm'))) return;
        try {
            await cloud.signOut();
        } catch (error) {
            showToast(t('authErrorGeneric'), true);
            return;
        }
        cloudActive = false;
        cloudSyncTrouble = false;
        cloudIssueKind = '';
        cloud.stopSync();
        persistLocal();
        render();
        menuAccount.hidden = true;
        signOutItem.hidden = true;
        refreshCloudState();
    }

    async function runSaveNow() {
        const cloud = window.PaymentsCloud;
        if (!cloud || !cloud.enabled || !cloud.saveNow) return;
        if (!items.length) {
            showToast(t('cloudStatePending'));
            return;
        }
        try {
            await cloudCall(cloud.saveNow(items), 15000);
            showToast(t('saveNowDone'));
        } catch (error) {
            showToast(t('saveNowFailed'), true);
        }
        refreshCloudState();
    }

    function restoreDeviceData() {
        const snap = readDeviceSnapshot();
        if (!snap) {
            showToast(t('restoreDeviceNone'), true);
            return;
        }
        if (!window.confirm(t('restoreDeviceConfirm'))) return;
        items = snap.items.map(normalizeItem);
        persist();
        render();
        showToast(t('restoreDeviceDone'));
    }

    /* ---------- ڕووداوەکان ---------- */

    $('#addBtn').addEventListener('click', () => openForm());
    $('#menuBtn').addEventListener('click', openMenu);
    searchInput.addEventListener('input', render);

    window.addEventListener('storage', (event) => {
        if (event.key !== STORAGE_KEY && event.key !== BACKUP_KEY) return;
        recoveredFromBackup = false;
        items = loadItems();
        render();
    });

    list.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-action]');
        if (!trigger) return;
        const action = trigger.dataset.action;
        if (action === 'add') {
            openForm();
            return;
        }
        if (action === 'clear-search') {
            searchInput.value = '';
            render();
            searchInput.focus();
            return;
        }
        const card = trigger.closest('.item');
        const id = card ? card.dataset.id : '';
        const item = items.find((entry) => entry.id === id);
        if (!item) return;

        switch (action) {
            case 'pay': openPay(id); break;
            case 'edit': openForm(id); break;
            case 'delete': deleteItem(id); break;
            case 'share': shareText(singleItemText(item)); break;
            case 'copy': copyText(singleItemText(item), t('copiedItem', { name: item.name })); break;
            default: break;
        }
    });

    menuScrim.addEventListener('click', (event) => {
        if (event.target === menuScrim) {
            closeSheet(menuScrim);
            return;
        }
        const trigger = event.target.closest('[data-menu]');
        if (!trigger) return;
        const action = trigger.dataset.menu;
        closeSheet(menuScrim);

        switch (action) {
            case 'share':
                if (!items.length) { showToast(t('noSend'), true); break; }
                shareText(fullReportText());
                break;
            case 'copy':
                if (!items.length) { showToast(t('noCopy'), true); break; }
                copyText(fullReportText(), t('copiedAll'));
                break;
            case 'backup': backupData(); break;
            case 'restore': importInput.click(); break;
            case 'saveNow': runSaveNow(); break;
            case 'restoreDevice': restoreDeviceData(); break;
            case 'print': doPrint(); break;
            case 'clear': clearAll(); break;
            case 'signout': signOutCloud(); break;
            default: break;
        }
    });

    formScrim.addEventListener('click', (event) => {
        if (event.target === formScrim) closeSheet(formScrim);
    });

    payScrim.addEventListener('click', (event) => {
        if (event.target === payScrim) closeSheet(payScrim);
    });

    document.addEventListener('click', (event) => {
        const closeBtn = event.target.closest('[data-close-sheet]');
        if (!closeBtn) return;
        const scrim = closeBtn.closest('.scrim');
        if (scrim) closeSheet(scrim);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        if (!langMenu.hidden) {
            closeLangMenu();
            langBtn.focus({ preventScroll: true });
            return;
        }
        if (openScrim) closeSheet(openScrim);
    });

    CURRENCIES.forEach((code) => {
        const inputs = formInputs[code];
        [inputs.total, inputs.paid].forEach((input) => {
            input.addEventListener('input', (event) => {
                const raw = getRawAmount(event.target.value);
                event.target.value = raw ? fmt(raw) : '';
                updateRemainingHints();
            });
        });
    });

    CURRENCIES.forEach((code) => {
        payInputs[code].addEventListener('input', (event) => {
            const raw = getRawAmount(event.target.value);
            event.target.value = raw ? fmt(raw) : '';
            updatePayRow(code);
        });
    });

    inputName.addEventListener('input', () => inputName.classList.remove('is-invalid'));

    function fillRemainingPayment(code) {
        const item = items.find((entry) => entry.id === payIdInput.value);
        if (!item || !CURRENCIES.includes(code)) return;
        const remaining = remainingOf(item, code);
        const input = payInputs[code];
        input.value = fmt(remaining);
        updatePayRow(code);
        input.focus({ preventScroll: true });
    }

    payForm.querySelectorAll('[data-fill]').forEach((btn) => {
        btn.addEventListener('click', () => fillRemainingPayment(btn.dataset.fill));
    });

    payForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const item = items.find((entry) => entry.id === payIdInput.value);
        if (!item) return;
        const payments = {};
        CURRENCIES.forEach((code) => {
            payments[code] = getRawAmount(payInputs[code].value) > 0
                ? Math.min(getRawAmount(payInputs[code].value), remainingOf(item, code))
                : 0;
        });
        if (!CURRENCIES.some((code) => payments[code] > 0)) {
            showToast(t('invalidPay'), true);
            const first = CURRENCIES.find((code) => remainingOf(item, code) > 0);
            if (first) payInputs[first].focus({ preventScroll: true });
            return;
        }
        CURRENCIES.forEach((code) => {
            if (payments[code] > 0) item[code + 'Paid'] = paidOf(item, code) + payments[code];
        });
        delete item.previousAmount;
        if (!persist()) return;
        render();
        closeSheet(payScrim);
        if (isPaidItem(item)) {
            showToast(t('fullyPaid', { name: item.name }));
            return;
        }
        const leftParts = CURRENCIES
            .filter((code) => remainingOf(item, code) > 0)
            .map((code) => `${fmt(remainingOf(item, code))} ${currencyName(code)}`);
        showToast(t('payRecorded', { amount: leftParts.join(t('and')) }));
    });

    entryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = inputName.value.trim();
        const phone = normalizePhone(inputPhone.value);
        const note = inputNote.value.trim().slice(0, 200);
        const values = {};
        CURRENCIES.forEach((code) => {
            const total = getRawAmount(formInputs[code].total.value);
            values[code] = {
                total,
                paid: Math.min(getRawAmount(formInputs[code].paid.value), total)
            };
        });

        if (!name) {
            inputName.classList.add('is-invalid');
            inputName.focus();
            showToast(t('nameRequired'), true);
            return;
        }

        if (!CURRENCIES.some((code) => values[code].total > 0)) {
            showToast(t('noCurrencyAmount'), true);
            formInputs.iqd.total.focus();
            return;
        }

        if (editingId) {
            const item = items.find((entry) => entry.id === editingId);
            if (!item) return;
            item.name = name;
            CURRENCIES.forEach((code) => {
                item[code] = values[code].total;
                item[code + 'Paid'] = values[code].paid;
            });
            if (note) item.note = note;
            else delete item.note;
            if (phone) item.phone = phone;
            else delete item.phone;
            delete item.amount;
            delete item.paidAmount;
            delete item.paid;
            delete item.previousAmount;
            persist();
            render();
            closeSheet(formScrim);
            showToast(t('updated'));
        } else {
            const entry = { id: uid(), name, iqd: 0, iqdPaid: 0, usd: 0, usdPaid: 0 };
            CURRENCIES.forEach((code) => {
                entry[code] = values[code].total;
                entry[code + 'Paid'] = values[code].paid;
            });
            if (note) entry.note = note;
            if (phone) entry.phone = phone;
            items.push(entry);
            persist();
            render();
            closeSheet(formScrim);
            showToast(t('added'));
        }
    });

    importInput.addEventListener('change', async () => {
        const file = importInput.files && importInput.files[0];
        if (!file) return;
        try {
            const text = await file.text();
            const parsed = JSON.parse(text);
            const source = Array.isArray(parsed) ? parsed : (parsed && Array.isArray(parsed.items) ? parsed.items : null);
            if (!source) throw new Error('invalid-shape');
            const restored = source
                .filter((entry) => entry && typeof entry.name === 'string' && entry.name.trim())
                .map(normalizeItem);
            if (!restored.length) throw new Error('empty');
            if (!window.confirm(t('confirmRestore', { count: fmt(restored.length) }))) return;
            items = restored;
            persist();
            render();
            showToast(t('restored'));
        } catch (error) {
            showToast(t('badFile'), true);
        } finally {
            importInput.value = '';
        }
    });

    /* ---------- گۆڕینی زمان ---------- */

    langBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = langMenu.hidden;
        langMenu.hidden = !willOpen;
        langBtn.setAttribute('aria-expanded', String(willOpen));
        if (willOpen) {
            const active = langOptions.find((btn) => btn.dataset.langOption === lang);
            if (active) active.focus({ preventScroll: true });
        }
    });

    langOptions.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            closeLangMenu();
            setLanguage(btn.dataset.langOption);
            langBtn.focus({ preventScroll: true });
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.lang')) closeLangMenu();
    });

    /* ---------- دانانی وەک ئەپ ---------- */

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
        || window.navigator.standalone === true;

    if (isIOS && !isStandalone && !printMode) {
        let dismissed = false;
        try { dismissed = localStorage.getItem(HINT_KEY) === '1'; } catch (error) { dismissed = false; }
        if (!dismissed) {
            window.setTimeout(() => { installHint.hidden = false; }, 1200);
        }
    }

    $('#dismissInstall').addEventListener('click', () => {
        installHint.hidden = true;
        try { localStorage.setItem(HINT_KEY, '1'); } catch (error) { /* ignore */ }
    });

    $('#printBackBtn').addEventListener('click', () => {
        const url = new URL(window.location.href);
        url.search = '';
        url.hash = '';
        window.location.href = url.toString();
    });

    $('#printNowBtn').addEventListener('click', () => window.print());

    /* ---------- Service Worker ---------- */

    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            refreshing = true;
            const busy = document.visibilityState !== 'visible'
                || document.querySelector('.scrim.is-open')
                || (document.activeElement && document.activeElement.matches('input, textarea'));
            if (!busy) {
                window.location.reload();
            } else {
                showToast(t('newVersion'));
            }
        });
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(() => { /* offline mode unavailable */ });
        });
    }

    setLanguage(lang, true);
    setupPrintMode();
    initCloud();
    if (recoveredFromBackup) {
        recoveredFromBackup = false;
        persist();
        showToast(t('backupRestored'));
    } else if (!printMode && items.length) {
        let lastBackup = '';
        try { lastBackup = localStorage.getItem(LAST_BACKUP_KEY) || ''; } catch (error) { lastBackup = ''; }
        const lastTime = lastBackup ? new Date(lastBackup).getTime() : 0;
        const due = !lastTime || Number.isNaN(lastTime) || Date.now() - lastTime > 30 * 24 * 60 * 60 * 1000;
        if (due) window.setTimeout(() => showToast(t('backupReminder')), 3000);
    }
})();
