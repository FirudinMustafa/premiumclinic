export interface AnalysisTest {
  name: string;
  price: number;
}

export interface AnalysisCategory {
  id: number;
  name: string;
  nameEn: string;
  tests: AnalysisTest[];
}

export const analysisCategories: AnalysisCategory[] = [
  {
    id: 1, name: "Kliniki analizlər", nameEn: "Clinical Analyses",
    tests: [
      { name: "Sidiyin ümumi analizi", price: 8 },
      { name: "Sidiyin Neçiporenko üsulu ilə təyini", price: 12 },
      { name: "Necisin ümumi analizi", price: 8 },
      { name: "Yaxmanın mikroskopiyası", price: 20 },
      { name: "Prostat sirəsinin mikroskopiyası", price: 20 },
      { name: "Malyariya - Qalın damla üsulu ilə", price: 8 },
      { name: "Demodeks", price: 12 },
      { name: "Patogen göbələklərin tədqiqi", price: 10 },
      { name: "Perianal süyrüntüsü", price: 10 },
    ]
  },
  {
    id: 2, name: "İmmunoloji tədqiqatlar", nameEn: "Immunological Tests",
    tests: [
      { name: "TNF-alfa", price: 100 },
      { name: "Immunoqlobulin A (IgA)", price: 20 },
      { name: "Immunoqlobulin M (IgM)", price: 20 },
      { name: "Immunoqlobulin G (IgG)", price: 20 },
      { name: "Immunoqlobulin E (IgE total)", price: 20 },
      { name: "Interleykin-6", price: 40 },
      { name: "Komplement C3", price: 20 },
      { name: "Komplement C4", price: 20 },
      { name: "Quantiferon TB GOLD PLUS", price: 300 },
    ]
  },
  {
    id: 3, name: "Allergik analizlər", nameEn: "Allergy Tests",
    tests: [
      { name: "Eozinofil kation zülalı (ECP)", price: 40 },
      { name: "Spesifik allergenlər IgE", price: 35 },
      { name: "Spesifik allergenlər IgG", price: 35 },
    ]
  },
  {
    id: 4, name: "Biokimyəvi analizlər", nameEn: "Biochemical Analyses",
    tests: [
      { name: "AlAT (ALT)", price: 8 },
      { name: "AsAT (AST)", price: 8 },
      { name: "Albumin", price: 12 },
      { name: "Alfa-amilaza", price: 10 },
      { name: "ASL-O (ASO)", price: 9 },
      { name: "Bilirubin (ümumi + birləşmiş)", price: 18 },
      { name: "C-reaktiv zülal (CRP)", price: 9 },
      { name: "Ferritin", price: 18 },
      { name: "Homosistein", price: 45 },
      { name: "Kreatinin", price: 7 },
      { name: "Qlükoza", price: 6 },
      { name: "Qlükohemoqlobin (HbA1C)", price: 40 },
      { name: "Revmatoid faktor (RF)", price: 9 },
      { name: "Sidik çövhəri (Urea)", price: 7 },
      { name: "Sidik turşusu", price: 10 },
      { name: "Triqliseridlər", price: 8 },
      { name: "Troponin-T", price: 30 },
      { name: "Ümumi xolesterol", price: 8 },
      { name: "Ümumi zülal", price: 7 },
      { name: "LDL-xolesterol", price: 12 },
      { name: "HDL-xolesterol", price: 12 },
    ]
  },
  {
    id: 5, name: "Vitaminlər", nameEn: "Vitamins",
    tests: [
      { name: "Vitamin D (25-OH)", price: 45 },
      { name: "Vitamin B12", price: 35 },
      { name: "Vitamin B1", price: 70 },
      { name: "Vitamin B6", price: 70 },
      { name: "Vitamin A (Retinol)", price: 60 },
      { name: "Vitamin E (alfa tokoferol)", price: 60 },
      { name: "Fol turşusu (Vitamin B9)", price: 25 },
    ]
  },
  {
    id: 6, name: "Hematoloji analizlər", nameEn: "Hematological Analyses",
    tests: [
      { name: "Qanın klinik analizi (25 göstərici)", price: 12 },
      { name: "Qanın klinik analizi (34 göst.) + Retikulositlər", price: 30 },
      { name: "Hemoqlobin fraksiyaları", price: 40 },
      { name: "Qan qrupları + Rezus-amili", price: 5 },
      { name: "Eritropoetin", price: 40 },
    ]
  },
  {
    id: 7, name: "Hormonal müayinələr", nameEn: "Hormonal Tests",
    tests: [
      { name: "TSH", price: 20 },
      { name: "Free T3", price: 18 },
      { name: "Free T4", price: 18 },
      { name: "Anti-TPO", price: 28 },
      { name: "Anti-TG", price: 28 },
      { name: "Estradiol (E2)", price: 20 },
      { name: "FSH", price: 20 },
      { name: "LH", price: 20 },
      { name: "Progesteron", price: 20 },
      { name: "Prolaktin", price: 20 },
      { name: "Testosteron", price: 20 },
      { name: "Kortizol", price: 30 },
      { name: "İnsulin", price: 30 },
      { name: "Anti-Müller hormon (AMH)", price: 80 },
      { name: "beta-HCG", price: 20 },
      { name: "Kalsitonin", price: 45 },
    ]
  },
  {
    id: 8, name: "Onkomarkerlər", nameEn: "Tumor Markers",
    tests: [
      { name: "Alfa fetoprotein (AFP)", price: 22 },
      { name: "PSA-ümumi", price: 25 },
      { name: "PSA-sərbəst", price: 25 },
      { name: "CEA", price: 26 },
      { name: "Ca 15-3", price: 25 },
      { name: "Ca-125", price: 25 },
      { name: "Ca 19-9", price: 25 },
      { name: "HE4", price: 110 },
      { name: "ROMA indeksi", price: 125 },
    ]
  },
  {
    id: 9, name: "Hepatitlər (İFA)", nameEn: "Hepatitis (ELISA)",
    tests: [
      { name: "Anti-HAV-IgM", price: 25 },
      { name: "HBsAg", price: 25 },
      { name: "Anti-HBs", price: 22 },
      { name: "HBeAg", price: 25 },
      { name: "Anti-HBc Total", price: 25 },
      { name: "Anti-HCV-total", price: 25 },
      { name: "Anti-HDV", price: 30 },
    ]
  },
  {
    id: 10, name: "PZR müayinələr", nameEn: "PCR Tests",
    tests: [
      { name: "STI 8-li paket", price: 75 },
      { name: "Hepatit B (keyfiyyət)", price: 55 },
      { name: "Hepatit C (keyfiyyət)", price: 60 },
      { name: "Hepatit C (genotip)", price: 65 },
      { name: "HPV 16 və 18 tiplər", price: 35 },
      { name: "HPV 21-genotip", price: 120 },
      { name: "Chlamydia trachomatis", price: 25 },
      { name: "Mycoplasma hominis", price: 25 },
      { name: "Ureaplasma spp", price: 25 },
      { name: "Trombofiliya paneli", price: 120 },
      { name: "Helicobacter pylori", price: 40 },
    ]
  },
  {
    id: 11, name: "ToRCH infeksiyalar", nameEn: "ToRCH Infections",
    tests: [
      { name: "Anti-Toxo-IgG", price: 22 },
      { name: "Anti-Toxo-IgM", price: 22 },
      { name: "Anti-Rubella-IgG", price: 22 },
      { name: "Anti-Rubella-IgM", price: 22 },
      { name: "Anti-CMV-IgG", price: 22 },
      { name: "Anti-CMV-IgM", price: 22 },
      { name: "Anti-HSV I-IgG", price: 22 },
      { name: "Anti-HSV II-IgG", price: 22 },
    ]
  },
  {
    id: 12, name: "Koaquloqramma", nameEn: "Coagulogram",
    tests: [
      { name: "APTM (aPTT)", price: 7 },
      { name: "Protrombin zamanı INR", price: 11 },
      { name: "Fibrinogen", price: 7 },
      { name: "D-Dimer", price: 45 },
      { name: "Anti-Trombin III", price: 60 },
    ]
  },
  {
    id: 13, name: "Minerallar və mikroelementlər", nameEn: "Minerals & Trace Elements",
    tests: [
      { name: "Ümumi kalsium (Ca)", price: 12 },
      { name: "Kalium (K)", price: 12 },
      { name: "Natrium (Na)", price: 12 },
      { name: "Maqnezium (Mg)", price: 12 },
      { name: "Fosfor (P)", price: 12 },
      { name: "Dəmir (Fe)", price: 12 },
      { name: "Sink (Zn)", price: 30 },
      { name: "Selen (Se)", price: 30 },
      { name: "Yod (I)", price: 30 },
    ]
  },
  {
    id: 14, name: "Autoimmun markerlər", nameEn: "Autoimmune Markers",
    tests: [
      { name: "ANA screen IgG", price: 28 },
      { name: "Anti-CCP", price: 30 },
      { name: "Anti ds-DNT", price: 20 },
      { name: "Anti-Gliadin IgA", price: 30 },
      { name: "Transglutaminaza IgA", price: 30 },
      { name: "Anti-kardiolipin IgG", price: 25 },
    ]
  },
  {
    id: 15, name: "Bakterioloji analizlər", nameEn: "Bacteriological Analyses",
    tests: [
      { name: "Disbakterioz", price: 30 },
      { name: "Qanın bakterioloji əkimi + antibiotik həssaslığı", price: 25 },
      { name: "Sidiyin bakterioloji əkimi + antibiotik həssaslığı", price: 23 },
      { name: "Necisin bakterioloji əkimi + antibiotik həssaslığı", price: 23 },
      { name: "Burun yaxmasının bakterioloji əkimi", price: 23 },
      { name: "Boğazdan yaxmanın bakterioloji əkimi", price: 23 },
    ]
  },
];
