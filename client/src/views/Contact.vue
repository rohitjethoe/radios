<template>
    <div class="Contact">
        <Header v-bind:page="page"/>
        <div class="container">
            <div class="title">
                Contact
                <div class="rect"></div>
            </div>
            <div class="social">
                <a href="">
                    <i class="social-icon fab fa-facebook"></i>
                </a>
                <a href="">
                    <i class="social-icon fa fa-envelope"></i>
                </a>
                <a href="">
                    <i class="social-icon fab fa-instagram"></i>
                </a>
                <a href="">
                    <i class="social-icon fab fa-twitter"></i>
                </a>
            </div>
        </div>
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

.social-icon {
    font-size: 48px;
    margin: 0px 10px;
}

.social {
    text-align: center;
}
</style>