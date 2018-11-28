import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Publicacion from './components/Publicacion/Publicacion';
import Inicio from './components/Inicio/Inicio';

const InicioRoute = () => <Inicio/>;
const PublicacionRoute = () => <Publicacion/>;

const AppRouter = () => (
  <Router>
    <div>
      <Navbar/>
      <Route path="/" exact component={InicioRoute} />
      <Route path="/publicacion/" component={PublicacionRoute} />
    </div>
  </Router>
);

export default AppRouter