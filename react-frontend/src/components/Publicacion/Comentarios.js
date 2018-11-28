import React, { Component } from 'react';

class Comentarios extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-1">
                                    <img src="assets/img/user.png" width="40" className="img-thumbnail rounded-circle" alt="Perfil Usuario" />
                                </div>
                                <div className="col-md-10">
                                    <p> Juan Villarroel <br/> <small>01/01/2001</small> </p>
                                </div>
                                <div className="col-md-1 text-right">
                                    <a href="/#"><i className="fa fa-close"></i></a>
                                </div>
                            </div>
                            <div className="row container">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus perferendis adipisci aliquam ab nihil error voluptatem illo aperiam libero. Possimus suscipit odio corrupti quae repellendus natus maiores saepe in?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <form>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Escribe un comentario..."/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Comentar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Comentarios;
