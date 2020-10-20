import React from 'react';
import PrestamosList from '../models/Prestamos.json';
import {useHistory} from 'react-router-dom';

export default function Eventos(){
    const history = useHistory();
    return(
        <section className='container mt-5'>
            <h2 className="text-primary mb-5">Solicitudes de Préstamo</h2>
            <div className='row'>
                <div className="col-12">
                    <ul className='list-group list-group-flush'>
                    {
                        PrestamosList.map((prestamo,index) => {
                            return(
                                <li key={index} className='list-group-item d-flex justify-content-between'>
                                    <p className='col-lg-8 col-sm-12'>
                                        {prestamo.nombre} solicitó {prestamo.cantidad} el día {prestamo.fecha_prestamo}

                                    </p>
                                    <button className='btn btn-sm btn-success ml-5 col-lg-2 col-sm-6' onClick={(e) => {
                                        history.push('/monto')
                                    }} type='button'>Aprobar</button>
                                    <button className='btn btn-sm btn-danger ml-5 col-lg-2 col-sm-6' onClick={(e) => {
                                        history.push('/monto')
                                    }} type='button'>Rechazar</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    )
}