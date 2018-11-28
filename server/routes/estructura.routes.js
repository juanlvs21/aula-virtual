const Estructura = require('../models/estructura');

module.exports = function(app) {
    app.get('/api/estructura/usuarios', (req, res) => {
        Estructura.getUsuarios((err, data) => {
            res.json(data);
        })
    });

    app.get('/api/estructura/sesion/:token', (req, res) => {
        Estructura.getSesion(req.params.token, (err, data) => {
            res.json(data);
        })
    });

    app.get('/api/estructura/usuario/:usuario', (req, res) => {
        Estructura.getUsuario(req.params.usuario, (err, data) => {
            res.json(data);
        })
    });

    app.post('/api/estructura/usuario', (req, res) => {
        const usuarioData = {
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contra: req.body.contra,
            tipo: req.body.tipo
        };

        Estructura.insertUsuario(usuarioData, (err, data) => {
            if (data) {
                res.json({
                    success: true,
                    msg: 'Usuario insertado',
                    data: data
                });
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Error interno del servidor'
                });
            };
        });
    });

    // app.put('api/estructura/estudiante/:id', (req, res) => {
    //     const estudianteData = {
    //         id: req.params.id,
    //         nombre: req.body.nombre,
    //         direccion: req.body.direccion,
    //         telefono: req.body.telefono
    //     };

    //     Estructura.updateEstudiante(estudianteData, (err, data) => {
    //         if (data && data.msg) {
    //             res.json(data)
    //         } else {
    //             res.json({
    //                 success: false,
    //                 msg: "Error al Actualizar"
    //             });
    //         }
    //     });
    // });

    // app.delete('api/estructura/estudiante/:id', (req, res) => {
    //     Estructura.deleteEstudiante(req.params.id, (err, data) => {
    //         if (data && (data.msg === "Eliminado" || data.msg === "No existe")) {
    //             res.json({
    //                 success: true,
    //                 data
    //             })
    //         } else {
    //             res.status(500).json({
    //                 msg: "Error interno del servidor"
    //             })
    //         }
    //     })
    // });
}