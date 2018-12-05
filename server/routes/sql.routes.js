const ModelSql = require('../models/sql');
var atob = require("atob");

module.exports = function(app) {

    // ---------- SESSION ----------
    // Make the query of the login of the user
    // Returns your data and a token that will be saved in the localstorage
    app.post('/api/sql/session/login', (req, res) => {
        const userData = {
            username: req.body.usuario,
            password: req.body.contra
        };

        ModelSql.loginUser(userData, (err, data) => {
            if (data) {
                res.json(data[0]);
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Internal Server Error'
                });
            };
        });
    });

    // Take the localstorage token to load the data of a user already logged in
    app.post('/api/sql/session/token', (req, res) => {
        const user = JSON.parse(atob(req.body.token));
        const userData = {
            username: user.usuario,
            password: user.contra
        };

        ModelSql.loginUser(userData, (err, data) => {
            if (data) {
                res.json(data[0]);
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Internal Server Error'
                });
            };
        });
    });

    // ---------- USERS ----------
    app.get('/api/sql/users', (req, res) => {
        ModelSql.getUsers((err, data) => {
            res.json(data);
        })
    });

    app.get('/api/sql/user/:user', (req, res) => {
        ModelSql.getUser(req.params.user, (err, data) => {
            res.json(data);
        })
    });

    app.post('/api/sql/user', (req, res) => {
        const userData = {
            usuario: req.body.usuario,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contra: req.body.contra,
            tipo: req.body.tipo
        };

        ModelSql.insertUser(userData, (err, data) => {
            if (data) {
                res.json({
                    success: true,
                    msg: 'User inserted',
                    data: data
                });
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Internal Server Error'
                });
            };
        });
    });

    // ---------- AREAS ----------

    app.get('/api/sql/areas', (req, res) => {
        ModelSql.getAvailableAreas((err, data) => {
            res.json(data);
        })
    });

    app.get('/api/sql/area/:id_area', (req, res) => {
        ModelSql.getArea(req.params.id_area, (err, data) => {
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