<script setup lang="ts">

</script>

<template>

  <!--

Cette page présente les consignes concernant le portfolio du S6, module qui se déroule sur les semaines
du 17/06 et du 24/06, jusqu'au jeudi 27/06 12h30.

L'objectif du portfolio du S6 est de réaliser un portfolio sous la forme d'une application web mettant en avant
vos compétences principales Développer et Entreprendre au niveau 3 et les composantes essentielles de la formation
(lien vers le référentiel du BUT MMI parcours DW-DI), ainsi que votre profil professionnel.
Ce travail compte aussi bien pour la validation de votre formation que pour vos poursuites d'étude
et votre insertion professionnelle.

En tant que développeurs, vous devrez utiliser au mieux les différentes technologies que vous maîtrisez
pour réaliser ce portfolio, à la fois dans le domaine du web et dans celui des dispositifs interactifs.
 Vous devrez prouver cette maîtrise soit en utilisant les technologies dans la réalisation de l'application,
 soit à travers des liens permettant d'accéder à des sites ou des applications annexes que vous avez réalisés.

Il y a donc à la fois un travail sur le contenu, et une démarche complète de conception et de développement
(gestion de projet, UX design, back, front avec composants, intégration responsive, accessibilité) à mettre en œuvre.
 -->

  <h1>Mes Compétences</h1>

  <section class="competences">
    <div>
      <article>
        <h3>Compétences Development</h3>
        <div class="article-inner">
          <h4>Developper à l'aide d'un framework côté client</h4>
          <p>J'ai eu l'occasion de developper plusieurs applications avec des framework front-end comme ReactJs ou
             VueJS</p>
          <h4>Developper à l'aide d'un framework côté serveur</h4>
          <p>J'ai eu l'occasion de developper plusieurs applications avec des framework back-end comme Laravel ou
             Symfony</p>
          <h4>Développer des dispositifs interactif sophistiqué</h4>
          <p>J'ai eu l'occasion de developper plusieurs applications avec des dispositifs interactif sophistiqué, comme
             "Acab Locator" en Flutter.
             Cette application permet de prendre en photos des grafiti ACAB et de les géolocaliser.
             Afin de garantir la sécurité et fiabilité des données une authentification gérer par Firebase (un service
             Google).</p>
          <h4>JSP</h4>
          <p>Les mois derniers j’ai eu l’occasion de travailler sur deux projets majeurs, la refonte back-end de Domaliance et la création d’un CMS sous Laravel avec en technologie Front-End VueJS.

             Refonte Back-end de Domaliance :
             Cette refonte à 3 objectifs : sécuriser, optimiser et fiabiliser le site.

             La sécurisation du site à été faite par la mise en place de variables d'environnements. Ces variables, non suivies sur le git, permettent par exemple de stocker des mots de passe, des token, ou plus simplement la marque du site.

             L’optimisation quant à elle à été plus profonde et plus longue à mettre en place. En effet sur les sites nous avions, et avons encore, des fichiers de fonctions PHP de plusieurs millier de lignes. Ces fichiers se répètent de plugins en plugins. J’ai donc entrepris de mettre toutes ces fonctions dans des classes spécifiques hors des fichiers de thèmes et des fichiers de plugin. Ainsi si un plugin à besoin de récupérer la note d’un service, il nous suffit d’appeler une fonction de la classe “ReviewsDataFetcher”.
             J’ai profité de cette mutualisation du code pour mettre en place des procédures stockées, qui sont plus sûres, rapides et efficientes que les requêtes SQL directement dans le code.
             Finalement j’ai aussi réduit la taille des fichiers JavaScripts pour qu’ils ne fassent plus que le minimum. Lorsqu’une requête AJAX est faite, c’est la classe PHP qui est recalculée par le serveur Apache. Ainsi le tableau des données récupéré par notre API (OZONE) n’est jamais accessible depuis la console.
          </p>
        </div>
      </article>
    </div>
    <div>
      <article>
        <h3>Compétences Entreprendre</h3>
        <p>Les compétences Entreprendre ici</p>
      </article>
    </div>
  </section>

</template>

<style scoped>

</style>
