'use client';

import { useState } from 'react';
import { analysisCategories } from '@/data/analyses';

export default function AnalysesPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <>
      <section className="pt-28 pb-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Analizlər</h1>
          <p className="text-lg text-gray-600">Laboratoriya müayinələri və qiymətlər</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {analysisCategories.map((cat) => (
              <div key={cat.id} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gold/40 transition-colors">
                <button
                  onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
                    <p className="text-sm text-gray-500">{cat.nameEn} &middot; {cat.tests.length} analiz</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${openCategory === cat.id ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openCategory === cat.id && (
                  <div className="border-t border-gray-100">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
                          <th className="text-left px-5 py-3 font-semibold">Analiz</th>
                          <th className="text-right px-5 py-3 font-semibold">Qiymət</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.tests.map((test, i) => (
                          <tr key={i} className="border-t border-gray-50 hover:bg-gold/5 transition-colors">
                            <td className="px-5 py-3 text-sm text-gray-700">{test.name}</td>
                            <td className="px-5 py-3 text-sm text-right font-bold text-gray-900">{test.price} &#8380;</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
            <p className="text-emerald-800 font-semibold mb-3">Analiz vermək üçün randevu alın</p>
            <a
              href="https://wa.me/994507070501?text=Salam, analiz vermək istəyirəm."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp ilə Randevu
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
