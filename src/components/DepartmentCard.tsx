import { Locale } from '@/lib/i18n';
import { Department } from '@/data/departments';

interface DepartmentCardProps {
  department: Department;
  lang: Locale;
  dict: any;
}

export default function DepartmentCard({ department, lang, dict }: DepartmentCardProps) {
  const categoryColors: Record<string, string> = {
    surgical: 'bg-red-50 text-red-600',
    diagnostic: 'bg-blue-50 text-blue-600',
    clinical: 'bg-green-50 text-green-600',
    therapeutic: 'bg-purple-50 text-purple-600',
  };

  const categoryLabels: Record<string, string> = {
    surgical: dict.departments.surgical,
    diagnostic: dict.departments.diagnostic,
    clinical: dict.departments.clinical,
    therapeutic: dict.departments.therapeutic,
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
      <div className="relative h-48 bg-gradient-to-br from-sky-100 to-emerald-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-200 group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${department.image})` }}
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[department.category]}`}>
            {categoryLabels[department.category]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{department.name[lang]}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{department.description[lang]}</p>
      </div>
    </div>
  );
}
