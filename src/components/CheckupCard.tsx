import { Locale } from '@/lib/i18n';
import { CheckupPackage } from '@/data/checkups';

interface CheckupCardProps {
  checkup: CheckupPackage;
  lang: Locale;
  dict: any;
}

export default function CheckupCard({ checkup, lang, dict }: CheckupCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Salam, ${checkup.name[lang]} haqqında məlumat almaq istəyirəm.`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/40 flex flex-col">
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{checkup.name[lang]}</h3>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-sky-600">{checkup.price}{checkup.currency}</span>
          <span className="text-lg text-gray-400 line-through">{checkup.oldPrice}{checkup.currency}</span>
        </div>

        <p className="text-sm font-semibold text-gray-700 mb-3">{dict.checkup.includes}:</p>
        <ul className="space-y-2">
          {checkup.includes[lang].map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0">
        <a
          href={`https://wa.me/994507070501?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 gold-gradient text-gray-900 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
        >
          {dict.checkup.book}
        </a>
      </div>
    </div>
  );
}
