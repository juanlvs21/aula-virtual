const mysql = require('mysql');
var CryptoJS = require("crypto-js");

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fukuro'
});

let estructuraModel = {};

estructuraModel.getUsuarios = (callback) => {
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

estructuraModel.getSesion = (usuario, callback) => {
    let user = JSON.parse(usuario);

    const token = {
        usuario: '',
        contra: ''
    }

    const userToken = [];

    if (connection) {
        connection.query(
            `SELECT * FROM usuario WHERE usuario=${connection.escape(user.usuario)} AND contra=${connection.escape(user.contra)}`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    token.usuario = rows[0].usuario;
                    token.contra = rows[0].contra;

                    userToken.push({
                        usuario: rows[0].usuario,
                        nombre: rows[0].nombre,
                        apellido: rows[0].apellido,
                        correo: rows[0].correo,
                        contra: rows[0].contra,
                        tipo: rows[0].tipo,
                        token: CryptoJS.AES.encrypt(JSON.stringify(token), '1q2w3e4r()*').toString()
                    });

                    callback(null, userToken);
                }
            }
        );
    }
}

estructuraModel.getTokenSesion = (token, callback) => {
    const bytes = CryptoJS.AES.decrypt(token, '1q2w3e4r()*');
    const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    if (connection) {
        connection.query(
            `SELECT * FROM usuario WHERE usuario=${connection.escape(user.usuario)} AND contra=${connection.escape(user.contra)}`,
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

estructuraModel.getUsuario = (usuario, callback) => {
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

estructuraModel.insertUsuario = (usuarioData, callback) => {
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

// estructuraModel.updateEstudiante = (estudianteData, callback) => {
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

// estructuraModel.deleteEstudiante = (id, callback) => {
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

module.exports = estructuraModel;