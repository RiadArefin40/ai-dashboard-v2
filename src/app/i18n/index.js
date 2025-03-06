import en from './locales/en';
import ar from './locales/ar';

const locales = { en, ar };

export function useTranslation(locale) {
  return {
    t: (key) => {
      const keys = key.split('.');
      let value = locales[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    }
  };
} 