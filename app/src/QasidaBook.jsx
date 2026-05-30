import { useState, useEffect } from "react";

const qasidas = [
  {
    id: 1,
    title: "Asalatu ala Nabi",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
                transliteration: "ʿAqluhu lammā duʿiya fī maḥabbatihi sī\nYā Rasūlallāhi yā khayra kullil-anbiyā\nNajjinā min hāwin yahu yā zakiyyil-manṣab\nWa ʿalā ʿilmil-hudā Aḥmadu mufnil-ʿadā\nJud bitaslīmin biddil-nabiyyil-yathribī\nWa ʿalayhi fasallim yā ṣaghṣuna fil-ḥimā\nAw badā badru rāsilal-samāʾi fī lahīmil-ghaybi",
        original: "عقله لما دعي في محبته سي\nيا رسول الله يا خير كل الأنبيا\nنجنا من هاو يه يا زكي المنصب\nوعلى علم الهدى أحمد مفني العدى\nجد بتسليم بد النبي اليثربي\nوعليه فسلم ياسغصن في الحما\nأو بدا بد راسل السما في لهيم الغيبيمي",
        translation: "His intellect forbade him from calling in the love for the sinful\nO Messenger of Allah, O Best of all Prophets\nSave us from those astray, O you of pure station\nAnd upon the knowledge of guidance, Ahmad repels the enemy\nBestow salutations upon the Medinan Prophet\nAnd upon him send peace — O branch in the sanctuary\nOr as the full moon appeared among the messengers of heaven in the hidden realm",
      },
      {
        transliteration: "Allāhumma ṣalli wa sallim wa bārik ʿalayh",
        original: "اللهم صل وسلم وبارك عليه",
        translation: "O Allah, send peace and blessings upon him",
      },
    ],
  },
  {
    id: 2,
    title: "Ya Rabi Sali ala Muhammad",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا رب صل على محمد\nيا رب صل عليه وسلم",
        transliteration: "Yā Rabbi ṣalli ʿalā Muḥammadin\nYā Rabbi ṣalli ʿalayhi wa sallim",
        translation: "O Allah send salutations upon Muhammad\nO Allah send salutations and peace upon him",
      },
      {
        original: "أشرف بصدر في الكون أشرق\nأكرم داع يدعو إلى الحق\nالمصطفى الصادق المصدق\nأحلى الورى منطقاً وأصدق\nأفضل من بالتقى تحقق\nمن بالسخا و الوفا تخلق\nو اجمع من الشمس ما تفرق\nو اصلح وسهل ما قد تعوق\nو افتح من الخير كل مغلق\nو آله و من بالنبي تعلق\nو آله ومن للحبيب يعشق\nو من بحبل النبي توثق",
        transliteration: "Ashrafu badrin fil-kawni ashraq\nAkrama dāʿin yadʿū ilal-ḥaqq\nAl-Muṣṭafā aṣ-ṣādiqil-muṣaddaqa\nAḥlā l-warā manṭiqan wa aṣdaqa\nAfḍali man bit-tuqā taḥaqqaqa\nMan bis-sakhā wal-wafā takhallaqa\nWajmaʿ minas-shamsi mā tafarraqa\nWa aṣliḥ wa sahhil mā qad taʿawwaqa\nWaftaḥ minal-khayri kulla mughlaq\nWa ālihi wa man bin-nabiyyi taʿallaqa\nWa ālihi wa man lil-ḥabībi yaʿshaqa\nWa man biḥablil-nabiyyi tawathaq",
        translation: "The splendid full moon of creation\nThe noblest caller to the Truth\nThe chosen one, the truthful, trusted one\nThe most truthful and eloquent in speech\nThe most gracious, the most god fearing\nThe generous and loyal one\nThe One who joins disunited hearts\nEase our difficulties and obstacles\nOpen all doors of goodness\nAnd his family and those connected to him\nUpon his family and those who adore him\nAnd those who cling to his rope",
      },
    ],
  },
  {
    id: 3,
    title: "Qamarun",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "قمر قمر قمر سيدنا النبي قمر\nوجميل وجميل وجميل سيدنا النبي وجميل",
        transliteration: "Qamarun, Qamarun, Qamarun Sayyidanan-Nabī, Qamarun\nWa Jamīlun, Wa Jamīlun, Wa Jamīlun Sayyidanan-Nabī, Wa Jamīlun",
        translation: "Brilliant like the moon — Oh our master the Prophet, Brilliant like the moon!\nBeautiful — Oh our master the Prophet, Beautiful!",
      },
      {
        original: "وكف المصطفى كالورد نادي\nوعطره يبقى إذا مست أيادي",
        transliteration: "Wa kafful-Muṣṭafā kal-wardi nādī\nWa ʿiṭruhā yabqā idhā massat ayādī",
        translation: "And your palm like a flower mist by the dew\nIts fragrance everlasting where it touches!",
      },
      {
        original: "وعم نواله كل العبادي\nحبيب الله يا خير البرايا",
        transliteration: "Wa ʿamma nawāluhā kullal-ʿibādī\nḤabībullāhi yā khayral-barāyā",
        translation: "Its generosity ever extended to all humanity!\nSo beloved to Allah oh you the best of creation!",
      },
      {
        original: "ولا ظل له بل كان نورا\nتنال الشمس منه والبدور",
        transliteration: "Wa lā ẓilla lahū bal kāna nūrā\nTanālash-shamsa minhu wal-budūrā",
        translation: "Shade-less but brilliant you ever are\nThe sun and stars feed off your light!",
      },
      {
        original: "ولم يكن الهدى لولا ظهوره\nوكل الكون أنار بنوري طه",
        transliteration: "Wa lam yakunil-hudā lawlā ẓuhūruh\nWa kullul-kawni anāra binūri Ṭāhā",
        translation: "Guidance would have not been possible without you\nYou have summoned the Cosmos willingly!",
      },
    ],
  },
  {
    id: 4,
    title: "Allah huma Sali ala Muhammad",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        transliteration: "Allāhumma ṣalli ʿalā Muḥammad\nYā Rabbi ṣalli ʿalayhi wa sallim",
        original: "اللهم صل على محمد\nيا رب صل عليه وسلم",
        translation: "O Allah send blessings upon Muhammad\nO Lord, send peace upon him",
      },
      {
                transliteration: "Fī ḥubbi Sayyidinā Muḥammadin nūrul-badril-hudā tatimm\nQalbī yaḥinnu ilal-Muḥammadi mā zāla min wajdin mutayyam\nMā lī ḥabībun siwā Muḥammadin khayrul-rasūlin-nabiyyil-karam\nShawqul-muḥibbi ilal-Muḥammadi afnāhu thumma bihi lahīm\nFil-ḥashri shāfiʿunā Muḥammadun manḥiyal-khalāʾiqi min bahannam\nMīlādu Sayyidinā Muḥammadin ummul-qurā baladun muqaddas\nAḥyā Allāhu jāzamanā Muḥammadun mawlāhu sallahu wa kallam\nAdʿūka Aḥadu yā Muḥammadu yā sayyidar-rusulil-muqadd\nIshfaʿ ilallāhi yā Muḥammadu yawmal-qiyāmati kay anʿam",
        original: "في حب سيدنا محمد نور البدر الهدى تتم\nقلبي يحن إلى المحمد ما زال من وجد متيم\nما لي حبيب سوى محمد خير الرسول النبي الكرم\nشوق المحب إلى المحمد أفناه ثم به لهيم\nفي الحشر شافعنا محمد منحي الخلائق من بهنم\nميلاد سيدنا محمد أم القرى بلد مقدس\nأحيا الله جازمنا محمد مولاه سله وكلم\nأدعوك أحد يا محمد يا سيد الرسل المقد\nإشفع إلى الله يا محمد يوم القيامة كي أنعم",
        translation: "In the love of our master Muhammad, the light of the moon of guidance reaches its fullness\nMy heart longs for Muhammad, it has always been enamoured and enchanted\nI have no beloved except Muhammad, the best Messenger, the noble Prophet\nThe longing of the lover for Muhammad has consumed him and he is immersed in him\nMuhammad is our intercessor at the gathering, the one who grants those in hellfire a way out\nThe birth of our master Muhammad — Umm al-Qura, a sacred city\nAllah has given life through our age of Muhammad — his master speaks to him\nI call upon you, the One, O Muhammad, O master of the noble messengers\nIntercede with Allah, O Muhammad, on the Day of Judgement so I may be blessed",
      },
      {
                transliteration: "Arjū sh-shafāʿata min Muḥammadin law kuntu artakibul-ḥaram\nMunjan wa maljāʾunā Muḥammadun yawmal-hawāni bihi taḥshum\nWan-nūru jāʾa Rabbuhu Muḥammadun wal-ḥaqqu bayyinun wa in takum\nAʿlā s-samāʾi samā Muḥammadun Jibrīlu qāla lahu taqaddam\nWal-jundu ḥīna ghazā Muḥammadun wad-dīna aẓharahu fahaddama\nWaṣṣallā Allāhu ʿalā Muḥammadin wa ʿalā ṣaḥbihi wa sallam",
        original: "أرجوا الشفاعة من محمد لوكنت أرتكب الحرم\nمنجا وملجاء نا محمد يوم الهوان به تحشم\nوالنور جاء ربه محمد والحق بين وإن تكم\nأعلى السماء سما محمد جبريل قال له تقدم\nوالجند حين غزا محمد والدين أظهره فهدم\nوالذين آمنوا إلا فاه محمد صلى الإله على محمد وسلم\nوصلى الله على محمد وعلى صحبه وسلم",
        translation: "I hope for intercession from Muhammad even if I have committed the forbidden\nMuhammad is our refuge and shelter on the day of humiliation by which we are shielded\nAnd the light came — its Lord Muhammad — and the truth was clear even if they denied\nIn the highest heaven, Muhammad ascended — Jibril said to him: Go forward\nAnd when the army came with Muhammad, the religion he revealed demolished falsehood\nAnd those who believed — Muhammad prayed — may Allah's blessings and peace be upon Muhammad\nAnd may Allah's peace and blessings be upon Muhammad and upon his companions",
      },
    ],
  },
  {
    id: 5,
    title: "Qasida Burdah Sharif",
    language: "Arabic",
    poet: "Imam Busiri",
    verses: [
      {
        original: "الحمد لله منشئ الخلق من عدم\nثم الصلاة على المختار في القدم\nمولاي صل وسلم دائما أبدا\nعلى حبيبك خير الخلق كلهم",
        transliteration: "Al-ḥamdu lillāhi munshi-il-khalqi min ʿadam\nThummaṣ-ṣalātu ʿalal-mukhtāri fil-qidam\nMawlāya ṣalli wa sallim dāʾiman abadā\nʿAlā ḥabībika khayril-khalqi kullihim",
        translation: "All praise is to Allah, Creator of all from nothingness\nThen blessings upon the Chosen One from eternity\nO my Master, bestow blessings and peace, forever and always\nUpon Your Beloved, the best of all creation",
      },
      {
        original: "محمد سيد الكونين والثقلين\nنبينا الآمر الناهي فلا أحد\nهو الحبيب الذي ترجى شفاعته\nلكل هول من الأهوال مقتحم\nدعا إلى الله فالمستمسكون به\nمستمسكون بحبل غير منفصم\nوكلهم من رسول الله ملتمس\nغرفاً من البحر أو رشفاً من الديم\nفمبلغ العلم فيه أنه بشر\nوأنه خير خلق الله كلهم",
        transliteration: "Muḥammadun sayyidal-kawnayn wath-thaqalayn\nNabiyyunā l-āmiru n-nāhī falā aḥad\nHuwal-ḥabībul-ladhī turjā shafāʿatuh\nLikulli hawlin minal-ahwāli muqtaḥam\nDaʿā ilallāhi fal-mustamsikūna bih\nMustamsikūna biḥablin ghayri munfaṣim\nWa kulluhum min Rasūlillāhi multamisum\nGharfan minal-baḥri aw rashfan minad-diyam\nFamablaghal-ʿilmi fīhi annahū bashar\nWa annahū khayru khalqillāhi kullihim",
        translation: "Muhammad is the master of both worlds and both creations\nOur Prophet, the commander and forbidder — there is none like him\nHe is the Beloved whose intercession is hoped for\nIn every terrifying situation\nHe called to Allah, and those who cling to him\nAre clinging to a rope that cannot be broken\nAll of them come seeking from the Messenger of Allah\nA handful from the ocean or a sip from continuous rains\nThe limit of knowledge concerning him is that he is human\nAnd that he is the best of all Allah's creation",
      },
      {
        original: "يا رب بالمصطفى بلغ مقاصدنا\nواغفر لنا ما مضى يا واسع الكرم\nيا أكرم الخلق ما لي من ألوذ به\nسواك عند حلول الحادث العمم\nولن يضيق رسول الله جاهك بي\nإذا الكريم تجلى باسم منتقم\nفإن من جودك الدنيا وضرتها\nومن علومك علم اللوح والقلم",
        transliteration: "Yā Rabbi bil-Muṣṭafā balligh maqāṣidanā\nWaghfir lanā mā maḍā yā wāsiʿal-karami\nYā akramal-khalqi mā lī man alūdhu bih\nSiwāka ʿinda ḥulūlil-ḥādithill-ʿamami\nWa lan yaḍīqa Rasūlallāhi jāhuka bī\nIdhā l-karīmu tajallā bismi muntaqimi\nFa inna min jūdikad-dunyā wa ḍarratahā\nWa min ʿulūmika ʿilmal-lawḥi wal-qalami",
        translation: "O Lord, by means of the Chosen One let us achieve our goals\nAnd forgive us our past, O Possessor of Vast Generosity\nO most generous of creation, I have no one to take refuge in\nExcept you when widespread calamity occurs\nAnd O Messenger of Allah, your exalted status will not diminish\nWhen the Most Bountiful manifests with the Name of Avenger\nFor verily amongst your bounties is this world and the Next\nAnd of your knowledge is knowledge of the Preserved Tablets and the Pen",
      },
      {
        original: "يا نفس لا تقنطي من زلة عظمت\nإن الكبائر في الغفران كاللمم\nلعل رحمة ربي حين يقسمها\nتأتي على حسب العصيان في القسم\nوالطف بعبدك في الدارين إن له\nصبراً متى تدعه الأهوال ينهزم\nواذن لسحب صلاة منك دائمة\nعلى النبي بمنهل ومنسجم\nوالآل والصحب ثم التابعين لهم\nأهل التقى والنقى والحلم والكرم",
        transliteration: "Yā nafsu lā taqnaṭī min zallatin ʿaẓumat\nInnal-kabāʾira fil-ghufrāni kal-lamami\nLaʿalla raḥmata rabbī ḥīna yaqsimuhā\nTatī ʿalā ḥasabil-ʿiṣyāni fil-qisami\nWal-ṭuf biʿabdika fid-dārayni inna lahu\nṢabran matā tadʿuhul-ahwālu yanhazimi\nWadhan li-suḥbi ṣalātin minka dāyimatin\nʿAlan-nabiyyi bimunh alan wa munsajimi\nWal-āli waṣ-ṣaḥbi thummat-tābiʿīna lahum\nAhlut-tuqā wan-nuqā wal-ḥilmi wal-karami",
        translation: "O my self, do not despair due to your grave sins\nTruly even the greatest sins when pardoned are minor\nPerhaps the mercy of my Lord when distributed\nWould be distributed in proportion to the sins\nBe kind to Your servant in both worlds, for verily\nHis patience runs away when called upon by hardships\nAnd order clouds of blessings from You continously\nUpon the Prophet, abundantly and gently\nAnd upon his family, companions, then those who follow them\nThe people of piety, knowledge, clemency, and generosity",
      },
    ],
  },
  {
    id: 6,
    title: "Ibadallah Rijal Allah",
    language: "Arabic",
    poet: "Traditional (Naqshbandi)",
    verses: [
      {
        original: "عباد الله رجال الله\nأغيثونا بأهل الله\nوكونوا عوننا في الله\nعسى نحظى بفضل الله",
        transliteration: "ʿIbādallāhi rijālallāhi\nAghīthhunā bi-ahlillāhi\nWa kūnū ʿawnanā fillāhi\nʿAsā naḥẓā bifaḍlillāhi",
        translation: "O Allah's servants, O men of Allah\nBring us relief, by the People of Allah\nAnd help us for the sake of Allah\nSo we may get the favours of Allah",
      },
      {
        original: "ويا أقطاب ويا أنجاب\nويا سادات ويا أحباب\nوأنتم يا أولي الألباب\nتعالوا وانصروا لله",
        transliteration: "Wa yā aqṭābu wa yā anjāb\nWa yā sādātu wa yā aḥbāb\nWa antum yā ulīl-albāb\nTaʿālaw wanṣurū lillāhi",
        translation: "O leaders, O generous men\nO Masters, O loved ones\nO leaders, O Heavenly gate keepers\nCome and give us Victory",
      },
      {
        original: "سألناكم سألناكم\nولللزلفى رجوناكم\nوفي أمر قصدناكم\nفشدوا أمركم لله\nفيا ربي بسادتي\nتحققت لي إشارتي\nعسى تأتي بشارتي\nويصفو أمرنا لله",
        transliteration: "Saʾalnākum saʾalnākum\nWa lillzulfā rajawnākum\nWa fī amrin qaṣadnākum\nFashuddū amrakum lillāhi\nFayā rabbī bisādatī\nTaḥaqqaqat lī ishāratī\nʿAsā tatī bishāratī\nWa yaṣfu amrunā lillāhi",
        translation: "We ask you, we entreat you\nWe set our hearts on your companionship\nAnd for important matters we call on you\nSo restrain yourself to answer the command of Allah\nO Lord, by these Masters\nYour signs have been confirmed\nHoping to witness glad tidings\nAnd that our faith be pure and firm",
      },
      {
        original: "بكشف الحجب عن عيني\nورفع البين من بيني\nوصرف القلب والعين\nبنور الوجه يا الله\nصلاة الله مولانا\nعلى من بالهدى جانا\nومن بالحق أولانا\nشفيع الخلق عند الله\nاللهم صل وسلم وبارك عليه وعلى آله",
        transliteration: "Bi-kashfil-ḥujbi ʿan ʿaynī\nWa rafʿil-bayni min baynī\nWa ṣarfil-qalbi wal-ʿaynī\nBi-nūril-wajhi yā Allāhu\nṢalātullāhi mawlānā\nʿAlā man bil-hudā jānā\nWa man bil-ḥaqqi awlānā\nShafīʿal-khalqi ʿindallāhi\nAllāhumma ṣalli wa sallim wa bārik ʿalayhi wa ʿalā ālih",
        translation: "Lift the veils covering my sight\nAnd remove anything that is blocking me from You\nGrant me the abode of your presence, the desire of my heart and eyes\nBy the light of the holy Face of the Prophet, O Allah\nMay the blessings of our Lord Allah\nBe upon him who guided us to the right path\nHe who entrusted us with His true religion\nThe Intercessor for all human beings, in front of Allah\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 7,
    title: "Madad",
    language: "Arabic",
    poet: "Traditional (Naqshbandi)",
    verses: [
      {
        original: "مدد، مدد، مدد\nيا سيدي مدد\nمدد يا رسول الله",
        transliteration: "Madad, Madad, Madad\nYā Sayyidī Madad\nMadad, Yā Rasūlallāh",
        translation: "Aid, Aid, Aid\nO my Master, Aid\nAid, O Messenger of Allah",
      },
      {
                transliteration: "Madad yā Ṣiddīqūn\nMadad yā Fārsī\nMadad yā Qāsimū\nMadad yā Ṣādiqū\nMadad yā Bisṭāmī\nMadad yā Kharqānī\nMadad yā Fārmadī\nMadad yā Hamadānī\nMadad yā Shāhan-Naqshband\nMadad yā Shaykh Nāẓim\nMadad yā Ḥaqqānī\nMadad yā Ṣāḥibul-Waqt",
        original: "مدد يا صديقون\nمدد يا فارسي\nمدد يا قاسمو\nمدد يا صادقو\nمدد يا بسطامي\nمدد يا خرقاني\nمدد يا فارمادي\nمدد يا همداني\nمدد يا شاه النقشبند\nمدد يا شيخ ناظم\nمدد يا حقاني\nمدد يا صاحب الوقت",
        translation: "Aid O the Truthful ones\nAid O Farsi\nAid O Qasimi\nAid O the Truthful\nAid O Bistami\nAid O Kharqani\nAid O Farmadi\nAid O Hamadani\nAid O Shah Naqshband\nAid O Shaykh Nazim\nAid O Haqqani\nAid O Master of the Time",
      },
    ],
  },
  {
    id: 8,
    title: "The Opening Qasida",
    language: "Arabic",
    poet: "Traditional (Naqshbandi)",
    verses: [
      {
        original: "يا ربي صل على محمد\nيا ربي صل عليه وسلم",
        transliteration: "Yā Rabbī ṣalli ʿalā Muḥammad\nYā Rabbī ṣalli ʿalayhi wa sallim",
        translation: "O Lord, bestow blessings upon Muhammad\nO Lord, bestow peace and blessings upon him",
      },
      {
        original: "يا ربي بلغه الوسيلة\nيا ربي خصه بالفضيلة\nيا ربي وارض عن الصحابة\nيا ربي وارض عن السلالة",
        transliteration: "Yā Rabbi ballighil-wasīlah\nYā Rabbi khuṣṣahu bil-faḍīlah\nYā Rabbi warada ʿaniṣ-ṣaḥābah\nYā Rabbi warada ʿaniṣ-ṣulālah",
        translation: "O Lord, bestow upon him a station in Paradise\nO Lord, grant him rank above all the creations\nO Lord, may You be pleased with his companions\nO Lord, may You be pleased with his descendants",
      },
      {
        original: "يا ربي وارض عن المشايخ\nيا ربي فارحم والدينا\nيا ربي وارحمنا جميعاً\nيا ربي وارحم كل مسلم",
        transliteration: "Yā Rabbi wardaʿ anil-mashāyikh\nYā Rabbi farḥam wālidīnā\nYā Rabbi warḥamnā jamīʿan\nYā Rabbi warḥam kulla Muslim",
        translation: "O Lord, be pleased with the masters\nO Lord, have mercy on our parents\nO Lord, have mercy on all of us\nO Lord, have mercy on all Muslims",
      },
      {
        original: "يا ربي واغفر لكل مذنب\nيا ربي يا سامع دعانا\nيا ربي لا تقطع رجانا\nيا ربي بلغنا نزوره",
        transliteration: "Yā Rabbi waghfir likulli mudhnib\nYā Rabbi yā sāmiʿ duʿānā\nYā Rabbi lā taqṭaʿ rajānā\nYā Rabbi ballighnā nazūruh",
        translation: "O Lord, forgive all sinners\nO Lord, O Hearer of our plea\nO Lord, do not shatter our hopes\nO Lord, grant us a visit to his resting place",
      },
      {
                transliteration: "Yā Rabbī taghshānā binūrih\nYā Rabbī ḥifẓānak wa amānak\nYā Rabbī wa askinā jinānaka\nYā Rabbī ajrinā min ʿadhābika\nYā Rabbī wa arzuqnash-shahādah\nYā Rabbī ḥuṭnā bis-saʿādah\nYā Rabbī wa aṣliḥ kulla muṣliḥ\nYā Rabbī wakfi kulla muʾdhin\nAllāhumma ṣalli wa sallim wa bārik ʿalayhi wa ʿalā ālih",
        original: "يا ربي تغشانا بنوره\nيا ربي حفظانك وأمانك\nيا ربي وأسكننا جنانك\nيا ربي أجرنا من عذابك\nيا ربي وارزقنا الشهادة\nيا ربي حطنا بالسعادة\nيا ربي وأصلح كل مصلح\nيا ربي واكف كل مؤذي\nاللهم صل وسلم وبارك عليه وعلى آله",
        translation: "O Lord, engulf us with his light\nO Lord, safeguard us and protect us\nO Lord, place us in Your heaven\nO Lord, protect us from Your punishment\nO Lord, bless us with the station of the martyrs\nO Lord, envelope us with happiness\nO Lord, reform those who wish to change themselves\nO Lord, save us from all harm\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 9,
    title: "Ya Rasulallah Salamun Alayk",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا رسول الله سلام عليك\nيا رفيع الشأن والدرج\nيا عطفة يا جيرة العالم\nيا أهيل الجود والكرم",
        transliteration: "Yā Rasūlallāhi salāmun ʿalayk\nYā rafīʿash-shāni wad-daraji\nʿAṭfatan yā jīratal-ʿālami\nYā uhaylal-jūdi wal-karami",
        translation: "O Messenger of Allah, peace be upon you!\nO Possessor of the highest station and rank\nHave sympathy for us, O distinguished neighbour\nO the one who is giving and generous",
      },
      {
                transliteration: "Naḥnu min qawmin bihi sakanū\nWa bihi min khawfihim aminū\nWa bi-āyātil-qurāʾāni ʿanū\nFattayid fīnā akhal-wahani",
        original: "نحن من قوم به سكنوا\nوبه من خوفهم أمنوا\nوبآيات القرآن عنوا\nفتيد فينا أخا الوهن",
        translation: "We are from amongst the people who through him reached tranquility\nAnd through him we no longer fear\nAnd who busied themselves with the verses of the holy Quran",
      },
      {
                transliteration: "Naʿriful-baṭḥā wa taʿrifunā\nWaṣ-ṣafā wal-baytu yaʾlafunā\nWa lanal-maʿlā wa khīfu munā\nFāʿlaman hādhā wa kun rakīn",
        original: "نعرف البطحا وتعرفنا\nوالصفا والبيت يألفنا\nولنا المعلى وخيف منى\nفاعلمن هذا وكن ركين",
        translation: "We know the desert and it knows us\nAnd Safa and the Ka'bah are familiar with us\nAl Ma'la and Khifu Munaa are for us\nKnow that and be steadfast",
      },
      {
                transliteration: "Wa lanā khayrul-anāmi abū\nWa ʿAliyyul-Murtaḍā ḥasabū\nWa ilas-sibṭayni nantasibū\nNasaban mā fīhi min dakhan",
        original: "ولنا خير الأنام أبو\nوعلى المرتضى حسبو\nوإلى السبطين ننتسبو\nنسباً ما فيه من دخن",
        translation: "The best of creation is our father Muhammad\nAnd Ali the Blessed one is from us\nAnd we are related to the two lions Hassan and Hussain\nThere is no doubt about our lineage",
      },
    ],
  },
  {
    id: 10,
    title: "Ayyuhal Mushtaq",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "أيها المشتاق لا تنم\nهذه أنوار ذي سلم\nعن قريب أنت في الحرم\nعند خير العرب والعجم",
        transliteration: "Ayyuhal-mushtāqu lā tanām\nHādhihi anwāru dhī Salām\nʿAn qarībin anta fil-ḥaram\nʿInda khayril-ʿurbi wal-ʿajam",
        translation: "O you who is in love and longs, do not sleep\nAhead are the illuminated lights of Dhi Salam Valley\nYou are so close to the sacred sanctuary\nIn the presence of the One who is the best of the Arabs and non-Arabs",
      },
      {
                transliteration: "Qif amāmal-qabri fī adabi\nMā thilā fī ashrafir-rutab\nFī makānil-qurbi wal-qurabi\nWar-riḍā wal-jūdi wal-karam",
        original: "قف أمام القبر في أدب\nما ثلا في أشرف الرتب\nفي مكان القرب والقرب\nوالرضا والجود والكرم",
        translation: "Stand in reverence in front of his holy grave\nYou are in the presence of the one with the most honourable ranks\nIn his place is the privilege of nearness to Him\nAnd accompanies pious acts, contentment and generosity",
      },
      {
                transliteration: "Thumma qul yā ashrafar-rusli\nYā Ḥabībullāhi fil-amali\nYā ʿaẓīmul-ʿilmi wal-ʿamali\nYā samīrul-lawḥi wal-qalam",
        original: "ثم قل يا أشرف الرسل\nيا حبيب الله في الأمل\nيا عظيم العلم والعمل\nيا سمير اللوح والقلم",
        translation: "Then say: O honoured Messenger\nO Beloved of Allah who inspires hope\nO Magnificent in Knowledge and Action\nO the one who speaks from the Tablet and the holy Pen",
      },
      {
                transliteration: "Laysa kal-mukhtāri fil-bashari\nFahuwa milʾus-samʿi wal-baṣari\nWāḥidut-tārīkhi was-siyari\nWa imāmar-rusli wal-umam",
        original: "ليس كالمختار في البشر\nفهو ملء السمع والبصر\nواحد التاريخ والسير\nوإمام الرسل والأمم\nليلة الإسراء يرعاه\nوعلى المعراج مرقاه\nحتى أدناه وناجاه\nبكلام ليس كالكلم",
        translation: "No one from humanity can be compared to the Chosen One\nHe exists in our hearing and sight\nHe is the unique one in history and in his life conduct\nThe leader of all Messengers and nations\nThe Night of Journey safeguards him\nAnd on his Ascension is his high rank\nWhen Allah brought him nearer to Divine Presence and they conversed\nWith words unlike any other words",
      },
    ],
  },
  {
    id: 11,
    title: "Salawat al Badriyah",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "صلاة الله سلامه الله\nعلى طه رسول الله\nصلاة الله سلامه الله\nعلى ياسن حبيب الله",
        transliteration: "Ṣalātullāhi salāmullāhi ʿalā Ṭāhā Rasūlillāhi\nṢalātullāhi salāmullāhi ʿalā Yāsīna Ḥabībillāhi",
        translation: "Allah's praise, Allah's blessing Upon Taha, Messenger of Allah\nAllah's praise, Allah's blessing Upon Yasin, Beloved of Allah",
      },
      {
        original: "توسلنا ببسم الله\nوبالهادي رسول الله\nوكل مجاهدين لله\nبأهل البدر يا الله",
        transliteration: "Tawassalnā bi-bismillāh\nWa bil-Hādī Rasūlillāh\nWa kulli mujāhidīna lillāh\nBi-ahlil-badri yā Allāh",
        translation: "We sought by means of Bismillah\nAnd by the Guide, Messenger of Allah\nAnd everyone who strives in Allah's Way\nBy means of the family of the full moon, O Allah",
      },
      {
        original: "إلهي سلم الأمة\nمن الآفات والنقمة\nومن هم ومن غمه\nبأهل البدر يا الله\nإلهي نجنا واكشف\nجميع أذية واصرف\nمكائد العداء واللطف\nبأهل البدر يا الله\nإلهي نفس الكربة\nمن العاصين والعطبة\nوكل بلية ووبا\nبأهل البدر يا الله",
        translation: "My God grant safety to the Nation, from diseases and retribution\nAnd from worries and from sadness\nBy means of the family of the full moon, O Allah\nMy God save us and lift all harm from us\nAnd ward our enemies' schemes from us\nBy means of the family of the full moon, O Allah\nMy God relieve the distress from the disobedient and corrupt\nFrom every trial and epidemic\nBy means of the family of the full moon, O Allah",
      },
    ],
  },
  {
    id: 12,
    title: "An Nabi Salu Alayh",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "النبي صلوا عليه\nصلوات الله عليه\nكل من صلى عليه\nويناله البركة",
        transliteration: "An-Nabiyyu ṣallū ʿalayh\nṢalawātullāhi ʿalayh\nWa yanālul-barakah\nKullu man ṣallā ʿalayh",
        translation: "The Prophet, praise Him!\nAllah bestowed blessings upon Him\nAnd everyone who praises Him\nWill be granted blessings",
      },
      {
                transliteration: "An-Nabiyyu yā man ḥaḍar\nAn-Nabiyyu khayrul-bashar\nMan lahu shaqqal-qamar\nWal-ghazālu sallama ʿalayh",
        original: "النبي يا من حضر\nالنبي خير البشر × ٢\nمن له شق القمر\nوالغزال سلم عليه",
        translation: "He is the Prophet, O attendees\nThe Prophet is the best of creation\nWho split the moon\nAnd the gazelle greeted Him",
      },
      {
                transliteration: "An-Nabiyyu dhākal-ʿarūs\nDhikruhu yuḥyin-nufūs\nAn-naṣārā wal-majūs\nAslamū ʿalā yadayh",
        original: "النبي ذاك العروس\nذكره يحي النفوس × ٢\nالنصارى والمجوس\nأسلموا على يديه",
        translation: "The Prophet is the most beloved\nHis remembrance revives the souls\nThe Christians and Magi\nAccepted Islam by his hands",
      },
      {
                transliteration: "An-Nabiyyu dhākal-malīḥ\nQawluhu qawlun faṣīḥ\nWal-qurʾānu shayʾun ṣaḥīḥ\nAlladhī unzila ʿalayh\nAn-Nabiyyu yā ḥāḍirīn\nAʿlamū ʿilmal-yaqīn\nAna rabbal-ʿālamīn\nAfraḍaṣ-ṣalāta ʿalayh",
        original: "النبي ذاك المليح\nقوله قول فصيح × ٢\nوالقرآن شيء صحيح\nالذي أنزل عليه\nالنبي يا حاضرين\nأعلموا علم اليقين × ٢\nأنا رب العالمين\nأفرض الصلاة عليه",
        translation: "The Prophet is the sweet One\nHis words are eloquent\nAnd the Quran is an absolute truth\nThat was revealed to Him\nThe Prophet, O attendees\nYou should know with certainty\nThat the Lord of both worlds\nMade praising him an obligation",
      },
    ],
  },
  {
    id: 13,
    title: "Maa Lana Mawlan Siwallah",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "الله الله الله الله\nما لنا مولاً سوى الله\nكلما ناديت يا هو\nقال يا عبدي أنا الله",
        transliteration: "Allāhu Allāhu Allāhu Allāh\nMā lanā mawlan siwallāh\nKullamā nādayta yā Hū\nQāla yā ʿabdī anā-llāh",
        translation: "O Allah, O God, there is no God but Allah\nWhenever I call out O my Lord: O Hu\nHe says: O my servant, I am Allah",
      },
      {
                transliteration: "Fī Rabīʿin aṭlaʿallāh\nWa atān-naṣru minallāh\nYā lahu shahrun ʿaẓīm\nWa sharīfun karramallāh",
        original: "في ربيع أطلع الله\nوأتى النصر من الله\nيا له شهر عظيم\nوشريف كرم الله",
        translation: "In Rabi' (Awwal) Allah revealed\nAnd He granted us victory\nWhat a great month!\nAllah conferred honour to his noble Servant",
      },
      {
                transliteration: "Fīhi jamʿan qad fariḥnā\nWa binaylil-qaṣdi fuznā\nYā Rasūlallāhi ṭibnā\nWa ʿalaynā anʿamallāh\nẒahara d-dīnul-muʾayyad\nBi-ẓuhūril-hādī Aḥmad\nYā hanānan biMuḥammad\nDhālikal-faḍlu minallāh",
        original: "فيه جمعاً قد فرحنا\nوبنيل القصد فزنا\nيا رسول الله طبنا\nوعلينا أنعم الله\nظهر الدين المؤيد\nبظهور الهادي أحمد\nيا هناً بمحمد\nذلك الفضل من الله",
        translation: "All of us take immense pleasure in this month\nAnd we fulfilled our goals\nO Messenger of Allah, we had the utmost delight\nAllah bestowed His blessing upon us\nThe eternal religion came to light\nWith the arrival of our guide Ahmad\nCongratulations O Muhammad\nThat is Allah's grace",
      },
    ],
  },
  {
    id: 14,
    title: "Salawat Adnani",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "صلى عليك الله يا عدناني\nيا مصطفى يا صفوة الرحمن\nالحمد لله الذي أعطاني\nهذا الغلام الطيب الأردان",
        transliteration: "Ṣallā ʿalayk Allāhu yā ʿAdnānī\nYā Muṣṭafā yā ṣafwatar-Raḥmāni\nAl-ḥamdu lillāhil-ladhī aʿṭānī\nHādhāl-ghulāmat-ṭayyibal-ardāni",
        translation: "May Allah's blessings be upon you O descendant of Adnan\nYou Mustafa, the choice of The Most Merciful\nThanks be to Allah for granting me\nThis pure boy who surpassed all his peers while still in the cradle",
      },
      {
                transliteration: "Qad sāda fil-mahdi ʿalal-ghilmān\nUʿīdhuhu bil-bayti dhil-arkān\nḤattā arāhu bālighal-bunyān\nAntal-ladhī summīta fil-qurʾān",
        original: "قد ساد في المهد على الغلمان\nأعيذه بالبيت ذي الأركان\nحتى أراه بالغ البنيان\nأنت الذي سميت في القرآن",
        translation: "I protect him by the House with the strong corners\nUntil I see him reach manhood\nYou are the one whose name is mentioned in the Quran",
      },
      {
                transliteration: "Aḥmadu maktūbun ʿalal-jinān\nṢallā ʿalayk Allāhu fil-aḥyān\nAḥmadduhu fis-sirri wal-burhān\nḤaqqan ʿalal-islāmi wal-īmān\nYā Rabbanā bil-Muṣṭafāl-ʿAdnānī\nIghfir dhunūbī thumma aṣliḥ shāʾnī",
        original: "أحمد مكتوب على الجنان\nصلى عليك الله في الأحيان\nأحمده في السر والبرهان\nحقاً على الإسلام والإيمان\nيا ربنا بالمصطفى العدناني\nاغفر ذنوبي ثم أصلح شأني",
        translation: "Ahmad, whose name is written all over the walls of paradise\nMay Allah shower His blessings upon you\nAhmad, whom I praise loudly and in private\nTruthful in Islam and Iman\nO Lord, by the Chosen One, the descendant of Adnan\nForgive my sins and reform my character",
      },
    ],
  },
  {
    id: 15,
    title: "Tala al badru alayna",
    language: "Arabic",
    poet: "Traditional (Ansar of Madinah)",
    verses: [
      {
        original: "طلع البدر علينا\nمن ثنيات الوداع\nوجب الشكر علينا\nما دعا لله داع",
        transliteration: "Ṭalaʿal-badru ʿalaynā\nMin thaniyyātil-wadāʿ\nWajabash-shukru ʿalaynā\nMā daʿā lillāhi dāʿ",
        translation: "O the full moon rose above us, from the valley of Wada'a\nGratitude is our obligation\nAs long as any caller calls to Allah",
      },
      {
                transliteration: "Ayyuhal-mabʿūthu fīnā\nJiʾta bil-amril-muṭāʿ\nKun shafīʿan yā ḥabībī\nYawma ḥashrin wajtimāʿ",
        original: "أيها المبعوث فينا\nجئت بالأمر المطاع\nكن شفيعاً يا حبيبي\nيوم حشر واجتماع",
        translation: "O you who were sent among us, you came with the orders to be obeyed\nBe our intercessor O our beloved\nOn the Day of gathering and judgement",
      },
      {
                transliteration: "Rabbanā ṣalli ʿalā man\nḤalla fī khayril-biqāʿ\nAnta ghawthunā jamīʿan\nYā mujammalal-ṭibāʿ\nWa labisn ā thawba ʿizzin\nBaʿda talfīqir-riqāʿ\nAsbilis-sitra ʿalaynā\nYā mujīban kulla dāʿ",
        original: "ربنا صل على من\nحل في خير البقاع\nأنت غوثنا جميعاً\nيا مجمل الطباع\nولبسنا ثوب عز\nبعد تلفيق الرقاع\nأسبل الستر علينا\nيا مجيباً كل داع",
        translation: "O our Lord, send Your blessings upon the one who appeared in the best of all places\nYou are our saviour, O the one who has all the perfected character traits\nWe were adorned with the robe of honour, after patches and tatters\nCover our shortcomings, O Answerer of all requests",
      },
    ],
  },
  {
    id: 16,
    title: "Ya Tayba",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا طيبة، يا طيبة\nيا دوا العيانا\nاستقنا لك\nوالهوى ناداَنا",
        transliteration: "Yā Ṭaybah, Yā Ṭaybah\nYā dawāl-ʿayanā\nIstaqnā lak\nWal-hawā nādānā",
        translation: "O Good one, O Good one\nO the cure of my eyes\nWe are longing for you\nAnd the love keeps calling us to you",
      },
      {
                transliteration: "Yā ʿAliyyu ibna Abī Ṭālib\nMinkum maṣdarul-mawāhib\nHal turā hal urālī ḥājib\nʿIndakum afḍalul-ghilmān",
        original: "يا علي ابن أبي طالب\nمنكم مصدر المواهب\nهل ترا هل أرالي حاجب\nعندكم أفضل الغلمان",
        translation: "O Ali, son of Abu Talib\nYou are the source of Divine gift\nWhat are the eyes seeing? By your side are two great young men",
      },
      {
                transliteration: "Asyadil-Ḥasanu wal-Ḥusayn\nIlan-nabiyyi qurratu ʿaynī\nWa yā shabābal-jannatayni\nJaddukum ṣāḥibul-qurʾān",
        original: "أسيادي الحسن والحسين\nإلى النبي قرة عيني\nويا شباب الجنتين\nجدكم صاحب القرآن",
        translation: "Our Masters, Al Hassan and Al Hussain\nThey are the coolness of the Prophet's eyes\nO the Youth of the Paradises\nYour Grandfather is the owner of the Holy Quran",
      },
    ],
  },
  {
    id: 17,
    title: "Ya Abaz Zahra",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا أبا الزهراء بالذي صناك × ٢\nلا تخيبنا يا سيدي نحن جيرانك\nيا سيدي نحن جيرانك\nالله الله الله الله ربي\nعوني وحسبي ما لي سواه",
        transliteration: "Yā Abbāz-Zahrāʾa billadhī ṣanāk\nLā tukhayybinā yā Sayyidī naḥnu jīrānak\nYā Sayyidī naḥnu jīrānak\nAllāhu Allāhu Allāhu Rabbī\nʿAwnī wa ḥasbī mā lī siwāhu",
        translation: "O Father of Zahra, by the one who protects you\nDon't close your door and don't turn away from us\nLet us draw near to you, O my master\nAllah is my Lord, the One who helps me\nHe is Sufficient for me, I have no one except Him",
      },
      {
                transliteration: "Rūḥun wa rayḥān, mā baynal-khullān\nJannatur-riḍwān, yā Sayyidī fī ḥaḍratinā\nYā Sayyidī fī ḥaḍratinā, Allāhu Allāh",
        original: "روح وريحان ما بين الخلان × ٢\nجنة الرضوان يا سيدي في حضرتنا\nيا سيدي في حضرتنا الله الله",
        translation: "Rest and satisfaction among intimate friends\nThe Garden of Delights is in your presence, O My master",
      },
      {
                transliteration: "Ḥaḍratul-quddūs, maḥyā lin-nufūs\nJannatul-firdaws, yā Sayyidī, taḥtājul-laynā\nYā Sayyidī taḥtājul-laynā, Allāhu Allāh\nMin khamril-ʿirfān, suqyinā qidhān\nMay yadil-wildān, yā Sayyidī mukhalladīnā\nʿIbādur-Raḥmān, fī kulli zamān\nLahamul-amān, yā Sayyidī muṭmaʾinnīnā",
        original: "حضرة القدوس محيا النفوس × ٢\nجنة الفردوس يا سيدي تحتاج الينا\nيا سيدي تحتاج الينا الله الله\nمن خمر العرفان سقينا قذان × ٢\nمن يد الولدان يا سيدي مخلدينا\nعباد الرحمن في كل زمان\nلهم الأمان يا سيدي مطمئنينا",
        translation: "The Holy Presence, the reviver of the souls\nThe Ferdous Heaven is in need of You, O My Master\nThe Gnostics drink the nectar of mystical knowledge\nFrom the hands of the ever-living youth\nThe Servants of the Most Merciful at all time have safety\nO My Master, they have certainty",
      },
    ],
  },
  {
    id: 18,
    title: "Ya Shafi al wara",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا شفيع الورى سلام عليك\nيا نبي الهدى سلام عليك\nخاتم الأنبياء سلام عليك\nسيد الأصفياء سلام عليك",
        transliteration: "Yā shafīʿal-warā salāmun ʿalayk\nYā nabiyyil-hudā salāmun ʿalayk\nKhātimul-anbiyāʾ salāmun ʿalayk\nSayyidul-aṣfiyāʾ salāmun ʿalayk",
        translation: "O Intercessor of mankind, peace be upon you\nO Prophet of guidance, peace be upon you\nThe Seal of the prophets, peace be upon you\nMaster of the purified ones, peace be upon you",
      },
      {
                transliteration: "Aḥmadu layssa mithluka aḥad\nMarḥaban marḥabā salāmun ʿalayk\nWājibun ḥubbuka ʿalal-makhlūq\nYā ḥabībal-ʿulā salāmun ʿalayk",
        original: "أحمد ليس مثلك أحد\nمرحباً مرحبا سلام عليك\nواجب حبك على المخلوق\nيا حبيب العلى سلام عليك",
        translation: "O Ahmad, no one is like you\nGreetings, peace be upon you\nYour love is an obligation on the creation\nO Beloved of the Sublime, peace be upon you",
      },
      {
                transliteration: "Aʿẓamul-khalqi ashraful-ashurafā\nAfḍalul-anbiyāʾ salāmun ʿalayk\nMaʿbatul-waḥyi manzalil-qurʾān\nṢāḥibal-ihtidāʾ salāmun ʿalayk",
        original: "أعظم الخلق أشرف الشرفاء\nأفضل الأنبياء سلام عليك\nمعبط الوحي منزل القرآن\nصاحب الاهتداء سلام عليك\nاشفع لي يا حبيبي يوم الجزاء\nأنت شافعنا سلام عليك\nكشفت منك ظلمة الظلماء\nأنت بدر الدجى سلام عليك",
        translation: "The Greatest of creation, the most Honourable\nThe best of prophets, peace be upon you\nThe base of revelation, the home of Quran\nThe owner of guidance, peace be upon you\nIntercede for me O my Beloved one, on the day of judgement\nYou are our Intercessor, peace be upon you\nYou are purified from the oppressions\nYou are the full moon on a dark night, peace be upon you",
      },
      {
                transliteration: "Ṭalaʿat minka kawkabul-ʿirfān\nAnta shamsul-ḍuḥā salāmun ʿalayk\nLaylatil-isrāʾ qālatil-anbiyāʾ\nMarḥaban marḥabā salāmun ʿalayk\nMaqṣūdī yā ḥabībī layssa siwāk\nAnta maqṣūdunā salāmun ʿalayk\nInnaka maqṣadī wa maljaʾī\nInnaka maddaʿā salāmun ʿalayk\nṢalawātullāhi ʿalal-Muṣṭafā\nAfḍalul-anbiyāʾ salāmun ʿalayk\nHādhā awwalu ghulāmuka yā Sayyidī\nMinhum yā Muṣṭafā salāmun ʿalayk",
        original: "طلعت منك كوكب العرفان\nأنت شمس الضحى سلام عليك\nليلة الإسراء قالت الأنبياء\nمرحباً مرحبا سلام عليك\nمقصودي يا حبيبي ليس سواك\nأنت مقصودنا سلام عليك\nإنك مقصدي وملجئي\nإنك مدعى سلام عليك\nصلوات الله على المصطفى\nأفضل الأنبياء سلام عليك\nهذا أول غلامك يا سيدي\nمنهم يا مصطفى سلام عليك\nاللهم صل وسلم وبارك عليه وعلى آله",
        translation: "Emanating from you the source of all realities\nYou are the sun of a bright morning, peace be upon you\nIn the Night of Ascension, all the prophets said: Greetings, peace be upon you\nMy aim is at no one but you, O My Beloved\nYou are our goal, peace be upon you\nYou are my destination and my shelter\nYou are my aim, peace be upon you\nMay blessings of Allah be upon the Chosen One\nBest of all prophets, peace be upon you\nMay I be the first of your servants, O my Master\nO Chosen One, peace be upon you\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 19,
    title: "Ya Arham ar Rahimin",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا أرحم الراحمين، يا أرحم الراحمين\nيا أرحم الراحمين، فرج على المسلمين",
        transliteration: "Yā arḥamar-rāḥimīn, yā arḥamar-rāḥimīn\nYā arḥamar-rāḥimīn, farrij ʿalal-muslimīn",
        translation: "O Most Merciful of the merciful ones\nSend salvation on to the Muslims",
      },
      {
                transliteration: "Yā rabbanā yā karīm\nYā rabbanā yā raḥīm\nAntal-jawādul-ḥalīm\nWa anta niʿmal-muʿīn",
        original: "يا ربنا يا كريم\nيا ربنا يا رحيم\nأنت الجواد الحليم\nوأنت نعم المعين",
        translation: "O our Generous Lord, O our Merciful Lord!\nYou are the One who gives, and the One with Forbearance\nAnd the best One who assists",
      },
      {
                transliteration: "Wa mā lanā rabbanā siwāka yā ḥasbanā\nYā dhal-ʿulā wal-ghinā wa yā qawiyyu yā matīn\nWa laysa narjū siwāka fadrik ilāhī darāk\nQablal-fanā wal-halak yaʿummu dunyā wa dīn\nBijāhi Ṭāhar-rasūli jud rabbanā bil-qabūl\nWa hab lanā kulla suʾal rabbī astajib lī amīn",
        original: "وما لنا ربنا سواك يا حسبنا\nيا ذا العلى والغنى وياقوي يا متين\nوليس نرجو سواك فادرك إلهي دراك\nقبل الفنا والهلاك يا عم دنيا وداين\nبجاه طه الرسول جد ربنا بالقبول\nوهب لنا كل سؤل ربي استجب لي أمين",
        translation: "Our Lord we have no one to rely on, except You O Sufficient for me\nO Most High and Self-sufficient, O the Strong and Firm One!\nWe seek none but You, reach to us and look after us\nBefore annihilation — cover the material world and religion\nFor the sake of Taha the Messenger, grant us the favour of acceptance\nAnd grant us everything we asked for, My Lord answer my requests Amin",
      },
      {
                transliteration: "Waghfir lī kullidh-dhunūb\nWastur lī kullil-ʿuyūb\nWakshif lī kullil-kurūb\nWa kfī adhā l-muʾdhīn\nWakhtim bi-aḥsani khitām\nIdhā danal-inṣirām\nWa ḥāna ḥīnul-ḥimām\nWa zāda rashhul-jabīn\nThummaṣ-ṣalātu was-salām\nʿAlā shafīʿil-anām\nWal-āli niʿmal-kirām\nWaṣ-ṣaḥbi wat-tābiʿīn",
        original: "واغفر لي كل الذنوب\nواستر لي كل العيوب\nواكشف لي كل الكروب\nواكف أذى المؤذين\nواختم بأحسن ختام\nإذا دنا الانصرام\nوحان حين الحمام\nوزاد رشح الجبين\nثم الصلاة والسلام\nعلى شفيع الأنام\nوالآل نعم الكرام\nوالصحب والتابعين\nاللهم صل وسلم وبارك عليه وعلى آله",
        translation: "And forgive for me all my sins, and cover for me all my flaws\nAnd lift from me all difficulties, and fend off from me the harm of the harmful\nAnd seal my end with a good ending when death approaches\nAnd when the time for trials arrive and the sweat of the brow increases\nThen praise and send blessings upon the Intercessor of the masses\nAlong with his most honored family, his companions, and followers\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 20,
    title: "Ya Hanana",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا هناناً يا هناناً × ٤\nظهر الدين المؤيد\nبظهور النبي أحمد × ٢\nيا هناناً بمحمد\nذلك الفضل من الله\nيا هناناً يا هناناً × ٤",
        transliteration: "Yā hanānā yā hanānā\nẒahara d-dīnul-muʾayyad\nBi-ẓuhūrin-nabiyyi Aḥmad\nYā hanānā biMuḥammad\nDhālikal-faḍlu minallāh\nYā hanānā yā hanānā",
        translation: "O our joy, O our joy\nThe eternal religion was revealed\nWith the arrival of the prophet Ahmad\nO our bliss because of Muhammad\nThat is the grace from Allah\nO our joy, O our joy",
      },
      {
                transliteration: "Khuṣṣa bis-sabʿil-mathānī\nWa ḥawā luṭfal-maʿānī\nMā lahu fil-khalqi thānī\nWa ʿalayhi anzalallāh",
        original: "خص بالسبع المثاني\nوحوا لطف المعاني\nما له في الخلق ثاني\nوعليه أنزل الله\nيا هناناً يا هناناً × ٤",
        translation: "He was solely gifted with the seven holy verses of Surat Al-Fatiha\nAnd he encompassed the finest qualities\nThere is no creature like him\nAnd Allah has bestowed upon him\nO our joy, O our joy",
      },
      {
                transliteration: "Min Makkatin lamā ẓahar\nLi-ajlihi anshaqqa l-qamar\nWaftakharāt ālu Muḍar\nBihi ʿalā kullil-anām\nṢallū ʿalā khayril-anām\nAl-Muṣṭafā badrit-tamām\nṢallū ʿalayhi wa sallimū\nYashfaʿ lanā yawmaz-ziḥām",
        original: "من مكة لما ظهر\nلأجله انشق القمر\nوافتخرت آل مضر\nبه على كل الأنام\nصلوا على خير الأنام\nالمصطفى بدر التمام\nصلوا عليه وسلموا\nيشفع لنا يوم الزحام",
        translation: "When he appeared from Makkah, for him the moon split\nAnd he was the pride of Al-Mudar's family over all human beings\nPraise the best of people, Al-Mustafa the full moon\nPraise him and greet him — he will grant us intercession on the crowded day",
      },
    ],
  },
  {
    id: 21,
    title: "Ya Nabi Salam Alayka",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا نبي سلام عليك\nيا رسول سلام عليك\nيا حبيب سلام عليك\nصلوات الله عليك",
        transliteration: "Yā nabiyyu salāmun ʿalayk\nYā Rasūlu salāmun ʿalayk\nYā ḥabību salāmun ʿalayk\nṢalawātullāhi ʿalayk",
        translation: "O Prophet, peace be upon you\nO Messenger, peace be upon you\nO my beloved, peace be upon you\nPraises of Allah be upon you",
      },
      {
                transliteration: "Ashraqal-kawnu ibtihājan\nBi-wujūdil-Muṣṭafā Aḥmad\nWa li-ahlil-kawni uns\nWa surūrun qad tajaddad",
        original: "أشرق الكون ابتهاجا\nبوجود المصطف أحمد\nولأهل الكون أنس\nوسرور قد تجدد",
        translation: "The world lit up brightly rejoicing\nWith the birth of the Chosen One Ahmad\nAnd members of the cosmos were at ease\nAnd happy with this renewal of glad tidings from God",
      },
      {
                transliteration: "Faṭrabū yā ahlal-mathānī\nFa hazārul-yumni gharrad\nWastaḍīʾū bijamālin\nFāqa fil-ḥusni tafarrad\nWa lanal-bushrā bi-saʿdin\nMustamirrin laysa yanfad\nḤaythu ūtīnā ʿaṭāʾan\nJamaʿal-fakhrul-muʾabbad",
        original: "فاطربوا يا أهل المثاني\nفهزار اليمن غرد\nواستضيئوا بجمال\nفاق في الحسن تفرد\nوالبشرى بسعد\nمستمر ليس ينفد\nحيث أوتينا عطاءً\nجمع الفخر المؤبد",
        translation: "Be delighted, O settler of the two places, with this good fortune\nAnd seek the light from a beauty that is exceedingly superior\nWe received the good news with continuous happiness never ending\nAs we were given a gift that encompassed eternal glory",
      },
      {
                transliteration: "Anta shamsun anta badrun\nAnta nūrun fawqa nūri\nAnta iksīrun wa ghālī\nAnta miṣbāḥuṣ-ṣudūri\nYā ḥabībī yā Muḥammad\nYā ʿarūsal-khāfiqayn\nYā muʾayyad yā mumajjad\nYā imāmal-qiblatayn",
        original: "أنت شمس أنت بدر\nأنت نور فوق نور\nأنت إكسير وغالي\nأنت مصباح الصدور\nيا حبيبي يا محمد\nيا عروس الخافقين\nيا مؤيد يا ممجد\nيا إمام القبلتين",
        translation: "You are the Sun, You are the Moon\nYou are light upon lights\nThe door you open is even more priceless\nYou are the light of the hearts\nO my beloved, O Muhammad\nO star of the East and the West\nO supporter, O praised one\nO leader of both prayer directions",
      },
    ],
  },
  {
    id: 22,
    title: "Ya Imam Rusli",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا إمام الرسل يا سندي\nأنت باب الله معتمدي\nفبدنياي وآخرتي\nيا رسول الله خذ بيدي",
        transliteration: "Yā imāmar-rusli yā sanadī\nAnta bābullāhi muʿtamadī\nFa bi-dunyāya wa ākhiratī\nYā Rasūlallāhi khudh bī yadī",
        translation: "O Leader of the messengers, O my support\nYou are the door to Allah, on whom I rely\nIn my life and in my hereafter\nO Messenger of Allah, hold my hand",
      },
      {
                transliteration: "Qasaman bin-najmi ḥīna hawā\nMal-muʿāfā was-saqīmu sawā\nFakhlaʿil-kawnaynī ʿanka siwā\nḤubbu mawlāl-ʿurbi wal-ʿajam",
        original: "قسماً بالنجم حين هوى\nما المعافى والسقيم سوى\nفاخلع الكونين عنك سوى\nحب مولى العرب والعجم",
        translation: "I swear by the star in descent\nThe healthy and the sick are not alike\nSo renounce both worlds for the Love of the Master of the Arabs and Non-Arabs",
      },
      {
                transliteration: "Sayyidus-sādāti min Muḍar\nGhawthu ahlil-badwi wal-ḥaḍar\nṢāḥibul-āyāti was-suwar\nManbaʿul-aḥkāmi wal-ḥikam\nQamarun ṭābat sarīratuhu\nWa sajāyāhu wa sīratuhu\nṢafwatul-bārī wa khīratuhu\nʿAdlu ahlin-ḥilli wal-ḥaram",
        original: "سيد السادات من مضر\nغوث أهل البدو والحضر\nصاحب الآيات والسور\nمنبع الأحكام والحكم\nقمر طابت سريرته\nوسجاياه وسيرته\nصفوة الباري وخيرته\nعدل أهل الحل والحرم",
        translation: "Master of the masters of people of Mudar\nThe Saviour of people of the desert and cities\nThe Owner of the verses and chapters of the Holy Quran\nThe Source of laws and wisdom\nLike a moon, good and wholesome in his character and way of life\nThe purest elect of the Creator\nA righteous witness for people of upright and wrongdoing",
      },
    ],
  },
  {
    id: 23,
    title: "Burdah Sharif",
    language: "Arabic",
    poet: "Imam Busiri (shorter version)",
    verses: [
      {
        original: "الله الله الله الله يا مولانا\nالله الله الله ربي أنظر حالي",
        transliteration: "Allāhu Allāhu Allāhu Allāhu yā Mawlānā\nAllāhu Allāhu Allāhu Rabbī unẓur ḥālī",
        translation: "Allah, O Our Master\nO My Lord gaze upon me and my condition",
      },
      {
                transliteration: "Mawlā yā ṣalli wa sallim dāʾiman abadā\nʿAlā ḥabībika khayril-khalqi kullihim",
        original: "مولى يا صلي وسلم دائماً أبداً\nعلى حبيبك خير الخلق كلهم",
        translation: "O my Lord, send peace and blessings continously, repeatedly, eternally\nUpon your Beloved, the best of all creation",
      },
      {
                transliteration: "Yā Rabbī bil-Muṣṭafā balligh maqāṣidanā\nWaghfir lanā mā maḍā yā wāsiʿal-karami\nFaqalan-nabiyyīna fī khalqin wa fī khuluqin\nWa lam yudānūhu fī ʿilmin wa lā karami\nWa kulluhum min Rasūlillāhi multamisum\nGharfan minal-baḥri aw rashfan minad-diyam\nWa lan yaḍīqa Rasūlallāhi jāhuka bī\nIdhā l-karīmu tajallā bismi muntaqimi\nFa inna min jūdikad-dunyā wa ḍarratahā\nWa min ʿulūmika ʿilmal-lawḥi wal-qalam",
        original: "يا ربي بالمصطفى بلغ مقاصدنا\nواغفر لنا ما مضى يا واسع الكرم\nفقل النبيين في خلق وفي خلق\nولم يداونه في علم ولا كرم\nوكلهم من رسول الله ملتمس\nغرفاً من البحر أو رشفاً من الديم\nولن يضيق رسول الله جاهك بي\nإذا الكريم تجلى باسم منتقم\nفإن من جودك الدنيا وضرتها\nومن علومك علم اللوح والقلم",
        translation: "O my Lord, By means of the Chosen One, forgive us our past\nO All Comprehending, Generous one\nHe surpasses all Prophets in form and character\nNone of them approaches his knowledge or generosity\nAll of them come and take from Allah's Messenger a handful of his ocean\nOr a sip of his continuous rains\nAnd O Messenger of Allah, your exalted status will not diminish from your intercession\nWhen The Most Bountiful manifests with the Name of Avenger\nFor verily amongst your bounties is this world and the Next\nAnd of your knowledge is knowledge of the Preserved Tablets and the Pen",
      },
    ],
  },
  {
    id: 24,
    title: "Talama Ashku Gharami",
    language: "Arabic",
    poet: "Traditional (Mawlid al-Diba'i)",
    verses: [
      {
        original: "طالما أشكو غرامي\nيا نور الوجود\nوأنادي يا تهامي\nيا معدن الجود",
        transliteration: "Ṭālamā ashkū gharāmī\nYā nūral-wujūd\nWa unādī yā tihāmī\nYā maʿdinal-jūd",
        translation: "From time to time I complain of my love\nO Light of all Existence\nAnd I call upon you, from Tihama\nO mine of generosity",
      },
      {
                transliteration: "Munyatī aqṣā marāmī\nAḥẓā bish-shuhūd\nWa arā bābas-salāmi\nYā zakīl-judūd\nYā ṭirāzal-kawni innī\nʿĀshiqun mustahām\nMughramun wal-madḥu fannī\nYā badrat-tamām\nIṣriful-iʿrāḍa ʿannī\nAḍnānīl-gharām\nFīka qad aḥsantu ẓannī\nYā samīʿal-ʿuhūd",
        original: "منيتي أقصى مرامي\nأحظى بالشهود\nوأرى باب السلام\nيا زكي الجدود\nيا طراز الكون إني\nعاشق مستهام\nمغرم والمدح فني\nيا بدر التمام\nإصرف الإعراض عني\nأضناني الغرام\nفيك قد أحسنت ظني\nيا سامي العهود",
        translation: "My hope, the limit of my prospects, is to attain witnessing\nAnd I see the Gate of Peace, O Purifier of all things new\nO archetype of creation, truly I am a lover, forlorn\nEnamored and praise is my art, O you full moon\nRemove your aversion from me, your love has exhausted me\nIn you I have best expectation, O fulfiller of promises",
      },
      {
                transliteration: "Yā sirājal-anbiyāʾi\nYā ʿAlīl-janāb\nYā imāmal-atqiyāʾi\nInna qalbī dhāb\nWa ʿalayk Allāhu ṣallā\nRabbī dhul-jalāl\nYakfī yā nūral-ahillat\nInna hajrī ṭāl",
        original: "يا سراج الأنبياء\nيا علي الجناب\nيا إمام الأتقياء\nإن قلبي ذاب\nوعليك الله صلى\nربي ذو الجلال\nيكفي يا نور الأهلة\nإن هجري طال\nاللهم صل وسلم وبارك عليه وعلى آله",
        translation: "O Sun of the prophets, O possessor of highest honor\nO leader of the God-wary, truly my Heart is melting\nAnd upon You Allah sends blessings, My Lord of Majesty\nEnough, O light of the crescents, You have abandoned me for too long\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 25,
    title: "Salallah ala Muhammad",
    language: "Arabic",
    poet: "Traditional (Mawlid al-Diba'i)",
    verses: [
      {
        original: "صلى الله على محمد\nصلى الله عليه وسلم",
        transliteration: "Ṣallallāhu ʿalā Muḥammad\nṢallallāhu ʿalayhi wa sallam",
        translation: "Allah's blessings be upon Muhammad\nAllah's blessings and peace be upon him",
      },
      {
                transliteration: "Rabbi wajʿal mujtamaʿanā\nGhāyatahu ḥusnul-khitām\nWa aʿṭinā mā qad saʾalnā\nMin ʿaṭāyākal-jisām\nWa akrimir-arwāḥa minnā\nBi-liqā khayril-anām\nWa ablighill-mukhtāra ʿannā\nMin ṣalātin wa salām\nYā Allāhu yā Muḥammad\nYā Abā Bakr yā Ṣiddīq\nYā ʿUmar ʿUthmān yā ʿAlī\nFāṭimatu binta Rasūl",
        original: "رب واجعل مجتمعنا\nغايته حسن الختام\nوأعطنا ما قد سألنا\nمن عطاياك الجسام\nواكرم الأرواح منا\nبلقى خير الأنام\nوابلغ المختار عنا\nمن صلاة وسلام\nيا الله يا محمد\nيا أبا بكر يا صديق\nيا عمر عثمان يا علي\nفاطمة بنت رسول",
        translation: "O my Lord, make our gathering's purpose a good ending\nAnd grant us what we are asking from your great favors\nAnd bless the souls among us to meet the best of created beings\nAnd convey to the Chosen One from us blessings and greetings of peace\nO Allah, O Muhammad, O Abu Bakr the Truthful\nO Umar, Uthman, O Ali\nFatimah, daughter of the Messenger",
      },
    ],
  },
  {
    id: 26,
    title: "Burdah",
    language: "Arabic",
    poet: "Imam Busiri (ensemble version)",
    verses: [
      {
        original: "يا رب بالمصطفى بلغ مقاصدنا\nواغفر لنا ما مضى يا واسع الكرم",
        transliteration: "Yā Rabbi bil-Muṣṭafā balligh maqāṣidanā\nWaghfir lanā mā maḍā yā wāsiʿal-karami",
        translation: "O my Lord! By means of the Chosen One let us achieve our goals\nAnd forgive us our past, O Possessor of Vast Generosity",
      },
      {
                transliteration: "Yā akramal-khalqi mā lī man alūdhu bih\nSiwāka ʿinda ḥulūlil-ḥādithill-ʿamam\nWa lan yaḍīqa Rasūlallāhi jāhuka bī\nIdhā l-karīmu tajallā bismi muntaqim\nFa inna min jūdikad-dunyā wa ḍarratahā\nWa min ʿulūmika ʿilmal-lawḥi wal-qalam",
        original: "يا أكرم الخلق ما لي من ألوذ به\nسواك عند حلول الحادث العمم\nولن يضيق رسول الله جاهك بي\nإذا الكريم تجلى باسم منتقم\nفإن من جودك الدنيا وضرتها\nومن علومك علم اللوح والقلم",
        translation: "Most generous of mankind, I have no one to take refuge in except you\nAt occurrence of widespread calamity\nAnd O Messenger of Allah, your exalted status will not diminish from your intercession\nWhen The Most Bountiful manifests with the Name of Avenger\nFor verily amongst your bounties is this world and the Next\nAnd of your knowledge is knowledge of the Preserved Tablets and the Pen",
      },
      {
        transliteration: "Yā nafsu lā taqnaṭī min zallatin ʿaẓumat\nInnal-kabāʾira fil-ghufrāni kal-lamam\nLaʿalla raḥmata rabbī ḥīna yaqsimuhā\nTatī ʿalā ḥasabil-ʿiṣyāni fil-qisam\nYā Rabbī wajʿal rajāʾī ghayra munʿakisin",
        original: "يا نفس لا تقنطي من زلة عظمت\nإن الكبائر في الغفران كاللمم\nلعل رحمة ربي حين يقسمها\nتأتي على حسب العصيان في القسم\nyا رب واجعل رجائي غير منعكس\nلديك واجعل حسابي غير منخرم\nوالطف بعبدك في الدارين إن له\nصبراً متى تدعه الأهوال ينهزم\nواذن لسحب صلاة منك دائمة\nعلى النبي بمنهل ومنسجم\nوالآل والصحب ثم التابعين فهم\nأهل التقى والنقى والحلم والكرم",
        translation: "O my self do not despair due to your grave sins\nTruly even the greatest sins when pardoned are minor\nPerhaps the mercy of my Lord when distributed would be in proportion to the sins\nO my Lord! Let not my hopes be rejected by You\nAnd let not my reckoning reveal my deficiencies\nBe kind to Your servant in both the worlds\nFor verily his patience, when called upon by hardships, runs away\nOrder clouds of blessings from You perpetually upon the Prophet\nAnd upon his family, companions, then those who follow them\nThe people of piety, knowledge, clemency, and generosity",
      },
    ],
  },
  {
    id: 27,
    title: "Ya Rabi Sali ala nabi muhammadin",
    language: "Arabic",
    poet: "Traditional",
    verses: [
      {
        original: "يا رب صل على النبي محمدين\nخير الأنام ومن به يتشفع",
        transliteration: "Yā Rabbī ṣalli ʿalan-nabiyyi Muḥammadin\nKhayril-anāmi wa man bihi yutashaffaʿu",
        translation: "My Lord send blessings upon the Prophet Muhammad\nThe best of mankind whose intercession is sought",
      },
      {
                transliteration: "Yā man yarā mā fīḍ-ḍamīri wa yasmaʿu\nAntal-muʿaddu likulli mā yutawaqqaʿu\nYā man yurajjā lish-shadāʾidi kullihā\nYā man ilayhi l-mushtakā wal-mafzaʿu\nYā man khazāʾinu mulkihi fī qawli kun\nUmnun fa-innal-khayra ʿindaka ajmaʿu\nMā lī siwā faqrī ilayka wasīlatun\nFabil-iftiqāri ilayka faqrī adfaʿu",
        original: "يا من يرى ما في الضمير ويسمع\nأنت المعد لكل ما يتوقع\nyا من يرجى للشدائد كلها\nيا من إليه المشتكى والمفزع\nيا من خزائن ملكه في قول كن\nأمنن فإن الخير عندك أجمع\nما لي سوى فقري إليك وسيلة\nفبالافتقار إليك فقري أدفع",
        translation: "O you who sees and hears what is in the subconscious\nYou are our preparation for all things expected\nO you who is sought for all difficult hardship\nO you whom one goes to for problems and things feared\nO you whose treasure chests are in his saying Be\nGrant us your favors because the bounty is all gathered for you\nMy only means to you is my poverty\nThrough being impoverished I offer you my poverty",
      },
      {
                transliteration: "Mā lī siwā qarʿī li-bābika ḥīlatun\nFa laʾin rudidtu fa ayyu bābin aqraʿu\nWa manil-ladhī adʿū wa ahtafu bismihi\nIn kāna faḍluka ʿan faqīrika yumnaʿu\nḤāshan li-jūdika an tuqanniṭa ʿāṣiyan\nAl-faḍlu ajzalu wal-mawāhibu awsaʿu\nThummaṣ-ṣalātu ʿalan-nabiyyi Muḥammadin\nKhayril-anāmi wa man bihi yutashaffaʿu",
        original: "ما لي سوى قرعي لبابك حيلة\nفلئن رددت فأي باب أقرع\nومن اللذي أدعو وأهتف باسمه\nإن كان فضلك عن فقيرك يمنع\nحشاً لجودك أن تقنط عاصياً\nالفضل أجزل والمواهب أوسع\nثم الصلاة على النبي محمدين\nخير الأنام ومن به يتشفع\nاللهم صل وسلم وبارك عليه وعلى آله",
        translation: "I have nothing else except knocking at your door\nIf I am turned away, which door then can I knock\nAnd who else can I call upon and shout by his name\nIf your generous bounty is kept from the one who is poor for you\nNo way can your generosity withhold from a disobedient\nYour bounty is too abundant and your grants too vast for that\nThen praise upon the Prophet Muhammad\nThe best of mankind and the means for intercession\nO Allah, send peace and blessings upon him and his family",
      },
    ],
  },
  {
    id: 28,
    title: "Madad Madad (Burdah Ensemble)",
    language: "Arabic / English",
    poet: "Traditional",
    verses: [
      {
        original: "قلول القلوب\nإلى الحبيب تميل\nوما عيبي ذلك شاهد شاهد ودليل\nأمد دليل إذا ذكرت محمداً\nسرت دموع العاشقين تسيل\nهذا رسول الله، هذا المصطفى\nهذا لرب العالمين خليل",
        transliteration: "Qullul-qulūbi ilal-ḥabībi tamīlu\nWa māʿibī dhālika shāhidun wa dalīlu\nAmma dalīlu idhā dhakhartu Muḥammadan\nSarat dumūʿul-āshiqīna taṣīlu\nHādhā Rasūlullāh, hādhā Rasūlullāh\nHādhal-Muṣṭafā, hādhā li-Rabbil-ʿālamīna khalīlu",
        translation: "Every heart melts in the rapture of the beloved\nAnd for that love I have a witness, a witness and a proof\nRegarding that proof, if I mention the name of Muhammad\nThe eyes of the lovers will be overrun with tears\nHe is the Messenger of God, He is the Chosen One\nHe is, to the Lord, a most trusted friend",
      },
      {
                transliteration: "Al-madad al-madad al-madad\nAl-madad yā Rasūlallāh\nAl-madad al-madad al-madad\nAl-madad yā Ḥabīballāh",
        original: "المدد المدد المدد\nالمدد يا رسول الله\nالمدد المدد المدد\nالمدد يا حبيب الله",
        translation: "Aid us, Help us, Support us\nAid us, O Messenger of God!\nAid us, Help us, Support us\nAid us, O Most Beloved of God!",
      },
      {
                transliteration: "Sīdī antal-ḥabīb\nBi-dhikrika qalbī yaṭīb\nSīdī ḥāshā yakhīb\nMan ladhā bi-Rasūlillāh",
        original: "سيدي أنت الحبيب\nبذكرك قلبي يطيب\nسيدي حاشا يخيب\nمن لذا برسول الله",
        translation: "Our Master, you are the Beloved\nWith your remembrance my Heart is healed!\nOh my Master! One who takes refuge\nWill never lose with the Messenger of God!",
      },
    ],
  },
  {
    id: 29,
    title: "Hasbi Rabbi Jalallah",
    language: "Arabic / Turkish / Urdu",
    poet: "Sami Yusuf",
    verses: [
      {
        original: "حسبي ربي جلاله\nما في قلبي غير الله\n(الله هو الله)",
        transliteration: "Ḥasbī rabbī jalāluh\nMā fī qalbī ghayru-llāh\n(Allāhu Allāh)",
        translation: "My Lord is sufficient, glorious is He\nThere is nothing in my heart except Allah\n(Allah is He, Allah)",
      },
      {
                transliteration: "O Allāhu l-ʿAẓīm\nProtect me and guide me\nTo Your love and mercy\nYā Allāh don't deprive me\nFrom beholding Your beauty\nO my Lord accept this plea",
        original: "O Allah the Almighty\nProtect me and guide me\nTo your love and mercy\nYa Allah don't deprive me\nFrom beholding your beauty\nO my Lord accept this plea",
        translation: "O Allah the Almighty\nProtect me and guide me\nTo your love and mercy\nYa Allah don't deprive me\nFrom beholding your beauty\nO my Lord accept this plea",
      },
      {
                transliteration: "Wo tanhā kaun hai\nBādshāh wo kaun hai\nMeherbā wo kaun hai\nKyā unchī shān hai\nUskay sab nishān hai\nSab dilon kī jān hai",
        original: "وتنها كاون هاي\nبادشاه وه كاون هاي\nمهربا وه كاون هاي\nكيا اونچي شان هاي\nاسكي سب نشان هاي\nسب دلوں كي جان هاي",
        translation: "Who is the Alone One\nWho is the King\nWho is the Merciful\nWhat a lofty station He has\nAll things are His signs\nHe is the soul of all hearts",
      },
      {
                transliteration: "Yā rabbal-ʿālamīn\nṢalli ʿalā Ṭāhal-amīn\nFī kulli waqtin wa ḥīn\nImlā qalbī bil-yaqīn\nThabbitnī ʿalā hādha d-dīn\nWaghfir lī wal-muslimīn\nʿAlal-hādī ṣallallāh\nLā ilāha illallāh",
        original: "Ya rabbal 'alamin\nSalli 'ala Tahal amin\nFi kulli waqtin wa hin\nImla' qalbi bil yaqin\nThabbitni 'ala hadhad din\nWaghfir li wal muslimin\n'Alal hadi salAllah\nLa ilaha ila Allah",
        translation: "O Lord of all the worlds\nSend blessings upon the Trustworthy Taha\nIn every time and moment\nFill my heart with certainty\nKeep me firm upon this religion\nForgive me and all Muslims\nBlessings upon the Guide — Allah\nThere is no god but Allah",
      },
    ],
  },
];

// ── Shared UI ────────────────────────────────────────────

const rootStyle = {
  minHeight: "100vh",
  background: "radial-gradient(ellipse at 20% 10%, rgba(15,42,40,1) 0%, rgba(6,20,19,1) 55%, rgba(3,12,11,1) 100%)",
  color: "#cce4e2",
  fontFamily: "'Georgia','Times New Roman',serif",
  position: "relative",
  overflowX: "hidden",
};

function BgLayer() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage:
        "radial-gradient(ellipse at 10% 15%, rgba(44,110,106,0.12) 0%, transparent 55%)," +
        "radial-gradient(ellipse at 90% 85%, rgba(74,158,153,0.07) 0%, transparent 55%)",
    }} />
  );
}

