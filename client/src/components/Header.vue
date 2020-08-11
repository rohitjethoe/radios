<template>
    <div class="header">
        <div class="logo">
            Radio World
        </div>
        <div class="nav">
            <div class="list-type" v-if="this.page === 'Home'">    
                <a v-bind:class="{ active: map }" @click="$emit('map-status', true)">Map</a>
                <div class="line"></div>
                <a v-bind:class="{ active: !map }" @click="$emit('map-status', true)">List</a>
            </div> 
            <a class="burger-menu" @click="openNav()"><i class="fa fa-bars"></i></a>
        </div>
        <div v-if="navOpened" class="menu">
            <div @click="openNav()" class="close">
                <i class="fa fa-times"></i>
            </div>
            <ul class="router">
                <li>
                    <router-link class="link" to="/">Home</router-link> 
                </li>
                <li>
                    <router-link class="link" to="/about">About</router-link>
                </li>
                <li>
                    <router-link class="link" to="/contact">Contact</router-link>
                </li>
                <li>
                    <router-link class="link" to="/policy">Privacy Policy</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            navOpened: false
        }
    },
    props: ['map', 'page'],
    methods: {
        openNav() {
            this.navOpened = !this.navOpened;
        }
    }
}
</script>

<style scoped>
    .list-type {
        display: flex;
    }

    .burger-menu {
        margin-left: 15px;
        transform: translateY(2px);
    }

    .burger-menu i {
        font-size: 24px;
    }

    .logo {
        font-size: 24px;
        padding: 5px;
        padding-left: 10px;
        float: left;
    }

    .line {
        height: 30px;
        margin: 0 10px;
        width: 1px;
        background-color: #2c3e50;
    }

    .active {
        color:#a3e4d7 ;
        border-bottom: 1.5px solid;
    }

    .nav {
        display: flex;
        align-items: center;
        float: right;
        padding-top: 10px;
        padding-right: 6px;
    }

    .nav a {
        padding: 0px 6px;
        padding-bottom: 5px;
    }

    .nav a:hover {
        cursor: pointer;
    }

    .header::after {
        clear: both;
        content: "";
        display: table;
    }

    .menu {
        width: 100vw;
        height: 100vh;
        background-color: rgba(255,255,255, 0.7);
        position: fixed;
    }

    .close {
        float: right;
        font-size: 32px;
        padding: 5px;
        padding-right: 10px;
    }

    .close:hover {
        cursor: pointer;
    }

    .router a:link, .router a:visited {
        font-weight: 600;
        text-decoration: none;
        font-size: 36px;
    }

    .router li {
        list-style-type: none;
    }

    .router {
        display: block;
        margin-left: 12%;
        margin-top: 15%;
    }

    .link:link, .link:visited {
        color: #2c3e50;
    }

    ul li {
        padding-top: 6px;
        padding-bottom: 6px;
    }

    .router-link-exact-active:link, .router-link-exact-active:visited {
        border-bottom: 4px solid;
    }
</style>