import { Locale, getDictionary } from '@/lib/i18n';
import { articles } from '@/data/articles';
import { articleDetails } from '@/data/articleDetails';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return articles
    .filter((a) => articleDetails[a.slug])
    .flatMap((a) => [
      { lang: 'az', slug: a.slug },
      { lang: 'en', slug: a.slug },
      { lang: 'ru', slug: a.slug },
      { lang: 'tr', slug: a.slug },
    ]);
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const article = articles.find((a) => a.slug === slug);
  const detail = articleDetails[slug];

  if (!article) {
    return (
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Məqalə tapılmadı</h1>
          <Link href={`/${locale}/articles`} className="text-gold mt-4 inline-block">{dict.common.backToHome}</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28">
        <div className="absolute inset-0 h-[450px] sm:h-[500px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://premiumclinic.az${article.image}`}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-white" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <Link
            href={`/${locale}/articles`}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            {dict.nav.articles}
          </Link>
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold-light text-xs font-semibold rounded-full mb-4">{article.date}</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">{article.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="pt-8 sm:pt-12 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {detail ? (
            <div className="space-y-8">
              {detail.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                    <span className="w-1 h-6 gold-gradient rounded-full inline-block flex-shrink-0" />
                    {section.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}

              {/* FAQ */}
              {detail.faq.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ - Tez-tez verilən suallar</h2>
                  <div className="space-y-4">
                    {detail.faq.map((item, i) => (
                      <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-gold/40 transition-colors">
                        <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                          <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Bu məqalənin tam mətni hazırlanır...</p>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-gray-950 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px gold-gradient" />
            <h3 className="text-xl font-bold text-white mb-3">Premium Clinic</h3>
            <p className="text-gray-400 mb-6">Düzgün diaqnoz və keyfiyyətli müalicə üçün bizimlə əlaqə saxlayın</p>
            <a
              href="https://wa.me/994507070501?text=Salam!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gold-gradient text-gray-900 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp ilə Randevu
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Digər Məqalələr</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles
                .filter((a) => a.slug !== slug && articleDetails[a.slug])
                .slice(0, 4)
                .map((a) => (
                  <Link
                    key={a.id}
                    href={`/${locale}/articles/${a.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://premiumclinic.az${a.image}`}
                        alt={a.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700 line-clamp-2">{a.title}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
