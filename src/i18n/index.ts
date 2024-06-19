import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    locale: {
      fr: 'Français',
      en: 'Anglais',
      es: 'Espagnol'
    },
    hello: 'Bonjour',
    exp: 'expérimentée',
    fam: 'familière',
    beg: 'débutante',
    nav: {
      aboutMe: 'À propos de moi',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    subtitle: {
      home: 'Développeur web junior',
      aboutMe: 'À propos de moi',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    description: {
      home: 'Je suis une développeuse web junior ambitieuse,' +
        ' passionnée par le développement back-end et front-end. Forte de mon expérience dans la création de plugins pour WordPress,' +
        ' je souhaite maintenant approfondir mes compétences dans les frameworks Vue.js et Laravel.' +
        ' Mon alternance en développement back-end chez A2micile Groupe m\'a permis d\'acquérir une solide expérience professionnelle,' +
        ' notamment dans la gestion de données sensibles. J\'ai eu l\'occasion de découvrir des technologies telles que Vue.js, ' +
        'Leaflet pour les cartes interactives, ainsi qu\'Elementor pour la création de pages sur WordPress, enrichissant ainsi mes connaissances techniques.' +
        ' À long terme, je vise à évoluer vers un rôle de gestion de projet, en mettant l\'accent sur la créativité et le respect des meilleures pratiques de développement.'
    }

  },
  en: {
    locale: {
      fr: 'Français',
      en: 'Anglais',
      es: 'Espagnol'
    },
    hello: 'Hello',
    exp: 'experieced',
    fam: 'familiar',
    beg: 'beginner',

    nav: {
      aboutMe: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    subtitle: {
      home: 'Junior web developer',
      aboutMe: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    description: {
      home: 'Ambitious junior web developer looking to gain experience in back-end as well as front-end\n' +
        '          web development. After developing several plugin for WordPress websites I would like to\n' +
        '          support my interest in front-end framework by enhancing my skills in VueJs or ReactJs. My\n' +
        '          experience working as a back-end web developer during my internship taught me how to work\n' +
        '          in a professional setting, with sensitive data. In this first professional journey I have\n' +
        '          discovered technologies like VueJs, Leaflet (map), Elementor (Wordpress page builder) and\n' +
        '          learned much more. My long term goals include pursuing a position in project management\n' +
        '          with a focus on creativity and rigorous adherence to quality coding practices.\n' +
        '          Accessibility is a critical point, way to often overlooked yet 50% of the population will\n' +
        '          be confronted by a handicap in there life, and 13 to 16 percent of the general population\n' +
        '          is handicapped. I am convinced that the web should be accessible to everyone, and I am\n' +
        '          passionate about accessibility. I am currently looking for new opportunities as a junior web\n' +
        '          developer.'
    }
  },
  es: {
    hello: 'Hola'
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})
