const templates = {
    niyat: {
        title: "Намерение (Ният)",
        action: "Встаньте ровно. Намерение можно сделать мысленно.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["намерение", "навайту", "аллаха", "готово"]
    },
    takbir: {
        title: "Вступительный такбир",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Поднимите руки до уровня ушей (мужчины) или плеч (женщины).",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    sana: {
        title: "Дуа Сана (Субханака)",
        arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ",
        transcription: "Субханакал-лахумма ва бихамдика, ва табаракас-мука, ва та'аля джаддука, ва ля иляха гайрук.",
        translation: "Пречист Ты, о Аллах, и хвала Тебе. Благословенно имя Твое, превыше всего величие Твое, и нет божества, кроме Тебя.",
        action: "Сложите руки: правая поверх левой.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["гайрук", "субханака", "иляха"]
    },
    taawwuz: {
        title: "Тааввуз и Басмала",
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        transcription: "А'узу билляхи минаш-шайтанир-раджим. Бисмилляхир-рахманир-рахим.",
        translation: "Прибегаю к защите Аллаха от проклятого шайтана. С именем Аллаха, Милостивого, Милосердного.",
        action: "Продолжайте стоять в том же положении.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["рахим", "раджим", "бисмиллях"]
    },
    basmala: {
        title: "Басмала",
        arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        transcription: "Бисмилляхир-рахманир-рахим.",
        translation: "С именем Аллаха, Милостивого, Милосердного.",
        action: "Стойте ровно.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["рахим", "бисмиллях"]
    },
    fatiha: {
        title: "Сура Аль-Фатиха",
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transcription: "Аль-хамду лил-ляяхи раббиль-‘аалямиин. Ар-рахмаанир-рахиим. Маалики яумид-диин. Ийяякя на‘буду ва ийяякя наста‘иин. Ихдинас-сырааталь-мустакыым. Сырааталь-лязийна ан‘амта ‘аляйхим, гайриль-магдууби ‘аляйхим ва ляд-даааллиин. (Аминь)",
        translation: "Хвала Аллаху, Господу миров. Милостивому, Милосердному. Властелину Дня воздаяния. Тебе одному мы поклоняемся и Тебя одного молим о помощи. Веди нас прямым путем. Путем тех, кого Ты облагодетельствовал, не тех, на кого пал гнев, и не заблудших.",
        action: "В конце произнесите «Аминь» про себя.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аминь", "даллин", "амин", "готово"]
    },
    surah: {
        title: "Короткая Сура (Аль-Каусар)",
        arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ. فَصَلِّ لِرَبِّكَ وَانْحَرْ. إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
        transcription: "Инна а'тайнакал-каусар. Фасалли ли-раббика ванхар. Инна шани-ака хувал-абтар.",
        translation: "Мы даровали тебе Аль-Каусар. Посему совершай намаз ради своего Господа и закалывай жертву. Воистину, твой ненавистник сам окажется бездетным.",
        action: "Продолжайте стоять.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["абтар", "каусар", "готово"]
    },
    takbir_ruku: {
        title: "Такбир перед Руку",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Произнесите такбир, опускаясь в поясной поклон (Руку).",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    ruku: {
        title: "Руку (Поясной поклон)",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        transcription: "Субхана Раббиял-'Азыйм (3 раза)",
        translation: "Пречист мой Великий Господь",
        action: "Обопритесь руками о колени, спина должна быть ровной (параллельно полу), взгляд на ступни.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["азым", "азыйм", "азим"]
    },
    ruku_up: {
        title: "Выпрямление из Руку",
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ. رَبَّنَا وَلَكَ الْحَمْدُ",
        transcription: "Сами'аллаху лиман хамидах. Раббана ва лякал-хамд.",
        translation: "Да услышит Аллах того, кто Его восхваляет. Господь наш, хвала Тебе.",
        action: "Полностью выпрямитесь (Кыям).",
        voiceMode: "Частично вслух 🗣️",
        voiceTrigger: ["хамидах", "хамд"]
    },
    takbir_sujud: {
        title: "Такбир перед Суджудом",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Опускайтесь в земной поклон: сначала колени, затем руки, потом лицо.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    sujud1: {
        title: "Первый Суджуд",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        transcription: "Субхана Раббиял-А'ля (3 раза)",
        translation: "Пречист мой Всевышний Господь",
        action: "Лоб и нос касаются пола, ладони на уровне плеч/ушей.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["аля", "аляя"]
    },
    takbir_up_sujud: {
        title: "Такбир (Подъем из суджуда)",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Поднимитесь из суджуда и сядьте.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    jalsa: {
        title: "Сидение (Джальса)",
        arabic: "رَبِّ اغْفِرْ لِي",
        transcription: "Раббиг-фир ли",
        translation: "Господи, прости меня",
        action: "Короткая пауза в положении сидя.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["рагфирли", "фирли", "ли", "далее", "пауза"]
    },
    sujud2: {
        title: "Второй Суджуд",
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        transcription: "Субхана Раббиял-А'ля (3 раза)",
        translation: "Пречист мой Всевышний Господь",
        action: "Такое же положение, как и в первом суджуде.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["аля", "аляя"]
    },
    takbir_up_stand: {
        title: "Такбир (Вставание на следующий ракаат)",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Встаньте на следующий ракаат, желательно не опираясь на руки.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    takbir_tashahhud: {
        title: "Такбир перед Ташаххудом",
        arabic: "اللَّهُ أَكْبَرُ",
        transcription: "Аллаху Акбар",
        translation: "Аллах Велик",
        action: "Поднимитесь из суджуда и останьтесь сидеть для чтения.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["аллаху акбар", "акбар"]
    },
    tashahhud: {
        title: "Ат-Тахият (Ташаххуд)",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ. السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ. السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
        transcription: "Ат-тахийяяту лил-ляяхи вас-саляваату ват-таййибаат. Ас-саляяму ‘аляйкя айюхан-набийю ва рахматул-лаахи ва баракаатух. Ас-саляяму ‘аляйнаа ва ‘аляя ‘ибаадил-ляяхис-саалихиин. Ашхаду ал-ляя иляяха иллял-лааху ва ашхаду анна мухаммадан ‘абдуху ва расуулюх.",
        translation: "Приветствия Аллаху, и молитвы, и благие дела. Мир тебе, о Пророк, милость Аллаха и Его благословения. Мир нам и праведным рабам Аллаха. Я свидетельствую, что нет божества, кроме Аллаха, и свидетельствую, что Мухаммад — Его раб и Посланник.",
        action: "Сидите. При словах «Ля иляха» поднимите указательный палец правой руки, при «илляллах» опустите.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["расулух", "солихин"]
    },
    salavat: {
        title: "Салават (Ибрахимия)",
        arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
        transcription: "Аллаахумма салли ‘аляя мухаммадив-ва ‘аляя аали мухаммад, кямаа салляйта ‘аляя ибраахиима ва ‘аляя аали ибраахиим, иннакя хамиидум-маджиид. Аллаахумма баарик ‘аляя мухаммадив-ва ‘аляя аали мухаммад, кямаа бааракта ‘аляя ибраахиима ва ‘аляя аали ибраахиим, иннакя хамиидум-маджиид.",
        translation: "О Аллах! Благослови Мухаммада и семейство Мухаммада, как благословил Ты Ибрахима и семейство Ибрахима, поистине, Ты — Дос­тойный похвалы, Славный! О Аллах! Пошли благословения Мухаммаду и семейству Мухаммада, как послал Ты их Ибрахиму и семейству Ибрахима, поистине, Ты — Достойный похвалы, Славный!",
        action: "Продолжайте сидеть.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["маджиид", "хамиидум"]
    },
    rabbana: {
        title: "Дуа (Раббана)",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transcription: "Раббана атина фид-дунья хасанатан ва филь-ахырати хасанатан ва кына 'азабан-нар.",
        translation: "Господь наш! Даруй нам благо в этом мире и благо в Последней жизни и защити нас от мучений в Огне.",
        action: "Последнее дуа перед завершением намаза.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["нар", "азабан"]
    },
    salam_r: {
        title: "Салям направо",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        transcription: "Ас-саляму 'алейкум ва рахматул-лах",
        translation: "Мир вам и милость Аллаха",
        action: "Поверните голову направо, глядя на правое плечо.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["рахматуллах", "алейкум"]
    },
    salam_l: {
        title: "Салям налево (Конец намаза)",
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        transcription: "Ас-саляму 'алейкум ва рахматул-лах",
        translation: "Мир вам и милость Аллаха",
        action: "Поверните голову налево. Намаз завершен! Вы можете прочитать дополнительные зикры.",
        voiceMode: "Читается вслух 🗣️",
        voiceTrigger: ["рахматуллах", "алейкум", "завершить", "конец"]
    },
    qunut: {
        title: "Дуа Кунут",
        arabic: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ نَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ. اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ",
        transcription: "Аллаахумма иннаа наста‘иинукя ва настагфирукя ва ну’мину бикя ва натаваккялю ‘аляйкя ва нуснии ‘аляйкяль-хайра кулляху нашкурукя ва ляя накфурукя ва нахля‘у ва натруку май-яфджурук. Аллаахумма ийяякя на‘буду ва лякя нусаллии ва насджуду ва иляйкя нас‘аа ва нахфид, нарджуу рахматакя ва нахшаа ‘азаабакя, инна ‘азаабакя биль-куффаари мульхик.",
        translation: "О Аллах! Поистине, мы просим Твоей помощи, просим Твоего прощения, веруем в Тебя, полагаемся на Тебя и воздаем Тебе наилучшую хвалу. Мы благодарим Тебя и не отрицаем Твоих милостей, мы отрекаемся и оставляем тех, кто не повинуется Тебе. О Аллах! Тебе одному мы поклоняемся, Тебе молимся и падаем ниц, к Тебе устремляемся и спешим. Мы надеемся на Твою милость и страшимся Твоего наказания, поистине, Твое наказание постигнет неверующих.",
        action: "Читайте дуа Кунут, сложив руки как в кыяме.",
        voiceMode: "Читается про себя 🤫",
        voiceTrigger: ["настаинука", "кунут", "мульхик"]
    }
};

function createStep(templateName, rakah, overrides = {}) {
    return { ...templates[templateName], rakah, ...overrides };
}

function buildRakah(rakahNumber, isSilentFatiha, hasSurah, isSilentSurah, isJuma = false) {
    let steps = [];
    if (rakahNumber > 1) {
        steps.push(createStep('basmala', rakahNumber));
    }
    
    if (isJuma) {
        steps.push(createStep('fatiha', rakahNumber, { 
            voiceMode: "Слушайте чтение имама 🤲",
            action: "Встаньте за имамом и молча слушайте чтение."
        }));
        if (hasSurah) {
            steps.push(createStep('surah', rakahNumber, { 
                voiceMode: "Слушайте чтение имама 🤲",
                action: "Встаньте за имамом и молча слушайте чтение."
            }));
        }
    } else {
        steps.push(createStep('fatiha', rakahNumber, { 
            voiceMode: isSilentFatiha ? "Читается про себя 🤫" : "Читается вслух 🗣️" 
        }));
        if (hasSurah) {
            steps.push(createStep('surah', rakahNumber, { 
                voiceMode: isSilentSurah ? "Читается про себя 🤫" : "Читается вслух 🗣️" 
            }));
        }
    }

    steps.push(createStep('takbir_ruku', rakahNumber));
    steps.push(createStep('ruku', rakahNumber));
    steps.push(createStep('ruku_up', rakahNumber));
    steps.push(createStep('takbir_sujud', rakahNumber));
    steps.push(createStep('sujud1', rakahNumber));
    steps.push(createStep('takbir_up_sujud', rakahNumber));
    steps.push(createStep('jalsa', rakahNumber));
    steps.push(createStep('takbir_sujud', rakahNumber, { title: "Такбир (Ко 2-му суджуду)" }));
    steps.push(createStep('sujud2', rakahNumber));

    return steps;
}

// Генерация баз данных намазов
const prayerDatabase = {
    subh: {
        name: "Фаджр",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Фаджр",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ رَكْعَتَيْ فَرْضِ صَلَاةِ الْفَجْرِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя рак'атай фарди салатил-фаджри лилляхи та'аля.",
                translation: "Я намереваюсь совершить два ракаата фард-намаза фаджр ради Всевышнего Аллаха."
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, false, true, false), // 1 ракаат: вслух
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, false, true, false), // 2 ракаат: вслух
            createStep('takbir_tashahhud', 2),
            createStep('tashahhud', 2),
            createStep('salavat', 2),
            createStep('rabbana', 2),
            createStep('salam_r', 2),
            createStep('salam_l', 2)
        ]
    },
    zuhr: {
        name: "Зухр",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Зухр",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ أَرْبَعَ رَكَعَاتٍ فَرْضِ صَلَاةِ الظُّهْرِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя арба'а рака'атин фарди салатиз-зухри лилляхи та'аля.",
                translation: "Я намереваюсь совершить четыре ракаата фард-намаза зухр ради Всевышнего Аллаха."
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, true, true, true), // 1 ракаат: про себя
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, true, true, true), // 2 ракаат: про себя
            createStep('takbir_tashahhud', 2, { title: "Такбир (Первое сидение)" }),
            createStep('tashahhud', 2), // Первое сидение (только ташаххуд)
            createStep('takbir_up_stand', 2, { title: "Вставание на 3-й ракаат" }),
            ...buildRakah(3, true, false, false), // 3 ракаат: про себя, без суры
            createStep('takbir_up_stand', 3),
            ...buildRakah(4, true, false, false), // 4 ракаат: про себя, без суры
            createStep('takbir_tashahhud', 4),
            createStep('tashahhud', 4),
            createStep('salavat', 4),
            createStep('rabbana', 4),
            createStep('salam_r', 4),
            createStep('salam_l', 4)
        ]
    },
    asr: {
        name: "Аср",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Аср",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ أَرْبَعَ رَكَعَاتٍ فَرْضِ صَلَاةِ الْعَصْرِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя арба'а рака'атин фарди салатил-'асри лилляхи та'аля.",
                translation: "Я намереваюсь совершить четыре ракаата фард-намаза аср ради Всевышнего Аллаха."
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, true, true, true),
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, true, true, true),
            createStep('takbir_tashahhud', 2, { title: "Такбир (Первое сидение)" }),
            createStep('tashahhud', 2),
            createStep('takbir_up_stand', 2, { title: "Вставание на 3-й ракаат" }),
            ...buildRakah(3, true, false, false),
            createStep('takbir_up_stand', 3),
            ...buildRakah(4, true, false, false),
            createStep('takbir_tashahhud', 4),
            createStep('tashahhud', 4),
            createStep('salavat', 4),
            createStep('rabbana', 4),
            createStep('salam_r', 4),
            createStep('salam_l', 4)
        ]
    },
    maghrib: {
        name: "Магриб",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Магриб",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ ثَلَاثَ رَكَعَاتٍ فَرْضِ صَلَاةِ الْمَغْرِبِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя саляса рака'атин фарди салатил-магриби лилляхи та'аля.",
                translation: "Я намереваюсь совершить три ракаата фард-намаза магриб ради Всевышнего Аллаха."
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, false, true, false), // 1: вслух
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, false, true, false), // 2: вслух
            createStep('takbir_tashahhud', 2, { title: "Такбир (Первое сидение)" }),
            createStep('tashahhud', 2),
            createStep('takbir_up_stand', 2, { title: "Вставание на 3-й ракаат" }),
            ...buildRakah(3, true, false, false), // 3: про себя, без суры
            createStep('takbir_tashahhud', 3),
            createStep('tashahhud', 3),
            createStep('salavat', 3),
            createStep('rabbana', 3),
            createStep('salam_r', 3),
            createStep('salam_l', 3)
        ]
    },
    isha: {
        name: "Иша",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Иша",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ أَرْبَعَ رَكَعَاتٍ فَرْضِ صَلَاةِ الْعِشَاءِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя арба'а рака'атин фарди салатил-'ишаи лилляхи та'аля.",
                translation: "Я намереваюсь совершить четыре ракаата фард-намаза иша ради Всевышнего Аллаха."
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, false, true, false), // 1: вслух
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, false, true, false), // 2: вслух
            createStep('takbir_tashahhud', 2, { title: "Такбир (Первое сидение)" }),
            createStep('tashahhud', 2),
            createStep('takbir_up_stand', 2, { title: "Вставание на 3-й ракаат" }),
            ...buildRakah(3, true, false, false), // 3: про себя, без суры
            createStep('takbir_up_stand', 3),
            ...buildRakah(4, true, false, false), // 4: про себя, без суры
            createStep('takbir_tashahhud', 4),
            createStep('tashahhud', 4),
            createStep('salavat', 4),
            createStep('rabbana', 4),
            createStep('salam_r', 4),
            createStep('salam_l', 4)
        ]
    },
    witr: {
        name: "Витр",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Витр",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ ثَلَاثَ رَكَعَاتٍ وَاجِبِ صَلَاةِ الْوِتْرِ لِلَّهِ تَعَالَى",
                transcription: "Навайту ан усаллийя саляса рака'атин ваджиби салатил-витри лилляхи та'аля.",
                translation: "Я намереваюсь совершить три ракаата ваджиб-намаза витр ради Всевышнего Аллаха.",
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["намерение", "витр", "навайту", "готово"]
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, true, true, true), // 1: про себя
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, true, true, true), // 2: про себя
            createStep('takbir_tashahhud', 2, { title: "Такбир (Первое сидение)" }),
            createStep('tashahhud', 2),
            createStep('takbir_up_stand', 2, { title: "Вставание на 3-й ракаат" }),
            ...(() => {
                let r3 = buildRakah(3, true, true, true);
                // Вставляем Дуа Кунут после суры и перед руку
                // r3[0] = fatiha, r3[1] = surah, r3[2] = takbir_ruku
                r3.splice(2, 0, createStep('takbir', 3, { 
                    title: "Дополнительный такбир", 
                    action: "Поднимите руки как при вступительном такбире.",
                    voiceMode: "Читается вслух 🗣️",
                    voiceTrigger: ["аллаху акбар", "акбар"]
                }));
                r3.splice(3, 0, createStep('qunut', 3, {
                    voiceMode: "Читается про себя 🤫",
                    voiceTrigger: ["аллахумма инна настаинука", "кунут", "настаинука"]
                }));
                return r3;
            })(),
            createStep('takbir_tashahhud', 3),
            createStep('tashahhud', 3),
            createStep('salavat', 3),
            createStep('rabbana', 3),
            createStep('salam_r', 3),
            createStep('salam_l', 3)
        ]
    },
    juma: {
        name: "Джума",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Джума",
        steps: [
            createStep('niyat', 1, {
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ رَكْعَتَيْ فَرْضِ صَلَاةِ الْجُمُعَةِ لِلَّهِ تَعَالَى مُقْتَدِيًا بِهَذَا الْإِمَامِ",
                transcription: "Навайту ан усаллийя рак'атай фарди салатил-джуму'ати лилляхи та'аля муктадиян бихазал-имам.",
                translation: "Я намереваюсь совершить два ракаата фард-намаза джума ради Всевышнего Аллаха, следуя за этим имамом.",
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["намерение", "джума", "имам", "готово"]
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, false, true, false, true), // 1 ракаат: вслух имам
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, false, true, false, true), // 2 ракаат: вслух имам
            createStep('takbir_tashahhud', 2),
            createStep('tashahhud', 2),
            createStep('salavat', 2),
            createStep('rabbana', 2),
            createStep('salam_r', 2),
            createStep('salam_l', 2)
        ]
    },
    janaza: {
        name: "Джаназа",
        actionImage: "https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+Джаназа",
        steps: [
            createStep('niyat', 1, {
                title: "Намерение (Ният)",
                arabic: "نَوَيْتُ أَنْ أُصَلِّيَ صَلَاةَ الْجَنَازَةِ لِلَّهِ تَعَالَى دُعَاءً لِهَذَا الْمَيِّتِ",
                transcription: "Навайту ан усаллийя салатал-джаназати лилляхи та'аля ду'аан лихазал-маййит.",
                translation: "Я намереваюсь совершить джаназа-намаз ради Всевышнего Аллаха в качестве мольбы за этого покойного.",
                action: "Встаньте ровно. Весь намаз совершается только стоя. Поклонов (руку и суджуд) нет.",
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["намерение", "джаназа", "маййит", "готово"]
            }),
            createStep('takbir', 1, {
                title: "1-й Такбир (Вступительный)",
                action: "Поднимите руки до уровня ушей и сложите их на животе."
            }),
            createStep('sana', 1, {
                arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَجَلَّ ثَنَاؤُكَ، وَلَا إِلَهَ غَيْرُكَ",
                transcription: "Субханакал-лахумма ва бихамдика, ва табаракас-мука, ва та'аля джаддука, ва джалля санаа-ука, ва ля иляха гайрук.",
                translation: "Пречист Ты, о Аллах, и хвала Тебе. Благословенно имя Твое, превыше всего величие Твое, и велика хвала Тебе, и нет божества, кроме Тебя.",
                action: "Стойте ровно, сложив руки. В Сана для джаназа добавляется «ва джалля санаа-ука».",
                voiceTrigger: ["санаука", "гайрук", "субханака"]
            }),
            createStep('takbir', 1, {
                title: "2-й Такбир",
                action: "Произнесите такбир, не поднимая рук. Оставайтесь стоять.",
                voiceMode: "Вслед за имамом (про себя) 🤫",
                voiceTrigger: ["аллаху акбар", "акбар"]
            }),
            createStep('salavat', 1, {
                action: "Стойте ровно и читайте салават.",
                voiceMode: "Читается про себя 🤫"
            }),
            createStep('takbir', 1, {
                title: "3-й Такбир",
                action: "Произнесите такбир, не поднимая рук. Оставайтесь стоять.",
                voiceMode: "Вслед за имамом (про себя) 🤫",
                voiceTrigger: ["аллаху акбар", "акбар"]
            }),
            createStep('rabbana', 1, {
                title: "Дуа за усопшего",
                arabic: "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا",
                transcription: "Аллахумма-гфир ли-хаййина ва маййитина, ва шахидина ва гаибина, ва сагырина ва кабирина, ва закарина ва унсана.",
                translation: "О Аллах! Прости наших живых и мертвых, присутствующих и отсутствующих, малых и старых, мужчин и женщин.",
                action: "Читается дуа за усопшего. Если не знаете его, можно прочитать Раббана.",
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["унсана", "кабирина", "маййитина", "прости"]
            }),
            createStep('takbir', 1, {
                title: "4-й Такбир",
                action: "Произнесите такбир, не поднимая рук. Оставайтесь стоять.",
                voiceMode: "Вслед за имамом (про себя) 🤫",
                voiceTrigger: ["аллаху акбар", "акбар"]
            }),
            createStep('salam_r', 1, {
                action: "Поверните голову направо, опустив правую руку.",
                voiceMode: "Читается про себя 🤫"
            }),
            createStep('salam_l', 1, {
                action: "Поверните голову налево, опустив левую руку. Намаз завершен.",
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["рахматуллах", "алейкум", "завершить"]
            })
        ]
    }
};

