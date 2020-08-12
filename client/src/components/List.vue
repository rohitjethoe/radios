<template>
    <div class="list">
        <div class="item" v-bind:key="item" v-for="item in data.radios">
            <div class="title" @click="openCountries(item.continent_id)">
                <span class="continent">{{ item.continent_name }}</span>
                <span class="arrow"><i class="fa fa-chevron-down"></i></span>
            </div>
            <div class="countries" :id="'countries-' + item.continent_id">
                <div v-bind:key="country" v-for="country in item">
                    <div>
                        <div @click="openRadios(country.country_id)" class="name" v-if="country.country_name">
                            <span class="country">
                                {{ country.country_name }} 
                            </span>
                            <span class="arrow">    
                                <i class="fa fa-chevron-down"></i>
                            </span>
                        </div>
                    </div>
                    <div :id="`radios-${country.country_id}`" class="radios">
                        <div v-bind:key="radio" v-for="radio in country">
                            <a v-if="radio.url" class="radio-btn" @click="$emit('change-radio', radio.url)" target="_blank">- <span class="radio-name">{{ radio.name }}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    methods: {
        openCountries(id) {
            let countries = document.getElementById(`countries-${id}`);

            if (!countries.classList.contains('countries-open')) {
                countries.classList.add('countries-open');                
            } else {
                countries.classList.remove('countries-open');
            }
        },
        openRadios(id) {
            let radios = document.getElementById(`radios-${id}`);

            if (!radios.classList.contains('radios-open')) {
                radios.classList.add('radios-open');                
            } else {
                radios.classList.remove('radios-open');
            }            
        }
    },
    props: ['data']
}
</script>

<style scoped>
    .list {
        margin-left: 10%;
        margin-top: 5%;
    }

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

    .name .country {
        float: left;
    }

    .name .arrow {
        width: 185px;
        margin-left: 5px;
        float: right;
    }

    .name::after {
        clear: both;
        content: "";
        display: table;
    }

    .title {
        width: 200px;
        font-size: 20px;
        margin-bottom: 5px;
    }

    .title:hover {
        cursor: pointer;
    }

    .title::after {
        clear: both;
        display: table;
        content: "";
    }

    .countries {
        margin-left: 20px;
        display: none;
    }

    .countries-open {
        display: block;
    }

    .countries .name:hover {
        cursor: pointer;
    }

    .radios {
        display: none;
    }

    .radios-open {
        display: block;
    }

    .radio-name:hover {
        text-decoration: underline;
    }

    @media only screen and (min-width: 1100px) {
        .title {
            font-size: 24px;
            width: 320px;
        }
        .name {
            width: 420px;
            font-size: 20px;
        }
        .list {
            margin-left: 12%;
        }
    }

    @media only screen and (max-width: 1100px) {
        .title {
            font-size: 24px;
            width: 320px;
        }
        .name {
            width: 420px;
        }
        .list {
            margin-left: 12%;
        }
    }

    @media only screen and (max-width: 750px) {
        .title {
            font-size: 20px;
            width: 240px;
        }

        .name {
            width: 350px;
        }

        .list {
            margin-left: 14%;
        }
    }

    @media only screen and (max-width: 500px) {
        .title {
            font-size: 17px;
        }
        .list {
            margin-top: 8%;
            margin-left: 12%;
        }
    }
</style>