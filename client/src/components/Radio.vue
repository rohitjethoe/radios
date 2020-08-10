<template>
    <div>
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
    audio {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>