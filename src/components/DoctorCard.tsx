import { Locale } from '@/lib/i18n';
import { Doctor } from '@/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  lang: Locale;
  dict: any;
}

export default function DoctorCard({ doctor, lang, dict }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200">
      <div className="relative h-72 bg-gradient-to-br from-sky-100 to-emerald-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-200 group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${doctor.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-sky-600 text-sm font-medium mb-3">{doctor.specialty[lang]}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{dict.doctors.weekdays}</span>
        </div>
      </div>
    </div>
  );
}
