import React from 'react'
import {Link} from "react-router-dom";

export default function Integrantes(){
    return(
        <section className='container'>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-dark mt-5 mb-5'>Gestione los integrantes de la familia</h2>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/addIntegrante'>Añadir Integrante</Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/searchIntegrantes'>Buscar Integrante</Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/editIntegrante'>Editar Integrante</Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <Link className='btn btn-dark' to='/searchIntegrantes'>Eliminar Integrante</Link>
                </div>
            </div>
        </section>
    )
}