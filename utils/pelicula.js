// Toda la utilidad de traer datos para usar en Controllers 

// Codigo para hacer fetch de la peli
const fetch = require('node-fetch')

const getFilmByUrl = async (movie) => {
    const API_KEY = '85e1c0eb';
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`)
    const films = await data.json()
    return films
}

const utilsFilms = {
    getFilmByUrl  
}

module.exports = utilsFilms;