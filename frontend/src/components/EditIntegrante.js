import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form';

export default function AddIntegrante(){
    const {register,handleSubmit,errors} = useForm();
    const history = useHistory();
    const onSubmit = (data,e) => {
        e.target.reset();
        history.push('/integrantes')
    }
    const onClick = (e) =>{
        history.push('/searchIntegrantes')
    }
    return(
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-dark mb-5 mt-5'>
                    Actualiza los datos del integrante
                </h2>
                <button className='btn btn-secondary mb-5' type="button" onClick={onClick}>Buscar Integrante</button>
            <div className="row">
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-dark' htmlFor="nombre">Nombre Completo</label>
                    <input type='text' className='form-control input' name="nombre" defaultValue="" ref={register} />
                    {errors.nombre && <span className="text-danger">¡El nombre es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-dark' htmlFor="telefono">Teléfono de Contacto</label>
                    <input type='text' className='form-control input' name="telefono" ref={register} />
                    {errors.telefono && <span className="text-danger">¡El teléfono es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label className='text-dark' htmlFor="email">Correo Electrónico</label>
                    <input type='email' className='form-control input' name="email" ref={register} />
                    {errors.email && <span className="text-danger">¡El correo es obligatorio!</span>}
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <label className='text-dark' htmlFor="identificacion">Identificacion</label>
                    <input type='number' className='form-control input' name="identificación" ref={register} />
                    {errors.identificacion && <span className="text-danger">¡La identificación es obligatoria!</span>}
                </div>
                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label className='text-dark' htmlFor="nrocuenta">Número de Cuenta</label>
                    <input type='text' className='form-control input' name="nrocuenta" ref={register} />
                    {errors.nrocuenta && <span className="text-danger">¡El número de cuenta es obligatorio!</span>}
                </div>
            </div>
            <button type="submit" class="btn btn-dark mt-5">Guardar Integrante</button>
        </form>
    );
}