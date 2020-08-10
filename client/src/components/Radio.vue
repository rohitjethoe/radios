<template>
    <div>
        <audio autoplay controls :src="href">
            
        </audio>
    </div>
</template>

<script>
export default {
    name: "Radio",
    props: ["href"]
}
</script>

<style scoped>

</style>