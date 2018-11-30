const Estructura = require('../models/estructura');

module.exports = function(app) {

    // ---------- USUARIOS ----------

    app.get('/api/estructura/usuarios', (req, res) => {
        Estructura.getUsuarios((err, data) => {
            res.json(data);
        })
    });

    // Realiza la consulta del inicio de sesion del usuario, 
    //devuelve sus datos y un token que será guardado en el localstorage
    app.get('/api/estructura/sesion/:usuario', (req, res) => {
        Estructura.getSesion(req.params.usuario, (err, data) => {
            res.json(data);
        })
    });

    // Toma el token del localstorage para cargar los datos de un usuario ya logeado
    app.get('/api/estructura/tokensesion/:token', (req, res) => {
        Estructura.getTokenSesion(req.params.token, (err, data) => {
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

    // ---------- AREAS ----------

    app.get('/api/estructura/areas', (req, res) => {
        Estructura.getAreasDisponibles((err, data) => {
            res.json(data);
        })
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