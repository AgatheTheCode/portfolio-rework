<script setup lang="ts">
import SectionDivider from '@/components/SectionDivider.vue'
import ScrollerComponent from '@/components/ScrollerComponent.vue'
import BackgroundTopFlowers from '@/components/backgroundTopFlowers.vue'
import BackgroundBottomFlowers from '@/components/backgroundBottomFlowers.vue'
import profilePic from '@/assets/images/profil.jpeg'
</script>

<template>
  <main role="main">
    <background-top-flowers />
    <div class="skills">
      <ScrollerComponent />
    </div>
    <wrapper class="wrap">
      <section role="region" class="title">
        <h1>Agathe Dufour</h1>
        <h2>{{ $t('subtitle.home') }}</h2>
        <SectionDivider />

        <div class="corps-titre">
          <p class="sous-titre">
            {{ $t('description.home') }}
          </p>
          <div class="profile">
            <img :src="profilePic" aria-hidden="true" alt="" />
          </div>
        </div>
      </section>
      <SectionDivider />
      <section role="region">
        <h2>Écologie et Dévelopement Web</h2>
        <div class="ecologie">
          <p>
            L'écologie est un facteur crucial dans le développement web pour plusieurs raisons. En
            tant que développeuse web, je crois fermement que l'intégration des pratiques
            écologiques dans notre travail peut avoir un impact significatif sur l'environnement et
            la société.
          </p>
          <h3>Réduction de l'Empreinte Carbone</h3>

          <p>
            Le développement web consomme des ressources, notamment à travers l'hébergement de sites
            web et l'utilisation de centres de données. Ces infrastructures nécessitent de
            l'énergie, souvent provenant de sources non renouvelables. En optimisant les
            performances des sites web, en réduisant la taille des fichiers et en minimisant les
            requêtes serveurs, nous pouvons diminuer la consommation d'énergie et, par conséquent,
            l'empreinte carbone des sites web. L'utilisation de serveurs alimentés par des énergies
            renouvelables est également une pratique que nous devrions encourager.
          </p>
          <h3>Développement Durable</h3>

          <p>
            Le développement web durable consiste à créer des sites web et des applications qui non
            seulement répondent aux besoins actuels, mais qui sont aussi évolutifs et faciles à
            maintenir. Cela réduit la nécessité de reconstructions fréquentes et les déchets
            numériques associés. En adoptant des pratiques de codage propres et en utilisant des
            technologies qui favorisent la longévité des produits numériques, nous contribuons à un
            avenir plus durable.
          </p>
          <h3>Conception Responsable</h3>

          <p>
            Une conception web écologique prend en compte l'impact environnemental dès les premières
            étapes du développement. Cela inclut l'optimisation des ressources, la réduction de la
            consommation de bande passante et l'amélioration de l'accessibilité. Un site web bien
            conçu ne se contente pas d'être esthétique et fonctionnel, il est aussi respectueux de
            l'environnement. En priorisant la simplicité et l'efficacité, nous pouvons réduire
            l'empreinte écologique des sites web que nous créons.
          </p>
          <h3>Sensibilisation et Responsabilité Sociale</h3>

          <p>
            En tant que développeurs web, nous avons une responsabilité sociale de sensibiliser nos
            clients et utilisateurs à l'importance de l'écologie dans le numérique. En intégrant des
            pratiques écologiques dans nos projets, nous pouvons influencer positivement nos clients
            et les encourager à adopter des approches similaires. Cela crée un effet de domino, où
            l'impact de nos actions peut se propager à travers différentes industries et secteurs.
          </p>
          <h3>Innovation et Compétitivité</h3>
          <p>
            L'intégration de l'écologie dans le développement web stimule l'innovation. En cherchant
            constamment à améliorer l'efficacité et la durabilité de nos projets, nous découvrons de
            nouvelles technologies et méthodes qui peuvent nous démarquer dans un marché compétitif.
            Les entreprises qui adoptent des pratiques écologiques sont souvent perçues comme
            avant-gardistes et responsables, ce qui peut attirer une clientèle soucieuse de
            l'environnement.
          </p>
        </div>
        <SectionDivider />
      </section>
      <background-bottom-flowers />
    </wrapper>
  </main>
</template>
<style scoped>
.skills {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  height: 4rem;
}
</style>
