import {createI18n} from "vue-i18n";

const messages = {
  fr: {
    locale: {
      fr: "Français",
      en: "Anglais",
      es: "Espagnol"
    },
    hello: "Bonjour",
    exp: "expérimentée",
    fam: "familière",
    beg: "débutante",
    nav: {
      aboutMe: "À propos de moi",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    subtitle: {
      home: "Développeur web junior",
      aboutMe: "À propos de moi",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact"
    },
    description: {
      home: "Développeuse web junior ambitieuse cherchant à acquérir de l'expérience dans le développement\n" +
        "          back-end ainsi que dans le développement front-end. Après avoir développé plusieurs plugins\n" +
        "          pour des sites Web WordPress, je souhaite soutenir mon intérêt pour le framework front-end\n" +
        "          en améliorant mes compétences en VueJs ou ReactJs. Mon expérience en tant que développeur\n" +
        "          web back-end lors de mon stage m'a appris à travailler dans un environnement professionnel,\n" +
        "          avec des données sensibles. Au cours de ce premier voyage professionnel, j'ai découvert des\n" +
        "          technologies telles que VueJs, Leaflet (carte), Elementor (constructeur de pages Wordpress)\n" +
        "          et j'ai appris beaucoup plus. Mes objectifs à long terme comprennent la poursuite d'un\n" +
        "          poste de gestion de projet axé sur la créativité et le respect rigoureux des pratiques de\n" +
        "          codage de qualité."
    }

  },
  en: {
    locale: {
      fr: "Français",
      en: "Anglais",
      es: "Espagnol"
    },
    hello: "Hello",
    exp: "experieced",
    fam: "familiar",
    beg: "beginner",

    nav: {
      aboutMe: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    subtitle: {
      home: "Junior web developer",
      aboutMe: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    description: {
      home: "Ambitious junior web developer looking to gain experience in back-end as well as front-end\n" +
        "          web development. After developing several plugin for WordPress websites I would like to\n" +
        "          support my interest in front-end framework by enhancing my skills in VueJs or ReactJs. My\n" +
        "          experience working as a back-end web developer during my internship taught me how to work\n" +
        "          in a professional setting, with sensitive data. In this first professional journey I have\n" +
        "          discovered technologies like VueJs, Leaflet (map), Elementor (Wordpress page builder) and\n" +
        "          learned much more. My long term goals include pursuing a position in project management\n" +
        "          with a focus on creativity and rigorous adherence to quality coding practices.\n" +
        "          Accessibility is a critical point, way to often overlooked yet 50% of the population will\n" +
        "          be confronted by a handicap in there life, and 13 to 16 percent of the general population\n" +
        "          is handicapped. I am convinced that the web should be accessible to everyone, and I am\n" +
        "          passionate about accessibility. I am currently looking for new opportunities as a junior web\n" +
        "          developer.",
    }
  },
  es: {
    hello: "Hola"
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
});
