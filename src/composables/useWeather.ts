export default function useWather(){

    const getWeather = ({ city, country } ) => {
        console.log('consultando', city)
        console.log('consultando', country)
    }
    return{
        getWeather
    }
}