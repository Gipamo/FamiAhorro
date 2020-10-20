import React from 'react';
import {Link} from "react-router-dom";

export default function Footer(){
    return(
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12">
          <h5 className='text-primary mb-5'>About</h5>
          <ul className="text-small">
              <li className='mb-5'><Link className="text-secondary" to='/quienessomos'>¿Quiénes somos?</Link></li>
              <li><Link className='text-secondary' to='/contactenos'>Contactenos</Link></li>
          </ul>
        </div>
      </div>
  </footer>
    )
}