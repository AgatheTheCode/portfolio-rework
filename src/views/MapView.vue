<template>
  <div>
    <h1>Map</h1>
    <div class="map">
      <div class="map-controls">
        <h2>Controls</h2>
        <div class="btn-holder">
          <button id="Paris" @click="buttonClicked('Paris')">Paris</button>
          <button id="Nantes" @click="buttonClicked('Plaisir')">Plaisir</button>
          <button id="Bordeaux" @click="buttonClicked('Strasbourg')">Strasbourg</button>
          <button id="Toulouse" @click="buttonClicked('Haguenau')">Haguenau</button>
          <button id="Doaui" @click="buttonClicked('Douai')">Douai</button>
        </div>
        <div>
          <p class="presentation">
            {{ this.text }}
          </p>
        </div>
      </div>
      <div class="map-container">
        <l-map ref="MapControl" :zoom="zoom" :center="center" id="map">
          <l-tile-layer :key="name"
                        :name="name"
                        :url="url"
                        :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="center"></l-marker>
          <l-marker :lat-lng="[48.8167, 1.95]"></l-marker>
          <l-marker :lat-lng="[48.573406, 7.752111]"></l-marker>
          <l-marker :lat-lng="[48.820419, 7.791370]"></l-marker>
          <l-marker :lat-lng="[50.3685, 3.0809]"></l-marker>

        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import {latLng} from 'leaflet';
import {LCircleMarker, LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  components: {LMarker, LCircleMarker, LTileLayer, LMap},
  data() {
    return {
      zoom: 13,
      center: latLng(47.3686498, 8.5391825),
      name: 'OpenStreetMap',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  methods: {
    buttonClicked(city) {
      let lat, long, text;
      switch (city) {
        case 'Paris':
          lat = 48.8534;
          long = 2.3488;
          text = 'Paris is the city in which I have passed my University entrance diploma in literary studies.' +
            'It had a focus on Biology and Psychology. I did receive the diploma with honors.';
          break;
        case 'Plaisir':
          lat = 48.8167;
          long = 1.95;
          text = 'I spent my teenage years in this city, I also worked at Castorama and for its municipal services.'
          break;
        case 'Strasbourg':
          lat = 48.573406;
          long = 7.752111;
          text='This is where I currently live. I am studying at the University of Strasbourg in the Computer Science department. And I have an Internship at A2micile.';
          break;
        case 'Haguenau':
          lat = 48.820419;
          long = 7.791370;
          text = 'This where the IUT ( = IT department) is located. I have spent two years there.';
          break;
        case 'Douai':
          lat = 50.3685;
          long = 3.0809;
          text = 'This is where I was born. I have a lot of memories in this city.';
          break;
      }
      this.center = latLng(lat, long);
      this.zoom = 13;
      this.text = text;
    },
  },
};
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