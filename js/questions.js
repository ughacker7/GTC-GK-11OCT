const questions = [
    {
        "question_hi": "भारतीय संविधान की मूल अंग्रेजी प्रति किसने अपने हाथों से सुलेखन (कैलोग्राफी) की थी?",
        "question_en": "Who handwrote the original English calligraphy of the Constitution of India?",
        "options_hi": ["(a) नन्दलाल बोस", "(b) प्रेम बिहारी नारायण रायज़ादा", "(c) बी. एन. राव", "(d) डॉ. भीमराव अंबेडकर"],
        "options_en": ["(a) Nandalal Bose", "(b) Prem Behari Narain Raizada", "(c) B. N. Rau", "(d) Dr. B. R. Ambedkar"],
        "answer": "(b) प्रेम बिहारी नारायण रायज़ादा"
    },
    {
        "question_hi": "संविधान सभा की प्रारूप समिति (Drafting Committee) के अध्यक्ष कौन थे?",
        "question_en": "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
        "options_hi": ["(a) डॉ. राजेन्द्र प्रसाद", "(b) जवाहरलाल नेहरू", "(c) डॉ. भीमराव अंबेडकर", "(d) सरदार वल्लभभाई पटेल"],
        "options_en": ["(a) Dr. Rajendra Prasad", "(b) Jawaharlal Nehru", "(c) Dr. B. R. Ambedkar", "(d) Sardar Vallabhbhai Patel"],
        "answer": "(c) डॉ. भीमराव अंबेडकर"
    },
    {
        "question_hi": "डॉ. बी. आर. अंबेडकर ने किस अनुच्छेद को संविधान का 'हृदय और आत्मा' कहा था (संवैधानिक उपचारों का अधिकार)?",
        "question_en": "Which Article was called the 'Heart and Soul' of the Constitution (Right to Constitutional Remedies)?",
        "options_hi": ["(a) अनुच्छेद 19", "(b) अनुच्छेद 21", "(c) अनुच्छेद 14", "(d) अनुच्छेद 32"],
        "options_en": ["(a) Article 19", "(b) Article 21", "(c) Article 14", "(d) Article 32"],
        "answer": "(d) अनुच्छेद 32"
    },
    {
        "question_hi": "भारतीय संविधान में युद्ध या बाहरी आक्रमण के आधार पर राष्ट्रीय आपातकाल किस अनुच्छेद के तहत लगाया जाता है?",
        "question_en": "Under which Article is National Emergency proclaimed due to war or external aggression?",
        "options_hi": ["(a) अनुच्छेद 356", "(b) अनुच्छेद 360", "(c) अनुच्छेद 352", "(d) अनुच्छेद 365"],
        "options_en": ["(a) Article 356", "(b) Article 360", "(c) Article 352", "(d) Article 365"],
        "answer": "(c) अनुच्छेद 352"
    },
    {
        "question_hi": "भारतीय संविधान में राज्य के नीति निदेशक तत्व (DPSP) किस देश के संविधान से प्रेरित हैं?",
        "question_en": "Directive Principles of State Policy (DPSP) in the Indian Constitution are inspired from which country?",
        "options_hi": ["(a) सोवियत संघ", "(b) आयरलैंड", "(c) संयुक्त राज्य अमेरिका", "(d) ऑस्ट्रेलिया"],
        "options_en": ["(a) Soviet Union", "(b) Ireland", "(c) United States of America", "(d) Australia"],
        "answer": "(b) आयरलैंड"
    },
    {
        "question_hi": "भारतीय संविधान की 8वीं अनुसूची में वर्तमान में कुल कितनी भाषाओं को मान्यता प्राप्त है?",
        "question_en": "How many languages are currently recognized in the 8th Schedule of the Indian Constitution?",
        "options_hi": ["(a) 22 भाषाएँ", "(b) 14 भाषाएँ", "(c) 18 भाषाएँ", "(d) 24 भाषाएँ"],
        "options_en": ["(a) 22 languages", "(b) 14 languages", "(c) 18 languages", "(d) 24 languages"],
        "answer": "(a) 22 भाषाएँ"
    },
    {
        "question_hi": "पंचायती राज संस्थाओं को संवैधानिक दर्जा किस संशोधन अधिनियम द्वारा प्रदान किया गया?",
        "question_en": "By which Constitutional Amendment Act was constitutional status granted to Panchayati Raj Institutions?",
        "options_hi": ["(a) 42वाँ संशोधन", "(b) 44वाँ संशोधन", "(c) 86वाँ संशोधन", "(d) 73वाँ संशोधन"],
        "options_en": ["(a) 42nd Amendment", "(b) 44th Amendment", "(c) 86th Amendment", "(d) 73rd Amendment"],
        "answer": "(d) 73वाँ संशोधन"
    },
    {
        "question_hi": "प्रयाग प्रशस्ति (इलाहाबाद स्तंभ शिलालेख) की रचना किस दरबारी कवि ने की थी?",
        "question_en": "Who composed the Prayag Prashasti (Allahabad Pillar Inscription)?",
        "options_hi": ["(a) हरिषेण", "(b) बाणभट्ट", "(c) रविकीर्ति", "(d) कालिदास"],
        "options_en": ["(a) Harishena", "(b) Banabhatta", "(c) Ravikirti", "(d) Kalidasa"],
        "answer": "(a) हरिषेण"
    },
    {
        "question_hi": "प्रसिद्ध ऐहोल अभिलेख में किस प्रतापी चालुक्य शासक की उपलब्धियों और युद्धों का वर्णन है?",
        "question_en": "The famous Aihole Inscription describes the achievements of which Chalukya ruler?",
        "options_hi": ["(a) पुलकेशिन द्वितीय", "(b) विक्रमादित्य द्वितीय", "(c) कीर्तिवर्मन प्रथम", "(d) पुलकेशिन प्रथम"],
        "options_en": ["(a) Pulakeshin II", "(b) Vikramaditya II", "(c) Kirtivarman I", "(d) Pulakeshin I"],
        "answer": "(a) पुलकेशिन द्वितीय"
    },
    {
        "question_hi": "मौर्य कालीन भारत के सामाजिक जीवन पर लिखी गई पुस्तक 'इंडिका' के लेखक कौन थे?",
        "question_en": "Who was the author of the book 'Indica' describing Mauryan society?",
        "options_hi": ["(a) मेगस्थनीज", "(b) डाइमेकस", "(c) फाह्यान", "(d) ह्वेनसांग"],
        "options_en": ["(a) Megasthenes", "(b) Deimachus", "(c) Faxian", "(d) Xuanzang"],
        "answer": "(a) मेगस्थनीज"
    },
    {
        "question_hi": "प्राचीन विक्रमशिला महाविहार (विश्वविद्यालय) की स्थापना किस पालवंशीय शासक ने की थी?",
        "question_en": "Which Pala dynasty ruler founded the ancient Vikramashila Mahavihara (University)?",
        "options_hi": ["(a) गोपाल", "(b) देवपाल", "(c) धर्मपाल", "(d) रामपाल"],
        "options_en": ["(a) Gopala", "(b) Devapala", "(c) Dharmapala", "(d) Ramapala"],
        "answer": "(c) धर्मपाल"
    },
    {
        "question_hi": "प्राचीन नालंदा विश्वविद्यालय की स्थापना किस गुप्त सम्राट के शासनकाल में हुई थी?",
        "question_en": "Ancient Nalanda University was established during the reign of which Gupta emperor?",
        "options_hi": ["(a) समुद्रगुप्त", "(b) चंद्रगुप्त विक्रमादित्य", "(c) स्कंदगुप्त", "(d) कुमारगुप्त प्रथम"],
        "options_en": ["(a) Samudragupta", "(b) Chandragupta Vikramaditya", "(c) Skandagupta", "(d) Kumaragupta I"],
        "answer": "(d) कुमारगुप्त प्रथम"
    },
    {
        "question_hi": "प्राचीन तमिल महाकाव्यों और मधुरई परिषदों से जुड़ा 'संगम साहित्य' मुख्यतः किस भाषा में रचित है?",
        "question_en": "'Sangam Literature', associated with ancient Madurai assemblies, was predominantly composed in which language?",
        "options_hi": ["(a) संस्कृत", "(b) तमिल", "(c) तेलुगु", "(d) प्राकृत"],
        "options_en": ["(a) Sanskrit", "(b) Tamil", "(c) Telugu", "(d) Prakrit"],
        "answer": "(b) तमिल"
    },
    {
        "question_hi": "सिंधु घाटी सभ्यता का प्रसिद्ध गोदीवाड़ा (डॉक्यार्ड/बंदरगाह) लोथल वर्तमान में किस राज्य में स्थित है?",
        "question_en": "The famous Harappan dockyard port of Lothal is located in which present-day state?",
        "options_hi": ["(a) राजस्थान", "(b) महाराष्ट्र", "(c) गुजरात", "(d) पंजाब"],
        "options_en": ["(a) Rajasthan", "(b) Maharashtra", "(c) Gujarat", "(d) Punjab"],
        "answer": "(c) गुजरात"
    },
    {
        "question_hi": "हड़प्पा सभ्यता का प्रसिद्ध 'विशाल स्नानागार' (Great Bath) किस पुरातात्विक स्थल पर मिला था?",
        "question_en": "Where was the famous 'Great Bath' of the Indus Valley Civilization discovered?",
        "options_hi": ["(a) हड़प्पा", "(b) मोहनजोदड़ो", "(c) कालीबंगा", "(d) धोलावीरा"],
        "options_en": ["(a) Harappa", "(b) Mohenjo-daro", "(c) Kalibangan", "(d) Dholavira"],
        "answer": "(b) मोहनजोदड़ो"
    },
    {
        "question_hi": "1336 ईस्वी में तुंगभद्रा नदी के तट पर विजयनगर साम्राज्य की नींव किन दो भाइयों ने रखी थी?",
        "question_en": "Which two brothers founded the Vijayanagara Empire on the banks of Tungabhadra in 1336 AD?",
        "options_hi": ["(a) कृष्णदेव राय और अच्युत राय", "(b) इम्माडि नरसिंह और वीर नरसिंह", "(c) रामराय और तिरुमल", "(d) हरिहर और बुक्का"],
        "options_en": ["(a) Krishnadeva Raya & Achyuta Raya", "(b) Immadi Narasimha & Vira Narasimha", "(c) Rama Raya & Tirumala", "(d) Harihara & Bukka"],
        "answer": "(d) हरिहर और बुक्का"
    },
    {
        "question_hi": "मुगल साम्राज्य में सैन्य और नागरिक प्रशासन को सुदृढ़ करने हेतु 'मनसबदारी व्यवस्था' को किसने संगठित किया?",
        "question_en": "Who formalized and developed the 'Mansabdari System' in the Mughal administration?",
        "options_hi": ["(a) बाबर", "(b) अकबर", "(c) शेरशाह सूरी", "(d) जहांगीर"],
        "options_en": ["(a) Babur", "(b) Akbar", "(c) Sher Shah Suri", "(d) Jahangir"],
        "answer": "(b) अकबर"
    },
    {
        "question_hi": "भारत का मानक समय (IST) किस मानक देशांतर रेखा के स्थानीय समय पर आधारित है?",
        "question_en": "Indian Standard Time (IST) is based on the local time of which standard meridian?",
        "options_hi": ["(a) 82°30' पश्चिमी देशांतर", "(b) 80°30' पूर्वी देशांतर", "(c) 68°07' पूर्वी देशांतर", "(d) 82°30' पूर्वी देशांतर"],
        "options_en": ["(a) 82°30' W Longitude", "(b) 80°30' E Longitude", "(c) 68°07' E Longitude", "(d) 82°30' E Longitude"],
        "answer": "(d) 82°30' पूर्वी देशांतर"
    },
    {
        "question_hi": "कर्क रेखा (Tropic of Cancer) भारत के कुल कितने राज्यों से होकर गुजरती है?",
        "question_en": "Through how many Indian states does the Tropic of Cancer pass?",
        "options_hi": ["(a) 8 राज्यों से", "(b) 7 राज्यों से", "(c) 9 राज्यों से", "(d) 6 राज्यों से"],
        "options_en": ["(a) 8 States", "(b) 7 States", "(c) 9 States", "(d) 6 States"],
        "answer": "(a) 8 राज्यों से"
    },
    {
        "question_hi": "पाक जलडमरूमध्य (Palk Strait) किन दो पड़ोसी देशों के समुद्री भूभाग को अलग करता है?",
        "question_en": "Palk Strait separates which two neighboring countries?",
        "options_hi": ["(a) भारत और मालदीव", "(b) भारत और बांग्लादेश", "(c) भारत और श्रीलंका", "(d) भारत और इंडोनेशिया"],
        "options_en": ["(a) India & Maldives", "(b) India & Bangladesh", "(c) India & Sri Lanka", "(d) India & Indonesia"],
        "answer": "(c) भारत और श्रीलंका"
    },
    {
        "question_hi": "दस डिग्री चैनल (10° Channel) किन दो प्रमुख द्वीप समूहों को आपस में अलग करता है?",
        "question_en": "The Ten Degree Channel separates which two island groups?",
        "options_hi": ["(a) अंडमान और निकोबार द्वीप समूह", "(b) मिनिकॉय और मालदीव", "(c) लक्षद्वीप और मिनिकॉय", "(d) दमन और दीव"],
        "options_en": ["(a) Andaman and Nicobar Islands", "(b) Minicoy and Maldives", "(c) Lakshadweep and Minicoy", "(d) Daman and Diu"],
        "answer": "(a) अंडमान और निकोबार द्वीप समूह"
    },
    {
        "question_hi": "भारत का एकमात्र सक्रिय ज्वालामुखी (Active Volcano) कहाँ स्थित है?",
        "question_en": "Where is the only active volcano of India situated?",
        "options_hi": ["(a) नारकोंडम द्वीप", "(b) लिटिल निकोबार", "(c) नार्वे द्वीप", "(d) बैरन द्वीप (अंडमान सागर)"],
        "options_en": ["(a) Narcondam Island", "(b) Little Nicobar", "(c) Norway Island", "(d) Barren Island (Andaman Sea)"],
        "answer": "(d) बैरन द्वीप (अंडमान सागर)"
    },
    {
        "question_hi": "उत्तर-पूर्वी भारत की सबसे बड़ी मीठे पानी की लोकटक झील किस राज्य में स्थित है?",
        "question_en": "In which state is Loktak Lake, the largest freshwater lake of Northeast India, located?",
        "options_hi": ["(a) असम", "(b) मिजोरम", "(c) मणिपुर", "(d) मेघालय"],
        "options_en": ["(a) Assam", "(b) Mizoram", "(c) Manipur", "(d) Meghalaya"],
        "answer": "(c) मणिपुर"
    },
    {
        "question_hi": "विश्व का सबसे बड़ा नदी द्वीप 'माजुली' किस नदी के बेसिन में स्थित है?",
        "question_en": "The world's largest river island 'Majuli' is situated on which river?",
        "options_hi": ["(a) गंगा नदी", "(b) ब्रह्मपुत्र नदी", "(c) सिंधु नदी", "(d) गोदावरी नदी"],
        "options_en": ["(a) Ganga River", "(b) Brahmaputra River", "(c) Indus River", "(d) Godavari River"],
        "answer": "(b) ब्रह्मपुत्र नदी"
    },
    {
        "question_hi": "प्रशांत महासागर में स्थित विश्व का सबसे गहरा महासागरीय गर्त (Trench) कौन-सा है?",
        "question_en": "Which is the deepest oceanic trench in the world, located in the Pacific Ocean?",
        "options_hi": ["(a) टोंगा गर्त", "(b) मारियाना गर्त", "(c) सुंडा गर्त", "(d) जावा गर्त"],
        "options_en": ["(a) Tonga Trench", "(b) Mariana Trench", "(c) Sunda Trench", "(d) Java Trench"],
        "answer": "(b) मारियाना गर्त"
    },
    {
        "question_hi": "विश्व की सबसे लंबी महाद्वीपीय पर्वत श्रृंखला (Longest Mountain Range) कौन-सी है?",
        "question_en": "Which is the longest continental mountain range in the world?",
        "options_hi": ["(a) हिमालय पर्वतमाला", "(b) एंडीज पर्वतमाला", "(c) रॉकी पर्वतमाला", "(d) आल्प्स पर्वतमाला"],
        "options_en": ["(a) Himalayas", "(b) Andes Mountain Range", "(c) Rockies", "(d) Alps"],
        "answer": "(b) एंडीज पर्वतमाला"
    },
    {
        "question_hi": "संविधान सभा द्वारा स्वतंत्र भारत का संविधान औपचारिक रूप से कब अंगीकृत (अडॉप्ट) किया गया?",
        "question_en": "When was the Constitution of India formally adopted by the Constituent Assembly?",
        "options_hi": ["(a) 26 जनवरी 1950", "(b) 15 अगस्त 1947", "(c) 26 नवम्बर 1949", "(d) 9 दिसम्बर 1946"],
        "options_en": ["(a) 26 January 1950", "(b) 15 August 1947", "(c) 26 November 1949", "(d) 9 December 1946"],
        "answer": "(c) 26 नवम्बर 1949"
    },
    {
        "question_hi": "वर्तमान में भारतीय संविधान में कुल कितनी अनुसूचियाँ (Schedules) शामिल हैं?",
        "question_en": "How many Schedules are currently present in the Indian Constitution?",
        "options_hi": ["(a) 8 अनुसूचियाँ", "(b) 10 अनुसूचियाँ", "(c) 14 अनुसूचियाँ", "(d) 12 अनुसूचियाँ"],
        "options_en": ["(a) 8 Schedules", "(b) 10 Schedules", "(c) 14 Schedules", "(d) 12 Schedules"],
        "answer": "(d) 12 अनुसूचियाँ"
    },
    {
        "question_hi": "भारत की संघीय व्यवस्था में केंद्र स्तर पर सर्वोच्च विधायिका (Supreme Legislature) किसे कहा जाता है?",
        "question_en": "Which body is the supreme legislature at the central level in India?",
        "options_hi": ["(a) संसद (लोकसभा एवं राज्यसभा)", "(b) केवल लोकसभा", "(c) केवल राज्यसभा", "(d) उच्चतम न्यायालय"],
        "options_en": ["(a) Parliament (Lok Sabha & Rajya Sabha)", "(b) Lok Sabha only", "(c) Rajya Sabha only", "(d) Supreme Court"],
        "answer": "(a) संसद (लोकसभा एवं राज्यसभा)"
    },
    {
        "question_hi": "स्वतंत्र भारत के प्रथम राष्ट्रपति के रूप में किसे चुना गया था?",
        "question_en": "Who was elected as the first President of Independent India?",
        "options_hi": ["(a) डॉ. सर्वपल्ली राधाकृष्णन", "(b) सी. राजगोपालाचारी", "(c) डॉ. राजेन्द्र प्रसाद", "(d) डॉ. जाकिर हुसैन"],
        "options_en": ["(a) Dr. Sarvepalli Radhakrishnan", "(b) C. Rajagopalachari", "(c) Dr. Rajendra Prasad", "(d) Dr. Zakir Husain"],
        "answer": "(c) डॉ. राजेन्द्र प्रसाद"
    },
    {
        "question_hi": "नई दिल्ली स्थित भारत के सर्वोच्च न्यायालय (Supreme Court) की विधिवत स्थापना कब हुई थी?",
        "question_en": "When was the Supreme Court of India officially established in New Delhi?",
        "options_hi": ["(a) 15 अगस्त 1947", "(b) 28 जनवरी 1950", "(c) 26 जनवरी 1949", "(d) 26 जनवरी 1950"],
        "options_en": ["(a) 15 August 1947", "(b) 28 January 1950", "(c) 26 January 1949", "(d) 26 January 1950"],
        "answer": "(d) 26 जनवरी 1950"
    },
    {
        "question_hi": "भारत के वर्तमान राष्ट्रीय ध्वज 'तिरंगा' का मूल प्रारूप किसने डिजाइन किया था?",
        "question_en": "Who designed the original layout of the National Flag of India?",
        "options_hi": ["(a) पिंगली वेंकैया", "(b) बंकिम चंद्र चटर्जी", "(c) रवींद्रनाथ टैगोर", "(d) सुब्रह्मण्यम भारती"],
        "options_en": ["(a) Pingali Venkayya", "(b) Bankim Chandra Chatterjee", "(c) Rabindranath Tagore", "(d) Subramanya Bharathi"],
        "answer": "(a) पिंगली वेंकैया"
    },
    {
        "question_hi": "दूरसंचार क्रांति की शुरुआत करने वाले टेलीफोन का आविष्कार किसने किया था?",
        "question_en": "Who invented the telephone that revolutionized telecommunications?",
        "options_hi": ["(a) थॉमस अल्वा एडिसन", "(b) अलेक्जेंडर ग्राहम बेल", "(c) गुलिएल्मो मार्कोनी", "(d) माइकल फैराडे"],
        "options_en": ["(a) Thomas Alva Edison", "(b) Alexander Graham Bell", "(c) Guglielmo Marconi", "(d) Michael Faraday"],
        "answer": "(b) अलेक्जेंडर ग्राहम बेल"
    },
    {
        "question_hi": "15वीं शताब्दी में चल-प्रकार की आधुनिक छपाई मशीन (Movable Type Printing Press) का आविष्कार किसने किया था?",
        "question_en": "Who invented the movable-type printing press in the 15th century?",
        "options_hi": ["(a) आइजैक न्यूटन", "(b) जेम्स वाट", "(c) योहान्स गुटेनबर्ग", "(d) रोजर बेकन"],
        "options_en": ["(a) Isaac Newton", "(b) James Watt", "(c) Johannes Gutenberg", "(d) Roger Bacon"],
        "answer": "(c) योहान्स गुटेनबर्ग"
    },
    {
        "question_hi": "औद्योगिक क्रांति के दौरान व्यावहारिक वाष्प इंजन (Condensing Steam Engine) का आविष्कार किसने किया?",
        "question_en": "Who developed the practical condensing steam engine during the Industrial Revolution?",
        "options_hi": ["(a) जॉर्ज स्टीफेंसन", "(b) रिचर्ड आर्कराइट", "(c) थॉमस न्यूकोमेन", "(d) जेम्स वाट"],
        "options_en": ["(a) George Stephenson", "(b) Richard Arkwright", "(c) Thomas Newcomen", "(d) James Watt"],
        "answer": "(d) जेम्स वाट"
    },
    {
        "question_hi": "चेचक (Smallpox) के टीके की खोज कर आधुनिक टीकाकरण (Vaccine) के जनक कौन बने?",
        "question_en": "Who became the father of modern immunization by discovering the smallpox vaccine?",
        "options_hi": ["(a) एडवर्ड जेनर", "(b) लुई पाश्चर", "(c) रॉबर्ट कोच", "(d) अलेक्जेंडर फ्लेमिंग"],
        "options_en": ["(a) Edward Jenner", "(b) Louis Pasteur", "(c) Robert Koch", "(d) Alexander Fleming"],
        "answer": "(a) एडवर्ड जेनर"
    },
    {
        "question_hi": "1928 में कवक (Fungus) से पहली एंटीबायोटिक दवा 'पेनिसिलिन' का आविष्कार किसने किया?",
        "question_en": "Who discovered the first antibiotic 'Penicillin' from fungi in 1928?",
        "options_hi": ["(a) जोसेफ लिस्टर", "(b) अलेक्जेंडर फ्लेमिंग", "(c) रोनाल्ड रॉस", "(d) एंटोनी वॉन ल्यूवेनहुक"],
        "options_en": ["(a) Joseph Lister", "(b) Alexander Fleming", "(c) Ronald Ross", "(d) Antonie van Leeuwenhoek"],
        "answer": "(b) अलेक्जेंडर फ्लेमिंग"
    },
    {
        "question_hi": "खगोलीय पिंडों के स्पष्ट अवलोकन के लिए उन्नत दूरबीन (Telescope) का उपयोग किसने आरंभ किया?",
        "question_en": "Who pioneered the use of the telescope for systematic astronomical observations?",
        "options_hi": ["(a) निकोलस कोपरनिकस", "(b) जोहान्स केप्लर", "(c) गैलीलियो गैलीली", "(d) टायको ब्राहे"],
        "options_en": ["(a) Nicolaus Copernicus", "(b) Johannes Kepler", "(c) Galileo Galilei", "(d) Tycho Brahe"],
        "answer": "(c) गैलीलियो गैलीली"
    },
    {
        "question_hi": "'एनालिटिकल इंजन' की अवधारणा विकसित कर 'कंप्यूटर का जनक' किसे कहा जाता है?",
        "question_en": "Who is considered the 'Father of Computer' for conceptualizing the Analytical Engine?",
        "options_hi": ["(a) एलन ट्यूरिंग", "(b) जॉन वॉन न्यूमैन", "(c) ब्लेज़ पास्कल", "(d) चार्ल्स बैवेज"],
        "options_en": ["(a) Alan Turing", "(b) John von Neumann", "(c) Blaise Pascal", "(d) Charles Babbage"],
        "answer": "(d) चार्ल्स बैवेज"
    },
    {
        "question_hi": "सार्वभौमिक गुरुत्वाकर्षण का नियम (Universal Law of Gravitation) किस वैज्ञानिक ने प्रतिपादित किया?",
        "question_en": "Which scientist formulated the Universal Law of Gravitation?",
        "options_hi": ["(a) अल्बर्ट आइंस्टीन", "(b) अर्नेस्ट रदरफोर्ड", "(c) गैलीलियो गैलीली", "(d) सर आइजैक न्यूटन"],
        "options_en": ["(a) Albert Einstein", "(b) Ernest Rutherford", "(c) Galileo Galilei", "(d) Sir Isaac Newton"],
        "answer": "(d) सर आइजैक न्यूटन"
    },
    {
        "question_hi": "व्यावहारिक तापदीप्त बिजली के बल्ब (Incandescent Electric Bulb) का आविष्कार किसने किया?",
        "question_en": "Who invented the commercially viable incandescent electric light bulb?",
        "options_hi": ["(a) निकोला टेस्ला", "(b) हम्फ्री डेवी", "(c) थॉमस अल्वा एडिसन", "(d) जेम्स क्लर्क मैक्सवेल"],
        "options_en": ["(a) Nikola Tesla", "(b) Humphry Davy", "(c) Thomas Alva Edison", "(d) James Clerk Maxwell"],
        "answer": "(c) थॉमस अल्वा एडिसन"
    },
    {
        "question_hi": "क्रिकेट इतिहास का पहला पुरुष वनडे विश्व कप (World Cup) किस वर्ष आयोजित किया गया था?",
        "question_en": "In which year was the first Men's ODI Cricket World Cup held?",
        "options_hi": ["(a) 1971 में", "(b) 1975 में", "(c) 1979 में", "(d) 1983 में"],
        "options_en": ["(a) In 1971", "(b) In 1975", "(c) In 1979", "(d) In 1983"],
        "answer": "(b) 1975 में"
    },
    {
        "question_hi": "एथेंस (ग्रीस) में आधुनिक ओलंपिक खेलों की शुरुआत किस वर्ष की गई थी?",
        "question_en": "In which year did the modern Olympic Games begin in Athens (Greece)?",
        "options_hi": ["(a) 1900 में", "(b) 1892 में", "(c) 1896 में", "(d) 1904 में"],
        "options_en": ["(a) In 1900", "(b) In 1892", "(c) In 1896", "(d) In 1904"],
        "answer": "(c) 1896 में"
    },
    {
        "question_hi": "भारतीय खेल इतिहास में 'हॉकी का जादूगर' उपनाम से किसे सम्मानित किया जाता है?",
        "question_en": "Who is famously revered with the nickname 'The Wizard of Hockey' in Indian sports?",
        "options_hi": ["(a) धनराज पिल्लै", "(b) बलबीर सिंह सीनियर", "(c) के. डी. सिंह बाबू", "(d) मेजर ध्यानचंद"],
        "options_en": ["(a) Dhanraj Pillay", "(b) Balbir Singh Sr.", "(c) K. D. Singh Babu", "(d) Major Dhyan Chand"],
        "answer": "(d) मेजर ध्यानचंद"
    },
    {
        "question_hi": "मानव शरीर की सबसे बड़ी पाचन ग्रंथि (Largest Gland) कौन-सी है?",
        "question_en": "Which is the largest digestive gland in the human body?",
        "options_hi": ["(a) अग्न्याशय (Pancreas)", "(b) थायरॉइड (Thyroid)", "(c) यकृत (Liver)", "(d) पीयूष ग्रंथि (Pituitary)"],
        "options_en": ["(a) Pancreas", "(b) Thyroid", "(c) Liver", "(d) Pituitary Gland"],
        "answer": "(c) यकृत (Liver)"
    },
    {
        "question_hi": "मानव कंकाल तंत्र में जाँघ में पाई जाने वाली सबसे लंबी और मजबूत हड्डी कौन-सी है?",
        "question_en": "Which is the longest and strongest bone found in the human thigh?",
        "options_hi": ["(a) टिबिया", "(b) फीमर", "(c) ह्यूमरस", "(d) फिबुला"],
        "options_en": ["(a) Tibia", "(b) Femur", "(c) Humerus", "(d) Fibula"],
        "answer": "(b) फीमर"
    },
    {
        "question_hi": "एक स्वस्थ सामान्य वयस्क मनुष्य का हृदय प्रति मिनट औसतन कितनी बार धड़कता है?",
        "question_en": "On average, how many times does a healthy adult human heart beat per minute?",
        "options_hi": ["(a) 60 बार", "(b) 80 बार", "(c) 90 बार", "(d) 72 बार"],
        "options_en": ["(a) 60 times", "(b) 80 times", "(c) 90 times", "(d) 72 times"],
        "answer": "(d) 72 बार"
    },
    {
        "question_hi": "मानव शरीर का सबसे बड़ा बाहरी अंग (Largest External Organ) कौन-सा है?",
        "question_en": "Which is the largest external organ of the human body?",
        "options_hi": ["(a) फेफड़े", "(b) आंतें", "(c) त्वचा", "(d) मस्तिष्क"],
        "options_en": ["(a) Lungs", "(b) Intestines", "(c) Skin", "(d) Brain"],
        "answer": "(c) त्वचा"
    },
    {
        "question_hi": "सोवियत संघ की सहायता से 1975 में प्रक्षेपित भारत का पहला उपग्रह कौन-सा था?",
        "question_en": "Which was India's first satellite launched in 1975 with the help of the Soviet Union?",
        "options_hi": ["(a) रोहिणी", "(b) आर्यभट्ट", "(c) भास्कर-I", "(d) इनसैट-1A"],
        "options_en": ["(a) Rohini", "(b) Aryabhata", "(c) Bhaskara-I", "(d) INSAT-1A"],
        "answer": "(b) आर्यभट्ट"
    },
    {
        "question_hi": "20 जुलाई 1969 को अपोलो-11 मिशन के तहत चंद्रमा की सतह पर पहला कदम रखने वाले व्यक्ति कौन थे?",
        "question_en": "Who was the first person to step onto the Moon's surface during the Apollo 11 mission on July 20, 1969?",
        "options_hi": ["(a) नील आर्मस्ट्रांग", "(b) बज़ एल्ड्रिन", "(c) यूरी गागरिन", "(d) माइकल कोलिन्स"],
        "options_en": ["(a) Neil Armstrong", "(b) Buzz Aldrin", "(c) Yuri Gagarin", "(d) Michael Collins"],
        "answer": "(a) नील आर्मस्ट्रांग"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions };
}