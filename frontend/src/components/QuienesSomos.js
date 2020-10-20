import React from 'react';
import CarlosImg from '../img/carlos.jpg'
import GianImg from '../img/gian.jpg'

export default function QuienesSomos(){
    return (
        <main className='container'>
            <div className="row">
                <div className="col-12">
                    <h2 className='text-dark mt-5 mb-5'>¿Quiénes somos?</h2>
                </div>
                <div class="card-deck justify-content-center">
                    <div class="card border-primary align-items-center mr-4">
                        <div class="card-body">
                        <h5 class="card-header border-primary mb-5">Carlos Fernández</h5>
                        <img class="card-img-top w-50 h-50 mb-5 rounded-circle" src={CarlosImg} alt="Carlos Fernández"/>
                        <p class="card-text">Estudiante Ingeniería de Sistemas e Informática. <br/>
                        Octavo Semestre</p>
                        </div>
                        
                    </div>
                    <div class="card border-primary align-items-center">
                        
                        <div class="card-body">
                        <h5 class="card-header border-primary mb-5">Gian Paul Moreno</h5>
                        <img class="card-img-top w-50 h-50 mb-5 rounded-circle" src={GianImg} alt="Gian Paul Moreno"/>
                        <p class="card-text">Estudiante Ingeniería de Sistemas e Informática. <br/>
                        Octavo Semestre</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
}