// PARA POST PUT & DELETE 

const { application } = require('express');
const peliculaApi = require('../controllers/peliculaApi') //importo el controller 
const routes = require('express').Router(); //Crea un direccionador para exportar todas las rutas 

// se generan varias rutas (se usa rutes.get / routes.post) para luego llamarlas desde el index

// Hacemos un get la funcion que me renderiza el formulario (y usamos el nombre de la constante creada en este doc -la cual importa todo el objeto)
routes.get("/api", peliculaApi.showHome)

// Hacemos un post del form 
routes.post("/api/film", peliculaApi.createFilm)


// Exportamos todas las rutas 
module.exports = routes