function Badge({ language }) {
  const colorMap = {
    "Arabic": "rgba(74,158,153,0.7)",
    "Turkish": "rgba(160,120,136,0.7)",
    "Urdu": "rgba(201,168,76,0.7)",
    "Arabic / Turkish / Urdu": "rgba(74,158,153,0.7)",
    "Arabic / English": "rgba(74,158,153,0.7)",
  };
  return (
    <span style={{
      fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
      color: colorMap[language] || "rgba(74,158,153,0.7)",
      border: `1px solid ${colorMap[language] || "rgba(74,158,153,0.3)"}`,
      borderRadius: 20, padding: "3px 10px",
      background: "rgba(74,158,153,0.06)",
    }}>
      {language}
    </span>
  );
}

function Card({ q, index, onClick }) {
  const [hov, setHov] = useState(false);
  const hasContent = q.verses && q.verses.length > 0;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? "linear-gradient(135deg, rgba(74,158,153,0.1) 0%, rgba(255,255,255,0.03) 100%)"
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? "rgba(74,158,153,0.45)" : "rgba(74,158,153,0.15)"}`,
        borderRadius: 12, padding: "18px 20px",
        cursor: "pointer", transition: "all 0.2s ease",
        position: "relative", overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
        background: "linear-gradient(90deg, transparent, rgba(74,158,153,0.6), transparent)",
        opacity: hov ? 1 : 0, transition: "opacity 0.2s",
      }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 8 }}>
            <Badge language={q.language} />
          </div>
          <h3 style={{
            fontSize: "clamp(15px,4vw,18px)", fontWeight: 400,
            color: hov ? "#e8f0ef" : "#cce4e2", margin: "0 0 4px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            lineHeight: 1.35,
          }}>
            {q.title}
          </h3>
          <p style={{ fontSize: 12, color: "rgba(74,158,153,0.6)", margin: 0, letterSpacing: 0.3 }}>
            {q.poet}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, paddingTop: 4 }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
            background: hasContent ? "rgba(74,158,153,0.75)" : "rgba(200,200,200,0.2)",
          }} />
          <span style={{
            color: hov ? "#c9a84c" : "rgba(74,158,153,0.5)",
            fontSize: 18, transition: "color 0.2s",
          }}>→</span>
        </div>
      </div>
    </div>
  );
}

function VerseBlock({ verse, index, label }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{
        fontSize: 10, letterSpacing: "2px", textTransform: "uppercase",
        color: "rgba(74,158,153,0.45)", marginBottom: 10,
      }}>
        {label}
      </div>

      {/* Arabic — larger, right-aligned */}
      <div style={{
        borderLeft: "2px solid rgba(74,158,153,0.3)",
        padding: "16px 20px", marginBottom: 8,
        background: "rgba(74,158,153,0.04)", borderRadius: "0 8px 8px 0",
      }}>
        {verse.original.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "8px 0 0", fontSize: 22, lineHeight: 2.2,
            color: "#e8f0ef", fontFamily: "Georgia, 'Times New Roman', serif",
            textAlign: "right", direction: "rtl",
          }}>
            {line}
          </p>
        ))}
      </div>

      {/* Transliteration */}
      {verse.transliteration && (
        <div style={{
          borderLeft: "2px solid rgba(74,158,153,0.5)",
          background: "rgba(74,158,153,0.05)",
          borderRadius: "0 8px 8px 0", padding: "12px 18px", marginBottom: 8,
        }}>
          {verse.transliteration.split("\n").map((line, i) => (
            <p key={i} style={{
              margin: i === 0 ? 0 : "5px 0 0", fontSize: 14, lineHeight: 1.9,
              color: "rgba(74,158,153,0.9)", fontStyle: "italic", letterSpacing: 0.3,
            }}>
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Translation */}
      <div style={{
        borderLeft: "2px solid rgba(201,168,76,0.45)",
        background: "rgba(201,168,76,0.04)",
        borderRadius: "0 8px 8px 0", padding: "13px 18px",
      }}>
        {verse.translation.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "5px 0 0", fontSize: 15, lineHeight: 1.9,
            color: "rgba(201,168,76,0.9)",
          }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function NavBtn({ dir, q, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(74,158,153,0.55)" : "rgba(201,168,76,0.2)"}`,
        borderRadius: 9, padding: "12px 16px",
        color: hov ? "#c9a84c" : "rgba(201,168,76,0.65)",
        fontSize: 12, fontFamily: "inherit",
        cursor: "pointer", maxWidth: "46%",
        textAlign: dir === "prev" ? "left" : "right",
        transition: "all 0.18s",
      }}
    >
      <div style={{ fontSize: 10, letterSpacing: 1.2, marginBottom: 4, opacity: 0.55 }}>
        {dir === "prev" ? "← PREVIOUS" : "NEXT →"}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.4 }}>{q.title}</div>
    </button>
  );
}

