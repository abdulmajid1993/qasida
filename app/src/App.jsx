import { useState, useEffect } from "react";
import Homepage from "./Homepage";
import QasidaBook from "./QasidaBook";
import IlahiBook from "./IlahiBook";

// ============================================================
//  QAWWALI DATA — paste your lyrics here
//  Each qawwali has an array of verses.
//  Each verse has:
//    original:    the original-language lines (use \n for line breaks)
//    translation: the English translation lines (use \n for line breaks)
// ============================================================

const qawwalis = [
  {
    id: 1,
    title: "Allah Hoo Allah Hoo",
    language: "Urdu",
    poet: "Traditional",
    introCount: 5,
    chorus: {
      original: "Allah hoo, Allah hoo, Allah hoo\nAllah hoo, Allah hoo, Allah hoo",
      translation: "Allah is He, Allah is He, Allah is He\nAllah is He, Allah is He, Allah is He",
    },
    verses: [
      {
        original: "Malik-Ul-Mulk, Lashareeka Lahoo\nWahadahoo Laa Ilaahaa Illaahoo",
        translation: "Ruler of the world, soul of my blood\nThe promised one, there is nothing but you",
      },
      {
        original: "Shams Tabraiz Gar Khuda Talabee\nKhushboo Khuwan La Illaha Illahoo",
        translation: "Every great scholar is your student\nIn every scent, there is nothing but you",
      },
      {
        original: "Qounain Ka Masjood Hai Maa'bood Hai Tu\nHer Shay Teri Shahid Hai K Mashhood Hai Tu",
        translation: "Creator of and worshipped by both worlds\nEvery thing is witness to your manifestation",
      },
      {
        original: "Her Aik K Lab Per Hai Teri Hamd-O-Sana\nHer Sooz Mein Her Saaz Mein Moujood Hai Tu",
        translation: "On everyone's lips is your prayer\nIn every chord, every song is your presence",
      },
      {
        original: "Tere He Naam Say Her Ibtida Hai\nTere He Naam Tak Intiha Hai\nTeri Hamd-O-Sana Alhamdulillah\nK Tu Mere Mohammad Ka Khuda Hai",
        translation: "Every beginning is with your name\nWith your name ends everythingYour praise is 'praise be to Allah'\nThat you are the God of my Mohammad",
      },
      {
        original: "Yeh Zameen Jab Na Thi Yeh Jahaan Jab Na Thaa\nChaand Suraj Na Thay Aasman Jab Na Tha\nRaaz-E-Haq Bhi Kisi Per Ayaan Jab Na Tha\nTab Na Tha Kuch Yahaan Tha Magar Tu Hee Tu",
        translation: "When this earth and world did not exist\nWhen there was no moon, sun or sky\nWhen the secret of the truth was still unknown\nWhen there was nothing, there was you",
      },
      {
        original: "Har Shay Tere Jamaal Ki Aainaa Daar Hai\nHar Shay Pukaarti Hai Tu Parvardigaar Hai",
        translation: "Everything is a reflection of your glory\nEvery thing cries out that you are the Lord",
      },
      {
        original: "Teri Ruboobiyat Ki Ada Ka Kamaal Hai\nTu Rab-e-Qayaanat Hai, Tu Lajwal Hai",
        translation: "It is the distinction of your enthralling visage\nYou are the unrivalled Lord of the Universe",
      },
      {
        original: "Tu Jo Her Aan Nayi Shaan Dikha Deta Hai\nDeeda-E-Shouq Ko Hairan Bana Deta Hai\nDaali Daali Teri Takhleeq K Gun Gaati Hai\nPatta Patta Teri Qudrat Ka Pata Deta Hai",
        translation: "You who shows new beauty every instant\nSurprises even those who yearn for more\nEvery sapling sings of your creation\nEvery leaf is a signature of your nature",
      },
      {
        original: "Laa Ilaahaa Teri Shaan Ya Wahdahoo\nTu Khayaal-O-Tajassus Tu He Aarzoo\nAankh Ki Roshni Dil Ki Awaaz Tu\nTha Bhi Tu! Hai Bhi Tu! Hoga Bhi Tu Hee Tu!",
        translation: "My God, you are the splendor you promised\nYou are the curiosity, you are the desire\nThe light of my eyes, the voice of my heart\nYou were, you are, and will be only you",
      },
      {
        original: "Khaalik-E-Kul Hai Tu Is Mein Kia Guftagu\nSaare Aalam Ko Hai Teri He Justaju\nTeri Jalvaagari Hai Ayaan Chaar Su\nLa Shareeka Lahoo Maalik-E-Mulk Tu",
        translation: "You are everything, what is the argument in this\nThe whole world is searching only for you\nEven as your magnificence is in every corner\nYou are in my blood, Lord of the world",
      },
    ],
  },
  {
    id: 2,
    title: "Naseeb Mera Jaga Diya",
    language: "Urdu",
    poet: "Nusrat Fateh Ali Khan",
    chorus: {
      original: "Banayi mujh benawah ki bigri, naseeb mera jaga diya\nTere karam pe nisaar tu ne mujhe bhi jeena sikha diya",
      translation: "You mended the life of this destitute, awakened my dormant fate\nI am indebted to your grace; you have taught me how to live as well",
    },
    verses: [
      {
        original: "Banayi mujh benawah ki bigri, naseeb mera jaga diya",
        translation: "You mended the life of this destitute, awakened my dormant fate",
      },
      {
        original: "Tere karam pe nisaar tu ne mujhe bhi jeena sikha diya",
        translation: "I am indebted to your grace; you have taught me how to live as well",
      },
      {
        original: "Badal gayi mere dil ki dunya, aata ne wo martaba diya",
        translation: "The world of my heart has changed; the blessings have granted me such a stature",
      },
      {
        original: "Karam ki aise nigaah dali, gadaa ko sultaan bana diya",
        translation: "With such a gracious glance, a beggar was turned into a king",
      },
      {
        original: "Karam ke saaye mein hum ko rakha, kabhi hirasa na hum hue",
        translation: "Kept us under the shade of grace, never did we feel any fear",
      },
      {
        original: "Hamare sir pe jo dhoop aayi to apna daaman barha diya",
        translation: "When the sun blazed over our heads, you extended your garment to shield us",
      },
      {
        original: "Yeh inki banda-nawazian hein, jo mujh pe aisa karam keya",
        translation: "It is their kindness to servants that bestowed such grace upon me",
      },
      {
        original: "Bana ke apna faqeer mujh ko, gham e jahaan se chura liya",
        translation: "By making me their humble devotee, they rescued me from the sorrows of the world",
      },
      {
        original: "Wuzoo keya mein ne aasman se, namaaz meri adaa howi",
        translation: "I performed ablution with water from the heavens, and my prayer was fulfilled",
      },
      {
        original: "Mila jo naqsh e kadam tumhara, to mein ne sir ko jhuka liya",
        translation: "When I found the imprint of your footsteps, I bowed my head in reverence",
      },
      {
        original: "Kisi ko dar se na khaali taala, her ik sawali ko bheek di",
        translation: "No one left the door empty-handed; every seeker was granted alms",
      },
      {
        original: "Ghareeb aaye jo aastan pe, karam ka darya bahaa diya",
        translation: "When the poor came to the threshold, a river of grace was made to flow",
      },
      {
        original: "Ghareeb dar dar bhatak rahay thay, kaheen na dil ko sukoon mila",
        translation: "The poor wandered from door to door, finding no peace for the heart",
      },
      {
        original: "Karam kiya tu ne apne dar ko hamara kaaba bana diya",
        translation: "You graced us by making your threshold our sanctuary, our Kaaba",
      },
    ],
  },
  {
    id: 3,
    title: "Nami Danam Che Manzil",
    language: "Persian (Farsi)",
    poet: "Amir Khusro",
    chorus: {
      original: "namī-dānam che manzil buud shab jaa.e ki man būdam\nba-har-sū raqs-e-bismil buud shab jaa.e ki man būdam",
      translation: "I know not what place it was, last night, where I was\nAll around, the half-slaughtered lovers of God danced in rapture, last night, where I was",
    },
    verses: [
      {
        original: "namī-dānam che manzil buud shab jaa.e ki man būdam\nba-har-sū raqs-e-bismil buud shab jaa.e ki man būdam",
        translation: "It was a strange and unknown place, last night, where I was,\nAll around the place Bismils (half slaughtered) were dancing divinely, last night, where I was.",
      },
      {
        original: "parī-paikar nigāre sarv-qadde lāla-ruḳhsāre\nsarāpā āfat-e-dil buud shab jaa.e ki man būdam",
        translation: "Angelic, slender as a cypress tree and rose faced beings,\nTurned into a torment for our heart, last night, where I was.",
      },
      {
        original: "raqībāñ gosh-bar-āvāz uu dar naaz va man tarsāñ\nsuḳhan guftan che mushkil buud shab jaa.e ki man būdam",
        translation: "Every rival gave ear to his voice, his pride silenced me and I in my fear,\nI found no words to speak, my fear made the conversation difficult, last night, where I was.",
      },
      {
        original: "ḳhudā ḳhud mīr-e-majlis buud andar lā-makāñ 'ḳhusrav'\nmohammad sham.a-e-mahfil buud shab jaa.e ki man būdam",
        translation: "O Khusrau, I beheld a sacred gathering adorned by God Himself as the gracious Host,\nAnd Muhammad was shining as the radiant flame at its heart, last night, where I was.",
      },
      {
        original: "marā az ātishe-e-ishq-e-tū dāman soḳht ai 'ḳhusrav'\nmohammad sham.a-e-mahfil buud shab jaa.e ki man būdam",
        translation: "The fire of Your love has scorched my very garment, O Khusrau,\nAnd Muhammad was shining as the radiant flame at its heart, last night, where I was.",
      },
    ],
  },
  {
    id: 4,
    title: "Haq Ali Ali Ali Mawla Ali Ali",
    introCount: 2,
    language: "Urdu / Persian / Arabic",
    poet: "Traditional",
    chorus: {
      original: "Ali Ali Ali Maula Ali Ali\nShaah-e-mardaan Ali, la fataa illah Ali, sher-e-yazdaan Ali",
      translation: "Ali, Ali, Ali, my master, Ali, Ali\nKing of brave men Ali — there is none other like Ali — the Lion of God, Ali",
    },
    verses: [
      {
        original: "Ali imaam-e-manasto manam ghulam-e-Ali\nHaider-e-um qalandaram mastam\nBandaa-e-murtaza Ali hastam\nPeshwa-e-tamaam virdaanam\nKe sage kuu-e-sher-e-yazdaanam",
        translation: "Ali is the master of all, I am a slave of Ali\nI am Haideri (Haider Ali's devout) a saint drowned in devotion\nI am a mere servant of Ali the chosen one\nI am foremost among all intoxicated by devotion\nA mere dog on the streets of Ali (The Lion of God)",
      },
      {
        original: "Kabhi deewar hilti hai, kabhi dar kaanp jaata hai\nAli ka naam sunkar, ab bhi Khaibar kaanp jaata hai",
        translation: "The wall trembles sometimes, sometimes the door shakes\nUpon hearing the name of Ali, Khaibar (A Fort) still trembles",
      },
      {
        original: "Jap le jap le re manwa\nYahi naam sachha hai pyaare\nYahi naam tere sab dukh taare\nIsi naam ki barkat ne diye raaz-e-haqeekat khol\nShaah-e-mardaan Ali\nLa fataa illah Ali\nSher-e-yazdaan Ali",
        translation: "Chant the name of Ali, my heart\nFor this is the only true name\nFor only this name will repel all your sadness\nFor the blessings of only this name have revealed the truth\nThe king of brave men, Ali\nThere is none other like Ali\nThe Lion of God, Ali",
      },
      {
        original: "Tan par Ali, ho zubaan par Ali Ali\nMarjaau toh kafan par bhi likhna Ali Ali\nBaghair hubb-e-Ali mudd'aa nahin miltaa\nIbaadaton ka bhi hargiz silaa nahi milta",
        translation: "Ali is on my body, chants of Ali on my tongue\nIf I die, then write the name of Ali even on my shroud\nWithout the love of Ali, desires are not fulfilled\nEven prayers are certainly not answered",
      },
      {
        original: "Khudaa ke bandon suno ghaur se Khudaa ki kasam\nJisey Ali nahi miltey Khudaa nahi miltaa",
        translation: "Oh men of God, listen carefully, I swear to God\nThose who don't find Ali, can't find God either",
      },
      {
        original: "Basad talaash na ab kuch vus'at-e-nazar se milaa\nNishaan-e-manzil-e-maqsuud raahbar se milaa\nAli mile to mile Khaana-e-Khudaa sa humein\nKhudaa ko dhoondha to vo bhi Ali ke ghar se milaa",
        translation: "Don't search for anything else, just join the eternal search\nFollow the footprints to the desired destination\nTo find Ali is like finding the house of God\nWhen I looked for God, I found him in Ali's home",
      },
      {
        original: "Deed-e-haidar ki ibaadat, hai ye farmaan-e-nabi\nHai Ali ruh-e-nabi, jism-e-nabi, jaan-e-nabi\nGul-e-tathir Ali, haq ki shamsheer Ali\nPeeron ke peer Ali",
        translation: "Seeing Ali itself is worship, says the Prophet\nFor Ali is the soul, the body and life of the Prophet\nAli is the flower of purity, Ali is the sword of truth\nAli is the saint of all saints",
      },
      {
        original: "Bedam yahi toh paanch hai maqsood-e-qaaynaat\nKhairunnisaa, Hussain, Hasan, Mustafaa, Ali",
        translation: "These five are indeed the reason of creation\nKhairunnisaa (Fatima), Hussain, Hasan, Mustafa (Prophet Muhammad), Ali",
      },
    ],
  },
  {
    id: 5,
    title: "Be Khud Kiye Dete Hain",
    introCount: 1,
    language: "Urdu",
    poet: "Traditional",
    chorus: {
      original: "Bekhud kiye dete hain andaaz hijaabana\nAa dil mein tujhe rakh lun ay jalwa e janana",
      translation: "Your veiled manner drives me beyond myself into ecstasy\nCome, let me place you within my heart, O radiant beloved",
    },
    verses: [
      {
        original: "Mai ne masoom baharo me tumhe dekha hai\nMai ne pur noor sitaro me tumhe dekha hai\nMere mehboob teri parda nashini ki qasam\nMai ne ashko ki qataroo me tumhe dekha hai",
        translation: "I have seen you in the innocent blossoms of spring\nI have seen you in the luminous stars\nI swear by the unveiling of your face, my beloved\nI have seen you in the streams of my tears",
      },
      {
        original: "Bekhud kiye dete hain andaaz hijaabana\nAa dil mein tujhe rakh lun ay jalwa e janana",
        translation: "Your veiled manner drives me beyond myself into ecstasy\nCome, let me place you within my heart, O radiant beloved",
      },
      {
        original: "Kyun aankh milayi thi kyun aag lagai thi\nAb rukh ko chupa bethe karke mujhe deewaana",
        translation: "Why did you meet my eyes — why did you ignite that fire?\nNow you hide your face, having made me utterly mad",
      },
      {
        original: "Ji chahta hai tohfe mein bhejun unhein ankhein\nDarshan ka to darshan ho nazrane ka nazrana",
        translation: "My heart desires to send them my very eyes as a gift\nThat the gift of beholding be itself a tribute to beholding",
      },
      {
        original: "Peene ko to pee lunga bas arz zara si hai\nAjmer ka saaqi ho bagdaad ka mekhaana",
        translation: "I will drink, I only have one small request\nLet the cup-bearer be from Ajmer and the tavern from Baghdad",
      },
      {
        original: "Dunya mein hamein tumne jab apna banaya hai\nMehshar mein bhi keh dena ye hai mera deewaana",
        translation: "Since in this world you have made me your own\nOn the Day of Judgement too, declare: this one is my devoted one",
      },
    ],
  },
  {
    id: 6,
    title: "Tu Kuja Man Kuja",
    language: "Urdu / Persian",
    poet: "Hafiz Ibrahim Aadhil",
    chorus: {
      original: "Tu Kuja Man Kuja\nTu Kuja Man Kuja\nMine is a lowly station\nAnd yours exalted beyond imagination",
      translation: "Where are you — where am I?\nWhere are you — where am I?\nMine is a lowly station\nAnd yours exalted beyond imagination",
    },
    verses: [
      {
        original: "Tu Ameere Haram Main Faqeere Ajam\nTere Gun Aur Ye Lab Main Talab Hi Talab",
        translation: "You are commander of the holy sanctuary, and I a poor foreigner\nI am but a humble seeker, my sinful lips unworthy to sing your lofty praises",
      },
      {
        original: "Tu Ata Hi Ata\nIlham Hai Jama Tera\nQur'an Imaama Hai Tera\nMimbar Tera Arshe Bari\nYa Rehmatullil Aalameen",
        translation: "You are the everlasting blessing\nYou are gloriously adorned in the robe of divine revelation\nThe Quran forms your exalted turban\nThe highest heaven is your mimbar\nO Mercy for the Worlds",
      },
      {
        original: "Tu Kuja Man Kuja\nTu Kuja Man Kuja\nTu Kuja Man Kuja",
        translation: "Where are you — where am I?\nMine is a lowly station\nAnd yours exalted beyond imagination",
      },
      {
        original: "Mera Har Saans To Khoon Nichoray Mera\nTeri Rehmat Mager Dil Na Toray Mera\nQasa-e-zaat Hu Teri Khairat Hu\nTu Sakhee Mai Gada\nTu Haqeeqat Hai Main Sirf Ahsaas Hu\nTu Samandar Main Bhatkti Hui Pyaas Hu\nMera Ghar Khaak Par Aur Teri Reh Guzar",
        translation: "With every breath I take a step towards death\nYet I fail to accept your blessings (to absolve myself)\nFor I am a wretched being incomparable to your glory\nYou are the generous forgiving one while I am the beggar\nYou are reality, I merely perception\nYou are the ocean, I a wandering thirst\nMy dwelling is on the humble soil, and you journey beyond even the 7th heaven to Sidratul Muntaha",
      },
      {
        original: "Khusbu Teri Ju-e-Karam\nAankhein Teri Baab-e-Haram\nNoor-e-Azal Teri Jabeen\nYa Rehmat-al-lil-alameen",
        translation: "Your scent is the bringer of blessings\nYour eyes are the doors to the Haram sharif\nYour forehead shines with the eternal noor\nO Mercy to all the worlds",
      },
      {
        original: "Jagmagao Jo Halaat Ke Samnay\nAye Tera Tasavur Mujhay Thaamnay\nMeri Khush Qismati Mai Tera Ummati\nTu Jaza Mai Raza",
        translation: "When I panic against the trials of life\nI am calmed by thinking of you\nIt is my fortune that I am your follower\nYou are the reward, I am the wish",
      },
      {
        original: "Khairul Bashar Rutba Tera\nAawaaze Haq Khutba Tera\nAafaaq Tere Saame'een\nSaais Gibreele Ameen\nYa Rehmatullil Aalameen",
        translation: "You are the best of mankind\nYour sermons are the voice of haq\nThe heavens are your audience\nJibril the trustworthy is your horse keeper\nO Mercy to all the Worlds",
      },
      {
        original: "Nisbat Teri Imaan Hay\nKhusboo Teri Irfan hay\nTafseer Tere Khulq ki Quran Hi Quran Hay\nTu Hasil-e-Dunya O Deen\nYa Rehmat-al-lil-alameen",
        translation: "To be your follower is the testament of faith\nYour scent is the scent of wisdom\nYour glory is explained by the Quran itself\nYou are the gain of the world and religion\nO Mercy to all the worlds",
      },
      {
        original: "Tu Hai Ahraame Anwaar Baandhe Hue\nMain Duroodo Ki Dastaar Baandhe Hue\nKaaba E Ishq Tu Main Tere Chaar Soo\nTu Asar Main Dua",
        translation: "You are covered in the garment of illumination and splendour\nAnd I wear the humble turban cloth of salutations of you\nYou are the Kaaba of love and I make tawaf around you\nI am the dua and you its answer",
      },
      {
        original: "Dawa Hay Teri Chah Ka, Is Ummat-e-Gumrah Ka\nTere Siwa Koi Nahin\nYa Rehmat-al-lil-alameen\nDooryan Samney Say Jo Hatnay Lagein\nJaaliyon Say Nigahen Lipatney Lagein\nAansuon Ki Zuban Ho Meri Tarjuman\nDil Se Niklay Sada",
        translation: "This lost nation claims to be your follower\nThere is none besides you that can guide them\nO Mercy to all the worlds\nNow the vast distances are getting short\nAnd my eyes can see your blessed tomb\nLet my tears speak for me\nFrom the depths of my heart I say",
      },
    ],
  },
  {
    id: 7,
    title: "Bhar Do Jholi Meri Ya Muhammad ﷺ",
    language: "Urdu",
    poet: "Traditional",
    chorus: {
      original: "Bhar Do Jholi Meri Ya Muhammad\nLautkar Main Na Jaaoon Ga Khaali\nBhar Do Jholi Meri Sarkaar-e-Madina\nBhar Do Jholi Meri Taajdar-e-Madina",
      translation: "Fill my bag, O Muhammad\nI will not go back empty-handed\nFill my bag, O Owner of Madina\nFill my bag, O Sovereign of Madina",
    },
    verses: [
      {
        original: "Tumhaare aastane se zamaana kya nahi paata\nKoi bhi dar se khaali maangne waala nahi jaata",
        translation: "What does the world not receive at your doorstep?\nNo one who comes asking at your door leaves empty-handed",
      },
      {
        original: "Tum zamaane ke mukhtaar ho ya nabi\nBekaso ke madadgaar ho ya nabi\nSab ki sunte ho apne ho ya ghair ho\nTum ghareebo ke gham khwaar ho ya nabi",
        translation: "You are the chosen one of the age, O Prophet\nAnd the helper of the friendless, O Prophet\nYou listen to everyone, whether they are your own or strangers\nYou are the comforter of the poor, O Prophet",
      },
      {
        original: "Bhar Do Jholi Meri Ya Muhammad\nLautkar Main Na Jaaoon Ga Khaali\nBhar Do Jholi Meri Sarkaar-e-Madina\nBhar Do Jholi Meri Taajdar-e-Madina",
        translation: "Fill my bag, O Muhammad\nI will not go back empty-handed\nFill my bag, O Owner of Madina\nFill my bag, O Sovereign of Madina",
      },
      {
        original: "Hum hai ranj o musibat ke maare huwe\nSaqt mushkil me hai gum se haare huwe\nYa nabi kuch khudaara hame bheek do\nDar pe aaye hai jholi pasare huwe",
        translation: "I am struck with grief and hardship\nI am in great difficulty, defeated by sorrow\nO Prophet, give me some alms for the sake of God\nI have come to your door with my bag stretched open",
      },
      {
        original: "Hai mukhaalif zamaana kidhar jaaye hum\nHaalat e bekasi kisko dikhlaaye hum\nHum tumhare bhikaari hai ya Mustafa\nKiske aage bhalaa haath failaye hum",
        translation: "The times are against me, where should I go?\nTo whom should I show my state of helplessness?\nI am your beggar, O Mustafa\nIn front of whom else shall I spread my hands?",
      },
      {
        original: "Kuch nawaso ka sadqa ataa ho\nDar pe aaya hu bankar sawaali\nHaq se paayi woh shaan e kareemi\nMarhaba dono aalam ke waali",
        translation: "Let me gain some of your grandsons' charity\nI have come to your door to ask from you\nRightfully you have attained your beneficent glory\nWelcome, O Master of Both Worlds",
      },
      {
        original: "Uski qismat ka chamka sitaara\nJis pe nazr e karam tum ne daali\nZindagi baksh di bandagi ko\nAabroo deen e haq ki bachaali\nWoh muhammad ka pyaara nawasa\nJisne sajde me gardan kataali",
        translation: "The star of fate shines upon\nWhomever you look at with kindness and favor\nHe sacrificed his life to worship God\nAnd saved the honor of the religion of truth\nThat beloved grandson of Muhammad\nWhose neck was cut in prostration",
      },
      {
        original: "Hashr me unko dekhenge jis dam\nUmmati yeh kahenge khushi se\nAa rahe hai woh dekho mohammad\nJinke kaandhe pe kamli hai kaali",
        translation: "The moment they see him (Muhammad) on Armageddon\nHis followers will say with happiness\n\"Look, Muhammad is coming\"\n\"On whose shoulders is a black shawl\"",
      },
      {
        original: "Aashiq e mustafa ki azaan me allah allah kitna asar tha\nArsh waale bhi sunte the jisko\nKya azaan thi azaan e bilaali",
        translation: "By God, such influential power was in the adhan of Mustafa's adorer\nEven that which God and the angels listened to\nWhich adhan was it but the adhan of Bilal?",
      },
    ],
  },
  {
    id: 8,
    title: "Is Karam Ka Karoon Shukr Kaise Ada",
    language: "Urdu",
    poet: "Traditional",
    introCount: 1,
    chorus: {
      original: "Is Karam Ka Karoon Shukr Kaise Ada\nJo Karam Mujpe Mere Nabi Ne Kiya",
      translation: "How can I give thanks for this mercy\nThat my Prophet showed to me",
    },
    verses: [
      {
        original: "Be-bandagi, urooj kiya, banda kar diya\nTaara mere naseeb ka, tabinda kar diya\nItni badi huzoor ki banda-nawaaziyan\nMujhko mere sawaal ne sharminda kar diya",
        translation: "Without devotion, He elevated me and made me His servant\nThe star of my fortune He made brilliant and shining\nSo great is the Prophet's grace upon his servants\nMy own question has left me ashamed",
      },
      {
        original: "Is Karam Ka Karoon Shukr Kaise Ada\nJo Karam Mujpe Mere Nabi Ne Kiya\nMain Sajata Tha Sarkar Ki Mehafile\nMujko Har Gam Se Rab Ne Bari Kar Diya",
        translation: "How can I give thanks for this mercy\nThat my Prophet showed to me\nI used to adorn the gatherings of the beloved\nAnd the Lord freed me from every grief",
      },
      {
        original: "Lamha Lamha Hai Mujpar Nabi Ki Ata\nDosto Or Mangu Main Maula Se Kya\nKya Ye Kam Hai Ke Mere Khuda Ne Muje\nApne Mehbub Ka Ummati Kar Diya",
        translation: "Every moment the Prophet's blessing is upon me\nMy friends, what more could I ask of the Lord?\nIs it not enough that my God has made me\nA follower of His Beloved?",
      },
      {
        original: "Zikr Sarkar Ki Hai Bari Barkate\nMil Gai Rahate Azamate Rifa-Ate\nMain Gunahgaar Tha Be-Amal Tha Magar\nMustafa (ﷺ) Ne Muje Jannati Kar Diya",
        translation: "In the remembrance of the beloved are immense blessings\nRepose, greatness and elevation were granted\nI was sinful, I had no deeds — yet\nMustafa ﷺ made me worthy of Paradise",
      },
    ],
  },
  {
    id: 9,
    title: "Kamle Wale Muhammad Ton Sadqay",
    language: "Punjabi",
    poet: "Traditional",
    chorus: {
      original: "Kamle Wale Muhammad Ton Sadqay Mein Jan\nJaynain Aakay Ghareeban Dee Baan Par Laee\nMeree Baksheesh Waseela Muhammad Da Nan",
      translation: "I give my life in devotion to Muhammad — the one of the black shawl\nWho came and took hold of the hand of the helpless\nMy salvation is through the intercession of Muhammad",
    },
    verses: [
      {
        original: "Kamle Wale Muhammad Ton Sadqay Mein Jan\nJaynain Aakay Ghareeban Dee Baan Par Laee\nMeree Baksheesh Waseela Muhammad Da Nan",
        translation: "I give my life in devotion to Muhammad — the one of the black shawl\nWho came and took hold of the hand of the helpless\nMy salvation is through the intercession of Muhammad",
      },
      {
        original: "Oday Wajon Koi Dunya Tey Pyara Naheen\nOday Warga Koi Jag Tey Sahara Naheen\nJay Na Honday Muhammad Na Honda Jahan",
        translation: "Because of him there is nothing more beloved in this world\nThere is no support in the world like his\nIf Muhammad had not been, this world would not have been",
      },
      {
        original: "Dasso gairan ch roya te kehna layi\nPaida sohna je hoya te kehna layi\nKyon ni mangde tussi kali kamli di chchan\nJehne aake gareeban di bahn phad layi",
        translation: "Tell me — how can one weep in the presence of strangers?\nIf a beautiful one is born, what is there to say?\nWhy do you not seek the shade of the black shawl\nOf the one who came and took the helpless by the hand?",
      },
      {
        original: "Naal ungli ishare de chann todeya\nGaya suraj agan wal pichchan modeya\nKalma sohne Muhammad da padheya butan\nJehne aake gareeban di bahn phad layi",
        translation: "With the gesture of a finger he split the moon\nThe sun turned its back and headed towards fire\nIdols themselves recited the beautiful Kalima of Muhammad\nWho came and took the helpless by the hand",
      },
      {
        original: "Laya Badooan Noon Seenay Kamaal Hoya\nKoi Habshee To Hazrat Bilal Hoya\nAeye Dar Tey Sawali Noo Kitee Naeen Na\nJaynain Aakay Ghareeban Dee Baan Par Laee",
        translation: "He drew the Bedouins to his chest — what a miracle that was\nA man of Abyssinia became Sayyiduna Bilal\nNo supplicant at his door was ever turned away\nWho came and took hold of the hand of the helpless",
      },
      {
        original: "Weree Patar We Maran Tey Hasday Rahe\nFir Wee Rah-E-Khuda Sab Noon Dasday Rahe\nBaree Siftanch Parya Aeye Saara Quran",
        translation: "Even as enemies tried to kill him, he smiled\nStill he showed everyone the way of God\nThe entire Quran is filled with his praises",
      },
    ],
  },
  {
    id: 10,
    title: "Dam Mast Qalandar",
    language: "Punjabi / Sindhi",
    poet: "Traditional",
    chorus: {
      original: "Dam Mast Qalandar Must Must\nDam Mast Qalandar Must Must",
      translation: "With every breath I recite the name of Qalandar as if in a trance\nWith every breath I recite the name of Qalandar as if in a trance",
    },
    verses: [
      {
        original: "Ik Vird Hai Dam Dam Ali Ali\nSakhi Laal Qalandar Must Must\nJhoole Laal Qalandar Must Must",
        translation: "My practice is to recite the name of Ali with every breath\nI utter the great Qalandar's name as if in a trance\nI say Jhulelal as if in a trance",
      },
      {
        original: "Akhi Ja Malanga Tu Ali Ali Ali Akhi Ja Malanga\nAkhi Ja Malanga Sajea Pe Mun Lain Gay\nAj Ne Te Kal Saray Ali Ali Kain Gay",
        translation: "Keep reciting the name of Ali O devotee!\nKeep reciting for your utterance will be accepted eventually O devotee!\nIf not today, then tomorrow everyone will follow you in reciting his name O devotee!",
      },
      {
        original: "Dam Mast Qalandar Must Must\nDam Mast Qalandar Must Must",
        translation: "With every breath I recite the name of Qalandar as if in a trance\nWith every breath I recite the name of Qalandar as if in a trance",
      },
      {
        original: "Rab Ne Kinne Shaan Banaye\nBe Karma Te Karm Kamaye\nJehda Vi Tere Dar Te Aaye O Na Kadhi Vi Khaali Jaye",
        translation: "Such favour God has bestowed upon you\nSo that you may bestow it on the wretched\nWhosoever visits your door, never does he return empty handed",
      },
      {
        original: "Shana Uchiyaan Terian Peera\nHovan Door Haneriyaan Peera\nAasan hain Bateriyan Peera Sun Arzan Aj Meeriya Peera",
        translation: "Exalted is your glory my master\nThat the storms are chased away (by your glory) my master\nMy longing for you is manifold O master — today, listen to what I have to say O master",
      },
      {
        original: "Nazar Karam Di Pavi Sayyan\nBeriyan Banne Dhaavi Sayyan\nBhool Na Kidrey Jaawi Sayyan Laiyaan Tod Nibhaavi Sayyan",
        translation: "By attaining your guidance O master\nMy deserts have turned into fertile oasis\nDon't forget me O master — honour my attachment to you O master",
      },
    ],
  },
  {
    id: 11,
    title: "Ya Mustafa Nurul Khuda",
    language: "Urdu / Punjabi",
    poet: "Traditional",
    introCount: 7,
    chorus: {
      original: "Ya Mustafa Noor ul Huda Saani Tera Koi Nahiñ\nShams-ud-duha Koi Nahi Badr-ud-duja Koi Nahi",
      translation: "O Mustafa, Light of Guidance — there is no equal to you\nSun of the morning — there is none; Moon of darkness — there is none",
    },
    verses: [
      {
        original: "Karam Jab Aal-e Nabi Ka Shareek Hota Hai\nBigad Bigad Ke Har Ek Kaam Dheek Hota Hai",
        translation: "When one is blessed to belong to the Prophet's family\nEvery failing matter is set right",
      },
      {
        original: "Har Nafas Ishq-e Muhammad Ka Payaami Kar Lo\nZindagi Mit Ke Mohabbat Mein Dawaami Karlo",
        translation: "Make every breath a messenger of the love of Muhammad\nEvanesce your life in devotion to his affection in perpetuity",
      },
      {
        original: "BaadShaahi Hai Agar Dono Jahañ Ki Darkaar\nDosto Aao Mohammad Ki Ghulami Kar Lo",
        translation: "If you desire to rule both the worlds\nCome and devote yourselves to the service of Muhammad first",
      },
      {
        original: "Allah Ki Ham JalwaGari Dekh Rahe Haiñ\nYa Husn o Jamaal-e Madani Dekh Rahe Haiñ",
        translation: "Are we witnessing the splendour of Allah's creations\nOr admiring the charm and elegance of the Medina-dweller?",
      },
      {
        original: "Jis Waqt Padho Salle-ala Aal-e Muhammad\nSamjho Ke Rasool-e Arabi Dekh Rahe Haiñ",
        translation: "The moment you recite salutations, O family of Muhammad\nUnderstand — the Prophet of the Arabs is beholding you",
      },
      {
        original: "Hadd-e Tauseef Se Bhi Naam Hai Baala Tera\nKe Khuda Aap Hai Khud Chaahne Waala Tera",
        translation: "Your exaltation knows no bounds\nFor God Himself loves you fervently",
      },
      {
        original: "Tere Sadqe Hui Manzoor Duaa-e Aadam\nRoz-e Awwal Hi Tha Maujood Ujala Tera",
        translation: "It is for your sake that Adam's supplication was accepted\nYour brilliance was present from the commencement of the universe",
      },
      {
        original: "Kaali Kamli Waale Aaqa\nSaani Tera Koi Nahiñ\nRasool Aur Bhi Aaye Jahaan Mein, Lekin\nKaali Kamli Waale Aaqa\nSaani Tera Koi Nahiñ",
        translation: "O Master of the black shawl\nThere is no equal to you\nOther Prophets also came to this world — but\nO Master of the black shawl\nThere is truly no equal to you",
      },
      {
        original: "Shah-e Yasrabi Tere Husn Ki\nKise Taab Jo Kare Hamsari\nNa Guloñ Meiñ Aisi Shuguftgi\nNa Ye Rango Boo Na Ye Saadgi\nYe Anokhi Chhab Ye Nayi Phaban\nYe Adaaeñ Pyaari Ye Saadgi\nTeri Misl Koi Hua Na Ho\nTere Sadqe Jaauñ Maiñ Ya Nabi",
        translation: "O King of Yasrib (Medina) — who has the capacity to rival your beauty?\nNo flower blooms with such radiance\nNone has such colour, fragrance and simplicity\nThis unique grace, this fresh beauty\nThese endearing manners, this simplicity\nThere has never been nor will be anyone like you\nI sacrifice myself for you, O Prophet",
      },
      {
        original: "Har-Har Kundal-Kundal Utte Aashiq Da Dil Dole\nHusn Tere Di Sift Ki Aakhaañ Kaafir Kalma Bole",
        translation: "On every lock of your hair the lover's heart sways\nIn praise of your beauty even the disbeliever utters the Kalima",
      },
      {
        original: "Phire Zamaane Meiñ Chaar Janib\nNigaar-e Yakta Tumhi Ko Dekha\nHaseen Dekhe Jameel Dekhe\nPar Ek Tumsa Tumhi Ko Dekha",
        translation: "Searching in every direction through the ages\nThe peerless one — I have seen only you\nI have seen the beautiful, I have seen the handsome\nBut one like you — only you have I seen",
      },
      {
        original: "Hue Haiñ Hazrat-e Yusuf Haseeñ Zamaane Meiñ\nMagar Unheiñ Bhi Tere Husn Ki Zaqaat Mili",
        translation: "Sayyiduna Yusuf was beautiful in his age\nYet even he received but a fraction (zakat) of your beauty",
      },
      {
        original: "Khatm-e Rusul Khair-ul Amal Koi Nahi Tera Badal\nAayeena-e Husn-e Azal Tere Siwa Koi Nahiñ",
        translation: "The seal of prophets, no one can take your place in righteous deeds\nIn the mirror of eternal beauty, there's no one else but you",
      },
      {
        original: "Jaayeñ Kahañ Ham Be-Nawa Aaqa Tere Dar Ke Siwa\nHam BeKasoñ Ka Aasra Ya Mustafa Koi Nahiñ",
        translation: "Where can we — the poor ones — go except to your door?\nO Chosen One, we the helpless have no refuge except you",
      },
      {
        original: "Ai Mazhar-e Noor-e Khuda Tum Sa Kahañ Hai Doosra\nTum Ho Imaam-ul Ambiya Tum Sa Hua Koi Nahiñ",
        translation: "O manifestation of God's Light, where is anyone like you?\nYou're the leader of all prophets, there's no one else like you",
      },
    ],
  },
  {
    id: 12,
    title: "O Laal Meri (Shahbaz Qalandar)",
    language: "Punjabi / Sindhi",
    poet: "Traditional",
    chorus: {
      original: "O Laal Meri Pat Rakhiyo Bala Jhoole Laalan\nSindri Da Sehvan Da Sakhi Shabaaz Qalandar",
      translation: "O red robed Lord, may I always be protected\nO lord of Sindh and sire of Sehwan — O noble Shahbaz Qalandar",
    },
    verses: [
      {
        original: "Chaar Charaag Tere Baran Hamesha\nPanjwa Baaran Aayi Bala Jhoole Laalan",
        translation: "O Lord, your shrine is always lighted with four lamps\nAnd here I come to light a fifth lamp in your honor",
      },
      {
        original: "O Laal Meri Pat Rakhiyo Bala Jhoole Laalan\nSindri Da Sehvan Da Sakhi Shabaaz Qalandar",
        translation: "O red robed Lord, may I always be protected\nO lord of Sindh and sire of Sehwan — O noble Shahbaz Qalandar",
      },
      {
        original: "Duma Dum Mast Qalandar, Duma Dum Mast Qalandar\nAli Dum Dum De Andar, Ali Dum Dum De Andar",
        translation: "My breath is for the jubilant saint\nOur Master Ali's divinely breath in every breath of yours",
      },
      {
        original: "Uchra Roza Peera Tera, Uchra Roza Peera Tera\nGaith Wage Gharyaal Bala Jhoole Laalan",
        translation: "Oh my mentor, your shrine is high\nSongs are played in sync with the clock — long live O Saint!",
      },
      {
        original: "Ghanan Ghanan Teri Nobat Waagay\nNaal Vajay Gharyaal Bala Jhoole Laalan",
        translation: "O Lord, may your illustrious name ring out in Hind and Sindh\nMay the bells ring out your good glory day and night",
      },
    ],
  },
  {
    id: 13,
    title: "Balaghal Ula Bi Kamalihi",
    introCount: 1,
    language: "Urdu / Persian / Arabic",
    poet: "Sa'di Shirazi / Traditional",
    chorus: {
      original: "Koi had hai un ke urooj ki\nBalaghal-ula bi-kamaalihi\nKashafad-duja bi-jamaalihi\nHasunat jameeu khisaalihi\nSallu alaihi wa aalihi",
      translation: "Is there any limit to his ascent?\nHe reached the highest place through his perfection\nHe drove out the darkness through his beauty\nBeautified were all his characteristics\nSend blessings upon him and his family",
    },
    verses: [
      {
        original: "Suhaani raat thi aur pur-sukoon zamaana tha\nAsar mein dooba hua jazb-e-aashiqana tha\nUnhein to arsh pe mehboob ko bulaana tha\nHawas thi deed ki meraaj ka bahaana tha",
        translation: "It was a beautiful night and the age was full of tranquility\nThe loving attraction was fully engulfed in effect\nHe (God) had to call His beloved to the heavenly throne\nHe longed to see him — the 'ascension' was just an excuse!",
      },
      {
        original: "Ye kamaal-e-husn ka mojiza\nKe firaaq haq bhi na seh saka\nShab-e-meraaj liya arsh-e-bareen par bulvaaye\nSadma-e-hijr Khuda se bhi gavaara na hua",
        translation: "This is the miracle of the perfection of beauty\nThat even Allah did not want separation\nOn the night of ascension, He called Muhammad to the Sublime Throne\nThe separation was something God did not want",
      },
      {
        original: "Sar-e-la-makaan se talab hui\nSoo-e-muntaha wo chale nabi\nKoi had hai un ke urooj ki\nBalaghal-ula bi-kamaalihi",
        translation: "A command came from the Placeless Origin\nBeyond the Sidrat-ul-Muntaha the prophet went\nIs there any limit to his ascent?\nHe reached the highest place through his perfection",
      },
      {
        original: "Khair-ul-wara sadr-ud-duqa najm-ul-huda noor-ul-ula\nShams-ud-duha badr-ud-duja yaani Muhammad Mustafa\nAaqa rawa saalaar-e-deen\nYa rehmatal-lil-aalameen\nAa muqtada-e-mursaleen\nAa peshwa-e-ambiya",
        translation: "Best of creations, epitome of subtlety, star of guidance, light of the highest place\nSun of morning, moon of night — as in, Muhammad Mustafa\nO lord and lawful chief of the religion\nO mercy for the worlds\nO prevailing leader of the messengers\nO premier of the prophets",
      },
      {
        original: "Jannat nishaan-e-koo-e-to\nWash-shams-e-eemaan roo-e-to\nWal-lail wasf-e-roo-e-to",
        translation: "Heaven is a sign of your street\nAnd the sun of faith is your face\nAnd the night praises your face",
      },
      {
        original: "Khoobi ye rooyat wad-duha\nIsm-e-to ism-e-aazami\nJism-e-to jaan-e-aalami\nZaat-e-to fakhr-e-aadmi\nShaan-e-to shaan-e-kibriya",
        translation: "The morning is the goodness of your face\nYour name is the greatest name\nYour body is the life of the world\nYour rank is the pride of mankind\nYour glory is the glory of the Almighty",
      },
      {
        original: "Jo gaya hai farsh se arsh tak\nWo Buraaq le gaya be-dharak\nLaten zulf ki jo gaeen latak\nTo jahaan saara gaya mehek\nKoi had hai un ke urooj ki",
        translation: "He who went from the ground to God's Throne\nHe took up Buraq fearlessly\nAs the locks of his hair dangled\nThe entire world became fragrant\nIs there any limit to his ascent?",
      },
      {
        original: "Yahi ibtida yahi intiha\nYe farogh jalwa-e-haq-numa\nKe jahaan saara chamak utha\nKashafad-duja bi-jamaalihi",
        translation: "This is the beginning, and this is the end\nThis brightness is the manifestation of the truth-revealer\nSuch that the entire world rose shining\nHe drove out the darkness through his beauty",
      },
      {
        original: "Na falak na chaand taare na seher na raat hoti\nNa tera jamaal hota na ye kaainaat hoti",
        translation: "Neither sky nor moon, nor stars, nor daybreak would have existed\nIf not for your beauty, this universe would not have existed",
      },
      {
        original: "Wo saraapa rehmat-e-kibriya\nKe har ek pe jis ka karam hua\nYe Quraan-e-Paak hai barmaala\nHasunat jameeu khisaalihi",
        translation: "That incarnation of the Almighty's mercy\nHe whose generosity reached everyone\nHe (Muhammad) is the open Qur'an in front of all\nBeautified were all his characteristics",
      },
      {
        original: "Wohi haq-nigar wohi haq-numa\nRukh-e-Mustafa hai woh aaeena\nKe Khuda-e-Paak ne khud kaha\nSallu alaihi wa aalihi",
        translation: "It alone is the truth-guarder and truth-revealer\nThe face of Mustafa is that mirror\nSuch that Holy God said Himself\n\"Send blessings upon him and his family\"",
      },
      {
        original: "Mera deen ambar-e-warsi\nBa-Khuda hai ishq-e-Muhammadi\nMera zikr-o-fikr hai bas yahi\nSallu alaihi wa aalihi",
        translation: "My faith is an inherited fragrance\nBy God, it is the love of Muhammad\nMy only utterance and thought is\n\"Send blessings upon him and his family\"",
      },
      {
        original: "Che kunam bayaan-e-kamaal-e-oo\nBalaghal-ula bi-kamaalihi\nChe farogh karda jamaal-e-oo\nKashafad-duja bi-jamaalihi\nMan hairatam za-khisaal-e-oo\nHasunat jameeu khisaalihi\nDil-o-jaan-e-ma baa-khayaal-e-oo\nSallu alaihi wa aalihi",
        translation: "What can I say about his perfection!\nHe reached the highest place through his perfection\nWhat brightness his beauty has created!\nHe drove out the darkness through his beauty\nI am amazed by his characteristics!\nBeautified were all his characteristics\nOur hearts and lives are occupied by thoughts of him!\nSend blessings upon him and his family",
      },
      {
        original: "Ae mazhar-e-noor-e-Khuda\nBalaghal-ula bi-kamaalihi\nMaula Ali muskhil-kusha\nKashafad-duja bi-jamaalihi\nHasnain jaan-e-Faatima\nHasunat jameeu khisaalihi\nYaani Muhammad Mustafa\nSallu alaihi wa aalihi",
        translation: "O manifestation of the divine light of God\nHe reached the highest place through his perfection\nMaster Ali, resolver of troubles\nHe drove out the darkness through his beauty\nHassan and Hussein, the two dearest of Fatima\nBeautified were all his characteristics\nMeaning, Muhammad Mustafa\nSend blessings upon him and his family",
      },
    ],
  },
  {
    id: 14,
    title: "Diyar-E-Ishq Mein",
    language: "Urdu",
    poet: "Allama Iqbal",
    chorus: {
      original: "Diyar e ishq mein apna makaam paida kar\nNay Zamana Naye Subho Shaam paida kar",
      translation: "Find your place in the realm of love\nBuild a new era, a new dawn, a new eve!",
    },
    verses: [
      {
        original: "Diyar e ishq mein apna makaam paida kar\nNa Tu Zameen Kay Liye Hay Na Asmaan Keh Liye\nJahan Hay Teray Liye Tu Nahin Jahan Ke Liyeh",
        translation: "Find your place in the realm of love\nYou are neither for the earth nor for the heavens\nThe world is for you, not you for the world",
      },
      {
        original: "Khudi Ko Kar Buland Itna Kay Har Taqdeer Say Pehlay\nKhuda Banday Say Khud Puche, Bata Teri Raza Kya Hay",
        translation: "Raise your khudi (self/soul) to such heights that before every decree\nThe divine asks from you himself: Tell me (O Servant) what you desire?",
      },
      {
        original: "Yeh Hikmat-e-Malakooti Yeh Ilm-e-Lahooti\nHaram Kay Dard Ka Darman Nahin To Kuch Bhi Nahin\nYeh Zikr-e-Neem Shabi, Yeh Muraqabe, Yeh Suroor\nTeri Khudi Kay Nigheban Nahin To Kuch Bhi Nahin",
        translation: "This angelic art, this divinely knowledge\nIf it can't cure the illnesses of Muslims then it is nothing!\nYour deep remembrance, meditation and intense spiritual pleasures\nIf they aren't guardians of your Khudi (self/soul) then they are of no value",
      },
      {
        original: "Khirad Nay Keh Bhi Diya La Ila To Kya Hasil\nDil-o-Nigah Musalman Nahin to Kuch Bhi Nahin",
        translation: "If intelligence incites man to say 'No god but He' it brings no gain\nIt is worthless unless affirmed by heart and conscience",
      },
      {
        original: "Zindagani Hay Sadaf, Qatra-e-Neesan Hay Khudi\nWoh Sadaf Kya Jo Katray Ko Gogar Kar Na Sakay\nHo Agar Khudnigar-o-Khudgar-o-Khudgeer Khudi\nYeh Bhi Mumkin Hay Kay Phir Maut Say Bhi Tu Mar Ne Sakay",
        translation: "Life is like a shell and Khudi is like the raindrop\nIt is unbecoming of the shell if it cannot turn the raindrop into a pearl\nIf the self becomes self preserving, self creating and self sustaining\nThen you may even defy death itself!",
      },
      {
        original: "Mann ki Dunya Mein Na Paya Mein Nay Afraangi ka Raaj\nMann ki Dunya Mein na Dekhe Mainay Shaikh-o-Barhaman\nMann ki Daulat Haath aati Hay to Phir Jaati Nahin\nTann ki Daulat Chaon Hay, Aata hay Tann Jata Hay Tann",
        translation: "In this world of the internal, I do not find the rule of colonisers\nIn this internal realm I did not find Sheiks and Brahmans fighting\nInward wealth (knowledge and spirituality) once acquired is never lost\nMaterial wealth is like a shadow, it comes and goes",
      },
      {
        original: "Tu Jhuka Jab Ghair ke, Agay na Mann, Tera na tann\nGhafil Na Ho Khudi Say, Kar Apni Paasbani\nShayad Kisi Haram ka, Tu Bhi Hay Astaana\nYeh Bandagi Gadai! Woh Bandagi Khudai!\nYa Bandai Khuda Ban, Ya Bandai Zamana",
        translation: "If you surrender to another's might you will lose your spiritual and material wealth\nDo not neglect your Khudi, be a defender of your self\nPerhaps you are the support of your community\nSlavery to God is divinity, slavery to the world is disgrace!\nNow you can choose to be a man of God, or a man of the world!",
      },
      {
        original: "Mera Tareeq Ameeri nahin Fakeeri Hay\nKhudi na Baiche, Ghareebi Mein Naam Paida Kar\nDiyar e ishq mein apna makaam paida kar\nNay Zamana Naye Subho Shaam paida kar",
        translation: "My way is the way of the fakeer, I do not seek wealth and fortune\nDon't sell yourself, make a name for yourself in poverty!\nFind your place in the realm of love\nBuild a new era, a new dawn, a new eve!",
      },
    ],
  },
  {
    id: 15,
    title: "Tu Kareemi (Mevlana Rumi Kalam)",
    language: "Persian (Farsi)",
    poet: "Mevlana Jalal-ud-Din Rumi",
    chorus: {
      original: "Tu Kareemi Man Kamina Barda Um\nLaikin Az Lutf E Shuma Parwarda Um",
      translation: "You are the Gracious One and I am the ignoble\nNow waiting at Your door, O my Cherisher",
    },
    verses: [
      {
        original: "Zindagi Aamad Bara'ay Bandagi\nZindagi Be Bandagi Sharmindagi\nYaad E Oo Sarmaya E Eeman Bo'ad\nHar Gada Az Yaad E Oo Sultan Bo'ad",
        translation: "With devotion life becomes beautiful\nAnd without, what is life but disgrace\nRemembrance of Him is the foundation of faith\nBeggars transform into kings due to His Remembrance",
      },
      {
        original: "Sayyad O Sarwar Mohammad Noor E Jaan\nMehtar O Behtar Shafi E Mujrimaan\nChoon Muhammad Pak E Shud Az Nar O Dood\nHer Kaja Roo Karad Wajhullah Bood",
        translation: "Liege lord, O Muhammad you are the light of our lives\nThe mighty and the best intercessor of the wrong-doers\nSince Muhammad was purified of worldly things\nWhatever direction He turned is found the Face of Allah",
      },
      {
        original: "Tu Kareemi Man Kamina Barda Um\nLaikin Az Lutf E Shuma Parwarda Um",
        translation: "You are the Gracious One and I am the ignoble\nNow waiting at Your door, O my Cherisher",
      },
      {
        original: "Shahbaaz Lamakani Jaan E Oo\nRehmatal Lil Aalameen Dar Shaan E Oo\nMehtareen O Behtareen E Ambiyaah\nJuz Muhammad Naist Dar Arz O Samaa",
        translation: "The noble soul of his is like a falcon of the highest heavens\nBeing 'the mercy of the worlds' is his eminence\nThe mightiest and the best of all Prophets is he\nExcept Muhammad in land or sky there is none worthy",
      },
      {
        original: "Aan Mohammad Hamid O Mahmoud Shud\nShakal E Abid, Sorat E Ma'bood Shud\nAuliyah Allah O Allah Auliyah\nYani Deed E Peer Deed E Kibriyah",
        translation: "He is the praise of God, divinely praised in abundant\nHe is the reflection of God in the shape of a worshiping servant\nThe friends of God are like God because God is their friend\nAnd in this way he who has seen his Master, has seen God's Glory",
      },
      {
        original: "Her Ka Peer O Zaat Haqra Aik Na Deed\nNai Mureed O Nai Mureed O Nai Mureed\nMaulvi Hargiz Na Shud Maula E Rum\nTa Ghulaam E Shams Tabraizi Na Shud",
        translation: "If one doesn't see his spiritual Master as reflection of God\nHe is not a mureed, not a mureed, not a mureed!\nMevlana could never be Mevlana Rumi\nIf he had not devoted himself to Shams-e-Tabrizi",
      },
    ],
  },
  {
    id: 16,
    title: "Mera Piya Ghar Aaya",
    language: "Punjabi",
    poet: "Baba Bulleh Shah",
    chorus: {
      original: "Mera Piya ghar aaya\nO laalni\nMera Piya ghar aaya",
      translation: "My beloved (shaykh) has come to my home!\nO laalni!\nMy beloved (shaykh) has come to my home!",
    },
    verses: [
      {
        original: "Aavo ni saiyyon\nRal deyo ni vadhaai\nMain var paaya sona mahi",
        translation: "Come, everyone\nIt's time to celebrate!\nLook how fortunate I am to have such a beautiful lover!",
      },
      {
        original: "Ghadiyaal devo nikaalni\nO piya ghar aaya\nSaanu Allah milaaya\nHun hoya fazl kamaalni",
        translation: "Forget about what time it is!\nMy beloved has come home\nIt's like I'm meeting Allah\nGod has been so kind! I feel divine now that he is here with me!",
      },
      {
        original: "Ajj taan roz mubaarak chaddheya\nMaahi mere vede vadeya\nMera Piya ghar aaya",
        translation: "Every day is a day for celebration\nMy beloved is going to be home soon\nMy beloved (shaykh) has come to my home!",
      },
      {
        original: "Ghadi ghadi ghadiyaal vajaave\nRaen vasl di piya ghataave\nMere mann di baat na pave",
        translation: "The clock keeps ticking and it scares me\nThe night of separation is on its brink\nWill my heart's desire be fulfilled?",
      },
      {
        original: "Hathaan ja sutto ghadiyaal ni\nAnhad vaaja vaje suhaana\nMutrib sughda taan taraana\nBhul gaya ay namaaz dogana\nMadh piyaala dein kalaal ni",
        translation: "Throw away the clock! Let time stand still\nThe music plays limitlessly\nA singer is singing his song\nThere's no time to even pray\nFill my glass to the brim!",
      },
    ],
  },
  {
    id: 17,
    title: "Tere Qurban Pyaare Muhammad ﷺ",
    language: "Urdu",
    poet: "Traditional",
    chorus: {
      original: "Tere qurban pyare Mohammed\nGir raha hoon mujhe bhi sambhalo",
      translation: "I sacrifice myself for you, beloved Muhammad ﷺ\nI am falling — hold me, save me",
    },
    verses: [
      {
        original: "Apne pyare nawaso ka sadqa\nYa nabi meri jholi mein daalo",
        translation: "For the sake of your beloved grandchildren\nO Prophet, place (blessings) into my vessel",
      },
      {
        original: "Koi apna nahi roze mehshar\nHe yaha nafso nafsi ka aalam\nHam ghunahgaar hai ya Mohammed\nApni kamli mein hamko chupalo",
        translation: "On the Day of Judgement no one will be there for another\nEvery soul will be crying out for itself\nWe are sinners, O Muhammad\nHide us beneath your black shawl",
      },
      {
        original: "Noor se noor milne chala hai\nMustafa se khuda keh raha hai\nYe hai miraj ki raat pyare\nAapne chehre se parda hataalo",
        translation: "Light is moving to meet light\nGod is calling out to Mustafa\nThis is the night of Miraj, beloved\nLift the veil from your blessed face",
      },
      {
        original: "Dur ho jayenge sab andhere\nNoor hi noor ankhon mein hoga\nDekhna hai agar unka jalwa\nApne dil ko madina banalo",
        translation: "All darkness will fade away\nThere will be nothing but light before your eyes\nIf you wish to behold his radiance\nMake your heart into Madina",
      },
    ],
  },
  {
    id: 18,
    title: "Khwaja E Khwajagaan",
    introCount: 1,
    language: "Urdu",
    poet: "Traditional",
    chorus: {
      original: "Kerdo Kerdo Karam Murshid-E-Mohtaram\nTum Ko Bhaija Gaya Hai Karam K Liyeah",
      translation: "Bestow, bestow your mercy, O Revered Murshid\nYou were sent for the very purpose of mercy",
    },
    verses: [
      {
        original: "Charaagh-E-Chisth Shah-E-Auliya Ghareeb Nawaaz\nBahaar-E-Anjum-E-Mustafa Ghareeb Nawaaz\nKhawaja-E-Khawajgan Haami-E-Bekasa\nIljita Sun Lo Shah-E-Umam K Liyeah",
        translation: "Lamp of the Chishti order, King of Saints, Patron of the poor\nBloom of the stars of Mustafa ﷺ, Patron of the poor\nO Master of Masters, protector of the helpless\nHear this plea, O King of Nations",
      },
      {
        original: "Kerdo Kerdo Karam Mere Khuwaja Piya\nGer Tum Na Karo Gay To Karam Kaun Karay Ga\nJhooli Meri Tumhare Siwa Kaun Bharay Ga\nMere Khuwaja Piya Kerdo Kerdo Karam",
        translation: "Bestow, bestow your mercy, O my beloved Khwaja\nIf you do not show mercy, then who will?\nWho besides you will fill my empty vessel?\nO my beloved Khwaja, bestow, bestow your mercy",
      },
      {
        original: "Tera Karam Nahi To Qayamat Hai Zindagi\nTera Karam Ho Jab To Salaamt Hai Zindagi",
        translation: "Without your mercy, life is like Judgement Day\nWhen your mercy comes, life is safe and whole",
      },
      {
        original: "Hai Tumhari Talab Haasil-E-Bandagi\nIs Say Barh Ker Nahi Hai Ibadat Koi\nMere Sajday Hein Ey Khuwaja Hind-Al-Wali\nBus Tumhare He Naqsh-E-Qadam K Liyeah",
        translation: "Seeking you is the very fruit of devotion\nThere is no worship greater than this\nMy prostrations, O Khwaja, Protector of Hind\nAre only for the sake of your blessed footsteps",
      },
      {
        original: "Noor-E-Shah-E-Najaf Mere Khuwaja Piya\nTere Chaukhat Pay Waliyon Nai Sajda Kia\nKhaaliq-E-Dojahaan Say Yeah Rutba Mila\nTere Darbaar Faiz-O-Karam K Liyeah",
        translation: "Light of the King of Najaf, O my beloved Khwaja\nAt your threshold the saints themselves have prostrated\nThis rank was granted by the Creator of both worlds\nYour court exists for the purpose of grace and mercy",
      },
      {
        original: "Shah-E-Ajmer Mera Masiha Hai Tu\nDard Mandoon Ke Dukh Ka Madawa Hai Tu\nTeri Nisbat Ka Daman Rahay Haath Mein\nBus Dawa Hai Yeah He Ranj-O-Gham K Liyeah",
        translation: "O King of Ajmer, you are my healer\nYou are the remedy for the pain of the suffering\nMay the hem of your connection remain in my hand\nFor this alone is the cure for all grief and sorrow",
      },
      {
        original: "Kamraan Hath Hai Sayyad-E-Mehrbaan\nHai Tera Kaam Khuwaja Khata Poshiyan\nLaaj Rakhna Fana Ki Moeen-E-Jahaan\nHashr Mein Taajdaar-E-Haram K Liyeah",
        translation: "Kamraan's hand is held by the merciful Sayyid\nYour work, O Khwaja, is to conceal the faults of others\nUphold the honour of Fana, O Helper of the World\nOn the Day of Judgement, for the sake of the King of the Haram",
      },
    ],
  },
  {
    id: 19,
    title: "Yeh Jo Halka Halka Suroor Hai",
    language: "Urdu",
    poet: "Abdul Hameed Adam / Nusrat Fateh Ali Khan",
    introCount: 8,
    chorus: {
      original: "Yeh jo halka halka suroor hai\nYeh teri nazar ka kusoor hai\nKe sharaab peena sikha diya",
      translation: "This gentle, sweet intoxication\nIs the fault of your eyes\nThat taught me how to drink (lose myself in devotion)",
    },
    verses: [
      {
        original: "Saaqi ki har nigaah pe bal kha ke pee gaya\nLehron se khelta hua lehra ke pee gaya",
        translation: "In awe of every glance of the cup-bearer, I drank deeply\nPlaying with the waves, swaying, I drank",
      },
      {
        original: "Ae rehmat-e-tamaam, meri har khata muaaf\nMein inteha-e-shoq mein ghabra ke pee gaya",
        translation: "O mercy complete, forgive my every sin\nIn the height of my yearning, I drank in agitation",
      },
      {
        original: "Peeta baghair izn, yeh kab thi meri majaal\nDar-parda chashm-e-yaar ki shah paa ke pee gaya",
        translation: "Drinking without permission — when was this ever within my power?\nI drank having found the hidden signal in the beloved's glance",
      },
      {
        original: "Zahid, yeh meri shokhi-e-rindana dekhna\nRehmat ko baaton baaton mein behla ke pee gaya\nTauba ko torh taarh thara ke pee gaya",
        translation: "O ascetic, witness my brazen, wandering ways\nI charmed mercy itself with words, and drank\nI broke my repentance, cast it aside, and drank",
      },
      {
        original: "Udi udi ghataye aati hain\nMutribon ki nawaen aati hain\nKis ke gaisu khule hain saawan mein\nMehki mehki hawaen aati hain\nAao sehn-e-chaman mein raqs karein\nSaaz le kar ghataye aati hain",
        translation: "The clouds come drifting, drifting in\nThe melodies of the musicians come floating\nWhose tresses have come undone in the monsoon?\nThe fragrant breezes are coming\nCome, let us dance in the garden's courtyard\nThe clouds come carrying music with them",
      },
      {
        original: "Dekh kar unki akhriyon ko, Adam\nMaikadon ko hayaen aati hain",
        translation: "Seeing the corners of their eyes, O Adam\nEven the taverns are struck with awe",
      },
      {
        original: "Paas rehta hai, door rehta hai\nKoi dil mein zaroor rehta hai\nJab se dekha hai unki aankhon ko\nHalka halka suroor rehta hai",
        translation: "Near yet far, someone surely dwells within the heart\nEver since I saw their eyes\nA gentle, sweet intoxication remains",
      },
      {
        original: "Aese rehte hain woh mere dil mein\nJaise zulmat mein noor rehta hai\nAb Adam ka yeh haal hai har waqt\nMast rehta hai, choor rehta hai",
        translation: "They dwell in my heart just so\nAs light dwells within darkness\nSuch is Adam's condition at every moment\nHe remains intoxicated, he remains absorbed",
      },
      {
        original: "Yeh jo halka halka suroor hai\nYeh teri nazar ka kusoor hai\nKe sharaab peena sikha diya\nTere pyaar ne, teri chaah ne\nTeri behki behki nigaah ne\nMujhe ek sharaabi bana diya",
        translation: "This gentle, sweet intoxication\nIs the fault of your eyes\nThat taught me how to drink\nYour love and your longing\nYour swaying, intoxicating glances\nHave made me into a drunkard",
      },
      {
        original: "Sharaab kaisi, khumaar kaisa\nYeh sab tumhaari nawazishen hain\nPilaayi hai kis nazar se tu ne\nKe mujhko apni khabar nahi hai",
        translation: "What wine, what intoxication —\nAll of this is your grace and favour\nWith what a glance you made me drink\nThat I have lost all awareness of myself",
      },
      {
        original: "Saara jahaan mast\nJahaan ka nizaam mast\nDin mast, raat mast\nSahar mast, shaam mast\nKhum mast, sheesha mast\nSabu mast, jaam mast\nHai teri chashm-e-mast se har khaas-o-aam mast",
        translation: "The entire world is intoxicated\nThe order of the world is intoxicated\nDay intoxicated, night intoxicated\nDawn intoxicated, dusk intoxicated\nThe cask intoxicated, the glass intoxicated\nThe vessel intoxicated, the cup intoxicated\nThrough your intoxicated eyes, every person great and common is drunk",
      },
      {
        original: "Yoon to saaqi har tarah ki tere maikhaane mein hai\nWoh bhi thori si jo inn aankhon ke paimaane mein hai\nSab samajhta hoon teri ishvaagari, ae saaqi\nKaam karti hai nazar, naam hai paimaane ka",
        translation: "Every kind of wine is in your tavern, O cup-bearer\nIncluding a little of what lives within the vessel of these eyes\nI understand all your coquetry, O cup-bearer\nIt is the glance that does the work — the cup is only its name",
      },
      {
        original: "Tera pyaar hai meri zindagi\nBas meri zindagi tera pyaar hai\nNa namaaz aati hai mujhko na wuzu aata hai\nSajda kar leta hoon jab saamne tu aata hai",
        translation: "Your love is my life\nMy life is nothing but your love\nI know neither prayer nor ablution\nYet I prostrate whenever you appear before me",
      },
      {
        original: "Mein azal se banda-e-ishq hoon\nMujhe zohd-o-kufr ka gham nahi\nMere sar ko dar tera mil gaya\nMujhe ab talaash-e-Haram nahi\nMeri bandagi, hai woh bandagi\nJo muqeed-e-dair-o-Haram nahi\nMera ek nazar tumhein dekhna\nBa Khuda namaaz se kam nahi",
        translation: "From eternity I have been a servant of love\nI am troubled neither by piety nor by disbelief\nMy head has found your threshold\nI no longer search for the Haram\nMy devotion is that devotion\nWhich is not bound by temple or mosque\nOne single glance at you —\nBy God, it is no less than prayer",
      },
      {
        original: "Teri yaad hai meri bandagi\nJo teri khushi, woh meri khushi\nYeh mere junoon ka hai mojza\nJahan apne sar ko jhuka diya\nWahan mein ne Kaaba bana diya",
        translation: "Your remembrance is my worship\nWhat pleases you pleases me\nThis is the miracle of my devotion —\nWherever I bowed my head\nThere I made my Kaaba",
      },
      {
        original: "Mere baad kis ko sataao ge\nMein ne un ke saamne awwal to khanjar rakh diya\nPhir kaleja rakh diya, dil rakh diya, sar rakh diya\nAur arz kiya mere baad kis ko sataao ge\nMujhe kis tarah se mitaao ge\nKahan ja ke teer chalaao ge\nMeri doosti ki balaayen lo\nMujhe haath utha ke duaein do\nTumhein ek kaatil bana diya",
        translation: "After me, whom will you torment?\nFirst I placed a dagger before them\nThen I placed my chest, my heart, my head\nAnd said: after me, whom will you torment?\nHow will you erase me?\nWhere will you go to fire your arrows?\nTake away the misfortunes of my friendship\nRaise your hands and pray for me\nYou have made a murderer of yourself",
      },
    ],
  },
  {
    id: 20,
    title: "Ya Hayyu Ya Qayyum",
    language: "Urdu / Arabic",
    poet: "Nusrat Fateh Ali Khan",
    chorus: {
      original: "Ya Hayyu Ya Qayyum, Ya Hayyu Ya Qayyum",
      translation: "O Ever-Living, O Self-Sustaining — O Ever-Living, O Self-Sustaining",
    },
    verses: [
      {
        original: "Allah Say Allah Ki Rehmat Maango",
        translation: "Seek the mercy of Allah from Allah",
      },
      {
        original: "Ker Dil Ko Ataa Sooz-E-Tawami Yaarab\nHer Saans Ho Rehmat Ki Payami Yaarab\nOrang-E-Shahee Ki Nahi Haajat Mujh Ko\nKaafi Hai Mohammad Ki Ghulami.. Ya-Rub!",
        translation: "Grant the heart the burning passion of devotion, O Lord\nMay every breath carry the message of mercy, O Lord\nI have no need for the throne of kings\nThe servitude of Muhammad is sufficient for me — O Lord!",
      },
      {
        original: "Wo Nabiyoon Ka Sardaar\nHer Aalam Ka Mukhtaar\nTu Saaz Hai Wo Aawaz\nTu Raaz Wo Mehram Raaz",
        translation: "He is the chief of all Prophets\nThe sovereign of every world\nYou are the instrument, he is the voice\nYou are the secret, he is the keeper of secrets",
      },
      {
        original: "Tu Lafz Hai Wo Farhang, Tu Haakim Wo Aurang\nTu Lazim Wo Malzoom\nTu Laazim Wo Malzoom",
        translation: "You are the word, he is the meaning; You are the ruler, he is the throne\nYou are the essential, he is the one entrusted\nYou are the essential, he is the one entrusted",
      },
      {
        original: "Aadat Hai Meri Hadh Say Guzarna Yaarab\nAata He Nahi Mujh Ko The-Herna Yaarab\nHerfa-E-Gada Maan-E-Karam Per Tere\nSharminda Sar-E-Hashr Mein Kar Na Ya-Rub!",
        translation: "It is my habit to exceed all limits, O Lord\nI have never learned to pause and reflect, O Lord\nThe beggar's words at your threshold of mercy —\nDo not shame me on the Day of Judgement, O Lord!",
      },
      {
        original: "Mein Naqsh Hoon Tu Naqqaash\nTu Mul'im Mein Mein Qallash\nMein Aabid Tu Maabood\nMein Sajid Tu Masjood",
        translation: "I am the image, You are the painter\nYou are the teacher, I am the unruly student\nI am the worshipper, You are the worshipped\nI am the one who prostrates, You are the one prostrated to",
      },
      {
        original: "Mein Jism Aur Tu Dam, Tera Zikr Ilaj-E-Gham\nKyun Dil Ho Mera Maghmor\nKiyoon Dil Ho Mera Maghmoor",
        translation: "I am the body and You are the breath; Your remembrance is the cure for grief\nWhy should my heart ever be sorrowful?\nWhy should my heart ever be sorrowful?",
      },
      {
        original: "Mein Kia Hoon Mein Kiss Shay Ki Talafi Chahoon",
        translation: "What am I — what compensation could I ever seek?",
      },
      {
        original: "Sana Bashar K Liyeah Hai Bashar Sana K Liyeah\nTamaam Hamd Saza Waar Hai Khuda K Liyeah\nAtaa K Samnay Yaarab Khata Ka Zikr Hee Kya\nK Tu Ataa K Liyeah Bashar Khata K Liyeah",
        translation: "Praise exists for mankind and mankind exists for praise\nAll praise is worthy of God alone\nIn the face of Your gifts, O Lord, what is the mention of sin?\nFor You are for giving, and mankind is for sinning",
      },
      {
        original: "Qounain Ka Masjood Hai Maa'bood Hai Tu\nHer Shay Teri Shahid Hai K Mash'hood Hai Tu\nHer Aik K Lab Per Hai Teri Hamd O Sana\nHer Sooz Mein Her Saaz Mein Moujood Hai Tu",
        translation: "You are worshipped by both worlds, You are the only one worthy of worship\nEverything bears witness that You are ever-manifest\nOn everyone's lips is Your praise and glorification\nIn every flame and every melody You are present",
      },
      {
        original: "Ya Rahim O Ya Rahman\nYa Aadil O Ya Dayyan\nYa Haafiz O Ya Sattar\nYa Wahid O Ya Ghaffar",
        translation: "O Most Merciful, O Most Compassionate\nO Most Just, O Recompenser\nO Guardian, O Concealer of faults\nO The One, O Most Forgiving",
      },
      {
        original: "Ya Maalik O Ya Razzaq Tu Khaali E Her Khallaq\nHer Raaz Tujhe Malom\nHer Raaz Tujhay Maloom",
        translation: "O Master, O Provider — You are free of all creation's need\nEvery secret is known to You\nEvery secret is known to You",
      },
      {
        original: "Be-Misl Hai Tu La Raib\nTu Paak Hai Tu Be-Aib\nKhum Zeest Ka Hai Unwaan\nTu Shaakir E Har Udwaan",
        translation: "You are without equal, beyond all doubt\nYou are pure, You are without flaw\nYou are the title of the cup of existence\nYou are grateful for every hostility overcome",
      },
      {
        original: "Teri Zaat Hai Azzo Jal, Tu Her Mushkil Ka Hal\nHer Simt Hai Teri Dhom\nHer Samt Hai Teri Dhoom",
        translation: "Your being is Mighty and Majestic, You are the solution to every difficulty\nIn every direction Your splendour resounds\nIn every direction Your glory resounds",
      },
      {
        original: "Rehmat Ki Nigaahon Ka Ishara Maango\nDunya Say Koi Shay Na Khudara Maango\nDunya Ki Wafa Jhoot, Saharay Hein Faraib\nAllah Say Allah Ka Sahara Maango",
        translation: "Seek the signal of mercy's glances\nDo not seek anything from the world for God's sake\nThe world's loyalty is a lie, its supports are illusions\nSeek Allah's support from Allah alone",
      },
      {
        original: "Mansab Ki Karo Chah, Na Sirwat Maango\nTum Ehl-E-Mohabbat Ho Mohabbat Maango\nHer Haal Mein Thaamay Hoay Daamaan-E-Raza",
        translation: "Do not desire rank, do not seek wealth\nYou are people of love — seek love\nIn every state, hold fast to the hem of Divine pleasure",
      },
    ],
  },
  {
    id: 21,
    title: "Mein Neewan Mera Murshid Ucha",
    language: "Punjabi",
    poet: "Baba Bulleh Shah",
    chorus: {
      original: "Main Neevaan Maira Murshid Ucha, Uchian Day Sang Laai\nSadqay Janwaan Ainhaan Uchiaan Toon Jinhaan Neevian Naal Nibhai",
      translation: "I am lowly; my Spiritual Guide is the Exalted One, I am made to join Him\nI, the lowly one, am so honoured to have gained the acceptance of the Exalted One",
    },
    verses: [
      {
        original: "Murshid Day Darwazay Uttay Mohkam Laaiye Jhoukaan\nNavain Navain Na Yaar Banaiye Waang Kameeniyan Luokaan",
        translation: "Make the threshold of the Spiritual Guide your home\nMake no new friends, like those who lay wretched",
      },
      {
        original: "Har Mushkil Di Kunji Yaaro Hath Mardaan Day Aai\nMard Nazar Karay Jis Wailay Mushkil Rahay Na Kai",
        translation: "Solutions to all problems lay in the hands of Exalted Men\nA problem ceases to exist when the Exalted One casts his eye",
      },
      {
        original: "Jay Waikhaan Main Amlaan Wallay, Kujh Naeen Mairay Pallay\nJay Waikhaan Tairi Rehmat Wallay, Ballay, Ballay, Ballay",
        translation: "If I gaze at my deeds, none is the answer\nBut if I gaze at your mercy, glorious is the answer",
      },
      {
        original: "Maali Baagh Di Rakhi Karda Phal Kache Hon Ya Pakke\nPeer Mureedaan De Ser Te Rehnda Jhoote Hon Ya Sache",
        translation: "The orchard-keeper has a duty of watching over his fruits even if they are ripe or not\nA Spiritual Master is always guiding his people, even if they are sincere or not",
      },
      {
        original: "Mali Da Kam Pani Dena Bhar Bhar Mashkan Paway\nMalik Da Kam Phal Phul Laona Laway Ya Na Laway",
        translation: "The gardener's duty is to water his plants in abundance\nIt is the Master's act of kindness to produce fruits from within or not",
      },
      {
        original: "Lay Sajna Asaan Taur Nibhai Tay Jan Ditti Raah Tairay\nHashar Deharaay Sharmaan Tainu, Parday Kajj Layeen Mairay",
        translation: "O Friend! I have kept my promise; my life is sacrificed your way\nNow, save me from shame and embarrassment on the Judgement Day",
      },
      {
        original: "Toon Baili Tay Sab Jag Baili Tay Ann Baili Wi Baili\nSajna Baajh Muhammad Bakhsha Sunji Payee Aey Haveli",
        translation: "If you are warm then even the unfriendly become friendly\nO Muhammad Baksh, the whole world seems deserted without friends",
      },
    ],
  },
  {
    id: 22,
    title: "Taajdar E Haram",
    introCount: 1,
    language: "Urdu / Persian / Arabic",
    poet: "Maqbool Ahmed Sabri",
    chorus: {
      original: "Taajdaar-e haram ho nigaah-e karam\nHam ghareebon ke din bhi sanwar jaaen ge",
      translation: "O King of the Holy Sanctuary, grace us with your merciful gaze\nEven the days of us poor ones will be set right",
    },
    verses: [
      {
        original: "Qismat men meri chain se jeena likh de\nDoobe naa kabhi mera safeena likh de\nJannat bhi gawaarah hai magar mere liye\nAy kaatib-e-taqdeer madeena likh de",
        translation: "Write into my fate a life of peace and contentment\nWrite that my vessel shall never sink\nHeaven too would be acceptable — yet for me\nO Writer of Destinies, write Madina as my fate",
      },
      {
        original: "Haami-ye be-kasaan kya kahega jahaan\nAap ke dar se khaali agar jaaenge",
        translation: "O Protector of the helpless — what will the world say\nIf we leave your door empty-handed?",
      },
      {
        original: "Koyi apna nahin gham ke maare hain ham\nAap ke dar pe faryaad laaye hain ham\nHo nigaah-e karam warna chaukhat pe ham\nAap ka naam le le ke mar jaaenge",
        translation: "We have no one — we are stricken with grief\nWe have brought our cries to your door\nGrace us with a merciful glance — or at your very threshold\nWe will die crying out your blessed name",
      },
      {
        original: "Kya tumse kahoon ay arab ke kunwar\nUm jaante ho man ki batiyaan\nDar furqat-e to ay ummi-laqab\nKaate nah kate hain ab ratiyaan\nTori preet mein sudh-budh sab bisri\nKab tak yih rahegi be-khabari\nGaahe ba-figan duzdeedah nazar\nKabhi sun bhi to lo hamri batiyaan",
        translation: "What shall I say to you, O Prince of Arabia?\nYou already know the matters of my heart\nIn separation from you, O bearer of the title Ummi\nThe nights no longer pass as they used to\nIn love for you I have lost all awareness\nHow long will this state of oblivion last?\nCast at least a stolen glance my way\nWon't you listen to my words just once?",
      },
      {
        original: "Aap ke dar se koyi na khaali gaya\nApne daaman ko bhar ke sawaali gaya\nHo habeeb-e hazeen par bhi aaqa nazar\nWarna auraaq-e hasti bikhar jaaenge",
        translation: "No one has ever left your door empty-handed\nEvery supplicant left with their mantle filled\nCast your gaze upon this grief-stricken lover too, O Master\nOr the pages of my existence will be scattered to the wind",
      },
      {
        original: "Mai-kasho aao aao madeene chalen\nAao madeene chalen\nIsi maheene chalen",
        translation: "O seekers of the wine of love, come — let us go to Madina\nCome, let us go to Madina\nLet us go this very month",
      },
      {
        original: "Tajalliyon ki ajab hai faza madeene mein\nNigaah-e shauq ki hai intiha madeene mein\nGham-e hayaat nah khauf-e qaza madeene mein\nNamaaz-e ishq karen ge ada madeene mein\nBa-raah-e raast hai raah-e khuda madeene mein",
        translation: "A wondrous atmosphere of divine manifestations fills Madina\nThe yearning gaze finds its fulfilment in Madina\nNo grief of life, no fear of death in Madina\nWe shall perform the prayer of love in Madina\nThe straight path — the path to God — is in Madina",
      },
      {
        original: "Dast-e saaqi-yi kausar se peene chalen\nYaad rakkho agar uuth gayi ik nazar\nJitne khaali hain sab jaam bhar jaaenge",
        translation: "Let us go to drink from the hand of the cup-bearer of Kawthar\nRemember — if just one glance is lifted our way\nEvery vessel that is empty shall be filled",
      },
      {
        original: "Khauf-e toofaan hai bijliyon ka hai dar\nSakht mushkil hai aaqa kidhar jaaen ham\nAap hi gar na lenge hamaari khabar\nHam museebat ke maare kidhar jaaenge",
        translation: "The storm terrifies us, we fear the lightning\nWe are in great difficulty — O Master, where shall we turn?\nIf you yourself will not enquire after us\nWhere shall we afflicted ones go?",
      },
      {
        original: "Ya Mustafa ya Mujtaba irham lana irham lana\nDast-e hamah be-chaara ra, daamaan tu-hi\nMan aasi-yam man aajiz-am man be-kas-am haal-e mara\nPursaan to-yi pursaan to-yi",
        translation: "O Mustafa, O Mujtaba — have mercy upon us, have mercy upon us\nYours is the cloak that all the helpless grasp\nI am a sinner, I am weak, I am without support — you alone know my state\nYou alone enquire of me, only you",
      },
      {
        original: "Ay mushk-bed ambar-fishaan\nPaik-e naseem-e subh-dam\nAy chaarah-gar eesa-nafas\nAy moonis-e beemaar-e gham\nAy qaasid-e farkhundah pah\nTujh ko usi gul ki qasam\nIn nalti ya reeh as-saba\nYauman ila ard il-haram\nBalligh salaami raudatan\nFeeh an-nabi yul-mohtaram",
        translation: "O bearer of musk fragrance, O scatterer of amber\nO messenger of the morning breeze\nO healer with the breath of Isa\nO companion of those sick with grief\nO bearer of blessed footsteps\nI swear to you by that rose\nO morning breeze, carry this\nOne day to the sacred land\nDeliver my salutations to the blessed garden\nWhere rests the honoured Prophet",
      },
    ],
  },
  {
    id: 23,
    title: "Tumhein Dillagi Bhool Jaani Paregi",
    language: "Urdu",
    poet: "Purnam Allahabadi",
    chorus: {
      original: "Tumhein dillagi bhool jaani parhe gi\nMohabbat ki raahon mein aa kar to dekho",
      translation: "You will have to forget this game of the heart\nCome walk the paths of true love and see",
    },
    verses: [
      {
        original: "Tarapne pe mere na phir tum haso ge\nKabhi dil kisi se laga kar to dekho",
        translation: "You will not laugh at my anguish again\nTry giving your heart to someone and see",
      },
      {
        original: "Honton ke paas aaye hasi, kya majaal hai\nDil ka muamla hai koi dillagi nahi",
        translation: "Laughter dare not come near the lips\nThis is a matter of the heart — it is no game",
      },
      {
        original: "Zakhm pe zakhm kha ke jee\nApne lahu ke ghoont pee\nAah na kar labon ko see\nIshq hai dillagi nahi",
        translation: "Live by taking wound upon wound\nSwallow the draughts of your own blood\nDo not sigh — stitch your lips shut\nThis is love — it is no game",
      },
      {
        original: "Dil laga kar pata chale ga tumhein\nAashiqi dillagi nahi hoti",
        translation: "Once you have given your heart you will understand\nTrue devotion is no game",
      },
      {
        original: "Kuch khel nahi hai ishq ki laag\nPaani na samajh yeh aag hai aag",
        translation: "The grip of love is no child's play\nDo not mistake it for water — this is fire, real fire",
      },
      {
        original: "Khoon rulaye gi yeh lagi dil ki\nKhel samjho na dillagi dil ki",
        translation: "This attachment of the heart will make you weep blood\nDo not treat the heart's affair as a game",
      },
      {
        original: "Yeh ishq nahi aasaan\nBas itna samajh lijiye\nEk aag ka darya hai\nAur doob ke jaana hai",
        translation: "This love is not easy\nUnderstand just this much\nIt is a river of fire\nAnd one must drown in it",
      },
      {
        original: "Wafaon ki ham se tawwaqo nahi hai\nMagar eik baar aazmaa kar to dekho\nZamane ko apna bana kar to dekha\nHame bhi tum apna bana kar to dekho",
        translation: "You expect no faithfulness from me\nBut try putting me to the test just once and see\nYou have tried to make the world your own\nNow try making me yours and see",
      },
      {
        original: "Khuda ke liye chhor do ab yeh parda\nRukh se niqaab utha ke barhi dair ho gayi\nMahool ko talawat-e-quran kiye hue",
        translation: "For God's sake lift this veil now\nLong has it been since the veil was raised from your face\nThe atmosphere has long been reciting Quran",
      },
      {
        original: "Ham na samjhein teri nazron ka taqaza kya hai\nKabhi parda, kabhi jalwa, yeh tamasha kya hai",
        translation: "We cannot fathom what your glances demand\nSometimes a veil, sometimes a radiance — what is this show?",
      },
      {
        original: "Jaan-e-jaan, ham se yeh uljhan nahi dekhi jaati\nKe hain aaj hum tum nahi ghair koi\nShab-e-vasl bhi hai hijaab iss qadr kyun\nZara rukh se aanchal utha kar to dekho",
        translation: "O beloved, I cannot bear this confusion any longer\nToday it is only you and I — no stranger is here\nWhy even on the night of union is there this much veil?\nJust lift the hem from your face a little and see",
      },
      {
        original: "Jafa'ein bahot ki bahot zulm dhaaye\nKabhi ek nigah-e-karam iss taraf bhi\nHamesha hue dekh kar mujh ko barham\nKisi din zara muskura kar to dekho",
        translation: "You have inflicted much cruelty, much oppression\nCast at least one merciful glance this way too\nYou have always been vexed at the sight of me\nOne day try smiling a little and see",
      },
      {
        original: "Jo ulfat mein har ek sitam hai gawara\nYeh sab kuch hai paas-e-wafa tum se warna\nSataate ho din raat jis tarah mujh ko\nKisi ghair ko yoon sataa kar to dekho",
        translation: "That every torment in love is acceptable —\nAll of this is only out of faithfulness to you\nThe way you torment me day and night\nTry tormenting a stranger like this and see",
      },
      {
        original: "Agar'che kisi baat par woh khafa hain\nTo acha yehi hai tum apni see kar lo\nWoh maane na-maane yeh marzi hai unki\nMagar unko 'Purnam' mana kar to dekho",
        translation: "Even if they are displeased about something\nThe best thing is to make your own peace\nWhether they relent or not is their will\nBut try winning them over, O Purnam, and see",
      },
    ],
  },
  {
    id: 24,
    title: "Saare Nabian Da Nabi",
    introCount: 2,
    language: "Punjabi / Urdu",
    poet: "Traditional",
    chorus: {
      original: "Sare nabian da nabi tu imam soniya\nRakha tere te Durood te Salam soniya",
      translation: "Prophet of all prophets, you are the leader, O beautiful one\nWe send upon you Durood and Salam, O beautiful one",
    },
    verses: [
      {
        original: "Taazeem se leta hai khuda naam e Muhammed\nKiya naam hai ae Salle Ala naam e Muhammed\nAllah kare us pe haram aatish e dozakh\nJis shakhs ke ho dil pe likha naam e Muhammed",
        translation: "God takes the name of Muhammad with the utmost reverence\nWhat a name it is — O Sallallahu Alayhi Wa Sallam — the name of Muhammad\nMay God forbid the fire of Hell for that person\nOn whose heart the name of Muhammad is written",
      },
      {
        original: "Kamli waliya tere karam bayon buha rehamatan da kadi khulda naii\nTeri galli de kharaan vich maza jera o te maza firdos de phul da naii\nKainaat de takhta cho takht koi teri paak chatai te tulda naii\nTakht ki ae Arsh e Azam tere jore di khaakh te mulda naii",
        translation: "O master of the black shawl, the door of your mercy never closes\nThe pleasure found in the thorns of your lane surpasses the flowers of paradise\nNo throne in all creation can be compared to your pure mat\nWhat is the Mighty Throne? — it kneels before the dust at your feet",
      },
      {
        original: "Teriya thumaan to ajab duniya\nTeriya jutian arsh ne chumiyan",
        translation: "From your resting place, what a wondrous world opens\nThe Throne itself kissed your blessed sandals",
      },
      {
        original: "Duniya te aaya koi teri na misaal da\nRasool aur bhi aaye jahan mai laiken\nKoi teri na misaal da\nYun to Isaa bhi hain, Musa bhi hain, Yusuf bhi magar\nKoi teri na misaal da",
        translation: "No one who came into this world has your equal\nOther Prophets also came into the world — but\nNone has your equal\nTrue — Isa is there, Musa is there, Yusuf too — but\nNone has your equal",
      },
      {
        original: "Tujh sa haseen nahin, na hi teri Misaal hai\nTera jamaal ain khuda ka jamaal hai\nKoi teri na misaal da",
        translation: "There is none as beautiful as you, and none to equal you\nYour beauty is the very beauty of God made manifest\nNone has your equal",
      },
      {
        original: "Aam hain rehmatain zamaane par rehmaton ka koi hisaab nahin\nTere qurbaan ya Rasoolullah tera qonain mai jawab nahin\nMere sonhe kamli wa larriya, tera aashiq kul zamana hai\nTere husan di ki tareef karan, rab aap tera deewana hai",
        translation: "Mercies are common in the world but there is no counting of yours\nI sacrifice myself for you, O Messenger of God — you have no equal in both worlds\nO my beautiful master of the black shawl, all of creation is your lover\nHow can I praise your beauty — God Himself is devoted to you",
      },
      {
        original: "Chehra tera noor wande sari kainaar nu\nRab wi Durood bheje ik teri zaat nu",
        translation: "Your face distributes its light to the entire universe\nEven God sends Durood upon your blessed being",
      },
      {
        original: "Jis ne dekhe nain matwale tere\nMast o bekhud wo na ho to kiya kare\nIk nazar jo dekh lai to kehta phire\nHar har kundal kundal uthe aashiq da dil bole\nHusn tere do sift ki akha kafir kalma bole",
        translation: "Whoever has seen your intoxicating eyes\nHow can they not become lost and overwhelmed?\nWhoever catches a single glance goes about proclaiming\nOn every lock of your hair the lover's heart cries out\nIn praise of your beauty even the disbeliever utters the Kalima",
      },
      {
        original: "Roya shab e hijran mai bohot ashk bahaayai\nItne mein Musavir ko zara reham jo aaya\nNaqshi gayi tasveeron ko wo saamne laaya\nBola ke ye Yusuf hain, ye Isaa hain ye Musa\nMain ne kaha in mein se kisi par nahin sheda\nJab saamne laya ba shabih e Shah e wala",
        translation: "I wept much in the nights of separation, shedding many tears\nWhen at last the Painter took some pity on me\nHe brought forward portraits he had painted\nSaying: this is Yusuf, this is Isa, this is Musa\nI said: I am not devoted to any of these\nThen he brought forward the likeness of the noble Shah",
      },
      {
        original: "Be sakhta us waqt zaban se meri nikala\nMukh chand badr shah shani ae\nKali zulf ter akh mastani ae\nMakhmoor akhi in madhbarian\nTeri soorat nu main jaan aakha\nJaan aakhe jaan jahan aakha\nSach aakha te Rab di shaan aakha\nJes shaan to shaanaan sab baniyaan\nSubhanallah\nMa Ajamalakah\nMa Ahsanakah\nMa Akamalakah",
        translation: "At that very moment these words left my lips unbidden:\nYour face is like the full moon, O king of beauty\nYour dark tresses, your intoxicating eyes\nYour heavy-lidded eyes, those worshippers of God\nI called your face my very life\nCalled it life — called it the life of the world\nI spoke truth and spoke of God's own glory\nFrom whose glory all glories are born\nSubhanallah — Glory be to God\nHow beautiful You are\nHow fine You are\nHow perfect You are",
      },
      {
        original: "Tere sadqe jahan sara paya baniyan, tere waaste Quran sara baniyan\nPaya tere jiya kise na maqam soniya rakha tere te Durood te Salam soniya\nTenu arshaa te Rab ne bulaaiya ai, shaan tere jiya hon kinne paya ai\nPoori Rab naal teri ae kalam soniya rakha tere te Durood te Salam soniya",
        translation: "For your sake the entire world was created, for you the entire Quran was revealed\nNo one has attained a station like yours, O beautiful one — we send upon you Durood and Salam\nGod called you to the Throne, who else has attained a glory like yours?\nYour conversation with God was complete, O beautiful one — we send upon you Durood and Salam",
      },
    ],
  },
  {
    id: 25,
    title: "Na Man Behooda Girde",
    language: "Persian (Farsi)",
    poet: "Maulana Jalaluddin Rumi",
    chorus: {
      original: "Na man behuda girde koocha-o-bazaar mi gardam",
      translation: "Not frivolously, around the alleys and bazaars, I whirl",
    },
    verses: [
      {
        original: "Na man behuda girde koocha-o-bazaar mi gardam\nMazak-e-ashqi daram pae didar mi gardam",
        translation: "Not frivolously, around the alleys and bazaars, I whirl\nLover's temperament I have — to have one glimpse of my Beloved, I whirl",
      },
      {
        original: "Khudaya reham kun bar mann pareeshaan waar mi gardam",
        translation: "O God! Have mercy on me! Disturbed, I whirl",
      },
      {
        original: "Khataa kaaram gunah gaaram bahaal-e-zaar mi gardam",
        translation: "I am guilty, I am sinful — in this wretched state, I whirl",
      },
      {
        original: "Sharaab-e-shouq mi nousham bagird-e-yaar mi gardam",
        translation: "Desire's wine I imbibe; around the Friend, I whirl",
      },
      {
        original: "Sukhan mastana mi goyam bhale hushyaar mi gardam",
        translation: "Intoxicated speech I utter, even while soberly, I whirl",
      },
      {
        original: "Gahe khandam gahe giriyam gahe uftam gahe khezam\nMaseeha dar dilam paida wa mann beemaar mi gardam",
        translation: "Sometimes I laugh, weep sometimes; sometimes I fall, rise sometimes\nMessiah in my heart I bear — and I, the infirm, whirl",
      },
      {
        original: "Bayaan jaanan inayat kun to molana-e-rumi ra\nGhulam-e-shams tabrezam qalandar war mi gardam",
        translation: "Come, O Beloved! Indulge Maulana Rumi!\nShams Tabrizi's slave I am — like a qalandar, I whirl",
      },
    ],
  },
  {
    id: 26,
    title: "Man Kunto Maula",
    language: "Arabic / Persian / Urdu",
    poet: "Amir Khusro (from Hadith of the Prophet ﷺ)",
    introCount: 1,
    chorus: {
      original: "Man Kunto Maula\nKhuwaja Ali-Un Maula",
      translation: "Whoever accepts me as master — venerable Ali is his master\n(Words of the Prophet ﷺ at Ghadir Khumm)",
    },
    verses: [
      {
        original: "Shah-E-Mardaan\nShair-E-Yazdaan\nQoowwat-E-Parwardigaar\nLa Fata Illa Ali\nLa Saif Illa Zulfiqaar",
        translation: "King of the Brave\nThe Lion of God\nThe Strength bestowed by the Lord\nThere is none like Ali\nThere is no sword like Zulfiqaar",
      },
      {
        original: "Dara Dil E Dara Dil E Dar E Dani\nHum Tum Tanana Nana, Tana Nana Ray\nYalali Yalali Yala Yala Ray",
        translation: "Enter the heart, enter the heart, dissolve within\nYou and I — sing in sweet melody\n(Sufi devotional chants of ecstasy)",
      },
      {
        original: "Her Qalb Ali, Jism Ali, Jaan Ali Hai\nIk BeSar-O-Samaan Ka Samaan Ali Hai\nImaan Ka Matlaash E Ye Imaan Keh Doon\nIman To Yeh Hai Mera Imaan Ali Hai",
        translation: "In every heart — Ali; every body — Ali; my very life — Ali\nAli is the sole provision of one who has nothing\nThe seeker of faith — let me say what faith truly is\nThis is my faith: my faith is Ali",
      },
      {
        original: "Haider-E-Um Qalandaram Mastam\nBanda-E-Murtaza Ali Hastam\nPeshwa-E-Tamaam Rindanam\nK Sag-E-Koh-E-Shair-E-Yazdanam",
        translation: "I am of Haider — a saint drowned in devotion\nI am a mere servant of Ali the Chosen One\nI am foremost among all those intoxicated by devotion\nA mere dog at the mountain of Ali — the Lion of God",
      },
    ],
  },
  {
    id: 27,
    title: "Mast Nazron Se Allah Bachaye",
    language: "Urdu",
    poet: "Purnam Allahabadi",
    chorus: {
      original: "Mast nazron se Allah bachaaye, maah-jamaalon se Allah bachaaye\nHar balaa sar pe aa jaaye lekin, husn-vaalon se Allah bachaaye",
      translation: "O God save us from the intoxicated glances! O God save us from the moon-faced ones!\nLet any affliction come upon us — but God save us from the pretty ones",
    },
    verses: [
      {
        original: "In kii maasuumiyat par na jaanaa, in ke dhoke meN hargiz na aana\nLuuT lete haiN ye muskuraa kar, in kii chaaloN se Allah bachaaye",
        translation: "Don't let their innocence fool you; don't let them make you a fool\nThey rob with just a smile — O God save us from their spells!",
      },
      {
        original: "Bholii suurat hai baateN haiN bholii, muuNh meN kuch hai magar dil meN kuch hai\nLaakh chehraa sahii chaaNd jaisaa, dil ke kaaloN se Allah bachaaye",
        translation: "Innocent appearance and innocuous talk, but there is a difference between what they say and what they mean\nThough their face is like that of the moon — O God save us from the schemes of their hearts!",
      },
      {
        original: "Dil meN hai khvaahish-e-huur-o-jannat aur zaahir meN shauq-e-ibaadat\nBas hameN shaiKh jii aap jaise Allah vaalon se Allah bachaaye",
        translation: "In the hearts there is a desire for beautiful companions in heaven, but they show their love of prayers to the world\nNow, from the likes of the abstinent — O God save us from these Godly ones!",
      },
      {
        original: "In kii fitrat meN be-vafaii jaantii hai ye saarii Khudaii\nAcche acchoN ko dete haiN dhokhaa bhole bhaaloN se Allah bachaaye",
        translation: "In their nature is infidelity, it is known by all and sundry\nThey beguile even the smart ones — O God save us from the innocuous ones!",
      },
    ],
  },
  {
    id: 29,
    title: "Ya Husain Ya Husain",
    language: "Urdu / Persian / Arabic",
    poet: "Traditional / Nusrat Fateh Ali Khan",
    chorus: {
      original: "Ya Hussain! Ya Hussain!\nYa Hussain! Ya Hussain!",
      translation: "O Hussain! O Hussain!\nO Hussain! O Hussain!",
    },
    verses: [
      {
        original: "Shaheed-e-Karbala ki mominoN jab yaad aati hai\nTadap jaati hai duniya, khoon ke aansooN bahaati hai",
        translation: "When believers remember the martyr of Karbala\nThe world trembles in anguish and weeps tears of blood",
      },
      {
        original: "Shah hast Hussain baadshah hast Hussain\nDeen hast Hussain deen pana hast Hussain\nSar daad na daad dast dar dast-e-Yazeed\nHaq aa ke bina La-Ila hast Hussain",
        translation: "Hussain is the king, Hussain is the sovereign\nHussain is the faith, Hussain is the guardian of faith\nHe gave his head but did not give his hand into the hand of Yazid\nHussain is the very foundation of La Ilaha (There is no god but God)",
      },
      {
        original: "Sajde mein sar kataane ko aakhir kata dia\nLekin Khuda ke naam ka danka baja dia",
        translation: "In the end his head was cut while in prostration\nBut he made the name of God resound throughout the world",
      },
      {
        original: "Dil se khudi ko bhool kar khud ko mita namaaz mein\nAayega tujh ko jab nazar roo-e-Khuda jab namaaz mein\nPahle Hussain ki tarah sar ko kata namaaz mein",
        translation: "Forget the self from your heart and erase yourself in prayer\nYou will behold the face of God when you are in prayer\nFirst, like Hussain, give your head while in prayer",
      },
      {
        original: "Kis ki majaal ai Hussain tujh ko ho tujh se ham-saree\nBaap ke ghar Imam the naana ke ghar payambari\nShakl-e-Hussain dekh kar haq bhi kahega hashr mein\nAey mere Mustafa ke laal ummat-e-Mustafa baree",
        translation: "Who has the power, O Hussain, to be your equal?\nIn his father's house he was Imam, in his grandfather's house he was raised among Prophets\nBeholding the face of Hussain even the Truth will say on Judgement Day\nO dear one of my Mustafa ﷺ — the nation of Mustafa is forgiven",
      },
      {
        original: "Salaami Karbala mein kya qayamat ki ghari hogi\nChuri Shabbir ki gardan pe jis dam chal rahi hogi\nKaleja thaam kar Meer-e-falaq bhi rah gaya hoga\nKaleje per Ali Akbar ke barchi jab lagi hogi",
        translation: "What a moment of apocalypse that must have been in Karbala\nWhen the blade was passing across the neck of Shabbir (Hussain)\nEven the master of the heavens must have clutched his heart\nWhen the spear struck the chest of Ali Akbar",
      },
      {
        original: "Mujhe jaane do paani bhar ke ye Abbas kehte the\nKayi din ki pyaasi hai Sakina ro rahi hogi",
        translation: "\"Let me go and fetch the water\" — so Abbas kept saying\nFor Sakina had been thirsty for days and was weeping",
      },
      {
        original: "Luti hai jaise duniya Karbala mein ibn-e-Haider ki\nKisi mazloom ki duniya na duniya mein luti hogi\nMohammad ke nawaase ne jo kee teghoN ke saaye mein\nBashar to kya farishtoN se na aise bandagi hogi",
        translation: "As the world of Ibn-e-Haider was plundered in Karbala\nNo oppressed one's world has ever been plundered like this in all the world\nThe worship that the grandson of Muhammad ﷺ performed beneath the shadow of swords\nNeither man nor angel has ever worshipped like that",
      },
      {
        original: "Hamare khooN ke badle mein ummat bakhsh de Ya Rab\nKhuda se hashr mein ye iltijaa Shabbir ki hogi",
        translation: "In exchange for our blood, O Lord, forgive the Ummah\nThis will be Shabbir's plea to God on the Day of Judgement",
      },
    ],
  },
  {
    id: 30,
    title: "Ya Muhammad Noor E Mujassam",
    language: "Urdu",
    poet: "Traditional",
    chorus: {
      original: "Ya Muhammad Noor-e-mujassam Ya Habibi Ya Maulai",
      translation: "O Muhammad, embodied light — O my Beloved, O my Master",
    },
    verses: [
      {
        original: "Tasweer-e-kamal-e-mohabbat Tanveer-e-jamal-e-khudayei",
        translation: "The perfect image of love, the radiance of divine beauty",
      },
      {
        original: "Tera Wasf Bayaan Ho Kis Se Teri Kon Karega Barayei\nIss Gard-e-safar Mein Gum Hai Jibreel-e-ameen Ki Rasayei",
        translation: "Who can describe your qualities — who can sing your praises?\nEven the reach of Jibreel the Trustworthy is lost in the dust of your journey",
      },
      {
        original: "Teri Ek Nazar Ke Taalib, Tere Ek Sukhan Par Qurabaan\nYe Sab Tere Divaane, Ye Sab Tere Shayadai",
        translation: "They long for just one glance from you, they sacrifice themselves for just one word\nAll of these are your devotees, all of these are your lovers",
      },
      {
        original: "Ye Rung-e-bahar-e-gulshan Ye Gul Aur Gul Ka Joban\nTere Noor-e-qadam Ka Dhowan Uss Dhowan Ki Ra'nayei",
        translation: "The colours of the garden in spring, the flower and its beauty\nAre but the smoke of the light of your footstep — and what beauty that smoke holds",
      },
      {
        original: "Ma Ajmalaka Teri Surat Ma Ah'sanak Teri Seerat\nMa Akmalaka Teri A'zmat Teri Zaat Mein Gum Hai Khudayei",
        translation: "How beautiful is your face — how excellent is your character\nHow perfect is your greatness — in your being the Divine Itself is absorbed",
      },
      {
        original: "Ae Mazhar-e-shaan-e-jamali Ae Khuwaja-o-banda Aa'li\nMujhe Hashr Mein Kaam Aajaye Mera Zoq-e-sukhan Aarayei",
        translation: "O manifestation of divine beauty's glory, O master and noble servant\nMay my love of words serve me on the Day of Judgement",
      },
      {
        original: "Jab Jalwa Fagan Hu-aey Aaqa, Sajde Mein Jhuka Tha Kaa'bah\nAey Aminah Kaisi Teri, Qismat Hai Khuda Ne Banaai",
        translation: "When the Master appeared in his glory, even the Kaaba bowed in prostration\nO Aminah — what a destiny God fashioned for you",
      },
      {
        original: "Tum Sab Se Pehle Muhaajir, Ghar Choda Khuda Ki Khaatir\nIs Sunnat Par Jo Chale Hain, Aaqa Woh Hain Tere Fidaai",
        translation: "You were the first of all emigrants, you left your home for God's sake\nThose who follow this Sunnah — O Master, they are your devoted ones",
      },
      {
        original: "Tu Raees-e-roz-e-shafa't Tu Ameer-e-lutf-o-i'nayat\nHai Adeeb Ko Tujhse Nisbat Ye Ghulam Hai Tu Aaqayei",
        translation: "You are the chief of the Day of Intercession, the master of grace and favour\nAdeeb has connection to you — this servant is yours, you are his master",
      },
    ],
  },
  {
    id: 31,
    title: "Qasida Burda",
    language: "Arabic / Urdu",
    poet: "Imam al-Busiri",
    chorus: {
      original: "Maula ya salli wasallam daaye man abadan\nAlaa habibibeka khaire khalqihi",
      translation: "O my Lord, send blessings and peace always and forever\nUpon Your Beloved, the Best of all Creation",
    },
    verses: [
      {
        original: "Zikr e aali waqar karte hai\nShagle parwardigaar karte hai\nUnpe har dam Darood padhte hai\nHam yehi karobaar karte hai",
        translation: "They remember him with the highest reverence\nThey remain occupied with the Lord\nUpon him they recite Durood at every moment\nThis is the only business we conduct",
      },
      {
        original: "Agar Darood padho momeeno kariney se\nHuzoor khud hi chaley aayege Madine se\nTum unse door ho lekin wo tumse door nahi\nYaki na aaye tau unko pukaar kar dekho",
        translation: "If you recite Durood with sincerity, O believers\nThe Prophet himself will come from Madina\nYou may be distant from him but he is never distant from you\nIf you doubt this — call out to him and see",
      },
      {
        original: "Samajh mai aayega imdaad kaise hoti hai\nZara tadap ke pukaaro tau ya Rasullalah\nKoi dekhe tau zara unki duhayi dekar\nYa Muhammad se tau patthar bhi pighal jaate hai",
        translation: "You will understand how help truly comes\nCall out with longing — O Messenger of Allah\nLet anyone try calling upon him just once\nFor even stones melt at the name of Ya Muhammad ﷺ",
      },
      {
        original: "Tu sahebal jamal hai tu sayyedal bashar\nTeri ziya hai rukh hai shabe taar ki Sahar\nLaawu kaha se lab jisse teri sana karu\nMohsin kahu bashar kahu ke habib e khuda kahu\nKat jaaye saari umr tere zikre paak mai\nMil jaaye meri khaak Madine ki khaak mai",
        translation: "You are the master of beauty, the chief of mankind\nYour radiant face is the dawn breaking through the darkest night\nFrom where shall I find lips worthy to praise you?\nShall I call you Benefactor? Shall I call you human? Shall I call you the Beloved of God?\nMay my entire life be spent in your pure remembrance\nMay my dust be joined with the dust of Madina",
      },
      {
        original: "Ayse dar ka ghada hu mai jiski\nNaukri taajdar karte hai",
        translation: "I am the beggar of such a door\nAt which kings themselves serve",
      },
      {
        original: "Muhammadun sayyedul koinain was sakalain\nWal fareeqaini min urbiw wa min ajami",
        translation: "Muhammad ﷺ is the master of both worlds and both creations\nAnd of both groups — Arabs and non-Arabs",
      },
      {
        original: "Yaha se lekar waha tak wohi tau maalik hai\nYe qaayenaat bani hai mere Nabi ke liye\nKisi ko kuch nahi milta teri ataa ke bagair\nKhuda bhi kuch nahi deta teri ataa ke bagair",
        translation: "From here to there — He alone is the Master\nThis entire universe was created for my Prophet ﷺ\nNo one receives anything without your bestowal\nEven God does not give without your bestowal",
      },
      {
        original: "Har cheez musabbibe sanam se mango\nMinnat se khusamat se adab se mango\nJo maangne ka tariqa hai Uss tarah mango\nYa rabbe bil Mustafa ballig maqasadana\nWag fir lana ma maada ya waasi al karami",
        translation: "Seek everything through the Beloved\nSeek with supplication, with love, with reverence\nSeek in the manner that is befitting of asking\nO Lord, through Mustafa ﷺ fulfil our aims\nAnd forgive what has passed, O Most Generous",
      },
      {
        original: "Summar rida an Abi Bakriw wa na Umar\nWa an Aliw wa an Usman zil karami",
        translation: "And be pleased with Abu Bakr and Umar\nAnd with Ali and Uthman, the possessor of generosity",
      },
    ],
  },
  {
    id: 33,
    title: "Ali Mawla Ali Mawla Ali Dam Dam",
    language: "Punjabi / Urdu",
    poet: "Traditional",
    chorus: {
      original: "Ali Maula Ali Maula Ali Dam Dam\nLakh te Karoor wari akkho dam dam",
      translation: "Ali is the Master, Ali is the Master, Ali with every breath\nSay it a hundred thousand million times with every breath",
    },
    verses: [
      {
        original: "Ali nu yaad karo\nRal ke farrayad karo\nHai ghareeban da aye ho aasra",
        translation: "Remember Ali\nTogether call out to him\nHe is the refuge of the helpless",
      },
      {
        original: "Ali sade dillan wich\nAli sade sahwan wich\nAli saday asse paase\nAli hai nigawan wich\nAshkaan de deray par\nAli diyan rahwan wich\nRab Rakhe Sariyan nu\nAli di panawan wich",
        translation: "Ali is within our hearts\nAli is within our breaths\nAli is all around us\nAli watches over us\nAt the abode of tears\nWe walk in Ali's paths\nMay God keep everyone\nIn the shelter of Ali",
      },
      {
        original: "Eh nabi da pyara Ali Noor Allah Noor\nAli da aye Allah Allah\nKabbay wich zahoor\nAli peer peeranda aye, Dillan da suroor\nWallian de sirran da aye taaj Ali Ali\nMomin'nan di bas ha meraj Ali Ali",
        translation: "He is the Prophet's beloved — Ali, the light of God, is light\nAli's presence is God — God\nManifested in the Kaaba\nAli is the master of all masters, the joy of all hearts\nAli is the crown upon the heads of all saints\nFor believers, Ali alone is the summit of ascent",
      },
      {
        original: "Hay gin gin dassa ki main Ali de karam\nAli di pehchan aye rab di pehchan\nAli dian taqtan nu jaanda jahan",
        translation: "How can I count and tell the mercies of Ali?\nTo know Ali is to know the Lord\nThe world recognises the throne of Ali",
      },
      {
        original: "Rab da aye sheri uchhi Ali di aye shaan\nKul aye Imaan Ali Nabi da elaan\nHaider e karaar, Bu turab Ali Ali\nHashmi jawan lajawaab Ali Ali\nJinhan da na koi, Ali onhan da bharam",
        translation: "God's lion — exalted is the glory of Ali\nThe entirety of faith is Ali — the declaration of the Prophet\nHaider the steadfast, the father of soil — Ali, Ali\nThe incomparable young Hashimi — Ali, Ali\nThose who have no one — Ali is their honour",
      },
    ],
  },
  {
    id: 34,
    title: "Ankh Uthi Mohabbat",
    language: "Urdu",
    poet: "Purnam Allahabadi / Traditional",
    chorus: {
      original: "Ankh uthi mohabbat ne angrai li\nDil ka sauda huya chandi raat mein",
      translation: "The eye lifted — love stirred and stretched\nThe heart's bargain was struck on a moonlit night",
    },
    verses: [
      {
        original: "Raat yun dil mein teri bhooli hui yaad aayi\nJaise viraane mein chupke se bahaar aa jaye\nJaise sahraon mein haule se chale baad-ae-naseem\nJaise bimaar ko be-wajaah quraar aa jaaye",
        translation: "Last night your forgotten memory returned to my heart\nLike spring arriving quietly in a desolate place\nLike a gentle breeze moving softly through the desert\nLike a sick one finding peace without reason",
      },
      {
        original: "Aaj ki baat phir nahin hogii\nYeh mulaqaat phir nahi hogii\nAise badal to phir bi aayenge\nAisi barsaat phir nahi hogi\nIk nazar murke dekhne wale\nKya yeh hairat phir nahi hogi",
        translation: "Tonight's conversation will not come again\nThis meeting will not happen again\nSuch clouds may come again\nBut such rain will not fall again\nO you who turned to look just once\nWill this wonder not come again?",
      },
      {
        original: "Us k nazdik ghum-e-tark e wafa kuch bhi nahi\nMutmain aesay hain wo jese huwa kuch bhi nahi\nAb tu hathon se lakeeren bhi mitti jati hain\nUs ko kho ker tu mere pass raha kuch b nhi",
        translation: "To them the grief of abandoned faithfulness means nothing\nThey are at such peace as though nothing happened\nNow even the lines on your hands are fading away\nHaving lost them — nothing of you remains with me",
      },
      {
        original: "Kal bicharna tu phir ehad-e-wafa soch k bandh\nAbi aghaz-e-mohabbat he gaya kuch b nahi\nMain tu is wastay chup ho k tamasha na bane\nTu smajta he mujhe tujh se gila kuch b nahi",
        translation: "Tomorrow we part — yet you sealed the vow of faithfulness again\nThe beginning of love itself has passed — nothing happened\nI stayed silent only so it would not become a spectacle\nYou think I have no complaint against you — nothing",
      },
      {
        original: "Chaandni raat raad aati hai\nYeh mulaqaat yaad aati hai\nDekh kar un ghaneri zulfon ko\nMast barsaat yaad aati hai",
        translation: "On moonlit nights the memory returns like thunder\nThis very meeting comes to mind\nSeeing those dark tresses\nThe intoxicating rain comes to mind",
      },
      {
        original: "Aankh uthi... Jis taraf uth gayi hain aanhen hain\nChasm-e-baddur kiya nigahen hain\nJidar uthai nazar qatl-e-aam tumne kiya\nQazaa ka naam huya aur kaam tumne kiya",
        translation: "The eye lifted — wherever those sighs have risen\nWhat eyes they are — like the full moon\nWhichever way you turned your gaze you caused a massacre\nDeath became the name — and you did the deed",
      },
      {
        original: "Unki nazron ne kuch aisa jaddo kiya\nLutt gaye hum to pehli mulaqat mein\nHum hosh bhi apne bhul gaye\nImaan bhi apna bhul gaye\nIk dil hi nahi us bas mein\nHum na jaane kiya kiya bhul gaye",
        translation: "Their glances cast such a spell upon us\nWe were plundered at the very first meeting\nWe forgot our own senses\nWe forgot our own faith\nNot just the heart fell under their power\nWe forgot — God knows what all we forgot",
      },
      {
        original: "Jo baat thi unko kehne ki\nWo baat hi kehna bhul gaye\nGairon ke fasane yaad rahe\nHum apna fasana bhul gaye",
        translation: "The very thing we had to say to them\nWe forgot to say that very thing\nThe stories of others stayed in memory\nWe forgot our own story",
      },
      {
        original: "Kya kya nigah yaar bata hasin ho gayi\nBijli kabhi bani kabhi shamshin ho gayi\nMehfil mein baar baar uni par nazar gayi\nHumne bachai lakh magar phir udar gayi\nUnki nigah mein koi jadoo zaroor\nJis par padi usi ke jigar mein utar gayi",
        translation: "O friend — tell me — how beautiful that gaze became\nSometimes it became lightning, sometimes a sword\nIn the gathering my eyes went to them again and again\nI tried a thousand times to hold back — but they went again\nThere is surely a magic in their glance\nWhoever it fell upon — it pierced straight to their heart",
      },
      {
        original: "Banke tasweer-e-ghum reh gaye hain\nKhoye khoye se hum reh gaye hain\nBant li sabne aapas mein khushiyaan\nMere hisse mein ghum reh gaye hain\nAb na uthna sarhaane se mere\nAb to ginti ke dum reh gaye hain\nAye saba aik zehmat zara kar\nUnn ki zulfon mai hum reh gaye hain\nKainat e jafaa o wafaa mai\nAik tum aik hum reh gaye hain",
        translation: "We have become a portrait of sorrow\nWe remain lost and wandering\nEveryone distributed happiness amongst themselves\nIn my share — only grief remained\nDo not rise from my bedside now\nOnly a counted few breaths remain\nO morning breeze — do me one kindness\nIn their tresses — we remain\nIn this universe of cruelty and faithfulness\nOnly you and I remain",
      },
      {
        original: "Nazar mila ke mere paas ja kar lut liya\nNazar hati thi ke phir muskura kar lut liya\nKoi yeh lut toh dekho ke usne jab chaha\nMujh mein rehe kar mujhmein sama kar lut liya\nNa lut-tay hum magar un mast angriyon ne jigar\nNazar bachaatey huay dub dubaa k loot liyaa",
        translation: "They met my gaze and coming close plundered me\nThey looked away and then with a smile plundered me again\nLet someone see this plundering — whenever they wished\nRemaining within me, merging into me, they plundered me\nWe would not have been plundered — but their intoxicated gestures\nWhile averting their gaze, drowning slowly, plundered the heart",
      },
      {
        original: "Saath apnaa wafaa mai na chootay kabhi\nPyaar ki dor ban kar naa chootay kabhi\nChoot jaye zamaana koi gham nahi\nHaath teraa rahey mere haath mai",
        translation: "In faithfulness may we never be separated\nBecoming the thread of love may we never be severed\nLet the whole world go — no grief in that\nAs long as your hand remains in mine",
      },
    ],
  },
  {
    id: 35,
    title: "Dil Jis Se Zinda Hai",
    language: "Urdu / Punjabi",
    poet: "Traditional / Nusrat Fateh Ali Khan",
    introCount: 1,
    chorus: {
      original: "Dil jis se zinda hai wo tamanna tumhi to ho\nHum jis mein bas rahay hein wo dunya tumhi to ho",
      translation: "The longing that keeps the heart alive — that is only you\nThe world in which we dwell — that is only you",
    },
    verses: [
      {
        original: "Dil jis se zinda hai wo tum ho",
        translation: "The one from whom the heart draws life — that is you",
      },
      {
        original: "Teri zulf gar shab-e-qadr hai\nTera chehra badr-e-muneer hai\nTere sadqe jaaon mein ya-nabi\nTu habib-e-rabb-e-qadeer hai",
        translation: "If your tresses are the Night of Power\nYour face is the full illuminated moon\nI sacrifice myself for you, O Prophet\nYou are the Beloved of the All-Powerful Lord",
      },
      {
        original: "Tera husn jalwa e toor hai\nTeri chakal surah e noor hai\nKe jahaan mein koi aaj tak\nTeri misl hai na nazeer hai",
        translation: "Your beauty is the radiance of Mount Toor\nYour radiance is the Surah of Light\nFor in all the world until today\nThere is no equal to you, no comparison",
      },
      {
        original: "Teri deed jisko naseeb hai\nWo naseeb qabil-e-deed hai\nTera dekhna meri eid hai\nTera rukh kalam-e-majeed hai",
        translation: "Whoever is blessed to behold you\nThat fortune itself is worth beholding\nTo see you is my Eid\nYour face is the Glorious Word of God",
      },
      {
        original: "Teri deed karne ko khud khuda\nTujhe paas apne bula liya\nTo bitha ke saamne yeh kaha\nMeri aaj arsh pe eid hai",
        translation: "To behold you, God Himself\nCalled you close to Him\nAnd seating you before Him said\nToday on My Throne is Eid",
      },
      {
        original: "Tera noor noor-e-qadeem hai\nTera husn husn-e-kamaal hai\nNahi jiski koi misaal hai\nTu he aamina ka wo laal hai",
        translation: "Your light is the eternal pre-existent light\nYour beauty is beauty at its most perfect\nOf which there is no comparison anywhere\nYou are that beloved son of Aminah",
      },
      {
        original: "Shahsawara raazdaraa Hoo\nTaajdaara dardmanda sub diyaa\nAy alam nashra de seene waliya\nAy shahenshah madina waliya\nAavi ja wal fajr chehre waliya\nAavi ja yasin sehre waliya\nYaad teri da mei deeva waliya\nAavi ja hun kaali kamli waliya",
        translation: "O king of horsemen, keeper of secrets\nO crowned one who gave everything to the sorrowful\nO you who expanded the chest — come, O master\nO King of Madina — come\nCome, O one whose face is like the dawn\nCome, O one whose turban is Yasin\nI am a lamp in your remembrance, O master\nCome now, O master of the black shawl",
      },
      {
        original: "Ya habibi marhaba marhaba marhaba",
        translation: "O my Beloved — welcome, welcome, welcome",
      },
      {
        original: "Roya shab e hijraan mein bohot ashq bahaya\nItni mein musawwir ko rehm jo aaya\nNaqshe kayi tasveero ke wo saamnay laaya\nBola ke yeh yusuf hai yeh eesa hai yeh musa\nMein ne kaha in mein se kisi per nahi sheda\nJab saamnay laya wo shabeeh e shah e wala\nBesaakhta us waqt zubaan se meri nikla",
        translation: "I wept much in the nights of separation, shedding many tears\nWhen at last the Painter took pity on me\nHe brought forward many portraits he had painted\nSaying: this is Yusuf, this is Isa, this is Musa\nI said: I have no devotion for any of these\nThen he brought forward the likeness of the noble Shah\nAnd unbidden these words left my lips",
      },
      {
        original: "Mujh chand bashar shasaniye\nMatthe chamke laath nooraniye\nKali zulf te akh mastaniye\nTeri surat nu mein jaan akha\nJaana ke jaane jahan akha\nSach aakha te rub di shaan akha\nJis shaan to shana sub banya\nSubhanallah, ma ajmalaka\nMa ahsanaka, ma akmalaka\nKithe mehr ali kithe teri sana\nGustaakh akhi kithe ja ariyan",
        translation: "O moon-like, radiant, kingly one\nYour forehead shines with divine light\nYour dark tresses and intoxicating eyes\nI call your face my very life\nI call it the life of the world\nI spoke truth and spoke of God's own glory\nFrom whose glory all glories are born\nSubhanallah — How beautiful You are\nHow excellent, how perfect\nWhere is poor Mehr Ali to utter your praises\nO where have these bold eyes alighted",
      },
      {
        original: "Jine dekhiya kamli waliya nu\nNoohu nikliya wah subhanallah\nNoori mukhre te kayi chamk diye\nKaise zulf e siyaah subhanallah\nTere husn di ki tareef karaan\nKahay uthiya khuda subhanallah",
        translation: "Whoever has beheld the master of the black shawl\nLight emanates from him — SubhanAllah\nHow many radiances shine from that luminous face\nAnd those dark tresses — SubhanAllah\nHow shall I praise your beauty\nGod Himself proclaimed — SubhanAllah",
      },
      {
        original: "Farishta dar pe basad ehtiraam aata hai\nKhuda ke baad tumhara he naam aata hai\nKaleem hoon ge tumhein kya kaleem se nisbat\nTumhara ghar mein khuda ka kalaam aata hai",
        translation: "Angels come to your door with the utmost reverence\nAfter God's name — it is your name that comes\nWhat comparison can there be with Kaleem (Musa)?\nInto your very home came the Word of God",
      },
      {
        original: "Tu ne qabl az do jahaan shan e tajalla dekhi\nArsh banta howa sajti howi dunya dekhi\nTere qadmo mein jhuki saray rasoolon ki jabeen\nSub ne allah ko mana teri dekha dekhi",
        translation: "Before both worlds you witnessed the glory of divine manifestation\nYou saw the Throne being built and the world being adorned\nAt your feet bowed the foreheads of all the Prophets\nAll affirmed God — following your lead",
      },
      {
        original: "Her ik kundal kundal uthe aashiq ta dil dolay\nHusn tere di sift di aakha kaafir kalma bolay",
        translation: "On every lock of your hair the lover's heart sways\nIn praise of your beauty even the disbeliever utters the Kalima",
      },
      {
        original: "Ya noor ul ainee marhaba\nJaddil hussaini marhaba\nYa imam ul qiblatain\nYa nabi ul harmein\nAap hein aankhon ki thandak\nAap hein her dil ka chein",
        translation: "O light of my eyes — welcome\nO grandfather of Hussain — welcome\nO Imam of the two Qiblas\nO Prophet of the two Harams\nYou are the coolness of all eyes\nYou are the peace of every heart",
      },
      {
        original: "Innaka shams ud duha\nInnaka badr ud doja\nInnaka noor ul huda\nInnaka sadr ul ula",
        translation: "Verily you are the sun of the morning\nVerily you are the full moon of the night\nVerily you are the light of guidance\nVerily you are the foremost of the highest",
      },
    ],
  },
];

