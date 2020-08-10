<template>
    <div class="list">
        <div class="item" v-bind:key="item" v-for="item in data.radios">
            <div class="title">
                <span class="continent">🌍 {{ item.continent_name }}</span>
                <span class="arrow"><i class="fa fa-chevron-down"></i></span>
            </div>
            <div class="countries">
                <div v-bind:key="country" v-for="country in item">
                    <div>
                        <div class="name" v-if="country.country_name">
                            <span class="country">
                                {{ country.country_name }} 
                            </span>
                            <span class="arrow">    
                                <i class="fa fa-chevron-down"></i>
                            </span>
                        </div>
                    </div>
                    <div v-bind:key="radio" v-for="radio in country">
                        <a class="radio-btn" @click="$emit('change-radio', radio.url)" target="_blank">{{ radio.name }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    props: ['data', 'href']
}
</script>

<style scoped>
    .radio-btn:hover {
        cursor: pointer;
    }

    .item {
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .title .continent {
        float: left;
        font-weight: 600;
    }

    .title .arrow {
        float: right;
    }

    .name {
        font-weight: 600;
    }

    .name .arrow {
        margin-left: 5px;
    }

    .title {
        width: 200px;
        font-size: 20px;
        margin-bottom: 5px;
    }

    .title::after {
        clear: both;
        display: table;
        content: "";
    }



    .countries {
        margin-left: 20px;
    }
</style>