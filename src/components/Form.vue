<script setup lang="ts">
const countries = [
    { code: 'US', name: 'Estados Unidos' },
    { code: 'MX', name: 'México' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CO', name: 'Colombia' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'ES', name: 'España' },
    { code: 'PE', name: 'Perú' }
]
</script>
<template>
    <div>
        <form class="form">
            <div class="field">
                <label for="city">City</label>
                <input type="text" name="city" id="city" placeholder="city">
            </div>
            <div class="field">
                <label for="country">City</label>
                <select>
                    <option>-- Choose a country --</option>
                    <option v-for="country in countries" :key="country.code"> {{ country.name }}</option>
                </select>
            </div>
        </form>
    </div>
</template>