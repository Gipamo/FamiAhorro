import React from 'react';
import {Link} from "react-router-dom";

  export default function NavBar(){
    return (
      <nav className='navbar navbar-expand-lg bg-success fixed-sticky-top mb-5 a ver'>
        <Link className="navbar-brand text-white" to='/'><h2>FamiAhorro</h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id='navbarLinks'>
          <ul className="navbar-nav ml-auto">
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link  text-white' to="/">Inicio</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link  text-white' to="/integrantes">Integrantes</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link  text-white' to="/movimientos">Movimientos</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link  text-white' to="/eventos">Eventos</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link text-white' to="/monto">Monto</Link>
            </li>
            <li className='nav-item pl-5 pr-5'>
              <Link className='nav-link text-white' to="/prestamos">Préstamos</Link>
            </li>
          </ul>
        </div>
      </nav>)
  }