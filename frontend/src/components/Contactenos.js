import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function Contactenos(){
    const {register,handleSubmit,errors} = useForm();
    const history = useHistory();

    const onSubmit = (data,e) => {
        window.open(`mailto:carlos.fernandezg@upb.edu.co?subject=Peticion FamiAhorro&body=${data.pqr}`)
        history.push('/')
    }

    return(
            <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <h2 className='text-dark col-12 mb-5 mt-5'>Contáctenos</h2>
                    <div className="form-group col-12">
                        <label className='text-dark mb-5' htmlFor="email">Correo Electrónico</label>
                        <input type='text' className='form-control input mb-5 w-50 mx-auto' placeholder='Ingrese su correo' name="email" defaultValue="" ref={register({required:true})} />
                        {errors.email && <span className="text-danger">¡Ingrese su correo de contacto!</span>}
                    </div>
                    <div className="form-group col-12">
                        <textarea name="pqr" placeholder='Escriba su solicitud o comentario' cols='40' rows='7' id="pqr" defaultValue="" ref={register({required:true})}></textarea>
                        {errors.pqr && <span className="text-danger"><br/>Por favor ingrese su comentario</span>}
                    </div>
                    <div className="form-group col-12">
                    <button type='submit' className='btn btn-dark'>Contactar</button>
                </div>
                </div>
            </form>
    )
}