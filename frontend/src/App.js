import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Index from './components/Index';
import Integrantes from './components/Integrantes';
import AddIntegrante from './components/AddIntegrante';
import EditIntegrante from './components/EditIntegrante';
import SearchIntegrantes from './components/SearchIntegrantes';
import Movimientos from './components/Movimientos';
import Eventos from './components/Eventos';
import CreateEvento from './components/CreateEvento';
import Monto from './components/Monto';
import Depositar from './components/Depositar';
import SolicitarPrestamo from './components/SolicitarPrestamo'
import Estadisticas from './components/Estadisticas';
import Prestamos from './components/Prestamos';
import QuienesSomos from './components/QuienesSomos';
import Contactenos from './components/Contactenos'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/">
              <Index/>
          </Route>
          <Route exact path="/integrantes">
            <Integrantes/>
          </Route>
          <Route extact path="/eventos">
            <Eventos/>
          </Route>
          <Route exact path="/monto">
            <Monto/>
          </Route>
          <Route exact path="/depositar">
            <Depositar/>
          </Route>
          <Route exact path="/solicitarPrestamo">
            <SolicitarPrestamo/>
          </Route>
          <Route exact path="/prestamos">
            <Prestamos/>
          </Route>
          <Route exact path="/movimientos">
            <Movimientos/>
          </Route>
          <Route exact path="/estadisticas">
            <Estadisticas/>
          </Route>
          <Route exact path="/addIntegrante">
            <AddIntegrante/>
          </Route>
          <Route exact path="/editIntegrante">
            <EditIntegrante/>
          </Route>
          <Route exact path="/searchIntegrantes">
            <SearchIntegrantes/>
          </Route>
          <Route exact path="/createEvent">
            <CreateEvento/>
          </Route>
          <Route exact path="/quienessomos">
            <QuienesSomos/>
          </Route>
          <Route exact path="/contactenos">
            <Contactenos/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
