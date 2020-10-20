import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function AddIntegrante(){
    const {register,handleSubmit,errors} = useForm();
    const history = useHistory();

    const onSubmit = e => {
        history.push('/integrantes')
    }

    return(
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <h2 className='text-primary col-12 mb-5 mt-5'>Añade un integrante a tu familia</h2>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-primary' htmlFor="nombre">Nombre Completo</label>
                    <input type='text' className='form-control input' name="nombre" defaultValue="" ref={register({required:true})} />
                    {errors.nombre && <span className="text-danger">¡El nombre es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-primary' htmlFor="telefono">Teléfono de Contacto</label>
                    <input type='text' className='form-control input' name="telefono" ref={register({ required: true})} />
                    {errors.telefono && <span className="text-danger">¡El teléfono es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-primary' htmlFor="email">Correo Electrónico</label>
                    <input type='email' className='form-control input' name="email" ref={register({ required: true })} />
                    {errors.email && <span className="text-danger">¡El correo es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <label className='text-primary' htmlFor="identificacion">Identificacion</label>
                    <input type='number' className='form-control input' name="identificación" ref={register({ required: true })} />
                    {errors.identificacion && <span className="text-danger">¡La identificación es obligatoria!</span>}
                </div>
                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label className='text-primary' htmlFor="nrocuenta">Número de Cuenta</label>
                    <input type='text' className='form-control input' name="nrocuenta" ref={register({ required: true })} />
                    {errors.nrocuenta && <span className="text-danger">¡El número de cuenta es obligatorio!</span>}
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Guardar Integrante</button>
        </form>
    );
}