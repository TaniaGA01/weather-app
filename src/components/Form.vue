<script setup lang="ts">
import { reactive, ref } from 'vue';
import { SearchI, ErrorI } from '../services/interfaces/form.interfaces'
import Alert from '../components/Alert.vue'

const search = reactive<SearchI>({
    city:'',
    country:'',
    countryCode:''
})

const error = ref<ErrorI>({
    message:''
})

const props = defineProps<{
    countries: any,
    cities:any
}>()

const emit = defineEmits(['get-weather', 'get-codeCountry'])

const emitCodeCountry = (iso2: string) => {
    search.countryCode = iso2
    emit('get-codeCountry', iso2)
}

const checkWeather = () => {

    if (Object.values(search).includes('')) {
        error.value.message = 'All fields are required'
        return
    }
    error.value.message = ''
    emit('get-weather', search)
}
</script>
<template>
    <div>
        <form class="form" @submit.prevent="checkWeather">
            <Alert v-if="error">{{ error.message }}</Alert>
            <div class="field">
                <label for="country">Country</label>
                <select 
                    id="country"
                    v-model="search.country"
                    @input="emitCodeCountry(($event.target as HTMLInputElement).value)"
                >
                    <option value="">-- Choose a country --</option>
                    <option v-for="country in props.countries" :key="country.iso2" :value="country.iso2" > 
                        {{ country.name }}
                    </option>
                </select>
            </div>
            <div class="field" v-show="search.countryCode !== '' ">
                <label for="city">City</label>
                <select 
                    id="city"
                    v-model="search.city"
                >
                    <option value="">-- Choose a city --</option>
                    <option v-for="city in props.cities" :key="city.id"> 
                        {{ city.name }}
                    </option>
                </select>
            </div>
            <input type="submit" value="Check weather">
        </form>
    </div>
</template>