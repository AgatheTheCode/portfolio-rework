import i18n from '@/i18n'
const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
  },
  set currentLocale(newLocale: string) {
    i18n.global.locale.value = newLocale
  },
  async switchLanguage(newLocale: string) {
    Trans.currentLocale = newLocale
    const htmlElement = document.querySelector('html')
    if (htmlElement) {
      htmlElement.setAttribute('lang', newLocale)
    }
  }
}
export default Trans
