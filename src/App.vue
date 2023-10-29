<script setup lang="ts">
import Form from './components/Form.vue';
import useWeather from './composables/useWeather'

const { getWeather } = useWeather()
</script>

<template>
  <h1 class="title">Weather search</h1>
  <div class="container search-weather">
    <Form @get-weather="getWeather" />
  </div>
</template>

<style scoped>
</style>
