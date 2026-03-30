export interface Department {
  id: number;
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
  fullDescription?: string;
  image: string;
  category: 'surgical' | 'diagnostic' | 'clinical' | 'therapeutic';
}

export const departments: Department[] = [
  {
    id: 44, slug: "stasionar",
    name: { az: "Stasionar şöbə", en: "Inpatient Ward", ru: "Стационарное отделение", tr: "Yatan Hasta Servisi" },
    description: { az: "24 saat xidmət, 24 cərrahiyyə çarpayısı, müasir anesteziya avadanlığı", en: "24-hour service, 24 surgical beds, modern anesthesia equipment", ru: "Круглосуточное обслуживание, 24 хирургические койки, современное анестезиологическое оборудование", tr: "24 saat hizmet, 24 cerrahi yatak, modern anestezi ekipmanı" },
    image: "/images/departments/stasionar.webp",
    category: "surgical"
  },
  {
    id: 43, slug: "lor-cerrahiye",
    name: { az: "LOR cərrahiyə", en: "ENT Surgery", ru: "ЛОР-хирургия", tr: "KBB Cerrahisi" },
    description: { az: "Alman Karl Storz avadanlığı ilə endoskopik diaqnostika", en: "Endoscopic diagnostics with German Karl Storz equipment", ru: "Эндоскопическая диагностика с немецким оборудованием Karl Storz", tr: "Alman Karl Storz ekipmanıyla endoskopik teşhis" },
    image: "/images/departments/lor-cerrahiye.webp",
    category: "surgical"
  },
  {
    id: 42, slug: "endokrin-cerrahiye",
    name: { az: "Endokrin cərrahiyə", en: "Endocrine Surgery", ru: "Эндокринная хирургия", tr: "Endokrin Cerrahi" },
    description: { az: "Qalxanabənzər, paraqalxanabənzər və böyrəküstü vəzi xəstəliklərinin cərrahi müalicəsi", en: "Surgical treatment of thyroid, parathyroid, and adrenal gland diseases", ru: "Хирургическое лечение заболеваний щитовидной, паращитовидной и надпочечных желез", tr: "Tiroid, paratiroid ve adrenal bez hastalıklarının cerrahi tedavisi" },
    image: "/images/departments/endokrin-cerrahiye.webp",
    category: "surgical"
  },
  {
    id: 41, slug: "damar-cerrahiyesi",
    name: { az: "Damar cərrahiyəsi", en: "Vascular Surgery", ru: "Сосудистая хирургия", tr: "Damar Cerrahisi" },
    description: { az: "Arterial və venoz cərrahi prosedurlar, varikoz müalicəsi", en: "Arterial and venous surgical procedures, varicose vein treatment", ru: "Артериальные и венозные хирургические процедуры, лечение варикоза", tr: "Arteriyel ve venöz cerrahi prosedürler, varisli ven tedavisi" },
    image: "/images/departments/damar-cerrahiyesi.webp",
    category: "surgical"
  },
  {
    id: 27, slug: "umumi-cerrahiyye",
    name: { az: "Ümumi cərrahiyyə", en: "General Surgery", ru: "Общая хирургия", tr: "Genel Cerrahi" },
    description: { az: "Qastrointestinal, hepatobiliar, tiroid və yırtıq cərrahiyyəsi", en: "Gastrointestinal, hepatobiliary, thyroid, and hernia surgery", ru: "Гастроинтестинальная, гепатобилиарная, тиреоидная хирургия и грыжесечение", tr: "Gastrointestinal, hepatobiliyer, tiroid ve fıtık cerrahisi" },
    image: "/images/departments/umumi-cerrahiyye.webp",
    category: "surgical"
  },
  {
    id: 26, slug: "plastik-cerrahiyye",
    name: { az: "Plastik cərrahiyyə", en: "Plastic Surgery", ru: "Пластическая хирургия", tr: "Plastik Cerrahi" },
    description: { az: "Rinoplastika, liposakşın, mammoplastika və s.", en: "Rhinoplasty, liposuction, breast surgery, etc.", ru: "Ринопластика, липосакция, маммопластика и др.", tr: "Rinoplasti, liposuction, meme cerrahisi vb." },
    image: "/images/departments/plastik-cerrahiyye.webp",
    category: "surgical"
  },
  {
    id: 24, slug: "travmatologiya",
    name: { az: "Travmatologiya-ortopediya", en: "Trauma-Orthopedics", ru: "Травматология-ортопедия", tr: "Ortopedi-Travmatoloji" },
    description: { az: "Sınıq, oynaq və onurğa xəstəliklərinin müalicəsi", en: "Fracture, joint, and spine disorder treatment", ru: "Лечение переломов, суставов и заболеваний позвоночника", tr: "Kırık, eklem ve omurga hastalıklarının tedavisi" },
    image: "/images/departments/travmatologiya.webp",
    category: "surgical"
  },
  {
    id: 23, slug: "anesteziologiya",
    name: { az: "Anesteziologiya-reanimatologiya", en: "Anesthesiology-Reanimation", ru: "Анестезиология-реаниматология", tr: "Anesteziyoloji-Reanimasyon" },
    description: { az: "Cərrahi anesteziya və intensiv terapiya", en: "Surgical anesthesia and intensive care", ru: "Хирургическая анестезия и интенсивная терапия", tr: "Cerrahi anestezi ve yoğun bakım" },
    image: "/images/departments/anesteziologiya.webp",
    category: "surgical"
  },
  {
    id: 16, slug: "laboratoriya",
    name: { az: "Laboratoriya", en: "Laboratory", ru: "Лаборатория", tr: "Laboratuvar" },
    description: { az: "Klinik və biokimyəvi analiz xidmətləri", en: "Clinical and biochemical testing services", ru: "Клинические и биохимические анализы", tr: "Klinik ve biyokimyasal test hizmetleri" },
    image: "/images/departments/laboratoriya.webp",
    category: "diagnostic"
  },
  {
    id: 38, slug: "exokardioqrafiya",
    name: { az: "Exokardioqrafiya", en: "Echocardiography", ru: "Эхокардиография", tr: "Ekokardiyografi" },
    description: { az: "Ürəyin ultrasəs müayinəsi", en: "Cardiac ultrasound examination", ru: "Ультразвуковое исследование сердца", tr: "Kalp ultrason muayenesi" },
    image: "/images/departments/exokardioqrafiya.webp",
    category: "diagnostic"
  },
  {
    id: 37, slug: "neyrosonoqrafiya",
    name: { az: "Neyrosonoqrafiya", en: "Neurosonography", ru: "Нейросонография", tr: "Nörosonografi" },
    description: { az: "Körpələrdə beyin ultrasəs müayinəsi", en: "Brain ultrasound for infants", ru: "УЗИ головного мозга у новорожденных", tr: "Bebeklerde beyin ultrasonu" },
    image: "/images/departments/neyrosonoqrafiya.webp",
    category: "diagnostic"
  },
  {
    id: 36, slug: "doppleroqrafiya",
    name: { az: "Doppleroqrafiya", en: "Doppler Ultrasonography", ru: "Допплерография", tr: "Doppler Ultrasonografi" },
    description: { az: "Damarlarda qan axınının qiymətləndirilməsi", en: "Blood flow assessment in vessels", ru: "Оценка кровотока в сосудах", tr: "Damarlarda kan akışının değerlendirilmesi" },
    image: "/images/departments/doppleroqrafiya.webp",
    category: "diagnostic"
  },
  {
    id: 35, slug: "funksional-diaqnostika",
    name: { az: "Funksional diaqnostika", en: "Functional Diagnostics", ru: "Функциональная диагностика", tr: "Fonksiyonel Tanı" },
    description: { az: "Rentgen müayinələri", en: "X-ray examinations", ru: "Рентгенологические исследования", tr: "Röntgen muayeneleri" },
    image: "/images/departments/funksional-diaqnostika.webp",
    category: "diagnostic"
  },
  {
    id: 19, slug: "sua-diaqnostikasi",
    name: { az: "Şüa diaqnostikası", en: "Radiology", ru: "Лучевая диагностика", tr: "Radyoloji" },
    description: { az: "Rentgen və ultrasəs görüntüləmə", en: "X-ray and ultrasound imaging", ru: "Рентгенография и ультразвуковая визуализация", tr: "Röntgen ve ultrason görüntüleme" },
    image: "/images/departments/sua-diaqnostikasi.webp",
    category: "diagnostic"
  },
  {
    id: 33, slug: "kardiologiya",
    name: { az: "Kardiologiya", en: "Cardiology", ru: "Кардиология", tr: "Kardiyoloji" },
    description: { az: "Ürək və damar xəstəliklərinin diaqnostika və müalicəsi", en: "Heart and vascular disease diagnosis and management", ru: "Диагностика и лечение сердечно-сосудистых заболеваний", tr: "Kalp ve damar hastalıklarının teşhis ve tedavisi" },
    image: "/images/departments/kardiologiya.webp",
    category: "clinical"
  },
  {
    id: 32, slug: "qastroenterologiya",
    name: { az: "Qastroenterologiya", en: "Gastroenterology", ru: "Гастроэнтерология", tr: "Gastroenteroloji" },
    description: { az: "Həzm sistemi xəstəliklərinin diaqnostika və müalicəsi", en: "Digestive system disease diagnosis and treatment", ru: "Диагностика и лечение заболеваний пищеварительной системы", tr: "Sindirim sistemi hastalıklarının teşhis ve tedavisi" },
    image: "/images/departments/qastroenterologiya.webp",
    category: "clinical"
  },
  {
    id: 31, slug: "endokrinologiya",
    name: { az: "Endokrinologiya", en: "Endocrinology", ru: "Эндокринология", tr: "Endokrinoloji" },
    description: { az: "Hormon sistemi xəstəliklərinin müalicəsi", en: "Hormone system disorder treatment", ru: "Лечение заболеваний гормональной системы", tr: "Hormon sistemi hastalıklarının tedavisi" },
    image: "/images/departments/endokrinologiya.webp",
    category: "clinical"
  },
  {
    id: 30, slug: "nevrologiya",
    name: { az: "Nevrologiya", en: "Neurology", ru: "Неврология", tr: "Nöroloji" },
    description: { az: "Mərkəzi və periferik sinir sistemi xəstəliklərinin müalicəsi", en: "Central and peripheral nervous system disease treatment", ru: "Лечение заболеваний центральной и периферической нервной системы", tr: "Merkezi ve periferik sinir sistemi hastalıklarının tedavisi" },
    image: "/images/departments/nevrologiya.webp",
    category: "clinical"
  },
  {
    id: 29, slug: "dermatologiya",
    name: { az: "Dermatologiya", en: "Dermatology", ru: "Дерматология", tr: "Dermatoloji" },
    description: { az: "Dəri xəstəliklərinin diaqnostikası, lazer epilyasiya, kosmetik prosedurlar", en: "Skin disease diagnosis, laser hair removal, cosmetic procedures", ru: "Диагностика кожных заболеваний, лазерная эпиляция, косметические процедуры", tr: "Deri hastalıklarının teşhisi, lazer epilasyon, kozmetik prosedürler" },
    image: "/images/departments/dermatologiya.webp",
    category: "clinical"
  },
  {
    id: 34, slug: "terapiya",
    name: { az: "Terapiya", en: "Internal Medicine", ru: "Терапия", tr: "Dahiliye" },
    description: { az: "Ürək-damar, tənəffüs və həzm sistemi xəstəliklərinin müalicəsi", en: "Treatment of cardiovascular, respiratory, and digestive disorders", ru: "Лечение сердечно-сосудистых, респираторных и пищеварительных заболеваний", tr: "Kardiyovasküler, solunum ve sindirim bozukluklarının tedavisi" },
    image: "/images/departments/terapiya.webp",
    category: "clinical"
  },
  {
    id: 18, slug: "oftalmologiya",
    name: { az: "Oftalmologiya", en: "Ophthalmology", ru: "Офтальмология", tr: "Göz Hastalıkları" },
    description: { az: "Göz xəstəliklərinin diaqnostika və müalicəsi", en: "Eye disease diagnosis and treatment", ru: "Диагностика и лечение глазных заболеваний", tr: "Göz hastalıklarının teşhis ve tedavisi" },
    image: "/images/departments/oftalmologiya.webp",
    category: "clinical"
  },
  {
    id: 17, slug: "otorinolarinqologiya",
    name: { az: "Otorinolarinqologiya", en: "Otorhinolaryngology", ru: "Оториноларингология", tr: "KBB Hastalıkları" },
    description: { az: "Qulaq, burun, boğaz xəstəliklərinin müalicəsi", en: "Ear, nose, throat disease treatment", ru: "Лечение заболеваний уха, горла и носа", tr: "Kulak, burun, boğaz hastalıklarının tedavisi" },
    image: "/images/departments/otorinolarinqologiya.webp",
    category: "clinical"
  },
  {
    id: 22, slug: "mama-ginekologiya",
    name: { az: "Mama-ginekologiya", en: "Obstetrics-Gynecology", ru: "Акушерство-гинекология", tr: "Kadın Hastalıkları ve Doğum" },
    description: { az: "Qadın reproduktiv sağlamlığı, hamiləlik müşahidəsi", en: "Women's reproductive health, pregnancy monitoring", ru: "Репродуктивное здоровье женщин, наблюдение беременности", tr: "Kadın üreme sağlığı, gebelik takibi" },
    image: "/images/departments/mama-ginekologiya.webp",
    category: "clinical"
  },
  {
    id: 25, slug: "urologiya",
    name: { az: "Urologiya", en: "Urology", ru: "Урология", tr: "Üroloji" },
    description: { az: "Sidik və kişi reproduktiv sistemi xəstəliklərinin müalicəsi", en: "Urinary and male reproductive system disease treatment", ru: "Лечение заболеваний мочевыделительной и мужской репродуктивной системы", tr: "İdrar ve erkek üreme sistemi hastalıklarının tedavisi" },
    image: "/images/departments/urologiya.webp",
    category: "clinical"
  },
  {
    id: 21, slug: "stomatologiya",
    name: { az: "Stomatologiya", en: "Dentistry", ru: "Стоматология", tr: "Diş Hekimliği" },
    description: { az: "Diş müalicəsi, ağartma, protezləmə, implantologiya", en: "Cavity treatment, whitening, dentures, implantology", ru: "Лечение зубов, отбеливание, протезирование, имплантология", tr: "Diş tedavisi, beyazlatma, protez, implantoloji" },
    image: "/images/departments/stomatologiya.webp",
    category: "clinical"
  },
  {
    id: 20, slug: "pediatriya",
    name: { az: "Pediatriya", en: "Pediatrics", ru: "Педиатрия", tr: "Pediatri" },
    description: { az: "Uşaq xəstəliklərinin müalicəsi", en: "Childhood disease treatment", ru: "Лечение детских заболеваний", tr: "Çocuk hastalıklarının tedavisi" },
    image: "/images/departments/pediatriya.webp",
    category: "clinical"
  },
  {
    id: 28, slug: "fizioterapiya",
    name: { az: "Fizioterapiya", en: "Physiotherapy", ru: "Физиотерапия", tr: "Fizik Tedavi" },
    description: { az: "Lazer terapiya, elektroforez, ultrasəs, reabilitasiya", en: "Laser therapy, electrophoresis, ultrasound, rehabilitation", ru: "Лазеротерапия, электрофорез, ультразвук, реабилитация", tr: "Lazer tedavi, elektroforez, ultrason, rehabilitasyon" },
    image: "/images/departments/fizioterapiya.webp",
    category: "therapeutic"
  },
  {
    id: 40, slug: "ozonoterapiya",
    name: { az: "Ozonoterapiya", en: "Ozone Therapy", ru: "Озонотерапия", tr: "Ozon Tedavisi" },
    description: { az: "Toxuma oksigenləşməsini, mikrosirkulyasiyanı və immun funksiyanı yaxşılaşdırır", en: "Improves tissue oxygenation, microcirculation, and immune function", ru: "Улучшает оксигенацию тканей, микроциркуляцию и иммунную функцию", tr: "Doku oksijenasyonu, mikrosirkülasyon ve bağışıklık fonksiyonunu iyileştirir" },
    image: "/images/departments/ozonoterapiya.webp",
    category: "therapeutic"
  },
  {
    id: 39, slug: "proktologiya",
    name: { az: "Proktologiya", en: "Proctology", ru: "Проктология", tr: "Proktoloji" },
    description: { az: "Düz bağırsaq və anal xəstəliklərinin müalicəsi", en: "Rectal and anal disease treatment", ru: "Лечение заболеваний прямой кишки и ануса", tr: "Rektal ve anal hastalıkların tedavisi" },
    image: "/images/departments/proktologiya.webp",
    category: "therapeutic"
  }
];
