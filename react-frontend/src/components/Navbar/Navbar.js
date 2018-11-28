import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
            <img src="assets/img/fukurotexto.png" height="20" alt="Fukuro Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Areas
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="nav-link" to="/areas/disponibles">Disponibles</Link>
                        <Link className="nav-link" to="/areas/subscritas">Subscritas</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/mensajes">Mensajes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/usuario">Perfil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sesion/entrar">Cerrar Sesión</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Navbar;