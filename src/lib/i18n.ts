export const locales = ['az', 'en', 'ru', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'az';

const dictionaries = {
  az: () => import('@/lib/dictionaries/az.json').then((m) => m.default),
  en: () => import('@/lib/dictionaries/en.json').then((m) => m.default),
  ru: () => import('@/lib/dictionaries/ru.json').then((m) => m.default),
  tr: () => import('@/lib/dictionaries/tr.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export const localeNames: Record<Locale, string> = {
  az: 'AZ',
  en: 'EN',
  ru: 'RU',
  tr: 'TR',
};
