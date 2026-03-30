export interface CheckupPackage {
  id: number;
  name: Record<string, string>;
  price: number;
  oldPrice: number;
  currency: string;
  includes: Record<string, string[]>;
}

export const checkups: CheckupPackage[] = [
  {
    id: 1,
    name: {
      az: "Ginekoloji Check-up",
      en: "Gynecological Check-up",
      ru: "Гинекологический чекап",
      tr: "Jinekolojik Check-up"
    },
    price: 354,
    oldPrice: 409,
    currency: "₼",
    includes: {
      az: ["Həkim müayinəsi", "Ginekoloji USM", "Genital material mikroskopik analizi", "7 infeksiya PCR paneli", "Garnerella vaginalis testi", "Sifilis ekspress test", "HIV ekspress test", "HPV-21 genotip", "Pap-smear test"],
      en: ["Physician examination", "Gynecological ultrasound", "Microscopic genital material analysis", "7-infection PCR panel", "Garnerella vaginalis testing", "Syphilis express test", "HIV express test", "HPV-21 genotype", "Pap-smear test"],
      ru: ["Осмотр врача", "Гинекологическое УЗИ", "Микроскопический анализ генитального материала", "ПЦР-панель на 7 инфекций", "Тест на Gardnerella vaginalis", "Экспресс-тест на сифилис", "Экспресс-тест на ВИЧ", "Генотип ВПЧ-21", "Пап-мазок"],
      tr: ["Hekim muayenesi", "Jinekolojik ultrason", "Genital materyal mikroskopik analizi", "7 enfeksiyon PCR paneli", "Garnerella vaginalis testi", "Sifiliz hızlı testi", "HIV hızlı testi", "HPV-21 genotip", "Pap-smear testi"]
    }
  },
  {
    id: 2,
    name: {
      az: "Ginekoloji nigah öncəsi check-up",
      en: "Pre-marriage Gynecological Check-up",
      ru: "Гинекологический предбрачный чекап",
      tr: "Evlilik Öncesi Jinekolojik Check-up"
    },
    price: 236,
    oldPrice: 267,
    currency: "₼",
    includes: {
      az: ["Ginekoloq konsultasiyası", "Tam abdominal USM", "Qan klinik analizi", "Sidik klinik analizi", "Hemoqlobin elektroforezi", "Qan qrupu (ABO, Rh)", "HbsAg, Anti HCV, HIV, Sifilis testi", "Urogenital 7 infeksiya paneli (PCR)"],
      en: ["Gynecologist consultation", "Complete abdominal ultrasound", "Blood clinical analysis", "Urine clinical analysis", "Hemoglobin electrophoresis", "Blood type (ABO, Rh)", "HbsAg, Anti HCV, HIV, Syphilis testing", "Urogenital 7-infection panel (PCR)"],
      ru: ["Консультация гинеколога", "Полное абдоминальное УЗИ", "Клинический анализ крови", "Клинический анализ мочи", "Электрофорез гемоглобина", "Группа крови (ABO, Rh)", "HbsAg, Anti HCV, ВИЧ, Сифилис", "Урогенитальная панель 7 инфекций (ПЦР)"],
      tr: ["Jinekolog konsültasyonu", "Tam abdominal ultrason", "Kan klinik analizi", "İdrar klinik analizi", "Hemoglobin elektroforezi", "Kan grubu (ABO, Rh)", "HbsAg, Anti HCV, HIV, Sifiliz testi", "Ürogenital 7 enfeksiyon paneli (PCR)"]
    }
  },
  {
    id: 3,
    name: {
      az: "Uroloji nigah öncəsi check-up",
      en: "Pre-marriage Urological Check-up",
      ru: "Урологический предбрачный чекап",
      tr: "Evlilik Öncesi Ürolojik Check-up"
    },
    price: 236,
    oldPrice: 267,
    currency: "₼",
    includes: {
      az: ["Uroloq konsultasiyası", "Tam abdominal USM", "Qan klinik analizi", "Sidik klinik analizi", "Hemoqlobin elektroforezi", "Qan qrupu (ABO, Rh)", "HbsAg, Anti HCV, HIV, Sifilis testi", "Urogenital 7 infeksiya paneli (PCR)"],
      en: ["Urologist consultation", "Complete abdominal ultrasound", "Blood clinical analysis", "Urine clinical analysis", "Hemoglobin electrophoresis", "Blood type (ABO, Rh)", "HbsAg, Anti HCV, HIV, Syphilis testing", "Urogenital 7-infection panel (PCR)"],
      ru: ["Консультация уролога", "Полное абдоминальное УЗИ", "Клинический анализ крови", "Клинический анализ мочи", "Электрофорез гемоглобина", "Группа крови (ABO, Rh)", "HbsAg, Anti HCV, ВИЧ, Сифилис", "Урогенитальная панель 7 инфекций (ПЦР)"],
      tr: ["Ürolog konsültasyonu", "Tam abdominal ultrason", "Kan klinik analizi", "İdrar klinik analizi", "Hemoglobin elektroforezi", "Kan grubu (ABO, Rh)", "HbsAg, Anti HCV, HIV, Sifiliz testi", "Ürogenital 7 enfeksiyon paneli (PCR)"]
    }
  },
  {
    id: 4,
    name: {
      az: "Süd vəzi skrininqi check-up",
      en: "Breast Screening Check-up",
      ru: "Чекап скрининга молочной железы",
      tr: "Meme Tarama Check-up"
    },
    price: 263,
    oldPrice: 302,
    currency: "₼",
    includes: {
      az: ["Həkim müayinəsi", "Tiroid USM", "Qan klinik analizi", "Cinsi hormon paneli (FSH, LH, Estradiol, prolaktin, ümumi testosteron)", "CA 15-3 tumor marker", "TSH testi", "Süd vəzi və ginekoloji USM"],
      en: ["Physician examination", "Thyroid ultrasound", "Blood clinical analysis", "Sex hormone panel (FSH, LH, Estradiol, prolactin, total testosterone)", "CA 15-3 tumor marker", "TSH testing", "Breast and gynecological ultrasound"],
      ru: ["Осмотр врача", "УЗИ щитовидной железы", "Клинический анализ крови", "Панель половых гормонов (ФСГ, ЛГ, эстрадиол, пролактин, общий тестостерон)", "Онкомаркер CA 15-3", "Тест ТТГ", "УЗИ молочных желез и гинекологическое УЗИ"],
      tr: ["Hekim muayenesi", "Tiroid ultrasonu", "Kan klinik analizi", "Cinsiyet hormonu paneli (FSH, LH, Estradiol, prolaktin, toplam testosteron)", "CA 15-3 tümör belirteci", "TSH testi", "Meme ve jinekolojik ultrason"]
    }
  },
  {
    id: 5,
    name: {
      az: "Uroloji-Androloji check-up",
      en: "Urological-Andrological Check-up",
      ru: "Урологический-андрологический чекап",
      tr: "Ürolojik-Androlojik Check-up"
    },
    price: 245,
    oldPrice: 263,
    currency: "₼",
    includes: {
      az: ["Uroloq-androloq müayinəsi", "Uroloji USM", "Skrotal Doppler USM", "Sidik analizi", "Uretral yaxma", "PCR infeksiya testi", "Spermoqram"],
      en: ["Urologist-andrologist examination", "Urological ultrasound", "Scrotal Doppler ultrasound", "Urine analysis", "Urethral swab", "PCR infection testing", "Spermogram"],
      ru: ["Осмотр уролога-андролога", "Урологическое УЗИ", "Допплерография мошонки", "Анализ мочи", "Мазок из уретры", "ПЦР-тест на инфекции", "Спермограмма"],
      tr: ["Ürolog-androlog muayenesi", "Ürolojik ultrason", "Skrotal Doppler ultrason", "İdrar analizi", "Üretral sürüntü", "PCR enfeksiyon testi", "Spermogram"]
    }
  },
  {
    id: 6,
    name: {
      az: "Məktəblilər üçün check-up",
      en: "School Children Check-up",
      ru: "Чекап для школьников",
      tr: "Okul Çocukları Check-up"
    },
    price: 177,
    oldPrice: 191,
    currency: "₼",
    includes: {
      az: ["Qan və sidik klinik analizi", "D vitamini, fosfor, ionlaşmış kalsium, dəmir, B12 testi", "Abdominal USM", "LOR və pediatr konsultasiyası"],
      en: ["Blood and urine clinical analysis", "Vitamin D, phosphorus, ionized calcium, iron, B12 testing", "Abdominal ultrasound", "ENT and pediatric consultations"],
      ru: ["Клинический анализ крови и мочи", "Витамин D, фосфор, ионизированный кальций, железо, B12", "Абдоминальное УЗИ", "Консультация ЛОР и педиатра"],
      tr: ["Kan ve idrar klinik analizi", "D vitamini, fosfor, iyonize kalsiyum, demir, B12 testi", "Abdominal ultrason", "KBB ve pediatri konsültasyonu"]
    }
  }
];
