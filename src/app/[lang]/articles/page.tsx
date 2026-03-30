import { Locale, getDictionary } from '@/lib/i18n';
import { articles } from '@/data/articles';
import { articleDetails } from '@/data/articleDetails';
import Link from 'next/link';

export default async function ArticlesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="pt-28 pb-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{dict.nav.articles}</h1>
          <p className="text-lg text-gray-600">Premium Clinic tibbi məqalələri</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const hasDetail = !!articleDetails[article.slug];
              const Wrapper = hasDetail ? Link : 'div';
              const wrapperProps = hasDetail ? { href: `/${locale}/articles/${article.slug}` } : {};
              return (
              <Wrapper
                key={article.id}
                {...wrapperProps as any}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold/30"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://premiumclinic.az${article.image}`}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-600">
                    {article.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gold font-semibold">
                    {dict.common.readMore}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