// ============================================================
const LANG_STYLES = {
  "Punjabi":                   { bg: "rgba(44,110,106,0.12)",  border: "rgba(44,110,106,0.45)", text: "#4a9e99" },
  "Persian (Farsi)":           { bg: "rgba(80,140,100,0.12)",  border: "rgba(80,140,100,0.4)",  text: "#6ab88a" },
  "Arabic / Urdu":             { bg: "rgba(184,150,62,0.12)",  border: "rgba(184,150,62,0.4)",  text: "#c9a84c" },
  "Urdu / Arabic":             { bg: "rgba(184,150,62,0.12)",  border: "rgba(184,150,62,0.4)",  text: "#c9a84c" },
  "Punjabi / Sindhi":          { bg: "rgba(44,110,106,0.12)",  border: "rgba(44,110,106,0.45)", text: "#4a9e99" },
  "Urdu / Persian":            { bg: "rgba(184,150,62,0.12)",  border: "rgba(184,150,62,0.4)",  text: "#c9a84c" },
  "Urdu / Persian / Arabic":   { bg: "rgba(184,150,62,0.12)",  border: "rgba(184,150,62,0.4)",  text: "#c9a84c" },
  "Arabic / Persian / Urdu":   { bg: "rgba(184,150,62,0.12)",  border: "rgba(184,150,62,0.4)",  text: "#c9a84c" },
  "Persian / Urdu":            { bg: "rgba(80,140,100,0.12)",  border: "rgba(80,140,100,0.4)",  text: "#6ab88a" },
  "Urdu / Punjabi":            { bg: "rgba(44,110,106,0.12)",  border: "rgba(44,110,106,0.45)", text: "#4a9e99" },
};
const defaultLang = { bg: "rgba(200,200,200,0.1)", border: "rgba(200,200,200,0.3)", text: "#aaa" };
const getLang = (l) => LANG_STYLES[l] || defaultLang;

