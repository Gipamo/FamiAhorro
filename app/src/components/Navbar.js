import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div class="header">
            <ul class="navbar">
                <li><a href="">Eventos</a></li>
                <li><a href="">Prestamo</a></li>
                <li><a href="">Monto</a></li>
                <li><a href="">Integrantes</a></li>
                <li><a href="">Movimientos</a></li>
                <li><a href="">Inicio</a></li>
                <li><span class="titleHeader">FamiAhorro</span></li>
              </ul>
        </div>
        )
    }
}
