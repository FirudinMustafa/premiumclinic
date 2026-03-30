import { Locale, getDictionary } from '@/lib/i18n';
import DepartmentCard from '@/components/DepartmentCard';
import { departments } from '@/data/departments';

export default async function DepartmentsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const categories = ['surgical', 'clinical', 'diagnostic', 'therapeutic'] as const;
  const categoryLabels: Record<string, string> = {
    surgical: dict.departments.surgical,
    clinical: dict.departments.clinical,
    diagnostic: dict.departments.diagnostic,
    therapeutic: dict.departments.therapeutic,
  };

  return (
    <>
      <section className="pt-28 pb-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{dict.departments.title}</h1>
          <p className="text-lg text-gray-600">{dict.departments.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const depts = departments.filter((d) => d.category === category);
            if (depts.length === 0) return null;
            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-sky-600 rounded-full" />
                  {categoryLabels[category]}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {depts.map((dept) => (
                    <DepartmentCard key={dept.id} department={dept} lang={locale} dict={dict} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
