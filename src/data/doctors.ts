export interface Doctor {
  id: number;
  slug: string;
  name: string;
  specialty: Record<string, string>;
  image: string;
  schedule: {
    weekdays: string;
    sunday: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: 86,
    slug: "mubariz-nagiyev",
    name: "Mübariz Nağıyev",
    specialty: {
      az: "Təsisçi direktor, Ümumi Cərrah",
      en: "Founder Director, General Surgeon",
      ru: "Директор-основатель, Общий хирург",
      tr: "Kurucu Direktör, Genel Cerrah"
    },
    image: "/images/doctors/mubariz-nagiyev.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 70,
    slug: "nurlana-xelilova",
    name: "Nurlana Xəlilova",
    specialty: {
      az: "Mama-Ginekoloq",
      en: "Obstetrician-Gynecologist",
      ru: "Акушер-гинеколог",
      tr: "Kadın Doğum Uzmanı"
    },
    image: "/images/doctors/nurlana-xelilova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 68,
    slug: "muqeddes-sadiqova",
    name: "Müqəddəs Sadiqova",
    specialty: {
      az: "Endokrinoloq",
      en: "Endocrinologist",
      ru: "Эндокринолог",
      tr: "Endokrinolog"
    },
    image: "/images/doctors/muqeddes-sadiqova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 73,
    slug: "sevinc-agayeva",
    name: "Sevinc Ağayeva",
    specialty: {
      az: "Terapevt",
      en: "Therapist",
      ru: "Терапевт",
      tr: "Dahiliye Uzmanı"
    },
    image: "/images/doctors/sevinc-agayeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 67,
    slug: "mesme-hesenova",
    name: "Məsmə Həsənova",
    specialty: {
      az: "Qastroenteroloq",
      en: "Gastroenterologist",
      ru: "Гастроэнтеролог",
      tr: "Gastroenterolog"
    },
    image: "/images/doctors/mesme-hesenova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 11,
    slug: "gunay-rustemova",
    name: "Günay Rüstəmova",
    specialty: {
      az: "Kardioloq",
      en: "Cardiologist",
      ru: "Кардиолог",
      tr: "Kardiyolog"
    },
    image: "/images/doctors/gunay-rustemova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 72,
    slug: "sedaqet-ceferova",
    name: "Sədaqət Cəfərova",
    specialty: {
      az: "Pediatr",
      en: "Pediatrician",
      ru: "Педиатр",
      tr: "Pediatrist"
    },
    image: "/images/doctors/sedaqet-ceferova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 66,
    slug: "kemale-orucova",
    name: "Kəmalə Orucova",
    specialty: {
      az: "Nevroloq",
      en: "Neurologist",
      ru: "Невролог",
      tr: "Nörolog"
    },
    image: "/images/doctors/kemale-orucova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 74,
    slug: "yaqub-eliyev",
    name: "Yaqub Əliyev",
    specialty: {
      az: "Ümumi Cərrah",
      en: "General Surgeon",
      ru: "Общий хирург",
      tr: "Genel Cerrah"
    },
    image: "/images/doctors/yaqub-eliyev.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 5,
    slug: "ayaz-osmanov",
    name: "Ayaz Osmanov",
    specialty: {
      az: "Otorinolarinqoloq",
      en: "ENT Specialist",
      ru: "Оториноларинголог",
      tr: "KBB Uzmanı"
    },
    image: "/images/doctors/ayaz-osmanov.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 88,
    slug: "pervane-isakova",
    name: "Pərvanə İsakova",
    specialty: {
      az: "Həkim-Laborant",
      en: "Laboratory Physician",
      ru: "Врач-лаборант",
      tr: "Laboratuvar Uzmanı"
    },
    image: "/images/doctors/pervane-isakova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 84,
    slug: "yeter-haciyeva",
    name: "Yetər Hacıyeva",
    specialty: {
      az: "Ultrasəs Diaqnostika Mütəxəssisi",
      en: "Ultrasound Specialist",
      ru: "Специалист УЗИ",
      tr: "Ultrason Uzmanı"
    },
    image: "/images/doctors/yeter-haciyeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 83,
    slug: "mahmud-ismayilov",
    name: "Mahmud İsmayılov",
    specialty: {
      az: "Travmatoloq-Ortoped",
      en: "Traumatologist-Orthopedist",
      ru: "Травматолог-ортопед",
      tr: "Ortopedi Uzmanı"
    },
    image: "/images/doctors/mahmud-ismayilov.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 81,
    slug: "nevai-aslanov",
    name: "Nəvai Aslanov",
    specialty: {
      az: "Uroloq-Androloq",
      en: "Urologist-Andrologist",
      ru: "Уролог-андролог",
      tr: "Ürolog-Androlog"
    },
    image: "/images/doctors/nevai-aslanov.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 80,
    slug: "sevinc-mustafayeva",
    name: "Sevinc Mustafayeva",
    specialty: {
      az: "Dermatoloq",
      en: "Dermatologist",
      ru: "Дерматолог",
      tr: "Dermatolog"
    },
    image: "/images/doctors/sevinc-mustafayeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 77,
    slug: "aide-memmedova",
    name: "Aidə Məmmədova",
    specialty: {
      az: "Oftalmoloq",
      en: "Ophthalmologist",
      ru: "Офтальмолог",
      tr: "Göz Hastalıkları Uzmanı"
    },
    image: "/images/doctors/aide-memmedova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 75,
    slug: "anar-qasimov",
    name: "Anar Qasımov",
    specialty: {
      az: "Anestezioloq-Reanimatoloq",
      en: "Anesthesiologist-Reanimatologist",
      ru: "Анестезиолог-реаниматолог",
      tr: "Anesteziyolog"
    },
    image: "/images/doctors/anar-qasimov.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 71,
    slug: "safura-isayeva",
    name: "Safura İsayeva",
    specialty: {
      az: "Pediatr Nevroloq",
      en: "Pediatric Neurologist",
      ru: "Детский невролог",
      tr: "Çocuk Nöroloğu"
    },
    image: "/images/doctors/safura-isayeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 69,
    slug: "mursel-ceferov",
    name: "Mürsəl Cəfərov",
    specialty: {
      az: "Ümumi Cərrah",
      en: "General Surgeon",
      ru: "Общий хирург",
      tr: "Genel Cerrah"
    },
    image: "/images/doctors/mursel-ceferov.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 65,
    slug: "irade-imanova",
    name: "İradə İmanova",
    specialty: {
      az: "Mama-Ginekoloq",
      en: "Obstetrician-Gynecologist",
      ru: "Акушер-гинеколог",
      tr: "Kadın Doğum Uzmanı"
    },
    image: "/images/doctors/irade-imanova.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 64,
    slug: "gulsen-hesenquliyeva",
    name: "Gülşən Həsənquliyeva",
    specialty: {
      az: "Stomatoloq",
      en: "Dentist",
      ru: "Стоматолог",
      tr: "Diş Hekimi"
    },
    image: "/images/doctors/gulsen-hesenquliyeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  },
  {
    id: 10,
    slug: "gulnar-abdullayeva",
    name: "Gülnar Abdullayeva",
    specialty: {
      az: "Fizioterapevt",
      en: "Physiotherapist",
      ru: "Физиотерапевт",
      tr: "Fizyoterapist"
    },
    image: "/images/doctors/gulnar-abdullayeva.webp",
    schedule: { weekdays: "09:00 - 18:00", sunday: "Bağlı" }
  }
];
