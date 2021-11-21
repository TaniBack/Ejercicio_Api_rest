// Todo los GET de las llamadas para usar los utils 
const dataFilms = require('../utils/pelicula')

//funcion para encontrar peli y sacar datos
const peliculaData = async (req, res) => {
    const data = await dataFilms.getFilmByUrl(req.params.title) //parametro recogido desde la URL api/film/:title - Busca paremtros por elementos dentro de Json (en este caso title)
    if (req.params.title){
        res.status(200).json(data) //Json (objeto) del titulo pasado por params (ruta url)
}
else {
    console.log("Hemos tenido un error")
}
}

const sacarPelicula = {
    peliculaData
}

module.exports = sacarPelicula;