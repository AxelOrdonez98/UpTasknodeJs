const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//crear conexion db
const db = require('./config/db');

//importar el modelo
require('./models/Proyecto');
db.sync()
    .then(() => console.log('Conectado a db'))
    .catch(error => console.log(error))

//crea app de express
const app = express();

//donde cargar archivos  estaticos
app.use(express.static('public'));
//habilta el pug (vistas)
app.set('view engine', 'pug');
//carpeta de vistas
app.set('views', path.join(__dirname, './views'));

//habilitar el bodyparce para leer datos
app.use(bodyParser.urlencoded({ extended: true }));

//hablar a rutas
app.use('/', routes())
//puerto de express
app.listen(3000);