// ============================================================
//  COMPONENTS
// ============================================================
function Badge({ language }) {
  const s = getLang(language);
  return (
    <span style={{
      display: "inline-block",
      background: s.bg, border: `1px solid ${s.border}`,
      color: s.text, borderRadius: 20,
      padding: "3px 11px", fontSize: 10,
      letterSpacing: "0.8px", textTransform: "uppercase",
    }}>
      {language}
    </span>
  );
}

function OrnamentalDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "6px 0" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(184,150,62,0.35))" }} />
      <span style={{ color: "rgba(44,110,106,0.55)", fontSize: 14 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(184,150,62,0.35), transparent)" }} />
    </div>
  );
}

function Card({ q, index, onClick }) {
  const [hov, setHov] = useState(false);
  const isPasted = !q.verses[0]?.original.startsWith("PASTE");
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? "linear-gradient(135deg, rgba(44,110,106,0.1) 0%, rgba(255,255,255,0.03) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 100%)",
        border: `1px solid ${hov ? "rgba(44,110,106,0.55)" : "rgba(44,110,106,0.2)"}`,
        borderRadius: 14, padding: "22px 20px",
        cursor: "pointer", transition: "all 0.22s ease",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* top-right index */}
      <span style={{
        position: "absolute", top: 13, right: 16,
        fontFamily: "'Courier New', monospace", fontSize: 11,
        color: "rgba(44,110,106,0.35)", letterSpacing: 1,
      }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* status dot */}
      <span style={{
        position: "absolute", top: 14, left: 14,
        width: 7, height: 7, borderRadius: "50%",
        background: isPasted ? "rgba(44,150,140,0.7)" : "rgba(200,200,200,0.2)",
        display: "inline-block",
      }} title={isPasted ? "Lyrics added" : "Awaiting lyrics"} />

      <div style={{ marginBottom: 9, paddingLeft: 14 }}>
        <Badge language={q.language} />
      </div>

      <h2 style={{
        fontSize: 15, fontWeight: 400, color: "#e8f0ef",
        margin: "0 0 5px", lineHeight: 1.4,
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}>
        {q.title}
      </h2>

      <p style={{ fontSize: 11, color: "rgba(184,150,62,0.55)", margin: "0 0 13px", letterSpacing: 0.3 }}>
        {q.poet}
      </p>

      <OrnamentalDivider />

      <p style={{
        fontSize: 11, color: "rgba(180,220,218,0.4)",
        margin: "10px 0 0", lineHeight: 1.7, fontStyle: "italic",
      }}>
        {isPasted
          ? (q.chorus?.translation || q.verses[0].translation).split("\n")[0].slice(0, 90) + "…"
          : "— Awaiting lyrics —"}
      </p>
    </div>
  );
}

