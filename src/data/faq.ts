export interface FaqItem {
  q: Record<string, string>;
  a: Record<string, string>;
}

export const homeFaq: FaqItem[] = [
  {
    q: { az: "Premium Clinic harada yerləşir?", en: "Where is Premium Clinic located?", ru: "Где находится Premium Clinic?", tr: "Premium Clinic nerede?" },
    a: { az: "Premium Clinic Bakı şəhəri, Nəsimi rayonu, Asif Məhərrəmov küçəsi, 25B ünvanında yerləşir. 6 mərtəbəli müasir binada fəaliyyət göstəririk.", en: "Premium Clinic is located at 25B Asif Maharramov str., Nasimi district, Baku. We operate in a modern 6-story building.", ru: "Premium Clinic находится по адресу: г. Баку, Насиминский р-н, ул. Асифа Мехеррамова, 25B. Мы работаем в современном 6-этажном здании.", tr: "Premium Clinic, Bakü, Nesimi ilçesi, Asif Maharramov cad., 25B adresinde yer almaktadır." }
  },
  {
    q: { az: "İş saatları necədir?", en: "What are the working hours?", ru: "Какие часы работы?", tr: "Çalışma saatleri nasıl?" },
    a: { az: "Hər gün saat 09:00-dan 18:00-a qədər xidmətinizdəyik. Stasionar şöbəmiz isə 24 saat fəaliyyət göstərir.", en: "We are open every day from 09:00 to 18:00. Our inpatient department operates 24 hours.", ru: "Мы работаем ежедневно с 09:00 до 18:00. Стационарное отделение работает круглосуточно.", tr: "Her gün 09:00-18:00 arası hizmet veriyoruz. Yatan hasta servisimiz 24 saat çalışmaktadır." }
  },
  {
    q: { az: "Randevu necə ala bilərəm?", en: "How can I book an appointment?", ru: "Как записаться на прием?", tr: "Randevu nasıl alabilirim?" },
    a: { az: "WhatsApp (+994 50 707 05 01) vasitəsilə və ya telefonla (+994 50 707 05 01) randevu ala bilərsiniz.", en: "You can book via WhatsApp (+994 50 707 05 01) or by phone (+994 50 707 05 01).", ru: "Вы можете записаться через WhatsApp (+994 50 707 05 01) или по телефону (+994 50 707 05 01).", tr: "WhatsApp (+994 50 707 05 01) veya telefon (+994 50 707 05 01) ile randevu alabilirsiniz." }
  },
  {
    q: { az: "İcbari Tibbi Sığorta qəbul edirsiniz?", en: "Do you accept Mandatory Health Insurance?", ru: "Вы принимаете обязательное медицинское страхование?", tr: "Zorunlu Sağlık Sigortası kabul ediyor musunuz?" },
    a: { az: "Bəli, İcbari Tibbi Sığorta vasitəsilə müraciət edə bilərsiniz. Ətraflı məlumat üçün its.gov.az saytına baxa bilərsiniz.", en: "Yes, you can apply through Mandatory Health Insurance. Visit its.gov.az for more information.", ru: "Да, вы можете обратиться по обязательному медицинскому страхованию. Подробности на its.gov.az.", tr: "Evet, Zorunlu Sağlık Sigortası ile başvurabilirsiniz. Detaylar için its.gov.az adresini ziyaret edin." }
  },
  {
    q: { az: "Hansı tibbi bölümlər mövcuddur?", en: "Which medical departments are available?", ru: "Какие медицинские отделения доступны?", tr: "Hangi tıbbi bölümler mevcut?" },
    a: { az: "29-dan çox ixtisaslaşmış bölüm: Ümumi cərrahiyyə, Plastik cərrahiyyə, Kardiologiya, Nevrologiya, Urologiya, Stomatologiya, Pediatriya, Mama-ginekologiya, Fizioterapiya, Laboratoriya və daha çoxu.", en: "Over 29 specialized departments: General Surgery, Plastic Surgery, Cardiology, Neurology, Urology, Dentistry, Pediatrics, Obstetrics-Gynecology, Physiotherapy, Laboratory, and more.", ru: "Более 29 специализированных отделений: общая хирургия, пластическая хирургия, кардиология, неврология, урология, стоматология, педиатрия, акушерство-гинекология, физиотерапия, лаборатория и другие.", tr: "29'dan fazla uzman bölüm: Genel Cerrahi, Plastik Cerrahi, Kardiyoloji, Nöroloji, Üroloji, Diş Hekimliği, Pediatri, Kadın Hastalıkları, Fizik Tedavi, Laboratuvar ve daha fazlası." }
  },
  {
    q: { az: "Check-up paketləriniz var?", en: "Do you have check-up packages?", ru: "Есть ли у вас пакеты обследования?", tr: "Check-up paketleriniz var mı?" },
    a: { az: "Bəli, 6 fərqli check-up paketimiz var: Ginekoloji, Nigah öncəsi (qadın/kişi), Süd vəzi skrininqi, Uroloji-Androloji və Məktəblilər üçün check-up.", en: "Yes, we have 6 different check-up packages: Gynecological, Pre-marriage (women/men), Breast Screening, Urological-Andrological, and School Children check-up.", ru: "Да, у нас есть 6 различных пакетов: Гинекологический, Предбрачный (жен/муж), Скрининг молочной железы, Урологически-андрологический, Школьный чекап.", tr: "Evet, 6 farklı check-up paketimiz var: Jinekolojik, Evlilik öncesi (kadın/erkek), Meme Taraması, Ürolojik-Androlojik ve Okul Çocukları check-up." }
  },
];
