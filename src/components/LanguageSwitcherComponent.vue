<script lang="ts">
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'
export default {
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const switchLanguage = async (event: Event) => {
      const newLocale = (event.target as HTMLSelectElement).value
      await Tr.switchLanguage(newLocale)
    }
    return { t, locale, supportedLocales, switchLanguage }
  }
}
</script>

<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>
