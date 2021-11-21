// Se exporta al modulo al index (no hace falta require de utils)

// Se hace una funcion que pinte el home.pug para obtener los datos (renderizar la vista)
const showHome = (req, res) =>{
    res.render("home")
}


// obtengo los datos del formulario para guardar y "crear" peli fake (los mostrará en un json)
const createFilm = (req, res) => {
    const filmData = {
    "Title": req.body.title,
    "Year": req.body.year,
    "Director": req.body.director,
    "Mensaje": `Se ha guardado ${req.body.title} correctamente`
    }
    return res.status(200).json(filmData) //devuelvo un 200 y muestra el dato del objeto (json)
}


const peliculaApiController = {
    showHome, 
    createFilm
}

module.exports = peliculaApiController