function ChorusBlock({ chorus }) {
  return (
    <div style={{
      margin: "20px 0 8px",
      background: "linear-gradient(135deg, rgba(44,110,106,0.1) 0%, rgba(44,110,106,0.05) 100%)",
      border: "1px solid rgba(184,150,62,0.4)",
      borderRadius: 12,
      padding: "16px 20px 20px",
      position: "relative",
    }}>
      {/* Label */}
      <div style={{
        display: "inline-block",
        background: "linear-gradient(90deg, rgba(184,150,62,1), rgba(160,128,45,1))",
        borderRadius: 20, padding: "3px 12px",
        fontSize: 10, letterSpacing: 2.5,
        textTransform: "uppercase", color: "#051211",
        fontFamily: "'Courier New', monospace", fontWeight: 700,
        marginBottom: 14,
      }}>
        Chorus
      </div>

      {/* Original */}
      <div style={{ marginBottom: 12 }}>
        {chorus.original.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "5px 0 0",
            fontSize: 17, lineHeight: 2,
            color: "#e8f0ef", fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif",
            textAlign: "center",
          }}>
            {line}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        width: 60, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(184,150,62,0.55), transparent)",
        margin: "12px auto",
      }} />

      {/* Translation */}
      <div>
        {chorus.translation.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "4px 0 0",
            fontSize: 15, lineHeight: 1.9,
            color: "rgba(184,150,62,0.9)",
            textAlign: "center",
          }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function VerseBlock({ verse, index, label }) {
  return (
    <div style={{ padding: "26px 0", borderBottom: "1px solid rgba(44,110,106,0.1)" }}>
      <div style={{
        fontSize: 10, color: "rgba(184,150,62,0.4)",
        letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 16,
        fontFamily: "'Courier New', monospace",
      }}>
        ◆ {label}
      </div>

      {/* Original */}
      <div style={{
        borderLeft: "2px solid rgba(44,110,106,0.4)",
        paddingLeft: 18, marginBottom: 12,
        background: "rgba(255,255,255,0.025)",
        borderRadius: "0 8px 8px 0", padding: "14px 18px",
      }}>
        {verse.original.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "6px 0 0",
            fontSize: 17, lineHeight: 2,
            color: "#cce4e2", fontStyle: "italic",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}>
            {line}
          </p>
        ))}
      </div>

      {/* Translation */}
      <div style={{
        borderLeft: "2px solid rgba(184,150,62,0.55)",
        background: "rgba(44,110,106,0.06)",
        borderRadius: "0 8px 8px 0", padding: "13px 18px",
      }}>
        {verse.translation.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "5px 0 0",
            fontSize: 15, lineHeight: 1.9,
            color: "rgba(184,150,62,0.9)",
          }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

