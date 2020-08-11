<template>
    <div class="Contact">
        <Header v-bind:page="page"/>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: "Contact",
    data() {
        return {
            page: "Contact"
        }
    },
    components: {
        Header
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
  text-align: left;
}

</style>