import React from 'react';
import {Link} from "react-router-dom";

export default function Footer(){
    return(
  <footer className="page-footer navbar-expand-sm navbar-dark fixed-sticky-bottom mt-5 bg-dark">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase pt-3 pl-4  text-white" >About</h5>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3"/>
        <div className="col-md-3 mb-md-0 mb-3">
          <ul className="list-unstyled pt-4  text-white">
          <li className='nav-item active mb-5  text-white'><Link classNameName="text-secondary  text-white" to='/quienessomos'>¿Quiénes somos?</Link></li>
          <li className='nav-item active mb-5  text-white' ><Link classNameName='text-secondary  text-white' to='/contactenos'>Contactenos</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3  text-white">2020: DWA Famiahorro</div>
  </footer>
  
    )
}