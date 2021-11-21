const express = require('express')
const peliculaRouter = require('./routes/pelicula') // Te traes la ruta (archivo) de la peli donde obtenemos /api/film/:title?' 
const peliculaApiRouter = require('./routes/peliculaApi') //Trae la ruta del fichero PeliculaAPi 
const errors = require('./middlewares/errores')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Llamada a la ruta de peliculas 
app.use("/", peliculaRouter)// rutas Web
app.use("/",peliculaApiRouter) //rutas API

//Capture All 404 errors
// app.use(errors.error404);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  
  
