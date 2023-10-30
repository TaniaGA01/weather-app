<script setup lang="ts">
import useWeather from '../composables/useWeather'
import { WeatherI } from '../services/interfaces/form.interfaces'
const { temperatureFormat } = useWeather()
defineProps<{
    weather: WeatherI
}>()

</script>
<template>
    <div class="result">
        <h2>Weather of: {{ weather.name }}</h2>
        <p class="current">{{ temperatureFormat(weather.main.temp)}}&deg;C</p>
        <div class="temperature">
            <p>Min: <span>{{ temperatureFormat(weather.main.temp_min)}}&deg;C</span></p>
            <p>Max: <span>{{ temperatureFormat(weather.main.temp_max)}}&deg;C</span></p>
        </div>
    </div>
</template>