// Функция для генерации Нафиль намаза
function buildNafil(nameKey, nameRu) {
    return {
        name: nameRu,
        actionImage: `https://placehold.co/600x800/1E1B4B/D4A017/png?text=Схема+Движений+${nameRu.replace(/\s+/g, '+')}`,
        steps: [
            createStep('niyat', 1, {
                arabic: `نَوَيْتُ أَنْ أُصَلِّيَ رَكْعَتَيْ نَفْلِ صَلَاةِ ${nameRu === 'Ад-Духа' ? 'الضُّحَى' : (nameRu === 'Ат-Тахаджуд' ? 'التَّهَجُّدِ' : 'النَّفْلِ')} لِلَّهِ تَعَالَى`,
                transcription: `Навайту ан усаллийя рак'атай нафли салати ${nameRu === 'Ад-Духа' ? 'ад-духа' : (nameRu === 'Ат-Тахаджуд' ? 'ат-тахаджуд' : 'нафиль')} лилляхи та'аля.`,
                translation: `Я намереваюсь совершить два ракаата нафиль-намаза ${nameRu} ради Всевышнего Аллаха.`,
                voiceMode: "Читается про себя 🤫",
                voiceTrigger: ["намерение", "нафиль", "готово"]
            }),
            createStep('takbir', 1),
            createStep('sana', 1),
            createStep('taawwuz', 1),
            ...buildRakah(1, true, true, true), // 1: про себя
            createStep('takbir_up_stand', 1),
            ...buildRakah(2, true, true, true), // 2: про себя
            createStep('takbir_tashahhud', 2),
            createStep('tashahhud', 2),
            createStep('salavat', 2),
            createStep('rabbana', 2),
            createStep('salam_r', 2),
            createStep('salam_l', 2)
        ]
    };
}

// Добавляем Нафиль намазы
prayerDatabase.duha = buildNafil('duha', 'Ад-Духа');
prayerDatabase.tahajjud = buildNafil('tahajjud', 'Ат-Тахаджуд');
prayerDatabase.awwabin = buildNafil('awwabin', 'Аввабин');
prayerDatabase.wudu = buildNafil('wudu', 'Намаз Омовения');
prayerDatabase.tahiyat = buildNafil('tahiyat', 'Тахиятуль Масджид');
prayerDatabase.eid = buildNafil('eid', 'Праздничный намаз (Основа)'); // Ид намаз имеет свои особенности, но для простоты добавлена базовая 2-ракаатная логика.
