<template>
  <div>
    <h1>Map</h1>
    <div class="map">
      <div class="map-controls">
        <h2>Controls</h2>
        <div class="btn-holder">
          <button @click="buttonClicked('Paris')">Paris</button>
          <button @click="buttonClicked('Plaisir')">Plaisir</button>
          <button @click="buttonClicked('Strasbourg')">Strasbourg</button>
          <button @click="buttonClicked('Haguenau')">Haguenau</button>
          <button @click="buttonClicked('Douai')">Douai</button>
        </div>
        <div>
          <p class="presentation">
            {{ text }}
          </p>
        </div>
      </div>
      <div class="map-container">
        <l-map :zoom="mapData.zoom" :center= "center" id="map">
          <l-tile-layer :key="mapData.name"
                        :name="mapData.name"
                        :url="mapData.url"
                        :attribution="mapData.attribution"></l-tile-layer>
          <l-marker :lat-lng="mapData.center"></l-marker>
          <l-marker :lat-lng="[48.8534, 2.3488]"></l-marker>
          <l-marker :lat-lng="[48.8167, 1.95]"></l-marker>
          <l-marker :lat-lng="[48.573406, 7.752111]"></l-marker>
          <l-marker :lat-lng="[48.820419, 7.791370]"></l-marker>
          <l-marker :lat-lng="[50.3685, 3.0809]"></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {latLng} from 'leaflet';
import {LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import {ref} from "vue";

//letiables globales
let lat: number = 47.3686498;
let long: number = 8.5391825;
let mapData: any = {};

//déclaration des refs
let center:any = ref(latLng(lat, long));
let text:any = ref();

function init() {
  let lat:number = 47.3686498;
  let long: number = 8.5391825;
  //let text: string = 'Zurich is a city'
  let mapData: any = {};
  text.value = 'Zurich is a city'
  center.value = latLng(lat, long);

}
init();

mapData = {
  zoom: 13,
  center: latLng(lat, long),
  name: 'OpenStreetMap',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};
// Fonction fléchée pour gérer le clic sur le bouton
const buttonClicked = (id: string) => {
  let txt: string = '';
  console.log(id);
  switch (id) {
    case 'Paris':
      lat = 48.8534;
      long = 2.3488;
      txt = 'Paris is the city in which I have passed my University entrance diploma in literary studies.' +
          'It had a focus on Biology and Psychology. I did receive the diploma with honors.';
      break;
    case 'Plaisir':
      lat = 48.8167;
      long = 1.95;
      txt = 'I spent my teenage years in this city, I also worked at Castorama and for its municipal services.';
      break;
    case 'Strasbourg':
      lat = 48.573406;
      long = 7.752111;
      txt = 'This is where I currently live. I am studying at the University of Strasbourg in the Computer Science department. And I have an Internship at A2micile.';
      break;
    case 'Haguenau':
      lat = 48.820419;
      long = 7.791370;
      txt = 'This where the IUT ( = IT department) is located. I have spent two years there.';
      break;
    case 'Douai':
      lat = 50.3685;
      long = 3.0809;
      txt = 'This is where I was born. I have a lot of memories in this city.';
      break;
  }
  center.value = latLng(lat, long);
  text.value = txt;
}

</script>

<style scoped>
.map-container {
  height: 70vh;
  width: 70vw;
  background-color: aquamarine;
  border-radius: 10px;
  margin: auto;
}

#map {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: #444440 0 0 10px 0;
}
</style>