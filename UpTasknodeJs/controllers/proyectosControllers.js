const Proyectos = require('../models/Proyecto');
const slug = require('slug');

exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyecto'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}
exports.nuevoProyecto = async (req, res) => {
    const { nombre } = req.body;
    let errores = [];

    if (!nombre) {
        errores.push({ 'texto': 'Agregar un nombre al proyecto' })
    }
    //si hay errores
    if (errores.length > 0) {
        res.render('nuevoProyecto'), {
            nombrePagina: 'Nuevo Proyecto',
            errores
        }
    } else {
        //si no hay errores inserta en la db
        
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}