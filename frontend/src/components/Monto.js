import React from 'react'
import {Link} from "react-router-dom";
import MontoFamilia from '../models/Monto.json'

export default function Monto(){
    return(
        <section className='container'>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-dark mb-4 mt-5'>El monto total de tu familia es</h2>
                    <p className='text-success mb-5'>{MontoFamilia.monto}</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/depositar'>Depositar Dinero</Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/solicitarPrestamo'>Solicitar Préstamo</Link>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/estadisticas'>Ver Estadísticas</Link>
                </div>
            </div>
        </section>
    )
}