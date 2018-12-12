const mysql = require('mysql');
const btoa = require("btoa");
const jwt = require("jsonwebtoken");

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fukuro'
});

let modelSql = {};

// ---------- SESSIONS AND TOKEN ----------
modelSql.loginUser = (user, callback) => {
    const session = {
        username: '',
        password: ''
    }
    const userToken = [];
    if (connection) {
        connection.query(
            // `SELECT * FROM usuario WHERE usuario=${connection.escape(user.username)} AND contra=${connection.escape(user.password)}`,
            `SELECT * FROM usuario WHERE usuario=${connection.escape(user.username)}`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    if (rows[0] == undefined) {
                        callback(null, [{ 'error': 1, 'massage': 'Error - User not found' }]);
                    } else {
                        if (rows[0].contra == user.password) {
                            session.username = rows[0].usuario;
                            session.password = rows[0].contra;
                            userToken.push({
                                usuario: rows[0].usuario,
                                nombre: rows[0].nombre,
                                apellido: rows[0].apellido,
                                correo: rows[0].correo,
                                contra: rows[0].contra,
                                tipo: rows[0].tipo,
                                sesion: btoa(JSON.stringify(session)),
                                token: jwt.sign({ session }, '1q2w3e4r') // Change secret key by environment variable
                            });
                            callback(null, userToken);
                        } else {
                            callback(null, [{ 'error': 2, 'massage': 'Error - Incorrect password' }]);
                        }
                    }
                }
            }
        );
    }
}

// ---------- USERS ----------
modelSql.getUsers = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM usuario',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        );
    }
}

modelSql.getUser = (usuario, callback) => {
    if (connection) {
        connection.query(
            `SELECT * FROM usuario WHERE usuario=${connection.escape(usuario)}`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        );
    }
}

modelSql.insertUser = (usuarioData, callback) => {
    if (connection) {
        connection.query(
            'INSERT INTO usuario SET ?', usuarioData,
            (err, result) => {
                if (err) {
                    console.log("Error al Insertar");
                    throw err;
                } else {
                    callback(null, {
                        'insertId': result.insertId //InsertId es lo que se usa en la ruta
                    });
                    console.log("Usuario Insertado");
                }
            }
        )
    }
};


// ---------- AREAS ----------

modelSql.getAvailableAreas = (callback) => {
    if (connection) {
        connection.query(
            'SELECT * FROM area',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        );
    }
}

modelSql.getArea = (id_area, callback) => {
    if (connection) {
        connection.query(
            `SELECT * FROM area WHERE id=${connection.escape(id_area)}`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        );
    }
}

// modelSql.updateEstudiante = (estudianteData, callback) => {
//     if (connection) {
//         const sql = `
//             UPDATE comprador SET
//             nombre = ${connection.escape(estudianteData.nombre)},
//             direccion = ${connection.escape(estudianteData.direccion)},
//             telefono = ${connection.escape(estudianteData.telefono)} 
//             WHERE id = ${connection.escape(estudianteData.id)}
//         `

//         connection.query(sql, (err, result) => {
//             (err, result) => {
//                 if (err) {
//                     console.log("Error al Actualizar");
//                     throw err;
//                 } else {
//                     callback(null, {
//                         msg: "Datos Actualizados Correctamente"
//                     });
//                     console.log("Comprador Insertado");
//                 }
//             }
//         })
//     }
// };

// modelSql.deleteEstudiante = (id, callback) => {
//     if (connection) {
//         let sql = `SELECT * FROM comprador WHERE id = ${connection.escape(id)}`;

//         connection.query(sql, (err, result) => {
//             if (result) {
//                 let sql = `DELETE FROM comprador WHERE id = ${id}`;

//                 connection.query(sql, (err, result2) => {
//                     if (err) {
//                         throw err;
//                     } else {
//                         callback(null, {
//                             msg: "Eliminado"
//                         })
//                     }
//                 });
//             } else {
//                 callback(err, {
//                     msg: "No existe"
//                 })
//             }
//         })
//     }
// };

module.exports = modelSql;