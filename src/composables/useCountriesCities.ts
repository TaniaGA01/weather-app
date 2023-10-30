import axios from "axios"
import { ref } from "vue";

export default function useCountriesCities(){
    
        const geoKey = import.meta.env.VITE_API_KEY_COUNTRIES

        const getCountries = {
            method: 'get',
            url: 'https://api.countrystatecity.in/v1/countries',
            headers: {
                'X-CSCAPI-KEY': geoKey
            }
        };

        let countries = ref([])
        

        const getGeoData = () => {
            axios(getCountries)
            .then(async function (response) {
                countries.value= await(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        getGeoData()


        let cities = ref([])
        // const countryCode = ref('')

        const getCountry = (countryCode: { value: any; }) => {
            const getCities = {
                method: 'get',
                url: `https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
                headers: {
                    'X-CSCAPI-KEY': geoKey
                }
            };
            const getGeoData = () => {
                axios(getCities)
                .then(async function (response) {
                    cities.value= await(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            getGeoData()
        }
        getCountry

        return{
            countries,
            cities,
            getCountry
        }
}