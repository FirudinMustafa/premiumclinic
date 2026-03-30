import { Locale, getDictionary } from '@/lib/i18n';
import DoctorCard from '@/components/DoctorCard';
import { doctors } from '@/data/doctors';

export default async function DoctorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="pt-28 pb-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{dict.doctors.title}</h1>
          <p className="text-lg text-gray-600">{dict.doctors.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} lang={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
