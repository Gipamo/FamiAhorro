import React from 'react';
import {Link} from "react-router-dom";

  export default function NavBar(){
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <Link className="navbar-brand" to='/'>FamiAhorro</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id='navbarLinks'>
          <ul className="navbar-nav">
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/">Inicio</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/integrantes">Integrantes</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/movimientos">Movimientos</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/eventos">Eventos</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/monto">Monto</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link' to="/prestamos">Préstamos</Link>
            </li>
          </ul>
        </div>
      </nav>)
  }