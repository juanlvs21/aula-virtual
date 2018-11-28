// model.go
package main

import (
	"database/sql"
	"errors"
)

type user struct {
	cedula   string `json:cedula`
	nombre   string `json:nombre`
	apellido string `json:apellido`
	correo   string `json:correo`
	usuario  string `json:usuario`
	contra   string `json:contra`
	tipo     int    `json:tipo`
}

func (u *user) getUser(db *sql.DB) error {
	return errors.New("Usuario no encontrado")
}

func (u *user) createUser(db *sql.DB) error {
	return errors.New("Usuario no encontrado")
}
