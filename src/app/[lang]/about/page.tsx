import { Locale, getDictionary } from '@/lib/i18n';
import Stats from '@/components/Stats';
import Image from 'next/image';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const features = [
    { value: "6", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: dict.about.building, color: "from-amber-500 to-yellow-400" },
    { value: "3", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: dict.about.operatingRooms, color: "from-sky-500 to-blue-400" },
    { value: "24", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: dict.about.beds, color: "from-emerald-500 to-green-400" },
    { value: "40", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: dict.about.cabinets, color: "from-violet-500 to-purple-400" },
  ];

  return (
    <>
      {/* Hero with background image */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.webp"
            alt="Premium Clinic"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white/90 to-emerald-50/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-amber-700 rounded-full text-sm font-medium mb-6">
              Premium Clinic & Hospital
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{dict.about.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">{dict.about.description}</p>
            <p className="text-gray-500 leading-relaxed">{dict.about.descriptionFull}</p>
          </div>
        </div>
      </section>

      {/* Features Grid - Animated Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className={`about-card-${i + 1} group relative bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}>
                {/* Gradient top border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                <div className={`w-16 h-16 bg-gradient-to-br ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{f.value}</p>
                <p className="text-sm font-semibold text-gray-600">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats dict={dict} />

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{dict.about.mission}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.missionText}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{dict.about.vision}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.visionText}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{dict.about.values}</h3>
              <p className="text-gray-600 leading-relaxed">{dict.about.valuesText}</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-950 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px gold-gradient" />
            <p className="text-white text-lg font-medium">{dict.about.equipment}</p>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{dict.nav.certificates}</h2>
            <p className="text-gray-600">{dict.about.license}</p>
          </div>
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold/20 max-w-md">
              <Image
                src="/images/certificates/certificate-1.webp"
                alt="Medical License Certificate"
                width={500}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="https://its.gov.az/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-6 p-8 bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all"
          >
            <Image
              src="/images/icbari-az.png"
              alt="İcbari Tibbi Sığorta"
              width={60}
              height={60}
              className="w-16 h-16 object-contain"
            />
            <p className="text-lg font-semibold text-gray-900">{dict.contact.insurance}</p>
          </a>
        </div>
      </section>
    </>
  );
}
