<template>
  <div id="app">
    <Header v-bind:map="map" v-on:map-status="changeMapStatus()"/>
    <Map v-if="map" />
    <List v-bind:data="data" v-if="!map"/>
  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header';
import Map from './components/Map';
import List from './components/List';

export default {
  name: 'App',
  data() {
    return {
      map: false,
      data: null
    }
  },
  mounted() {
    axios.get('http://localhost:5000/api/radios')
    .then((res) => {
      this.data = res.data;
    })
  },
  methods: {
    changeMapStatus() {
      this.map = !this.map;
    }
  },
  components: {
    Header,
    Map,
    List
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
