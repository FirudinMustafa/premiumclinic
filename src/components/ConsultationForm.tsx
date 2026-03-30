'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n';
import { departments } from '@/data/departments';

interface ConsultationFormProps {
  lang: Locale;
  dict: any;
}

export default function ConsultationForm({ lang, dict }: ConsultationFormProps) {
  const [selectedDept, setSelectedDept] = useState('');

  const handleSubmit = () => {
    const deptName = selectedDept || 'Konsultasiya';
    const message = encodeURIComponent(`Salam, ${deptName} bölümü üzrə konsultasiya almaq istəyirəm.`);
    window.open(`https://wa.me/994507070501?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {dict.consultation.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {dict.consultation.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="flex-1 px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-gold/50 appearance-none cursor-pointer"
              >
                <option value="" className="text-gray-900">{dict.consultation.selectDepartment}</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.name[lang]} className="text-gray-900">
                    {dept.name[lang]}
                  </option>
                ))}
              </select>
              <button
                onClick={handleSubmit}
                className="px-8 py-4 gold-gradient text-gray-900 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {dict.consultation.button}
              </button>
            </div>
          </div>

          {/* Right - Need Doctor */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{dict.consultation.needDoctor}</h3>
                <p className="text-gray-400 text-sm">{dict.consultation.needDoctorSub}</p>
              </div>
            </div>
            <a
              href="https://wa.me/994507070501?text=Salam, müayinə üçün randevu almaq istəyirəm."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/25"
            >
              {dict.consultation.bookNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