// ============================================================
//  ROOT ROUTER
// ============================================================
export default function App() {
  const [section, setSection] = useState("home");

  if (section === "home") return <Homepage onSelect={setSection} />;
  if (section === "qasida") return <QasidaBook onBack={() => setSection("home")} />;
  if (section === "ilahi") return <IlahiBook onBack={() => setSection("home")} />;

  // section === "qawwali"
  return <QawwaliBook onBack={() => setSection("home")} />;
}

function QawwaliBook({ onBack }) {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterLang, setFilterLang] = useState("All");
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  // Android hardware back button
  useEffect(() => {
    const onBack = (e) => {
      if (selectedId !== null) {
        e.preventDefault();
        setSelectedId(null);
      }
    };
    window.addEventListener("popstate", onBack);
    if (selectedId !== null) {
      window.history.pushState({ qawwali: selectedId }, "");
    }
    return () => window.removeEventListener("popstate", onBack);
  }, [selectedId]);

  // Scroll to top on qawwali open or navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedId]);

  const langOptions = ["All", "Urdu", "Punjabi", "Persian (Farsi)", "Arabic"];

  const filtered = qawwalis.filter((q) => {
    const s = search.toLowerCase();
    const matchSearch =
      !s ||
      q.title.toLowerCase().includes(s) ||
      q.poet.toLowerCase().includes(s) ||
      q.language.toLowerCase().includes(s);
    const matchLang = filterLang === "All" || q.language.includes(filterLang);
    return matchSearch && matchLang;
  }).sort((a, b) => a.title.localeCompare(b.title));

  const selected = qawwalis.find((q) => q.id === selectedId);
  const sorted = [...qawwalis].sort((a, b) => a.title.localeCompare(b.title));
  const selectedIndex = sorted.findIndex((q) => q.id === selectedId);

  // ── DETAIL VIEW ──────────────────────────────────────────
  if (selected) {
    const prev = sorted[selectedIndex - 1];
    const next = sorted[selectedIndex + 1];

    return (
      <div style={{ ...rootStyle, opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <BgLayer />
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px 120px", position: "relative", zIndex: 5 }}>

          {/* Back */}
          <button
            onClick={() => setSelectedId(null)}
            style={backBtnStyle}
            onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(184,150,62,0.6)"}
          >
      ← All Qawwalis
          </button>

          {/* Title block */}
          <div style={{ padding: "22px 0 20px", borderBottom: "1px solid rgba(44,110,106,0.25)" }}>
            <div style={{ marginBottom: 10 }}>
              <Badge language={selected.language} />
            </div>
            <h1 style={{
              fontSize: "clamp(20px,6vw,34px)", fontWeight: 400,
              color: "#e8f0ef", margin: "0 0 6px", lineHeight: 1.3,
              fontFamily: "Georgia, 'Times New Roman', serif",
              textShadow: "0 0 40px rgba(184,150,62,0.2)",
            }}>
              {selected.title}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(44,110,106,0.7)", margin: 0, letterSpacing: 0.5 }}>
              {selected.poet}
            </p>
          </div>

          {/* Key */}
          <div style={{
            display: "flex", gap: 20, padding: "12px 0",
            borderBottom: "1px solid rgba(44,110,106,0.1)",
            fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase",
          }}>
            <span style={{ color: "#cce4e2", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(180,220,218,0.3)", display: "inline-block", borderRadius: 2 }} />
              Original
            </span>
            <span style={{ color: "rgba(184,150,62,0.85)", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(184,150,62,0.6)", display: "inline-block", borderRadius: 2 }} />
              Translation
            </span>
          </div>

          {/* Chorus */}
          {selected.chorus && <ChorusBlock chorus={selected.chorus} />}

          {/* Verses */}
          <div style={{ marginTop: 12 }}>
            {selected.verses.map((v, i) => {
              const introCount = selected.introCount || 0;
              let label;
              if (i < introCount) {
                label = introCount === 1 ? "Intro" : `Intro ${i + 1}`;
              } else {
                const verseNum = i - introCount + 1;
                label = `Verse ${verseNum}`;
              }
              return <VerseBlock key={i} verse={v} index={i} label={label} />;
            })}
          </div>

          {/* Prev / Next */}
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 36, gap: 12 }}>
            {prev ? (
              <NavBtn dir="prev" q={prev} onClick={() => setSelectedId(prev.id)} />
            ) : <div />}
            {next ? (
              <NavBtn dir="next" q={next} onClick={() => setSelectedId(next.id)} />
            ) : <div />}
          </div>
        </div>
      </div>
    );
  }

  // ── INDEX VIEW ────────────────────────────────────────────

  return (
    <div style={{ ...rootStyle, opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}>
      <BgLayer />

      {/* Header */}
      <header style={{
        position: "relative", zIndex: 10,
        borderBottom: "1px solid rgba(44,110,106,0.25)",
        padding: "44px 24px 28px", textAlign: "center",
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none",
          color: "rgba(184,150,62,0.6)", fontSize: 12,
          letterSpacing: "1.8px", textTransform: "uppercase",
          cursor: "pointer", fontFamily: "inherit",
          padding: 0, display: "flex", alignItems: "center", gap: 8,
          position: "absolute", left: 20, top: 48,
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(184,150,62,0.6)"}>
          ← Home
        </button>
        <div style={{ fontSize: 18, letterSpacing: 4, color: "rgba(184,150,62,0.7)", marginBottom: 10, fontFamily: "serif" }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        <h1 style={{
          fontSize: "clamp(30px,7vw,52px)", fontWeight: 400,
          color: "#e8f0ef", margin: "0 0 6px", letterSpacing: 2,
          fontFamily: "Georgia, 'Times New Roman', serif",
          textShadow: "0 0 60px rgba(44,110,106,0.3)",
        }}>
          Qawwali Lyrics
        </h1>
        <div style={{
          width: 140, height: 1,
          background: "linear-gradient(90deg,transparent,rgba(184,150,62,0.6),transparent)",
          margin: "14px auto 12px",
        }} />
        <p style={{ fontSize: 12, color: "rgba(44,110,106,0.55)", letterSpacing: 3, margin: 0, textTransform: "uppercase" }}>
          {qawwalis.length} Qawwalis
        </p>
      </header>

      <main style={{ position: "relative", zIndex: 5, maxWidth: 940, margin: "0 auto", padding: "30px 20px 80px" }}>

        {/* Search + filters */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search title, poet, language…"
            style={{
              flex: 1, minWidth: 220,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(212,175,95,0.22)",
              borderRadius: 8, padding: "10px 16px",
              color: "#cce4e2", fontSize: 14, fontFamily: "inherit",
              outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
            {langOptions.map(l => (
              <button
                key={l}
                onClick={() => setFilterLang(l)}
                style={{
                  background: filterLang === l ? "rgba(44,110,106,0.2)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${filterLang === l ? "rgba(44,110,106,0.6)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: 20, padding: "6px 14px",
                  color: filterLang === l ? "#c9a84c" : "rgba(180,220,218,0.6)",
                  fontSize: 12, cursor: "pointer", fontFamily: "inherit",
                  letterSpacing: 0.4, transition: "all 0.18s",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Legend note */}
        <div style={{
          display: "flex", gap: 18, marginBottom: 22,
          fontSize: 11, color: "rgba(44,110,106,0.4)", letterSpacing: 0.5
        }}>
          <span><span style={{ color: "rgba(44,150,140,0.7)", marginRight: 5 }}>●</span>Lyrics added</span>
          <span><span style={{ color: "rgba(200,200,200,0.25)", marginRight: 5 }}>●</span>Awaiting lyrics</span>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 12,
        }}>
          {filtered.map((q, i) => (
            <Card key={q.id} q={q} index={qawwalis.indexOf(q)} onClick={() => setSelectedId(q.id)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "70px 20px", color: "rgba(180,220,218,0.3)" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>☽</div>
            <p>No qawwalis match "{search}"</p>
          </div>
        )}
      </main>

      <footer style={{
        position: "relative", zIndex: 5,
        textAlign: "center", padding: "22px",
        borderTop: "1px solid rgba(44,110,106,0.1)",
        color: "rgba(184,150,62,0.5)", fontSize: 20,
        fontFamily: "Georgia, 'Times New Roman', serif",
        letterSpacing: 2,
      }}>
        اللهم صل على سيدنا محمد
      </footer>
    </div>
  );
}

// ── Shared styles & small components ─────────────────────────

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
        "radial-gradient(ellipse at 90% 85%, rgba(184,150,62,0.07) 0%, transparent 55%)",
    }} />
  );
}

const backBtnStyle = {
  background: "none", border: "none",
  color: "rgba(184,150,62,0.6)", fontSize: 12,
  letterSpacing: "1.8px", textTransform: "uppercase",
  cursor: "pointer", fontFamily: "inherit",
  padding: "22px 0 0", display: "flex",
  alignItems: "center", gap: 8, transition: "color 0.18s",
};

function NavBtn({ dir, q, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(44,110,106,0.55)" : "rgba(184,150,62,0.2)"}`,
        borderRadius: 9, padding: "12px 16px",
        color: hov ? "#c9a84c" : "rgba(184,150,62,0.65)",
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
