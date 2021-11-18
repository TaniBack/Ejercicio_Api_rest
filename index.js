const express = require('express')
const peliculaRouter = require('./routes/pelicula')
const peliculaApiRouter = require('./routes/peliculaApi')
const errors = require('./middlewares/errores')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

app.set('view engine', 'pug');
app.set('views','./views');

// Llamada a la ruta de peliculas 
app.use("/api/film/:title",peliculaRouter)// rutas Web
app.use("/api/film",peliculaApiRouter) //rutas API

//Capture All 404 errors
app.use(errors.error404);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })