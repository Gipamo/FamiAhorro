import React from 'react'
import {useHistory} from 'react-router-dom'
import IntegrantesList from '../models/Integrantes.json'

export default function SearchIntegrantes(){
    const history = useHistory()
    return(
        <table class="table container table-striped">
            <thead>
                <tr>
                <th>Nombre integrante</th>
                <th>Teléfono</th>
                <th>Correo electrónico</th>
                <th>Identificación</th>
                <th>Número de Cuenta</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {IntegrantesList.map(integrante =>{
                    return(
                        <tr>
                            <th>{integrante.nombre}</th>
                            <th>{integrante.telefono}</th>
                            <th>{integrante.email}</th>
                            <th>{integrante.identificacion}</th>
                            <th>{integrante.nrocuenta}</th>
                            <th><button className='btn btn-dark' type="button"
                            onClick={() => {history.push('/editIntegrante')}}>Actualizar</button></th>
                            <th><button className='btn btn-danger' type="button"
                            onClick={() => {history.push('/integrantes')}}>Eliminar</button></th>
                        </tr>
                    )
                    })}
            </tbody>
        </table>
    );
}