const backBtnStyle = {
  background: "none", border: "none",
  color: "rgba(74,158,153,0.6)", fontSize: 12,
  letterSpacing: "1.8px", textTransform: "uppercase",
  cursor: "pointer", fontFamily: "inherit",
  padding: "22px 0 0", display: "flex",
  alignItems: "center", gap: 8, transition: "color 0.18s",
};

export default function QasidaBook({ onBack }) {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterLang, setFilterLang] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  useEffect(() => {
    const onBack_ = (e) => {
      if (selectedId !== null) { e.preventDefault(); setSelectedId(null); }
    };
    window.addEventListener("popstate", onBack_);
    if (selectedId !== null) window.history.pushState({ qasida: selectedId }, "");
    return () => window.removeEventListener("popstate", onBack_);
  }, [selectedId]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [selectedId]);

  const langOptions = ["All", "Arabic", "Turkish", "Urdu"];
  const filtered = qasidas.filter(q => {
    const s = search.toLowerCase();
    const matchSearch = !s || q.title.toLowerCase().includes(s) || q.poet.toLowerCase().includes(s) || q.language.toLowerCase().includes(s);
    const matchLang = filterLang === "All" || q.language.includes(filterLang);
    return matchSearch && matchLang;
  }).sort((a, b) => a.title.localeCompare(b.title));

  const selected = qasidas.find(q => q.id === selectedId);
  const sorted = [...qasidas].sort((a, b) => a.title.localeCompare(b.title));
  const selectedIndex = sorted.findIndex(q => q.id === selectedId);

  if (selected) {
    const prev = sorted[selectedIndex - 1];
    const next = sorted[selectedIndex + 1];
    return (
      <div style={{ ...rootStyle, opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <BgLayer />
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px 120px", position: "relative", zIndex: 5 }}>
          <button onClick={() => setSelectedId(null)} style={backBtnStyle}
            onMouseEnter={e => e.currentTarget.style.color = "#4a9e99"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(74,158,153,0.6)"}>
            ← All Qasidas
          </button>
          <div style={{ padding: "22px 0 20px", borderBottom: "1px solid rgba(74,158,153,0.25)" }}>
            <div style={{ marginBottom: 10 }}><Badge language={selected.language} /></div>
            <h1 style={{
              fontSize: "clamp(20px,6vw,34px)", fontWeight: 400,
              color: "#e8f0ef", margin: "0 0 6px", lineHeight: 1.3,
              fontFamily: "Georgia, 'Times New Roman', serif",
              textShadow: "0 0 40px rgba(74,158,153,0.2)",
            }}>
              {selected.title}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(74,158,153,0.7)", margin: 0, letterSpacing: 0.5 }}>
              {selected.poet}
            </p>
          </div>
          <div style={{
            display: "flex", gap: 20, padding: "12px 0",
            borderBottom: "1px solid rgba(74,158,153,0.1)",
            fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase",
            flexWrap: "wrap",
          }}>
            <span style={{ color: "#cce4e2", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(74,158,153,0.3)", display: "inline-block", borderRadius: 2 }} />
              Arabic
            </span>
            <span style={{ color: "rgba(74,158,153,0.9)", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(74,158,153,0.6)", display: "inline-block", borderRadius: 2 }} />
              Transliteration
            </span>
            <span style={{ color: "rgba(201,168,76,0.85)", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(201,168,76,0.6)", display: "inline-block", borderRadius: 2 }} />
              Translation
            </span>
          </div>
          <div style={{ marginTop: 20 }}>
            {selected.verses.map((v, i) => (
              <VerseBlock key={i} verse={v} index={i} label={`Section ${i + 1}`} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 36, gap: 12 }}>
            {prev ? <NavBtn dir="prev" q={prev} onClick={() => setSelectedId(prev.id)} /> : <div />}
            {next ? <NavBtn dir="next" q={next} onClick={() => setSelectedId(next.id)} /> : <div />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...rootStyle, opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
      <BgLayer />
      <header style={{
        position: "relative", zIndex: 10,
        borderBottom: "1px solid rgba(74,158,153,0.25)",
        padding: "44px 24px 28px", textAlign: "center",
      }}>
        <button onClick={onBack} style={{
          ...backBtnStyle, padding: "0 0 20px",
          position: "absolute", left: 20, top: 24,
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#4a9e99"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(74,158,153,0.6)"}>
          ← Home
        </button>
        <div style={{ fontSize: 18, letterSpacing: 4, color: "rgba(74,158,153,0.7)", marginBottom: 10, fontFamily: "serif" }}>
          قصيدة
        </div>
        <h1 style={{
          fontSize: "clamp(30px,7vw,52px)", fontWeight: 400,
          color: "#e8f0ef", margin: "0 0 6px", letterSpacing: 2,
          fontFamily: "Georgia, 'Times New Roman', serif",
          textShadow: "0 0 60px rgba(74,158,153,0.3)",
        }}>
          Qasida Lyrics
        </h1>
        <div style={{ width: 140, height: 1, background: "linear-gradient(90deg,transparent,rgba(74,158,153,0.6),transparent)", margin: "14px auto 12px" }} />
        <p style={{ fontSize: 12, color: "rgba(74,158,153,0.55)", letterSpacing: 3, margin: 0, textTransform: "uppercase" }}>
          {qasidas.length} Qasidas
        </p>
      </header>
      <main style={{ position: "relative", zIndex: 5, maxWidth: 940, margin: "0 auto", padding: "30px 20px 80px" }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search title, poet, language…"
            style={{
              flex: 1, minWidth: 220,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(74,158,153,0.22)",
              borderRadius: 8, padding: "10px 16px",
              color: "#cce4e2", fontSize: 14, fontFamily: "inherit", outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {langOptions.map(l => (
              <button key={l} onClick={() => setFilterLang(l)} style={{
                background: filterLang === l ? "rgba(74,158,153,0.2)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${filterLang === l ? "rgba(74,158,153,0.6)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: 20, padding: "6px 14px",
                color: filterLang === l ? "#c9a84c" : "rgba(180,220,218,0.6)",
                fontSize: 12, cursor: "pointer", fontFamily: "inherit",
                letterSpacing: 0.4, transition: "all 0.18s",
              }}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 12 }}>
          {filtered.map((q) => (
            <Card key={q.id} q={q} index={qasidas.indexOf(q)} onClick={() => setSelectedId(q.id)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "70px 20px", color: "rgba(180,220,218,0.3)" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>☽</div>
            <p>No qasidas match "{search}"</p>
          </div>
        )}
      </main>
      <footer style={{
        position: "relative", zIndex: 5, textAlign: "center", padding: "22px",
        borderTop: "1px solid rgba(74,158,153,0.1)",
        color: "rgba(74,158,153,0.5)", fontSize: 20,
        fontFamily: "Georgia, 'Times New Roman', serif", letterSpacing: 2,
      }}>
        اللهم صل على سيدنا محمد
      </footer>
    </div>
  );
}
