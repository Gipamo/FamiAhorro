import React from 'react'
import MovimientosList from '../models/Movimientos.json'

export default function Movimientos(){
    return(
        <table class="table container table-striped mt-5">
            <caption className='text-primary text-center mt-3'>Movimientos de tu familia</caption>
            <thead className='thead-dark'>
                <tr>
                <th>Nombre integrante</th>
                <th>Tipo de Movimiento</th>
                <th>Fecha</th>
                <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {MovimientosList.map(movimiento =>{
                    return(
                        <tr>
                            <th>{movimiento.nombre}</th>
                            <th>{movimiento.tipoMovimiento}</th>
                            <th>{movimiento.fecha}</th>
                            <th>{movimiento.descripcion}</th>
                        </tr>
                    )
                    })}
            </tbody>
        </table>
    );
}