<template>
  <div id="Home">
    <Header v-bind:page="page" v-bind:map="map" v-on:map-status="changeMapStatus()"/>
    <div class="choose-station">
      <h1><span>📻</span> Choose a radio station.</h1>
    </div>
    <Map v-if="map" />
    <List v-bind:data="data" v-on:change-radio="changeRadio" v-if="!map"/>
    <Radio v-bind:href="href" />
  </div>
</template>

<script>
import axios from 'axios';

import Header from '../components/Header';
import Map from '../components/Map';
import List from '../components/List';
import Radio from '../components/Radio';

export default {
  name: 'Home',
  data() {
    return {
      map: false,
      data: null,
      href: null,
      page: 'Home'
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
    },

    changeRadio(href) {
      this.href = href;
    }
  },
  components: {
    Header,
    Map,
    List,
    Radio
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: left;
}

.choose-station {
  margin-top: 5%;
  margin-left: 5%;
}

.choose-station span {
  margin-right: 10px;
}

@media only screen and (min-width: 1100px) {
  .choose-station {
    font-size: 22px;
    margin-top: 8%;
    margin-left: 10%;
  }
}

@media only screen and (max-width: 1100px) {
  .choose-station {
    font-size: 20px;
    margin-top: 8%;
    margin-left: 10%;
  }
}

@media only screen and (max-width: 750px) {
  .choose-station {
    font-size: 16px;
    margin-top: 6%;
    margin-left: 10%;
  }
}

@media only screen and (max-width: 500px) {
  .choose-station {
    margin-top: 10%;
    font-size: 12px;
    margin-left: 10%;
    margin-bottom: 5%;
  }
}
</style>