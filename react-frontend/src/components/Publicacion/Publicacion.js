import React, { Component } from 'react';
import Comentarios from './Comentarios';

class Publicacion extends Component {
  render() {
    return (
        <div className="container mt-3 mb-3">
            <div className="row">
                <h1>Titulo Video</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad, doloribus molestiae incidunt, cupiditate quod explicabo, sequi rem nostrum voluptas blanditiis. Alias praesentium veniam laudantium maxime sed dolorem maiores suscipit.</p>
            </div>
            <div className="row justify-content-md-center">
                <video width="700" height="400" controls>
                    <source src="assets/img/prueba.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <Comentarios/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Publicacion;
