import { computed, ref } from "vue"
import axios from "axios"

export default function useWeather(){

    const weather = ref({})

    const load = ref(false)

    const error = ref('')

    const getWeather = async ({ city, country, countryCode } ) => {

        // Import Api Key
        const key = import.meta.env.VITE_API_KEY

        load.value = true

        weather.value = {}

        error.value = ''

        console.log(countryCode)
        
        try {

            // This Api needs latitude and longitude so for get both :
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=1&appid=${key}`
            const { data } = await axios(url)
            
            // if(data.sys.country === countryCode){
                const { lat, lon } = data[0]

                // Get weather ... documentation: https://openweathermap.org/current
                const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
                const {data:result} = await axios(urlWeather)
                weather.value = result

                console.log('clima', weather.value)

            // }

            
        } catch {
            error.value = "City doesn't exist"
        }finally{
            load.value = false
        }

    }

    const displayWeather = computed(() => {
        return Object.values(weather.value).length > 0
    });

    const temperatureFormat = (temperature: number) => Math.ceil(temperature - 273.15) // From Fahrenheit to Celsius

    return{
        getWeather,
        weather,
        displayWeather,
        temperatureFormat,
        load,
        error
    }
}