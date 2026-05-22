const translations = {
    ar: {
        direction: 'rtl',
        langName: 'العربية',
        nav: {
            home: 'الرئيسية',
            lessons: 'الدروس',
            grammar: 'النحو',
            texts: 'النصوص'
        },
        hero: {
            title: 'تعلم اللغة العربية',
            subtitle: 'منصة تعليمية متعددة اللغات لتعلم اللغة العربية لغير الناطقين بها',
            welcome: 'مرحباً بك في منصة تعلم اللغة العربية',
            description: 'نقدم لك أفضل الطرق لتعلم اللغة العربية بطريقة سهلة وممتعة',
            getStarted: 'ابدأ التعلم'
        },
        features: {
            interactive: 'دروس تفاعلية',
            interactiveDesc: 'دروس تفاعلية مع تمارين',
            native: 'معلمين ناطقين بالعربية',
            nativeDesc: 'تعلم من معلمين ناطقين بالعربية',
            flexible: 'تعلم بمرونة',
            flexibleDesc: 'تعلم بالسرعة التي تناسبك',
            certificate: 'شهادات معتمدة',
            certificateDesc: 'احصل على شهادات معتمدة'
        },
        footer: {
            copyright: '© 2026 منصة تعلم اللغة العربية. جميع الحقوق محفوظة.'
        }
    },
    en: {
        direction: 'ltr',
        langName: 'English',
        nav: {
            home: 'Home',
            lessons: 'Lessons',
            grammar: 'Grammar',
            texts: 'Texts'
        },
        hero: {
            title: 'Learn Arabic',
            subtitle: 'A multilingual educational platform for learning Arabic for non-native speakers',
            welcome: 'Welcome to the Arabic Learning Platform',
            description: 'We offer you the best ways to learn Arabic in an easy and enjoyable manner',
            getStarted: 'Start Learning'
        },
        features: {
            interactive: 'Interactive Lessons',
            interactiveDesc: 'Interactive lessons with exercises',
            native: 'Native Arabic Teachers',
            nativeDesc: 'Learn from native Arabic speakers',
            flexible: 'Flexible Learning',
            flexibleDesc: 'Learn at your own pace',
            certificate: 'Accredited Certificates',
            certificateDesc: 'Get accredited certificates'
        },
        footer: {
            copyright: '© 2026 Arabic Learning Platform. All rights reserved.'
        }
    },
    ru: {
        direction: 'ltr',
        langName: 'Русский',
        nav: {
            home: 'Главная',
            lessons: 'Уроки',
            grammar: 'Грамматика',
            texts: 'Тексты'
        },
        hero: {
            title: 'Изучайте арабский язык',
            subtitle: 'Многоязычная образовательная платформа для изучения арабского языка для не носителей',
            welcome: 'Добро пожаловать на платформу изучения арабского языка',
            description: 'Мы предлагаем вам лучшие способы изучения арабского языка простым и увлекательным способом',
            getStarted: 'Начать обучение'
        },
        features: {
            interactive: 'Интерактивные уроки',
            interactiveDesc: 'Интерактивные уроки с упражнениями',
            native: 'Носители арабского языка',
            nativeDesc: 'Учитесь у носителей арабского языка',
            flexible: 'Гибкое обучение',
            flexibleDesc: 'Учитесь в своем собственном темпе',
            certificate: 'Аккредитованные сертификаты',
            certificateDesc: 'Получите аккредитованные сертификаты'
        },
        footer: {
            copyright: '© 2026 Платформа изучения арабского языка. Все права защищены.'
        }
    },
    uz: {
        direction: 'ltr',
        langName: 'O\'zbek',
        nav: {
            home: 'Bosh sahifa',
            lessons: 'Darslar',
            grammar: 'Grammatika',
            texts: 'Matnlar'
        },
        hero: {
            title: 'Arab tilini o\'rganing',
            subtitle: 'Arab tilini o\'rganish uchun ko\'p tilli ta\'lim platformasi',
            welcome: 'Arab tili o\'rganish platformasiga xush kelibsiz',
            description: 'Biz sizga arab tilini oson va qiziqarli usulda o\'rganish uchun eng yaxshi usullarni taklif etamiz',
            getStarted: 'O\'rganishni boshlash'
        },
        features: {
            interactive: 'Interaktiv darslar',
            interactiveDesc: 'Mashqlar bilan interaktiv darslar',
            native: 'Arab tilida so\'zlovchi o\'qituvchilar',
            nativeDesc: 'Arab tilida so\'zlovchi o\'qituvchilardan o\'rganing',
            flexible: 'Moslashuvchan o\'rganish',
            flexibleDesc: 'O\'z tezligingizda o\'rganing',
            certificate: 'Tasdiqlangan sertifikatlar',
            certificateDesc: 'Tasdiqlangan sertifikatlar oling'
        },
        footer: {
            copyright: '© 2026 Arab tili o\'rganish platformasi. Barcha huquqlar himoyalangan.'
        }
    }
};

// Default language
let currentLang = localStorage.getItem('language') || 'ar';

// DOM Elements
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Language Dropdown Toggle
langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('hidden');
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (langBtn && !langBtn.contains(e.target) && langDropdown && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
    }
    if (mobileMenuBtn && !mobileMenuBtn.contains(e.target) && mobileMenu && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Change language
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        langDropdown.classList.add('hidden');
    });
});

// Set language function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML direction and lang attribute
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', translations[lang].direction);
    
    // Update current language button
    currentLangSpan.textContent = translations[lang].langName;
    
    // Update all translatable elements
    updateTranslations();
    
    // Update active state in dropdown and alignment
    const isRtl = translations[lang].direction === 'rtl';
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('bg-gray-100', 'font-bold');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('bg-gray-100', 'font-bold');
        }
        // Update alignment based on direction
        if (isRtl) {
            option.classList.remove('text-left');
            option.classList.add('text-right');
        } else {
            option.classList.remove('text-right');
            option.classList.add('text-left');
        }
    });
}

// Update translations function
function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLang];
        
        keys.forEach(k => {
            if (value) value = value[k];
        });
        
        if (value) {
            element.textContent = value;
        }
    });
}

// Initialize on page load
function init() {
    setLanguage(currentLang);
}

// Run initialization
init();
