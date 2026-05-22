const lessonsData = [
    {
        id: 1,
        title: "التَّعَارُفُ وَالتَّحِيَّةُ",
        text_ar: "السَّلَامُ عَلَيْكُمْ. اسْمِي مَحْمُودٌ. أَنَا مُعَلِّمٌ نَشِيطٌ. أَعِيشُ فِي مَدِينَةِ الْقَاهِرَةِ. هَذِهِ زَوْجَتِي، اسْمُهَا مَرْيَمُ، هِيَ طَبِيبَةٌ مَاهِرَةٌ.",
        text_en: "Peace be upon you. My name is Mahmoud. I am an active teacher. I live in Cairo. This is my wife, her name is Maryam, she is a skilled doctor.",
        text_ru: "Мир вам. Меня зовут Махмуд. Я активный учитель. Я живу в Каире. Это моя жена, ее зовут Марьям, она опытный врач.",
        text_uz: "Sizga tinchlik bo'lsin. Mening ismim Mahmud. Men faol o'qituvchiman. Men Qohirada yashayman. Bu mening rafiqam, ismi Maryam, u mahoratli shifokor.",
        grammar_tip: {
            en: "Nominal Sentence (Al-Jumla Al-Ismiyya) starts with a noun and consists of Subject (Mubtada) and Predicate (Khabar).",
            ru: "Именное предложение начинается с существительного и состоит из подлежащего и сказуемого.",
            uz: "Otli gap ot bilan boshlanadi va ega va kesimdan iborat bo'ladi."
        },
        quiz: [
            { q: "مَا مِهْنَةُ مَحْمُودٍ؟", options: ["طَبِيبٌ", "مُعَلِّمٌ", "مُهَنْدِسٌ", "طَالِبٌ"], correct: 1 },
            { q: "أَيْنَ يَعِيشُ مَحْمُودٌ؟", options: ["دُبَي", "الرِّيَاض", "الْقَاهِرَة", "لَنْدَن"], correct: 2 },
            { q: "مَا اسْمُ زَوْجَةِ مَحْمُودٍ؟", options: ["فَاطِمَة", "مَرْيَم", "خَدِيجَة", "زَيْنَب"], correct: 1 }
        ]
    },
    {
        id: 2,
        title: "الرَّوتِينُ الْيَوْمِيُّ",
        text_ar: "أَسْتَيْقِظُ مِنَ النَّوْمِ مُبَكِّرًا. أَغْسِلُ وَجْهِي وَأَتَنَاوَلُ الْفُطُورَ مَعَ أُسْرَتِي. أَذْهَبُ إِلَى الْعَمَلِ بِالْحَافِلَةِ فِي السَّاعَةِ الثَّامِنَةِ صَبَاحًا.",
        text_en: "I wake up early. I wash my face and eat breakfast with my family. I go to work by bus at eight o'clock in the morning.",
        text_ru: "Я просыпаюсь рано. Я умываюсь и завтракаю со своей семьей. Я еду на работу на автобусе в восемь часов утра.",
        text_uz: "Men erta uyg'onaman. Yuzimni yuvaman va oilam bilan nonushta qilaman. Men ishga avtobusda ertalab soat sakkizda boraman.",
        grammar_tip: {
            en: "Present Tense Verbs (Al-Fi'l Al-Mudari') start with letters like (أ، ن، ي، ت). For 'I', we use 'أ'.",
            ru: "Глаголы настоящего времени начинаются с букв (а, на, я, та). Для 'Я' мы используем 'а'.",
            uz: "Hozirgi zamon fe'llari (a, na, ya, ta) harflari bilan boshlanadi. 'Men' uchun 'a' harfi ishlatiladi."
        },
        quiz: [
            { q: "مَتَى يَسْتَيْقِظُ الرَّجُلُ؟", options: ["مُتَأَخِّرًا", "مُبَكِّرًا", "فِي الظُّهْرِ", "فِي اللَّيْلِ"], correct: 1 },
            { q: "كَيْفَ يَذْهَبُ إِلَى الْعَمَلِ؟", options: ["بِالسَّيَّارَةِ", "مَشْيًا", "بِالْحَافِلَةِ", "بِالدَّرَّاجَةِ"], correct: 2 },
            { q: "مَعَ مَنْ يَتَنَاوَلُ الْفُطُورَ؟", options: ["وَحْدَهُ", "مَعَ أَصْدِقَائِهِ", "مَعَ أُسْرَتِهِ", "مَعَ جِيرَانِهِ"], correct: 2 }
        ]
    },
    {
        id: 3,
        title: "فِي السُّوقِ",
        text_ar: "الذَّهَابُ إِلَى السُّوقِ مُمْتِعٌ. أَشْتَرِي الْفَوَاكِهَ الطَّازَجَةَ وَالْخُضْرَوَاتِ. أُحِبُّ التُّفَّاحَ الأَحْمَرَ وَالْعِنَبَ الأَخْضَرَ. الثَّمَنُ رَخِيصٌ جِدًّا الْيَوْمَ.",
        text_en: "Going to the market is fun. I buy fresh fruits and vegetables. I like red apples and green grapes. The price is very cheap today.",
        text_ru: "Ходить на рынок весело. Я покупаю свежие фрукты и овощи. Мне нравятся красные яблоки и зеленый виноград. Цена сегодня очень низкая.",
        text_uz: "Boqqa borish qiziqarli. Men yangi meva va sabzavotlar sotib olaman. Menga qizil olma va yashil uzum yoqadi. Bugun narx juda arzon.",
        grammar_tip: {
            en: "Adjectives in Arabic follow the noun they describe in gender, number, and definiteness (e.g., التفاحُ الأحمرُ).",
            ru: "Прилагательные в арабском языке следуют за существительным в роде, числе и определенности.",
            uz: "Arab tilida sifatlar o'zi tasvirlayotgan otdan keyin keladi va jins, son va aniqlikda unga moslashadi."
        },
        quiz: [
            { q: "مَاذَا يَشْتَرِي مِنَ السُّوقِ؟", options: ["كُتُبًا", "مَلَابِسَ", "فَوَاكِهَ", "أَلْعَابًا"], correct: 2 },
            { q: "كَيْفَ كَانَ الثَّمَنُ؟", options: ["غَالٍ", "رَخِيصٌ", "مُتَوَسِّطٌ", "لَا أَعْرِفُ"], correct: 1 },
            { q: "مَا لَوْنُ الْعِنَبِ؟", options: ["أَسْوَد", "أَحْمَر", "أَصْفَر", "أَخْضَر"], correct: 3 }
        ]
    },
    {
        id: 4,
        title: "أُسْرَتِي السَّعِيدَةُ",
        text_ar: "عِنْدِي أُسْرَةٌ كَبِيرَةٌ. لِي أَبٌ وَأُمٌّ، وَأَخٌ وَأُخْتٌ. أَخِي طَالِبٌ فِي الْجَامِعَةِ، وَأُخْتِي تَلْعَبُ فِي الْحَدِيقَةِ. نَحْنُ نَأْكُلُ الْعَشَاءَ مَعًا.",
        text_en: "I have a big family. I have a father, a mother, a brother, and a sister. My brother is a university student, and my sister plays in the garden. We eat dinner together.",
        text_ru: "У меня большая семья. У меня есть отец, мать, брат и сестра. Мой брат - студент университета, а моя сестра играет в саду. Мы ужинаем вместе.",
        text_uz: "Mening katta oilam bor. Otam, onam, akam va opam bor. Akam universitet talabasi, opam esa bog'da o'ynaydi. Biz birga kechki ovqatni tanovul qilamiz.",
        grammar_tip: {
            en: "Possessive Pronouns are suffixes attached to the end of nouns. (ي) for 'my', and (نا) for 'our'.",
            ru: "Притяжательные местоимения - это суффиксы, прикрепляемые к концу имен существительных.",
            uz: "Egalik olmoshlari otlarning oxiriga qo'shiladigan qo'shimchalardir."
        },
        quiz: [
            { q: "أَيْنَ يَدْرُسُ الأَخُ؟", options: ["فِي الْمَدْرَسَةِ", "فِي الْبَيْتِ", "فِي الْجَامِعَةِ", "فِي الْمَكْتَبِ"], correct: 2 },
            { q: "أَيْنَ تَلْعَبُ الأُخْتُ؟", options: ["فِي الشَّارِعِ", "فِي الْحَدِيقَةِ", "فِي الْغُرْفَةِ", "فِي النَّادِي"], correct: 1 },
            { q: "كَيْفَ هِيَ الأُسْرَةُ؟", options: ["صَغِيرَة", "حَزِينَة", "كَبِيرَة", "غَرِيبَة"], correct: 2 }
        ]
    },
    {
        id: 5,
        title: "الْهَوَايَاتُ",
        text_ar: "الْقِرَاءَةُ هِوَايَتِي الْمُفَضَّلَةُ. أَقْرَأُ الْكُتُبَ الْعَرَبِيَّةَ كُلَّ يَوْمٍ لِأَتَعَلَّمَ لُغَةَ الْقُرْآنِ. كَمَا أُحِبُّ الرِّياضَةَ أَيْضًا، فَأَنَا أَسْبَحُ فِي الْمَسْبَحِ كُلَّ عُطْلَةٍ.",
        text_en: "Reading is my favorite hobby. I read Arabic books every day to learn the language of the Quran. I also like sports, so I swim in the pool every weekend.",
        text_ru: "Чтение - мое любимое хобби. Я читаю арабские книги каждый день, чтобы изучать язык Корана. Мне также нравится спорт, поэтому я плаваю в бассейне каждые выходные.",
        text_uz: "Kitob o'qish mening sevimli hobbiym. Men har kuni Qur'on tilini o'rganish uchun arabcha kitoblar o'qiyman. Shuningdek, sportni ham yaxshi ko'raman, shuning uchun har dam olish kuni hovuzda suzaman.",
        grammar_tip: {
            en: "The Gerund (Al-Masdar) represents the action without time, like (القراءة - Reading).",
            ru: "Герундий (Масдар) представляет действие без привязки ко времени, например (Чтение).",
            uz: "Masdar harakatning vaqtga bog'lanmagan nomini bildiradi, masalan (O'qish)."
        },
        quiz: [
            { q: "مَا هِيَ الْهِوَايَةُ الْمُفَضَّلَةُ؟", options: ["الرَّسْمُ", "الْقِرَاءَةُ", "السَّفَرُ", "الطَّبْخُ"], correct: 1 },
            { q: "لِمَاذَا يَقْرَأُ الْكُتُبَ الْعَرَبِيَّةَ؟", options: ["لِلْمُتْعَةِ", "لِلنَّجَاحِ", "لِتَعَلُّمِ لُغَةِ الْقُرْآنِ", "لِلْعَمَلِ"], correct: 2 },
            { q: "مَتَى يَسْبَحُ فِي الْمَسْبَحِ؟", options: ["كُلَّ يَوْمٍ", "كُلَّ شَهْرٍ", "كُلَّ سَنَةٍ", "كُلَّ عُطْلَةٍ"], correct: 3 }
        ]
    }
];
