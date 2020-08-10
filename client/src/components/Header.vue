<template>
    <div class="header">
        <div class="logo">
            Radio World
        </div>
        <div class="nav">
            <a v-bind:class="{ active: map }" @click="$emit('map-status', true)">Map</a>
            <div class="line"></div>
            <a v-bind:class="{ active: !map }" @click="$emit('map-status', true)">List</a>
            <a class="burger-menu" @click="openNav()"><i class="fa fa-bars"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: ['map'],
    methods: {
        openNav() {
            console.log("Open nav.")
        }
    }
}
</script>

<style scoped>
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
</style>