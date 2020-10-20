import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import "react-datepicker/dist/react-datepicker.css";
import '../css/CreateEvento.css'

export default function CreateEvento(){
    const {register,handleSubmit,errors} = useForm();
    const [fecha,setFecha] = useState(new Date());
    const history = useHistory();

    const onSubmit = e => {
        history.push('/eventos')
    }

    return(
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <h2 className='text-primary col-12 mb-5 mt-5'>Crear evento familiar</h2>
                <div className="form-group col-12 mb-4">
                    <label className='text-primary mb-5' htmlFor="descripcion">Descripción del Evento</label>
                    <input type='text' className='form-control input w-50 mx-auto' name="descripcion" defaultValue="" ref={register({required:true})} />
                    {errors.descripcion && <span className="text-danger">¡La descripción es obligatoria!</span>}
                </div>
                <div className="form-group col-12 mb-5">
                    <label className='text-primary mb-1' htmlFor="fecha_evento">Fecha del Evento</label>
                    <br/>
                    <DatePicker
                    selected={fecha}
                    ref={register({required:true})}
                    name='fecha_evento'
                    onChange={date => setFecha(date)} //only when value has changed
                    />
                    {errors.fecha_evento && <span className="text-danger">¡La fecha del evento es obligatoria!</span>}
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Guardar Evento</button>
        </form>
    )
}