<script setup lang="ts">

import SectionDivider from '@/components/SectionDivider.vue'
import ArticleDivider from '@/components/ArticleDivider.vue'

</script>

<template>
  <img class="decor" src="@/assets/images/plant1.webp" aria-hidden="true">

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
  <wrapper class="wrap">
    <h1>Mes Compétences</h1>
    <SectionDivider />
    <section class="competences">
      <div>
        <h3>Compétences Development</h3>
        <article>
          <div class="article-inner">
            <h4>Développement d'un CMS Laravel-VueJS</h4>
            <div class="techno">
              <img src="@/assets/images/laravel.svg" alt="Laravel">
              <img src="@/assets/logo.svg" alt="VueJS">
            </div>
            <div class="text">
              <p> Lors de la mise en production de la refonte d’Azaé.com, nous avons constaté que WordPress atteignait
                  ses
                  limites techniques. En effet, cet environnement manque de souplesse pour le développement
                  (dockerisation
                  complexe, ralentissements, mises à jour de plugins délicates, base de données compliquée…).
              </p>
              <ul>
                <p>Après une analyse approfondie, nous avons identifié quatre grandes solutions :</p>

                <li><p>1. Passer à un autre CMS plus performant (Drupal)</p></li>
                <li><p>2. Adopter un WordPress Headless (permettant un front en VueJS, résolvant les problèmes de
                       performances mais
                       pas les autres)
                </p></li>
                <li><p>3. Utiliser un CMS Laravel</p></li>
                <li><p>4. Créer notre propre CMS Laravel</p></li>
              </ul>
              <p> Nous avons finalement opté pour Laravel. Cette décision a conduit à une nouvelle analyse des
                  différents
                  produits existants sur le marché (Statamic, Lavalite, Winter, October…). À l'issue de cette analyse,
                  nous avons décidé de développer notre propre CMS de A à Z. En effet, beaucoup de ces CMS stockent les
                  pages directement sous forme de templates et non en base de données, ce qui est pour nous
                  indispensable.</p>

              <p>J’ai donc commencé par structurer les tables sous Miro afin de partager le projet avec l’équipe et
                 prendre en compte les différents besoins (par exemple, les métadonnées nécessaires au SEO).</p>

              <p>Une fois cette étape validée par le lead développeur, Léo Imbs, j’ai créé l'environnement
                 Laravel-VueJS.
                 J’ai choisi Laravel avec JetStream pour gérer l’authentification et l’authentification à double
                 facteur,
                 ainsi qu'Inertia avec Server Side Rendering (SSR) pour le front en VueJS.</p>

              <p>Le SSR permet au serveur de délivrer des pages pré-calculées au lieu de JavaScript à compiler côté
                 client. Cela réduit la bande passante nécessaire, accélère les chargements, et surtout, permet aux
                 robots d’indexer le site. À mon avis, le plus grand défi de ce développement est la performance
                 SEO.</p>

              <p>Finalement, j’ai dockerisé le projet avec Laravel Sail pour permettre à mes collègues de travailler
                 efficacement dessus. Ce projet a deux volets : le développement et la maintenance du CMS, et la
                 création
                 de sites avec celui-ci. La dockerisation rend le développement plus flexible, permet de cloner le
                 projet
                 pour d'autres constructions, et de cloner le site en cas de forte affluence pour offrir une expérience
                 optimale.</p>

              <p> Piloter l’aspect technique de ce produit m’a offert une nouvelle perspective sur le développement.
                  Jusqu’à présent, je développais uniquement des services en réponse aux demandes de mes collègues.
                  Maintenant, je dois anticiper et intégrer leurs besoins divers et spécifiques. Assurer la qualité et
                  la
                  pertinence des outils et technologies utilisés est crucial avant même d'initier le développement.</p>

              <p>De plus, nous souhaitons rendre nos sites plus respectueux de l'environnement et plus accessibles, des
                 paramètres tout aussi importants.</p>

              <ul><p>En termes de développement, j’ai identifié trois grandes phases :</p></ul>
              <li><p>1. Le développement du squelette back-end (en cours)</p></li>
              <li><p>2. Le développement des fonctionnalités avancées (éditeur WYSIWYG, constructeur de pages similaire
                     à
                     Elementor…)</p></li>
              <li><p> 3. Le développement des outils de gestion propres aux besoins de nos spécialistes</p></li>

              <p>Une fois ces trois phases achevées, nous pourrons entamer la refonte d’un de nos sites.
              </p>
            </div>
            <ArticleDivider />

            <h4>Développer des dispositifs interactif sophistiqué</h4>
            <div class="techno">
              <img src="@/assets/images/flutter.svg" alt="Flutter">
            </div>
            <p>J'ai eu l'occasion de developper plusieurs applications avec des dispositifs interactif sophistiqué,
               comme
               "Acab Locator" en Flutter.
               Cette application permet de prendre en photos des grafiti ACAB et de les géolocaliser.
               Afin de garantir la sécurité et fiabilité des données une authentification gérer par Firebase (un
               service
               Google).</p>
            <ArticleDivider />

            <h4>JSP</h4>
            <p>Les mois derniers j’ai eu l’occasion de travailler sur la refonte back-end de
               Domaliance et la création d’un CMS sous Laravel avec en technologie Front-End VueJS.

               Refonte Back-end de Domaliance :
               Cette refonte à 3 objectifs : sécuriser, optimiser et fiabiliser le site.

               La sécurisation du site à été faite par la mise en place de variables d'environnements. Ces variables,
               non suivies sur le git, permettent par exemple de stocker des mots de passe, des token, ou plus
               simplement la marque du site.

               L’optimisation quant à elle à été plus profonde et plus longue à mettre en place. En effet sur les
               sites
               nous avions, et avons encore, des fichiers de fonctions PHP de plusieurs millier de lignes. Ces
               fichiers
               se répètent de plugins en plugins. J’ai donc entrepris de mettre toutes ces fonctions dans des classes
               spécifiques hors des fichiers de thèmes et des fichiers de plugin. Ainsi si un plugin à besoin de
               récupérer la note d’un service, il nous suffit d’appeler une fonction de la classe
               “ReviewsDataFetcher”.
               J’ai profité de cette mutualisation du code pour mettre en place des procédures stockées, qui sont plus
               sûres, rapides et efficientes que les requêtes SQL directement dans le code.
               Finalement j’ai aussi réduit la taille des fichiers JavaScripts pour qu’ils ne fassent plus que le
               minimum. Lorsqu’une requête AJAX est faite, c’est la classe PHP qui est recalculée par le serveur
               Apache.
               Ainsi le tableau des données récupéré par notre API (OZONE) n’est jamais accessible depuis la console.
            </p>
          </div>
          <div class="article-picture">
            <img src="@/assets/images/profil.jpeg">
            <img src="@/assets/images/profil.jpeg">
            <img src="@/assets/images/profil.jpeg">
            <img src="@/assets/images/profil.jpeg">

          </div>
        </article>
        <SectionDivider />
        <h3>Compétences Entreprendre</h3>
        <article>
          <div class="article-inner">
            <p>Les compétences Entreprendre ici</p>
          </div>
          <img src="@/assets/images/profil.jpeg">
        </article>
      </div>
    </section>
    <img class="decor-mid" src="@/assets/images/plant2.svg" aria-hidden="true">
    <img class="decor-bottom" src="@/assets/images/plant.png" aria-hidden="true">
  </wrapper>
</template>

<style scoped>
.techno {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;

  & img {
    width: 100%;
    filter: drop-shadow(5px 5px 10px #838383);
  }
}

.text {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  & p{
  }
}
</style>
