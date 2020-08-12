<template>
  <div class="about">
    <Header />
    <div class="container">
      <div class="title">
        About 
        <div class="rect"></div>
      </div>
      <div class="content">
        📻 Radio World lets you tune into live radio stations all over the world in countries like India, France, Japan and much more. <br> <br>
        🔗 Radio API. We created an API for you to use the live radio stations in your own project. It's free and open source and you can find it at <a target="_blank" href="https://github.com/rohitjethoe/radios" rel="noopener" noreferrer>https://github.com/rohitjethoe/radios</a> <br><br>
        📍 This project is based in Amsterdam, the Netherlands and is maintained by Rohit Jethoe. Find my personal portfolio at <a href="https://rohit.nl" target="_blank" rel="noopener" norefferer>https://rohit.nl</a> or my <a href="https://github.com/rohitjethoe" target="_blank" rel="noopener" noreferrer>Github</a>. <br><br>
        💻 For this project the technologies Vue.js, Node.js and Express.js are used. It is hosted on Heroku and Netlify.
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: "About",
  components: {
    Header,
    Footer
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

.container .title {
  margin-top: 10%;
  margin-left: 10%;
  font-size: 42px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.container .title .rect {
  width: 60px;
  height: 2.4px;
  margin: 0px 16px;
  background-color: #2c3e50;
}

.content {
  width: 65%;
  margin-left: 10%;
}

@media only screen and (max-width: 450px) {
  .container .title {
    margin-top: 10%;
  }
}

.container {
  min-height: calc(100vh - 43px - 28px);
}

a:link, a:visited {
  color: #7198c5;
}

@media only screen and (min-width: 650px) {
  .container .title {
    font-size: 48px;
  }

  .container .title .rect {
    width: 100px;
    margin: 0px 24px;
  }

  .content {
    font-size: 20px;
  }
}

@media only screen and (min-width: 850px) {
    .container .title {
    font-size: 50px;
  }

  .container .title .rect {
    width: 100px;
    margin: 0px 24px;
  }

  .content {
    font-size: 22px;
  }
}

@media only screen and (min-width: 990px) {
  .content {
    width: 600px;
  }

  .container {
    margin-left: 5%;
  }

  .container .title {
    font-size: 54px;
    margin-bottom: 20px;
  }

  .container .title .rect {
    width: 100px;
    margin: 0px 24px;
  }
}
</style>