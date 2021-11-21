// const { Router } = require('express');
const pelicula = require('../controllers/pelicula')
const routes = require('express').Router(); //Crea un direccionador para exportar las rutas 

routes.get('/api/film/:title?', pelicula.peliculaData);

module.exports = routes;

// Crea rutas montables y modulares 