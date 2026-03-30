import { Locale, getDictionary } from '@/lib/i18n';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ConsultationForm from '@/components/ConsultationForm';
import DoctorCard from '@/components/DoctorCard';
import DepartmentCard from '@/components/DepartmentCard';
import { doctors } from '@/data/doctors';
import { departments } from '@/data/departments';
import { homeFaq } from '@/data/faq';
import Link from 'next/link';
import Image from 'next/image';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const galleryImages = [
    '/images/gallery/artboard-1.webp',
    '/images/gallery/xestexana-1.webp',
    '/images/gallery/yeni-28.webp',
    '/images/gallery/artboard-9.webp',
    '/images/gallery/xestexana-9.webp',
    '/images/gallery/artboard-5.webp',
  ];

  return (
    <>
      <Hero lang={locale} dict={dict} />
      <Stats dict={dict} />

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden sm:overflow-visible">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-bg.webp"
                  alt="Premium Clinic"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              {/* License badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gold/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{dict.about.license}</p>
                    <p className="text-xs text-gray-500">{dict.about.founded}: {dict.about.foundedValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-amber-700 rounded-full text-sm font-medium mb-6">
                {dict.about.subtitle}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{dict.about.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{dict.about.description}</p>

              {/* Facility highlights */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5", label: dict.about.building },
                  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: dict.about.operatingRooms },
                  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: dict.about.beds },
                  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: dict.about.cabinets },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center gap-2 px-6 py-3 gold-gradient text-gray-900 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                {dict.common.readMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium mb-4">
              {dict.departments.title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.departments.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.departments.subtitle}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
            {departments.slice(0, 8).map((dept) => (
              <div key={dept.id} className="min-w-[280px] sm:min-w-0 snap-start">
                <DepartmentCard department={dept} lang={locale} dict={dict} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/departments`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gold hover:text-gold transition-all"
            >
              {dict.common.seeAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm lang={locale} dict={dict} />

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
              {dict.doctors.title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.doctors.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.doctors.subtitle}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
            {doctors.slice(0, 8).map((doctor) => (
              <div key={doctor.id} className="min-w-[260px] sm:min-w-0 snap-start">
                <DoctorCard doctor={doctor} lang={locale} dict={dict} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/doctors`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gold hover:text-gold transition-all"
            >
              {dict.doctors.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.gallery.title}</h2>
            <p className="text-lg text-gray-600">{dict.gallery.subtitle}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group min-w-[280px] sm:min-w-[300px] md:min-w-0 snap-start">
                <Image
                  src={img}
                  alt={`Premium Clinic Gallery ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 transition-colors" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={`/${locale}/gallery`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-gold hover:text-gold transition-all"
            >
              {dict.common.seeAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-lg text-gray-600">Tez-tez verilən suallar</p>
          </div>
          <div className="space-y-3">
            {homeFaq.map((item, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{item.q[locale]}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a[locale]}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a365d 0%, #0f2942 50%, #1a365d 100%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px gold-gradient" />
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{dict.footer.motto}</h2>
          <p className="text-lg text-sky-100/70 mb-10 max-w-2xl mx-auto">{dict.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/994507070501?text=Salam!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-gray-900 rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-gold/20"
            >
              {dict.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 text-white rounded-2xl font-semibold border-2 border-white/30 hover:bg-white/25 transition-all backdrop-blur-sm"
            >
              {dict.contact.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
