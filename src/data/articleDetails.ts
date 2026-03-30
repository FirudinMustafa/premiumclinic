export interface ArticleSection {
  heading: string;
  content: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ArticleDetail {
  sections: ArticleSection[];
  faq: FaqItem[];
}

export const articleDetails: Record<string, ArticleDetail> = {
  "feqerearasi-disk-yirtiqi": {
    "sections": [
      {
        "heading": "Fəqərə Yırtığının Əlamətləri",
        "content": "Fəqərə yırtığının simptomları yırtığın yerləşdiyi nahiyəyə və sinirlərə təsirinə görə fərqlənir. Bu əlamətlər insanın gündəlik həyatına ciddi təsir göstərə bilər və erkən diaqnoz çox vacibdir."
      },
      {
        "heading": "Ağrı",
        "content": "Boyun və ya bel nahiyəsində hiss edilən kəskin, daimi ağrı insanın həyat keyfiyyətini əhəmiyyətli dərəcədə azalda bilər. Ağrı adətən hərəkət zamanı artır və uzun müddət oturmaq və ya ayaq üstə qalmaq narahatlıq yaradır. Sinirlərin sıxılması səbəbindən ağrı ayaqlara və ya qollara yayıla bilər, bu da gündəlik fəaliyyətləri çətinləşdirir. Erkən müdaxilə edilmədikdə, ağrı xroniki hala keçə bilər və daha mürəkkəb müalicə tələb edə bilər."
      },
      {
        "heading": "Keyləşmə və İynəbatma",
        "content": "Qollarda, ayaqlarda və barmaqlarda yaranan uyuşma hissi, fəqərə yırtığının sinirlərə təzyiq etməsi nəticəsində meydana gəlir. Bu simptom, sinir yollarının pozulmasına işarə edir və əksər hallarda əlin və ya ayağın müəyyən hissələrində hissiyyat itkisi ilə müşayiət olunur. Sinirin sıxılması uzun müddət davam etdikdə, keyləşmə daha geniş sahələrə yayıla bilər və əzələlərin zəifləməsinə səbəb ola bilər. Bu əlamət zamanla daha da pisləşə bilər, ona görə də müalicəyə gecikmədən başlamaq vacibdir."
      },
      {
        "heading": "Əzələ Zəifliyi",
        "content": "Fəqərəarası disk yırtığı sinirlərə təzyiq edərək, əzələ zəifliyi və hərəkət çətinliklərinə səbəb ola bilər. Xəstələr adətən ayaqlarında və ya qollarında gücsüzlük hiss edir, bu da pilləkən çıxmaq və ya ağır əşyaları qaldırmaq kimi gündəlik fəaliyyətlərdə problem yaradır. Sinir funksiyası daha da pozulduqda, əzələ atrofiyası (əzələ kütləsinin azalması) baş verə bilər ki, bu da müalicəni daha da mürəkkəbləşdirir. Güc itkisi irəlilədikcə, yerişdə və koordinasiyada pozulmalar müşahidə oluna bilər."
      },
      {
        "heading": "Hərəkət Məhdudiyyəti",
        "content": "Fəqərəarası disk yırtığı olan insanlarda onurğa sütununun elastikliyi azalır və bədənin hərəkətliliyi məhdudlaşır. Bu vəziyyət xüsusilə səhər saatlarında və uzun müddət hərəkətsiz qaldıqdan sonra daha çox hiss olunur. İnsanlar müəyyən hərəkətləri yerinə yetirərkən sərtlik və ağrı hiss edə bilər, bu da gündəlik işləri yerinə yetirməyi çətinləşdirir. Əgər erkən müdaxilə edilməzsə, fəqərə yırtığı irəliləyərək onurğa sütununun strukturuna zərər verə və qalıcı hərəkət məhdudiyyəti yarada bilər."
      },
      {
        "heading": "Fəqərə Yırtığının Müalicə Metodları",
        "content": "Fəqərəarası disk yırtığının müalicəsi iki əsas istiqamətdə aparılır: əməliyyatsız konservativ yanaşma və cərrahi müdaxilə. Xəstənin vəziyyətindən və yırtığın dərəcəsindən asılı olaraq, müalicə fərdi şəkildə müəyyən edilir. Əməliyyatsız müalicə üsulları ilkin mərhələdə daha təsirli olur, lakin ciddi hallarda cərrahi müdaxilə tələb oluna bilər."
      }
    ],
    "faq": []
  },
  "oynaq-artrozu": {
    "sections": [
      {
        "heading": "What is Joint Arthritis?",
        "content": "Joint arthritis represents cartilage degradation and wear affecting joint structures. Healthy cartilage provides cushioning between bone ends, enabling smooth movement. However, arthritis causes cartilage to thin, lose elasticity, and develop cracks. Eventually, bone surfaces rub together, creating pain, inflammation, and restricted movement."
      },
      {
        "heading": "Causes and Development Mechanisms",
        "content": "Age-Related Changes: With advancing years, joint cartilage loses elasticity and regeneration slows. This causes cartilage tissue to thin and increases friction between bones. Joint fluid diminishes, accelerating arthritis development. Risk increases substantially after age 50.\n\nTrauma and Microtrauma: Previous injuries create micro-cracks in joint surfaces, disrupting cartilage structure. Athletes and those performing heavy physical work face elevated risk. Small traumas accumulate over time, accelerating cartilage breakdown. Proper rehabilitation after injury remains crucial.\n\nExcess Weight and Loading: Excessive body weight increases joint pressure significantly. Knee, hip, and ankle joints experience high stress. Research shows each 5-kilogram weight increase creates approximately 15 ki"
      },
      {
        "heading": "Arthritis Treatment: Comprehensive Recovery Approach",
        "content": "Arthritis treatment requires complex approaches tailored to disease stage. Treatment focuses on reducing pain, eliminating inflammation, and restoring joint mobility. Early diagnosis allows slowing disease progression. Combining lifestyle modifications with medical interventions produces more effective results.\n\nPharmaceutical Treatment: Initial arthritis stages employ medications to reduce inflammation and pain. Non-steroidal anti-inflammatory drugs (NSAIDs) reduce pain and joint swelling. Chondroprotectors (glucosamine and chondroitin sulfate) support cartilage repair and slow progression. Severe cases may involve intra-articular corticosteroid or hyaluronic acid injections. Medical treatment requires physician supervision and individualized approaches.\n\nLifestyle Modification: Maintaini"
      },
      {
        "heading": "Physiotherapy's Role in Arthritis Treatment",
        "content": "Physiotherapy significantly contributes to comprehensive arthritis management and disease progression control. Various therapy methods accelerate tissue repair and improve mobility. Physiotherapy reduces inflammation, stimulates circulation, and nourishes cartilage tissue. Early and mid-stage application can reduce medication requirements. By preserving joint function, it delays surgical necessity. Premium Clinic employs modern physiotherapy technologies with individualized patient approaches.\n\nPremium Clinic's Physiotherapeutic Treatments:\n\nLaser therapy accelerates cellular regeneration and reduces inflammatory responses, supporting tissue repair. This method effectively reduces pain and eliminates joint swelling. Magnetotherapy improves circulation, increasing tissue oxygen supply and r"
      },
      {
        "heading": "Why Premium Clinic?",
        "content": "Premium Clinic provides high-quality physiotherapy services through specialized, experienced physicians and rehabilitation specialists. The clinic employs modern medical equipment with individualized patient approaches. Our goal extends beyond pain relief to complete health recovery. We apply comprehensive approaches in arthritis treatment, helping patients return to active living.\n\nLiving with pain is no longer necessary. Early diagnosis and modern physiotherapy can halt arthritis progression. Contact Premium Clinic to improve life quality and preserve health. Take the first step toward pain-free movement today."
      }
    ],
    "faq": []
  },
  "mede-yanmasi": {
    "sections": [
      {
        "heading": "1. Helicobacter pylori infeksiyası",
        "content": "Helicobacter pylori, a bacterium that lives in the stomach's mucous lining, causes inflammation and digestion problems. This bacterium disrupts the balance of stomach acid and increases the risk of gastritis, ulcers, and even cancer. Infection spreads through contaminated water, food, or contact with infected individuals. Symptoms include stomach burning, pain, and indigestion. Without treatment, infection becomes chronic gastritis, leading to serious digestive complications."
      },
      {
        "heading": "2. Stress və psixoloji faktorlar",
        "content": "Chronic stress and emotional tension affect the body's hormonal balance, increasing stomach acid secretion. This irritates the stomach lining and causes inflammation and gastritis. Stress-related digestive problems manifest as burning, pain, and discomfort. Those under prolonged psychological pressure develop gastritis and other digestive diseases. Meditation, exercise, and healthy lifestyle reduce stress."
      },
      {
        "heading": "3. Səhv qidalanma vərdişləri",
        "content": "Improper nutrition causes excess stomach acid and disrupts digestion. High-acid foods, spicy and fried dishes irritate the stomach lining and increase gastritis risk. Carbonated drinks and caffeine on an empty stomach negatively affect the stomach. Regular consumption of fast food, fatty, and spiced meals causes gastritis. Balanced nutrition and natural foods are essential for healthy digestion."
      },
      {
        "heading": "4. Siqaret və alkoqol istifadəsi",
        "content": "Smoking and alcohol consumption damage the stomach's protective layer. Nicotine increases stomach acid and irritates the lining, creating inflammation. Heavy alcohol consumption directly damages the stomach wall and destroys its protective coating. Continuous smoking and alcohol use increase gastritis risk and worsen stomach diseases. Quitting these harmful habits is essential for stomach health."
      },
      {
        "heading": "5. Dərman istifadəsi",
        "content": "Certain medications, especially non-steroidal anti-inflammatory drugs (NSAIDs), severely damage the stomach lining. These medications weaken the stomach's protective layer and increase acid effects, raising gastritis risk. Pain relievers and anti-inflammatory drugs used long-term without supervision can cause ulcers. Aspirin and ibuprofen worsen gastritis and cause stomach bleeding. Medical consultation and alternative treatments are important when taking medications."
      },
      {
        "heading": "1. Mədə yanması və ya ağrısı",
        "content": "The primary symptom of gastritis is burning or persistent pain in the stomach area. This symptom worsens after eating and relates to increased acid levels. Patients experience heaviness, cramping, and sharp pain with serious discomfort. In untreated gastritis, stomach wall damage worsens the pain. Dietary attention and avoiding acidic foods are important for those with stomach burning."
      }
    ],
    "faq": []
  },
  "qiciqli-oskurek": {
    "sections": [
      {
        "heading": "1. Allergik Reaksiyalar",
        "content": "Allergiya -- qıcıqlı öskürəyin ən çox rast gəlinən səbəblərindən biridir. Toz, polen, heyvan tükü və digər allergenlər tənəffüs yollarında həssaslığı artırır və öskürək refleksini tetiklər. Amerikan Allergiya, Astma və İmmunologiya Akademiyasının məlumatına görə, allergik reaksiyalar xroniki öskürəyin 20-40%-nə səbəb olur."
      },
      {
        "heading": "2. Viral İnfeksiyalar",
        "content": "Ən çox yayılmış səbəblərdən biri viral respirator infeksiyalardır. Bu infeksiyalar, üst tənəffüs yollarını qıcıqlandırır və boğazda qaşınma hissi ilə bərabər quru öskürək yaradır. Adətən soyuqdəymə və ya qrip sonrası bu tip öskürək bir neçə həftə davam edə bilər."
      },
      {
        "heading": "3. Tənəffüs Yollarının Xəstəlikləri",
        "content": "Xroniki bronxit, astma və KOAH (xroniki obstruktiv ağciyər xəstəliyi) kimi tənəffüs yolları xəstəlikləri də qıcıqlı öskürəyin səbəbi ola bilər. Bu vəziyyətlərdə hava yolları iltihablanır, daralır və həssaslaşır, nəticədə daimi öskürək refleksi yaranır."
      },
      {
        "heading": "4. Havanın Çirklənməsi və Kimyəvi Maddələr",
        "content": "Tüstü, hava çirkliliyi, kimyəvi qazlar və aerozollar tənəffüs yollarını qıcıqlandıra bilər. Dünya Səhiyyə Təşkilatının (ÜST) məlumatına görə, hava çirkliliyi tənəffüs yolları xəstəliklərinin və quru öskürəyin artmasında mühüm rol oynayır."
      },
      {
        "heading": "5. Quru Hava və İqlim Şəraiti",
        "content": "Xüsusilə qış aylarında, otaqlarda quru hava öskürəyi artırır. Bu halda hava rütubətinin aşağı olması, boğazın və tənəffüs yollarının qurumasına səbəb olur və qıcıqlanmanı gücləndirir."
      },
      {
        "heading": "1. Klinik Sorğu və Fiziki Müayinə",
        "content": "İlk addım xəstənin tibbi tarixçəsinin öyrənilməsidir. Həkim öskürəyin nə vaxt başladığını, nə qədər davam etdiyini, gecə və ya gündüz dəyişikliklərini, təhrikedici faktorları (toz, soyuq hava, fiziki aktivlik), eləcə də digər simptomları (nəfəs darlığı, boğazda qaşınma, səs batıqlığı) soruşur. Daha sonra boğaz, burun, ağciyərlər və döş qəfəsi fiziki müayinə edilir."
      }
    ],
    "faq": [
      {
        "q": "Gecə Yatarkən Öskürək Hansı Xəstəliyin Əlamətidir?",
        "a": "Yuxu bədənimizin özünü yenilədiyi və istirahət etdiyi həyati bir prosesdir. Ancaq gecə yatarkən öskürək kimi narahatlıq bu istirahət müddətini kəsə və əsas sağlamlıq probleminin əlaməti ola bilər."
      }
    ]
  },
  "otit": {
    "sections": [
      {
        "heading": "Orta qulaq iltihabı nədir?",
        "content": "Otit olaraq da adlandırılan orta qulaq iltihabı orta qulaq boşluğunda infeksiya və iltihab nəticəsində yaranan bir vəziyyətdir. Orta qulaq qulaq pərdəsinin arxasında yerləşən və səs dalğalarını daxili qulağa ötürən bir bölgədir. Bu sahədə hava axını və maye drenajını təmin edən östaki borusu tıxandıqda infeksiya baş verir.\n\nOtit ümumiyyətlə iki əsas şəkildə təsnif edilir:\n- Kəskin otit: Ani başlayan və qısa müddətli infeksiyadır. Ağrı və qızdırma kimi aşkar simptomlarla özünü göstərir.\n- Xroniki otit: Müalicə olunmamış və ya təkrarlanan infeksiyalar nəticəsində yaranan uzun müddətli bir vəziyyət."
      },
      {
        "heading": "Otitin erkən simptomları",
        "content": "- Qulaq ağrısı: Orta qulaqda mayenin yığılması səbəbindən şiddətli təzyiq hissi ilə meydana gəlir. Xüsusilə uzanarkən ağrı artır.\n- Qulaqda dolğunluq hissi: Xəstələr qulaqda tıxanma və dolğunluq hissi yaşaya bilər.\n- Eşitmə itkisi: Orta qulaqda maye yığılması səbəbindən boğuq səslər və ya eşitmə qabiliyyətinin azalması.\n- Yüngül qızdırma: Bədən infeksiya ilə mübarizə apararkən yüngül qızdırma inkişaf edir.\n- Uşaqlarda əlavə əlamətlər: Uşaqlar tez-tez qulaqlarını çəkir, narahatlıq göstərir və yuxu problemləri yaranır."
      },
      {
        "heading": "Otitin qabaqcıl simptomları",
        "content": "- Şiddətli qulaq ağrısı: İnfeksiya irəlilədikcə qulaq ağrısı dözülməz hala gələ bilər.\n- Qulaqdan axıntı: Orta qulaqda yığılan maye qulaq pərdəsində bir dəlik səbəbiylə çölə çıxa bilər. Bu axıntı adətən sarımtıl və ya qanlı olur.\n- Yüksək qızdırma: İltihab pisləşdikcə bədən istiliyi 39 dereceyə qədər yüksələ bilər.\n- Başgicəllənmə və Balans Problemləri: Orta qulaqda infeksiya tarazlığı idarə edən daxili qulaq strukturlarını təsir edə bilər.\n- Daimi eşitmə itkisi: Uzun müddət müalicə olunmayan infeksiya daimi eşitmə itkisinə səbəb ola bilər.\n- Üz iflici: Orta qulağa yaxın sinirlərin zədələnməsi səbəbindən üz əzələlərinin iflici baş verə bilər."
      },
      {
        "heading": "Otitə bağlı daimi eşitmə itkisi",
        "content": "Müalicə olunmayan infeksiya orta qulaqda mayenin uzun müddət olması və qulaq pərdəsinin zədələnməsi səbəbindən eşitmə qabiliyyətinə daimi təsir göstərə bilər."
      },
      {
        "heading": "Otitə bağlı üz iflici riski",
        "content": "Orta qulaq infeksiyası qulaq nahiyəsindən keçən üz sinirlərini zədələyə bilər. İnfeksiya səbəbiylə orta qulağın şişməsi üz sinirlərinə təzyiq göstərərək onların funksiyalarını poza bilər."
      },
      {
        "heading": "Otitə bağlı beyinlə əlaqəli ağırlaşmalar",
        "content": "Meningit: Orta qulaqdakı infeksiya beyin qişalarına çata və meningitə səbəb ola bilər.\nBeyin absesi: Orta qulaqdan beyinə yayılan infeksiya beyin toxumasında abse meydana gəlməsinə səbəb ola bilər."
      }
    ],
    "faq": [
      {
        "q": "Otit daha çox kimlərdə olur?",
        "a": "Orta qulaq infeksiyalarına uşaqlarda daha çox rast gəlinir. Bunun səbəbi östaki borularının daha qısa və dar olmasıdır."
      },
      {
        "q": "Otit yoluxucudurmu?",
        "a": "Otit özü yoluxucu deyil, ancaq ona səbəb olan virus və ya bakteriyalar başqalarına yoluxa bilər."
      },
      {
        "q": "Orta qulaq infeksiyası üçün nə vaxt həkimə müraciət edilməlidir?",
        "a": "Qulaq ağrısı, eşitmə itkisi, yüksək hərarət və ya qulaqdan axıntı kimi əlamətlər varsa, dərhal həkimə müraciət etməlisiniz."
      },
      {
        "q": "Orta qulaq infeksiyası təkrarlanırmı?",
        "a": "Bəli, orta qulaq infeksiyaları xüsusilə uşaqlarda və immuniteti zəif olan şəxslərdə tez-tez təkrarlana bilər."
      },
      {
        "q": "Otitin müalicəsi nə qədər davam edir?",
        "a": "Yüngül hallarda müalicə 7-10 gün ərzində davam edir. Ancaq xroniki hallarda müalicə daha uzun sürə bilər."
      }
    ]
  },
  "sidik-tutmaq": {
    "sections": [
      {
        "heading": "Sidik yollarının infeksiyaları (UTI)",
        "content": "Urine retention causes accumulation in the bladder, creating breeding grounds for bacteria. This is a leading cause of urinary tract infections. Bacteria multiply in retained urine, causing infection. Women face higher UTI risk due to anatomy. Symptoms include frequent urination, burning during urination, lower abdominal pain, and cloudy urine. Untreated UTI can spread from bladder to kidneys, causing severe complications."
      },
      {
        "heading": "Sidik kisəsinin daşları və iltihabı",
        "content": "Urine retention causes mineral accumulation in the bladder, resulting in stone formation. Long-term retention causes cystitis (bladder inflammation). Urine accumulation causes mineral crystallization. Over time, crystals enlarge into bladder stones. Lower abdominal pain, difficult urination, bloody urine, and frequent urination indicate bladder stones. Untreated stones and inflammation cause bladder muscle weakness and incomplete emptying."
      },
      {
        "heading": "Böyrək infeksiyaları",
        "content": "Untreated UTIs spread to kidneys, causing pyelonephritis -- a serious complication in people with urine retention habits. High fever, flank pain, nausea, vomiting, and blood in urine characterize kidney infections. Untreated kidney infection causes kidney damage and potential kidney failure."
      },
      {
        "heading": "Sidiyi uzun müddət saxlamağın riskləri nələrdir?",
        "content": "- Sidik kisəsinin tutumunun azalması: Long-term retention causes continuous stretching of bladder muscles, reducing capacity.\n- Böyrək funksiyalarının pozulması: Accumulated urine can back up into kidneys over time, affecting their function.\n- Çanaq əzələlərinin zəifləməsi: Pelvic muscles enable urine retention and elimination. Retention habits negatively affect their natural function, causing weakness."
      },
      {
        "heading": "Sidik saxlamaqda kimlər daha çox risk altındadır?",
        "content": "- Sidik kisəsi problemi olan insanlar: Chronic infections, stones, or overactive bladder compromise function.\n- Hamilə qadınlar: Body changes during pregnancy increase retention harm. Uterus enlargement and hormonal changes pressure the bladder.\n- Uzunmüddətli oturan insanlar: Office workers, long travelers, and those with limited mobility tend toward retention habits."
      }
    ],
    "faq": [
      {
        "q": "Sidik tutmaq böyrəklərə zərər verirmi?",
        "a": "Yes, prolonged retention increases bladder pressure, causing urine to back up into kidneys. This causes infections and kidney damage."
      },
      {
        "q": "Sidik tutmağın çanaq əzələlərinə hansı təsiri var?",
        "a": "Long-term retention causes excessive stretching and weakening. This complicates bladder control and causes incontinence."
      },
      {
        "q": "Sidik tutmaq sidik kisəsində daş əmələ gətirirmi?",
        "a": "Yes, prolonged urine retention causes minerals to crystallize over time, forming stones."
      },
      {
        "q": "Sidik tutulmasının qarşısını necə almaq olar?",
        "a": "Respond to urination needs promptly. Empty bladder regularly, drink adequate fluids, maintain hygiene, and take short breaks during intensive work."
      }
    ]
  },
  "bas-agrisi": {
    "sections": [
      {
        "heading": "Əzələ Gərginliyi və Yorğunluğu",
        "content": "Əzələ gərginliyi gərgin baş ağrılarının əsas səbəblərindən biridir. Uzun müddət oturmaq, kompüter qarşısında işləmək və ya pis duruş vərdişləri boyun və baş əzələlərində gərginliyə səbəb olur. Əzələlər həddindən artıq uzandıqda, baş nahiyəsində ağrı və təzyiq hissi yaranır. Belə ağrı zamanı adətən başın hər iki tərəfində sıxılma və ya təzyiq hissi kimi hiss olunur."
      },
      {
        "heading": "Sinus problemləri",
        "content": "Sinuslarla bağlı problemlər baş ağrısının ümumi fiziki səbəbidir. Sinuslarda infeksiya, iltihab və ya tıxanıqlıq olduqda burun və göz ətrafında təzyiq hissi yaranır. Ağrı adətən alında, yanaq sümüklərində və burun ətrafında cəmlənir."
      },
      {
        "heading": "Travmalar və zədələr",
        "content": "Baş bölgəsinə zərbələr baş ağrısının şiddətli səbəbi ola bilər. Başa bir zərbə beyin sarsıntısına və ya kəllədaxili təzyiqin artmasına səbəb olur. Başgicəllənmə, bulanıq görmə və ürəkbulanma kimi simptomlarla da müşayiət olunur."
      },
      {
        "heading": "Stres və narahatlıq",
        "content": "Stres və narahatlıq baş ağrısının ən çox yayılmış səbəblərindən biridir. Stres vəziyyətində bədən əzələləri gərginləşdirən və qan axınına təsir edən hormonlar buraxır."
      },
      {
        "heading": "Yuxusuzluq və nizamsız yatmaq vərdişləri",
        "content": "Yuxu rejiminin pozulması miqren və gərginlik baş ağrılarına səbəb ola bilər. Qeyri-kafi və ya keyfiyyətsiz yuxu bədənin istirahət prosesini poza və baş ağrılarına səbəb ola bilər."
      },
      {
        "heading": "Qidalanmanın pozulması",
        "content": "Uzun müddət ac qalmaq qan şəkərinin aşağı düşməsinə və baş ağrılarına səbəb olur. Kifayət qədər su içməmək beyin ətrafındakı toxumalara təzyiq göstərərək baş ağrıları ilə nəticələnir."
      }
    ],
    "faq": [
      {
        "q": "Baş ağrıları nə vaxt ciddi vəziyyət hesab edilməlidir?",
        "a": "Baş ağrısı çox şiddətlidirsə, qəfil başlayırsa və ya nitqin zəifləməsi, görmə qabiliyyətinin itirilməsi, uyuşma və ya huşun itirilməsi kimi əlamətlərlə müşayiət olunursa, dərhal həkimə müraciət edilməlidir."
      },
      {
        "q": "Miqren və gərginlik baş ağrısı arasındakı fərq nədir?",
        "a": "Miqren adətən başın bir tərəfində zonklayan ağrıya səbəb olur və ürəkbulanma, qusma və ya işığa qarşı həssaslıqla müşayiət olunur. Gərginlik tipli baş ağrıları başın hər iki tərəfində sıxılma hissi yaradır."
      },
      {
        "q": "Yuxusuzluq baş ağrılarına səbəb olurmu?",
        "a": "Bəli, yuxusuzluq və ya nizamsız yuxu baş ağrılarına səbəb ola bilər."
      },
      {
        "q": "Hansı qidalar baş ağrılarına səbəb ola bilər?",
        "a": "Həddindən artıq kofein, spirt, emal olunmuş qidalar, monosodium glutamat (MSG) olan qidalar, şokolad və həddindən artıq duz."
      },
      {
        "q": "Stres baş ağrılarına səbəb olurmu?",
        "a": "Bəli, stres baş ağrılarının ən çox yayılmış səbəblərindən biridir."
      }
    ]
  },
  "bagirsaq-tenbelliyi": {
    "sections": [
      {
        "heading": "Bağırsaq tənbəlliyinin simptomları hansılardır?",
        "content": "- Tualetə az-az getmək: Ümumiyyətlə, tualetə getmək ehtiyacı həftədə üç dəfədən az hiss olunur.\n- Qarın Ağrısı və Şişkinlik: Həzm sisteminin düzgün işləməməsi qaz yığılmasına gətirib çıxarır.\n- İştahsızlıq və Bulantı: Bağırsaq tənbəlliyi həzm sistemində yavaşlamağa, iştahsızlıq və ürəkbulanma kimi əlamətlərə səbəb olur.\n- Qaz və şişkinlik: Həddindən artıq qaz yığılmasına səbəb olur.\n- Yorğunluq və Aşağı Enerji Səviyyəsi: Bədənin qidaları düzgün həzm edə bilməməsi səbəbindən enerji səviyyəsini aşağı salır.\n- Dəri problemləri: Bağırsaq ləngliyi bədənin toksinlərdən təmizlənməsi prosesinə təsir göstərir."
      },
      {
        "heading": "Bağırsaq tənbəlliyinin səbəbləri",
        "content": "1. Aşağı Lifli Pəhriz: Lif bağırsaq hərəkətlərini təşviq edir və nəcisi yumşaldır.\n2. Qeyri-adekvat su istehlakı: Su balansının qorunmaması nəcisin sərtləşməsinə yol açır.\n3. Oturaq həyat tərzi: Uzun müddət oturmaq bağırsaq tənbəlliyini yaradan amillərdəndir.\n4. Stres və Narahatlıq: Stres hormonlarının həddindən artıq ifrazı həzm sisteminin yavaşlamasına səbəb olur.\n5. Dərman istifadəsi: Ağrıkəsicilər, antidepresanlar və dəmir preparatları bağırsaq tənbəlliyinə səbəb olan maddələr arasındadır.\n6. Hormonal Dəyişikliklər: Hamiləlik, menopoz və tiroid problemləri bağırsaqların yavaşlamasına səbəb olur.\n7. Bağırsaq florasının qeyri-kafi balanslaşdırılması: Faydalı bakteriyaların tarazlığının pozulması həzm prosesinin yavaşlamasına səbəb olur.\n8. Yoğun bağırsağın müxtəlif xəstəlikləri: Bağırsaq"
      },
      {
        "heading": "Bağırsaq tənbəlliyinin müalicəsi",
        "content": "- Lif İstehlakının Artırılması: Tərəvəz, meyvə, tam taxıl, paxlalılar və qoz-fındıq.\n- Adekvat su istehlakı: Gündəlik kifayət qədər su içmək.\n- Daimi fiziki fəaliyyət: Gəzinti, qaçış, yoqa və ya velosiped sürmə.\n- Stres İdarəetmə: Meditasiya, dərin nəfəs məşqləri, yoqa.\n- Probiyotiklər və Bağırsaq Florasına Dəstək: Qatıq, kefir və fermentləşdirilmiş qidalar.\n- Dərman müalicəsi: Lif əlavələri, nəcis yumşaldıcıları, laksatiflər.\n- Cərrahi müdaxilə: Nadir hallarda ciddi bağırsaq obstruksiyasında."
      }
    ],
    "faq": [
      {
        "q": "Bağırsaq tənbəlliyi müalicə edilmədikdə hansı problemlərə səbəb olur?",
        "a": "Bağırsaqlarda yığılan nəcis, qəbizlik və şişkinlik kimi narahatlığın artmasına səbəb olur. Uzun müddətli bağırsaq tənbəlliyi həzm sistemində tıxanmaya, mədə problemləri, hemoroid və bağırsaq xəstəlikləri kimi daha ciddi problemlər yaradır."
      },
      {
        "q": "Bağırsaq tənbəlliyi yalnız yaşlılarda görünür?",
        "a": "Xeyr, hər yaş qrupunda baş verir. Ancaq yaşla maddələr mübadiləsi yavaşladığı üçün yaşlılarda riski artır."
      },
      {
        "q": "Bağırsaq tənbəlliyi genetikdirmi?",
        "a": "Bəzi hallarda genetik faktorlardan təsirlənir. Ailədə bağırsaq problemləri olan insanlar bağırsaq ləngliyi ilə daha çox qarşılaşırlar. Həyat tərzi, qidalanma vərdişləri və stres kimi ətraf mühit faktorları da mühüm rol oynayır."
      }
    ]
  },
  "babasil": {
    "sections": [
      {
        "heading": "What is Babasil (Hemorrhoid)?",
        "content": "Babasil represents a vascular disease stemming from pressure-induced inflammation or expansion of blood vessels in the anal zone. The condition typically develops in connection with chronic constipation, prolonged sitting, and pregnancy.\n\nInternal Hemorrhoid (Daxili Babasil): Internal hemorrhoids develop within the rectum, slightly above the anus, in the form of dilated vessels. These typically cause no pain due to limited pain-sensing nerves in the rectal interior, but they can trigger bright red bleeding during defecation, visible on stool or toilet paper. Advanced cases may result in prolapse -- when tissue protrudes externally. Treatment approaches emphasize lifestyle modifications, dietary fiber increases, and pharmaceutical interventions, with surgical options reserved for advanced c"
      },
      {
        "heading": "Causes of Babasil",
        "content": "Chronic Constipation and Straining (Xroniki qəbizlik və zorlanma): Chronic constipation ranks among the most frequent hemorrhoid causes. Hard stool necessitates excessive straining during toilet use, creating abnormal pressure on anal and rectal vessels, triggering expansion and eventual hemorrhoid formation.\n\nPregnancy and Hormonal Changes (Hamiləlik və Hormonal Dəyişikliklər): Pregnancy produces substantial hormonal and physical changes. Growing uterus compresses pelvic blood vessels, restricting blood flow and elevating hemorrhoid risk. Pregnancy hormones naturally dilate vessels, promoting hemorrhoid formation.\n\nObesity and Sedentary Lifestyle (Piylənmə və Oturaq Həyat Tərzi): Excess body weight creates additional strain on vessels, particularly in lower body regions. Extended sitting"
      },
      {
        "heading": "Hemorrhoid Symptoms",
        "content": "Pain and Discomfort (Ağrı və Diskomfort): Pain and discomfort constitute the most obvious hemorrhoid symptoms. External hemorrhoids particularly cause anal region pain. Thrombosed external hemorrhoid cases produce severe pain through hardening and swelling.\n\nBleeding (Qanaxma): Bleeding represents another common symptom. Internal hemorrhoid bleeding typically causes painless presentation, with bright red blood appearing in stool or on toilet paper.\n\nSwelling (Şişkinlik): Both internal and external hemorrhoids cause swelling. External hemorrhoids present as palpable anal swelling. Internal hemorrhoid vessel dilation may produce rectal swelling sensations.\n\nItching and Irritation (Qaşınma və Qıcıqlanma): Itching and irritation represent among the most troublesome symptoms. Skin irritation oc"
      },
      {
        "heading": "Treatment of Babasil",
        "content": "Treatment approaches vary based on hemorrhoid type, symptom severity, and condition progression. Mild presentations may respond to pharmaceutical treatment and lifestyle modifications, though advanced cases sometimes require surgical intervention. For mild and moderate hemorrhoid cases, pharmaceutical treatment typically takes precedence. Advanced hemorrhoid presentations and inadequate pharmaceutical response necessitate surgical intervention, including arthroplasty to replace damaged sections, minimally invasive arthroscopic procedures, and osteotomy."
      }
    ],
    "faq": [
      {
        "q": "How is Babasil Treated?",
        "a": "Treatment approaches vary based on hemorrhoid type, symptom severity, and progression. Mild presentations respond to pharmaceutical treatment and lifestyle modifications, though advanced cases sometimes require surgical intervention. For mild and moderate cases, pharmaceutical treatment typically prevails. Advanced presentations with inadequate pharmaceutical response require surgical intervention."
      }
    ]
  },
  "prostat-xercengi": {
    "sections": [
      {
        "heading": "Prostat vəzi xərçənginin müalicəsində hansı amillər nəzərə alınır?",
        "content": "- Yaş və Ümumi Sağlamlıq Vəziyyəti: Gənc xəstələr cərrahiyyə və ya radioterapiya kimi aqressiv müalicələr üçün uyğun hesab olunurlar. İrəli yaşda olan xəstələrdə daha az invaziv yanaşmalar tövsiyə oluna bilər.\n\n- Xərçəngin Mərhələsi və Yayılması: Xərçəngin lokalizasiyası, lokal irəliləməsi və ya metastatik olması müalicə qərarına birbaşa təsir göstərir.\n\n- PSA (Prostat Xüsusi Antigen) Səviyyələri: PSA prostat hüceyrələri tərəfindən ifraz olunan bir proteindir. Yüksək PSA səviyyələri xərçəngin varlığını və ya inkişaf dərəcəsini göstərir.\n\n- Xəstənin şəxsi üstünlükləri və həyat tərzi: Gündəlik fəaliyyət, məşğuliyyət və ailə həyatı müalicə prosesinə təsir edə bilər."
      },
      {
        "heading": "Prostat Xərçəngi necə müalicə olunur?",
        "content": "Cərrahi Müalicə: Prostat vəzi tamamilə çıxarılır (radikal prostatektomiya).\n\nRadioterapiya: İki üsul -- xarici radioterapiya və brakiterapiya (daxili radioterapiya).\n\nHormon terapiyası: Testosteron hormonunun ifrazını azaltmaqla xərçəngin inkişafını dayandırmaq.\n\nKimyaterapiya: Xərçəng hüceyrələrini öldürmək və ya böyüməsini dayandırmaq üçün güclü dərmanlar. Hormon terapiyasına cavab verməyən hallarda üstünlük verilir.\n\nKriyoterapiya və HIFU: Kriyoterapiya -- xərçəng toxumalarını donduraraq məhv etmək. HIFU -- ultrasəs dalğalarından istifadə edərək xərçəng toxumaları yüksək temperaturla məhv edilir."
      },
      {
        "heading": "Prostat Xərçəngində Cərrahiyyə və Radioterapiyanın Yan Təsirləri",
        "content": "- Sidik qaçırma: Sfinkter əzələləri cərrahiyyə və ya radioterapiya zamanı zədələnə bilər.\n- Erektil Problemlər: Prostatın ətrafındakı sinirlərə zərər verə bilər.\n- Bağırsaq problemləri: Radioterapiya zamanı düz bağırsaq da təsirlənə bilər."
      },
      {
        "heading": "Prostat Xərçənginin Müalicəsində Erkən Diaqnozun Əhəmiyyəti",
        "content": "Erkən mərhələdə təsbit edilən prostat xərçəngi ümumiyyətlə prostat xaricinə yayılmaz və xəstəliyin tamamilə aradan qaldırılması üçün müalicə variantları planlaşdırmaq mümkündür.\n\nCərrahi Müvəffəqiyyət: Erkən mərhələdə edilən cərrahi müdaxilə xərçəngin tamamilə yox edilməsində təsirli bir üsuldur.\n\nAktiv Nəzarət: Erkən mərhələdə aşkarlanan aşağı riskli xərçənglərdə müntəzəm təqiblə lazımsız müalicə və yan təsirlərin qarşısını almaq olar.\n\nPSA testinin rolu: PSA prostat hüceyrələri tərəfindən istehsal olunan bir proteindir. 50 və yuxarı yaşda olan kişilər üçün müntəzəm PSA testi tövsiyə olunur. Ailədə prostat xərçəngi olan kişilər üçün skrininq daha erkən yaşda başlamalıdır.\n\nFAQ Section (Related articles mentioned as FAQ):\n\nKişilərdə Cinsi İstəksizlik Necə Müalicə Olunur?\nHormonal disbalans"
      },
      {
        "heading": "Summary",
        "content": "All 10 articles have been fetched with their complete content. Here is a recap:\n\n| # | Article | Title | FAQ | Images |\n|---|---------|-------|-----|--------|\n| 1 | 799 | Fəqərəarası disk yırtığı (Qrija) necə müalicə olunur? | No | 1 cover image |\n| 2 | 794 | Oynaq Artrozu Necə Müalicə Olunur? | No | 1 cover image |\n| 3 | 793 | Mədə Yanması və Ağrısı: Qastritin Əsas Səbəbləri | No | 1 cover image |\n| 4 | 791 | Qıcıqlı Öskürək Hansı Xəstəliklərin Əlamətidir? | Yes (1 Q&A) | 1 cover image |\n| 5 | 786 | Otit Hansı Xəstəliklərə Səbəb Olur? | Yes (7 Q&As) | 1 cover image |\n| 6 | 785 | Sidik Tutmağın Zərərləri Nələrdir? | Yes (4 Q&As) | 1 cover image |\n| 7 | 783 | Baş Ağrısının 9 Əsas Səbəbi Hansılardır? | Yes (9 Q&As) | None found |\n| 8 | 782 | Bağırsaq Tənbəlliyi Nədir? | Yes (3 Q&As) | 1 imag"
      }
    ],
    "faq": []
  }
};
