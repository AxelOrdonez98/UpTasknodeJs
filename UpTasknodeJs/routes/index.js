const express = require('express');
const router = express.Router();

//importar el express validator
const {body} = require('express-validator');

//importar el controlador
const proyectosControllers = require('../controllers/proyectosControllers');

module.exports = function () {
    router.get('/', proyectosControllers.proyectosHome);
    router.get('/nuevo-proyecto', proyectosControllers.formularioProyecto);
    router.post('/nuevo-proyecto', 
    body('nombre').not().isEmpty().trim().escape(),
    proyectosControllers.nuevoProyecto);
    return router;
}