import { Locale, getDictionary } from '@/lib/i18n';

const galleryImages = [
  '/images/gallery/xestexana-1.webp',
  '/images/gallery/xestexana-2.webp',
  '/images/gallery/xestexana-7.webp',
  '/images/gallery/xestexana-8.webp',
  '/images/gallery/xestexana-9.webp',
  '/images/gallery/xestexana-10.webp',
  '/images/gallery/yeni-28.webp',
  '/images/gallery/yeni-29.webp',
  '/images/gallery/yeni-30.webp',
  '/images/gallery/yeni-31.webp',
  '/images/gallery/artboard-1.webp',
  '/images/gallery/artboard-5.webp',
  '/images/gallery/artboard-9.webp',
  '/images/gallery/artboard-10.webp',
  '/images/gallery/artboard-11.webp',
  '/images/gallery/artboard-12.webp',
  '/images/gallery/artboard-13.webp',
  '/images/gallery/img-3047.webp',
  '/images/gallery/img-3049.webp',
  '/images/gallery/img-3050.webp',
  '/images/gallery/img-3053.webp',
];

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="pt-28 pb-10 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{dict.gallery.title}</h1>
          <p className="text-lg text-gray-600">{dict.gallery.subtitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div
                  className="w-full bg-gray-200 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img})`,
                    height: `${i % 3 === 0 ? 400 : i % 3 === 1 ? 300 : 350}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
