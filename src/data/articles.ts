export interface Article {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
}

export const articles: Article[] = [
  { id: 799, slug: "feqerearasi-disk-yirtiqi", title: "Fəqərəarası disk yırtığı (Qrija) necə müalicə olunur?", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-20.webp", date: "2025-05" },
  { id: 794, slug: "oynaq-artrozu", title: "Oynaq Artrozu Necə Müalicə Olunur? Effektiv Üsullar və Fizioterapiyanın Rolu", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-19.webp", date: "2025-05" },
  { id: 793, slug: "mede-yanmasi", title: "Mədə Yanması və Ağrısı: Qastritin Əsas Səbəbləri, Simptomları və Müalicəsi", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-18.webp", date: "2025-05" },
  { id: 791, slug: "qiciqli-oskurek", title: "Qıcıqlı Öskürək Hansı Xəstəliklərin Əlamətidir?", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-16.webp", date: "2025-05" },
  { id: 790, slug: "fizioterapiya-faydalari", title: "Fizioterapiya: Faydaları, Texnikaları və Müalicə Etdiyi Xəstəliklər", image: "/uploads/posts/2025-03/sas-cover-900-x-400-px-600-x-600-px-2.webp", date: "2025-03" },
  { id: 789, slug: "usaqlarda-allergik-reaksiyalar", title: "Uşaqlarda Allergik Reaksiyalara Səbəb Nədir?", image: "/uploads/posts/2025-02/medium/uaqlarda-allergik-reaksiyalara-sbb-ndir.webp", date: "2025-02" },
  { id: 788, slug: "revmatizm", title: "Revmatizmanın Əlamətləri Nələrdir? Revmatik Xəstəliklər Hansılardır?", image: "/uploads/posts/2025-02/medium/revmatizmann-lamtlri-nlrdir-revmatik-xstliklr-hanslardr.webp", date: "2025-02" },
  { id: 787, slug: "osteoxondroz", title: "Osteoxondroz Müalicə ilə Sağalır? Osteoxondrozun Riski Nədir?", image: "/uploads/posts/2025-03/xstliklrin-mualicsi-900-x-400-px-600-x-600-px.webp", date: "2025-03" },
  { id: 786, slug: "otit", title: "Otit Hansı Xəstəliklərə Səbəb Olur? Otit Müalicə ilə Keçir?", image: "/uploads/posts/2025-04/sas-cover-900-x-400-px-600-x-600-px-13.webp", date: "2025-04" },
  { id: 785, slug: "sidik-tutmaq", title: "Sidik Tutmağın Zərərləri Nələrdir? İdrarı Saxlamaq Niyə Risklidir?", image: "/uploads/posts/2025-02/medium/sidik-tutman-zrrlri-nlrdir-idrar-saxlamaq-niy-risklidir.webp", date: "2025-02" },
  { id: 784, slug: "hamilelik-ucuncu-ay", title: "Hamiləliyin Üçüncü Ayında Körpə Necə İnkişaf Edir?", image: "/uploads/posts/2025-02/medium/hamilliyin-ucuncu-aynda-korp-nec-inkiaf-edir.webp", date: "2025-02" },
  { id: 783, slug: "bas-agrisi", title: "Baş Ağrısının 9 Əsas Səbəbi Hansılardır?", image: "/uploads/posts/2025-02/medium/ba-arsnn-9-sas-sbbi-hanslardr.webp", date: "2025-02" },
  { id: 782, slug: "bagirsaq-tenbelliyi", title: "Bağırsaq Tənbəlliyi Nədir? Bağırsaq Tənbəlliyinin 7 Əsas Səbəbi", image: "/uploads/posts/2025-02/medium/barsaq-tnblliyi-ndir-barsaq-tnblliyinin-7-sas-sbbi.webp", date: "2025-02" },
  { id: 781, slug: "endokrinoloji-xestelikler", title: "Endokrinoloji Xəstəliklər Hansılardır? 8 Xəstəliyə Diqqət Edin", image: "/uploads/posts/2025-02/medium/endokrinoloji-xstliklr-hanslardr-8-xstliy-diqqt-edin.webp", date: "2025-02" },
  { id: 780, slug: "usaqlarda-qizdirma", title: "Uşaqlarda Qızdırma Müalicəsi: Qızdırmanı Aşağı Salan 4 üsul", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-17.webp", date: "2025-05" },
  { id: 779, slug: "hamilelik-ikinci-ay", title: "Hamiləliyin İkinci Ayında Nələr Olur? 2 Aylıq Hamiləlikdə İnkişaf", image: "/uploads/posts/2025-01/medium/hamilliyin-ikinci-aynda-nlr-olur-2-aylq-hamillikd-inkiaf.webp", date: "2025-01" },
  { id: 778, slug: "suciceyi", title: "Suçiçəyinin 5 Əsas Əlaməti Hansılardır?", image: "/uploads/posts/2025-01/medium/sucicyinin-5-sas-lamti-hanslardr.webp", date: "2025-01" },
  { id: 777, slug: "insulin", title: "İnsulin Nədir? İnsülin Müqaviməti Kimlərdə Olur?", image: "/uploads/posts/2025-01/medium/insulin-ndir-insulin-muqavimti-kimlrd-olur.webp", date: "2025-01" },
  { id: 776, slug: "hamilelikde-sidik", title: "Hamiləlikdə Tünd Rəngli Sidik Risklidir? Sidik Necə Olmalıdır?", image: "/uploads/posts/2025-01/medium/hamillikd-tund-rngli-sidik-risklidir-sidik-hans-rngd-olmaldr.webp", date: "2025-01" },
  { id: 775, slug: "hamilelikde-idman", title: "Hamiləlikdə İdman Etmək Olar? Hamilələr üçün Uyğun Olan 3 İdman", image: "/uploads/posts/2025-01/medium/hamillikd-idman-etmk-olar-hamillr-ucun-uyun-olan-3-idman.webp", date: "2025-01" },
  { id: 774, slug: "hamilelikde-hematoma", title: "Hamiləlikdə Hematoma Nədir? Hematomanın Riskləri Nələrdir?", image: "/uploads/posts/2025-01/medium/hamillikd-hematoma-ndir-hematomann-risklri-nlrdir.webp", date: "2025-01" },
  { id: 771, slug: "hamilelikde-cinsiyet", title: "Hamiləlikdə Cinsiyyət Nə Vaxt Bilinir? Cinsiyyət necə formalaşır?", image: "/uploads/posts/2025-03/sas-cover-900-x-400-px-600-x-600-px-6.webp", date: "2025-03" },
  { id: 770, slug: "boyrek-catismazligi", title: "Böyrək Çatışmazlığı Müalicə Olunur? Böyrək Çatışmazlığı Genetikdir?", image: "/uploads/posts/2025-01/medium/boyrk-catmazl-mualic-olunur-boyrk-catmazl-genetikdir.webp", date: "2025-01" },
  { id: 769, slug: "aybasi-agrisi", title: "Aybaşı Zamanı Ağrı Niyə Olur? Aybaşı Ağrısını Azaltmağın Yolları", image: "/uploads/posts/2025-01/medium/_ayba-zaman-ar-niy-olur-ayba-arsn-azaltman-yollar.webp", date: "2025-01" },
  { id: 768, slug: "onikibarmaq-bagirsaq-xorasi", title: "Onikibarmaq Bağırsaq Xorası Yaradan 3 Əsas Səbəb Nədir?", image: "/uploads/posts/2025-01/medium/onikibarmaq-barsaq-xoras-yaradan-3-sas-sbb-ndir.webp", date: "2025-01" },
  { id: 767, slug: "usaqlarda-immun-sistemi", title: "Uşaqlarda İmmun Sistemini Gücləndirmək üçün 5 Addım", image: "/uploads/posts/2025-03/sas-cover-900-x-400-px-600-x-600-px.webp", date: "2025-03" },
  { id: 766, slug: "raxitlik", title: "Raxitlik Niyə Olur? Raxitliyin Müalicəsində D Vitamini Vacibdir?", image: "/uploads/posts/2025-01/medium/raxitlik-niy-olur-raxitliyin-mualicsind-d-vitamini-vacibdir.webp", date: "2025-01" },
  { id: 765, slug: "ozonoterapiya", title: "Ozonoterapiya Nədir? Ozonoterapiyanın Faydaları Nələrdir?", image: "/uploads/posts/2025-01/medium/ozonoterapiya-ndir-ozonoterapiyann-faydalar-nlrdir.webp", date: "2025-01" },
  { id: 764, slug: "hamilelik-birinci-ay", title: "Hamiləliyin Birinci Ayında Hansı Dəyişikliklər Olur?", image: "/uploads/posts/2025-03/sas-cover-900-x-400-px-600-x-600-px-1.webp", date: "2025-03" },
  { id: 763, slug: "gece-oskurek", title: "Gecə Yatarkən Öskürək Hansı Xəstəliyin Əlamətidir?", image: "/uploads/posts/2025-01/medium/gec-yatarkn-oskurk-hans-xstliyin-lamtidir.webp", date: "2025-01" },
  { id: 762, slug: "kolonoskopiya", title: "Kolonoskopiya Nədir? Kolonoskopiyadan Əvvəl Qidalanma Necə Olmalıdır?", image: "/uploads/posts/2025-01/medium/kolonoskopiya-ndir-kolonoskopiyadan-vvl-qidalanma-nec-olmaldr.webp", date: "2025-01" },
  { id: 761, slug: "usaqlarda-nevroloji-xestelikler", title: "Uşaqlarda Nevroloji Xəstəliklər Necə Müalicə Olunur?", image: "/uploads/posts/2025-01/medium/uaqlarda-nevroloji-xstliklr-nec-mualic-olunur.webp", date: "2025-01" },
  { id: 759, slug: "adenoid-boyumesi", title: "Uşaqlarda Adenoid Böyüməsi Necə Bilinir? Adenoid Böyüməsi Risklidir?", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-15.webp", date: "2025-05" },
  { id: 758, slug: "adenoid-emeliyyati", title: "Uşaqlarda Adenoid Əməliyyatı Neçə Yaşda Edilməlidir?", image: "/uploads/posts/2025-05/sas-cover-900-x-400-px-600-x-600-px-14.webp", date: "2025-05" },
  { id: 755, slug: "prostat-xercengi", title: "Prostat Xərçənginin Əlamətləri Nələrdir? Prostat Xərçəngi Risklidir?", image: "/uploads/posts/2025-01/medium/prostat-xrcnginin-lamtlri-nlrdir-prostat-xrcngi-risklidir.webp", date: "2025-01" },
  { id: 699, slug: "babasil", title: "Babasil Niyə Yaranır? Babasil Müalicə ilə Keçir?", image: "/uploads/posts/2024-11/medium/babasil-niy-yaranr-babasil-mualic-il-kecir.webp", date: "2024-11" },
];
