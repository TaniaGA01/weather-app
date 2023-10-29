<script setup lang="ts">
import { reactive, ref } from 'vue';
import { SearchI, ErrorI, CountriesI } from '../services/interfaces/form.interfaces'
import Alert from '../components/Alert.vue'

const search = reactive<SearchI>({
    city:'',
    country:''
})

const error = ref<ErrorI>({
    message:''
})

const emit = defineEmits(['get-weather'])

const countries = ref<CountriesI[]>([
    { code: 'US', name: 'Estados Unidos' },
    { code: 'MX', name: 'México' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'ES', name: 'España' },
    { code: 'PE', name: 'Perú' }
])

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
                <label for="city">City</label>
                <input v-model="search.city" type="text" name="city" id="city" placeholder="Add city">
            </div>
            <div class="field">
                <label for="country">Country</label>
                <select 
                    id="country"
                    v-model="search.country"
                >
                    <option value="">-- Choose a country --</option>
                    <option v-for="country in countries" :key="country.code"> 
                        {{ country.name }}
                    </option>
                </select>
            </div>
            <input type="submit" value="Check weather">
        </form>
    </div>
</template>