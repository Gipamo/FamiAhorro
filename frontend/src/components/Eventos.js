import React from 'react';
import EventosList from '../models/Eventos.json';
import {useHistory} from 'react-router-dom';

export default function Eventos(){
    const history = useHistory();
    return(
        <section className='container mt-5'>
            <h2 className="text-primary mb-5">Eventos de tu familia</h2>
            <div className='row'>
                <div className="col-12">
                    <ul className='list-group list-group-flush'>
                    {
                        EventosList.map((evento,index) => {
                            return(
                                <li key={index} className='list-group-item'>
                                    <p>{evento.descripcion} el día {evento.fecha_evento}
                                    <button className='btn btn-sm btn-danger ml-5' onClick={(e) =>{
                history.push('eventos')
            }} type='button'>X</button></p>
                                    
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <button className='btn btn-primary' onClick={(e) =>{
                history.push('createEvent')
            }} type="button">Crear Evento</button>
        </section>
    )
}