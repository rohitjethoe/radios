<template>
  <div id="app">
    <Header />
    <Map />
  </div>
</template>

<script>
import Header from './components/Header';
import Map from './components/Map';

export default {
  name: 'App',
  components: {
    Header,
    Map
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
