import React from 'react'
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form'

export default function SolicitarPrestamo(){
    const {register,errors,handleSubmit} = useForm();
    const history = useHistory();
    const onSubmit = () => {
        history.push('/monto')
    }
    return(
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <h2 className='text-dark col-12 mb-5 mt-5'>Solicita un préstamo</h2>
                <div className="form-group col-12 mb-5">
                    <label className='text-dark mb-5' htmlFor="cantidad">¿Cuánto dinero necesitas?</label>
                    <input type='number' className='form-control input w-50 mx-auto' name="cantidad" 
                    ref={register({required:true,validate:value => value > 0})} />
                    {errors.cantidad && <span className="text-danger">¡La cantidad es obligatoria y mayor a cero!</span>}
                </div>
                <div className="form-group col-12">
                    <button type='submit' className='btn btn-dark'>Solicitar Préstamo</button>
                </div>
            </div>
        </form>
    );
}