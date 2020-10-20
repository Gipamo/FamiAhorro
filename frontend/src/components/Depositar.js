import React from 'react'
import {useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form'

export default function Depositar(){
    const {register,errors,handleSubmit} = useForm();
    const history = useHistory();
    const onSubmit = () => {
        window.open('https://www.pse.com.co')
        history.push('/monto')
    }
    return(
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <h2 className='text-primary col-12 mb-5 mt-5'>Deposita dinero en la cuenta familiar</h2>
                <div className="form-group col-12 mb-5">
                    <label className='text-primary mb-5' htmlFor="cantidad">Cantidad a Depositar:</label>
                    <input type='number' className='form-control input w-50 mx-auto' name="cantidad" 
                    ref={register({required:true,validate:value => value > 0})} />
                    {errors.cantidad && <span className="text-danger">¡La cantidad es obligatoria y mayor a cero!</span>}
                </div>
                <div className="form-group col-12 mb-5">
                    <div className="pse">
                        <button type='submit' className='text-muted btn'>
                        <img src="https://fenixconstrucciones.com/wp-content/uploads/2015/11/pse_peq.png" alt="PSe"/>
                        <br/>
                        Depositar con PSe
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}