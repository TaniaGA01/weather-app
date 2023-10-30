<script setup lang="ts">
import useWeather from './composables/useWeather'
import { WeatherI } from './services/interfaces/form.interfaces';
import useCountriesCities from './composables/useCountriesCities.ts'
import Form from './components/Form.vue';
import Weather from './components/Weather.vue'
import Spinner from './components/Spinner.vue'
import Alert from './components/Alert.vue';

const { getWeather, weather, displayWeather, load, error } = useWeather()

const { countries, cities, getCountry } = useCountriesCities()

</script>

<template>
  <h1 class="title">Check Weather</h1>
  <div class="container search-weather">
  <!-- {{ countries }} -->
    <Form 
      @get-codeCountry="getCountry"
      @get-weather="getWeather" 
      :countries="countries"
      :cities="cities"
    />
    <Spinner v-if="load"/>
    <Alert v-if="error && cities.length > 0">{{ error }}</Alert>
    <Weather 
      v-if="displayWeather"
      :weather="(weather as WeatherI)"
    />
  </div>
</template>

<style scoped>
</style>
