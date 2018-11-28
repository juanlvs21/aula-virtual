import React, { Component } from 'react';

class Inicio extends Component {
  render() {
    return (
      <div className="row container mt-3">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="assets/img/user.png" className="img-thumbnail rounded-circle" alt="Perfil Usuario" />
                        </div>
                        <div className="col-md-9 mt-2 text-center">
                            <p>Juan Villarroel</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group  list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Puntos
                                    <span className="badge badge-primary badge-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Seguidores
                                    <span className="badge badge-primary badge-pill">2</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Seguidos
                                    <span className="badge badge-primary badge-pill">1</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	    <div className="col-md-8">
            <h1>Publicaciones recientes</h1>
        </div>
      </div>
    );
  }
}

export default Inicio;
