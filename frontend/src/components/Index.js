import React from 'react'
import IndexCarousel from './IndexCarousel'

export default function Index(){
    return(
        <main className='container'>
            <div className="jumbotron">
            <h1 className="display-4">No vuelvas a preocuparte por tus ahorros.</h1>
            <p className="lead">FamiAhorro es la mejor herramienta para gestionar y ahorrar el dinero de tu familia</p>
            <hr className="my-4"/>
            <IndexCarousel/>
            </div>
        </main>
    );
}