<template>
    <div class="player">
        <div class="playing">
            <div class="title">
                <h2></h2>
            </div>
        </div>
        <audio autoplay controls :src="href"></audio>
    </div>
</template>

<script>
export default {
    name: "Radio",
    props: ["href"],
}
</script>

<style scoped>
    .player {
        position: fixed;
        bottom: 0;
        width: 100vw;
    }

    audio {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>