import React from 'react';
import './Modal.style.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-brands-svg-icons";


const Modal = ({closeModal, id, name}) => {
  return (
    <div className='container-fluid container-modal shadow'>
        <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end'>
            <button onClick={()=>closeModal(false)} className="close rounded border-light float-end"><FontAwesomeIcon icon={faCircleXmark} color="black" /></button>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                <h5 className='text-center'>Find the Best Spaces in {name}</h5>
                <p className='text-center' style={{color:"blue"}}>Choose from 25,000+ Sanitized & Verified Spaces</p>
            </div>
            <hr />
            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex mb-5'>
                <div className='col-xl-1 col-lg-0 col-md-0 col-1'></div>
                <Link to={`/coworking/city/${id}/${name}`} className="text-decoration-none">
                <div className='col-xl-3 col-lg-3 col-md-2 col-2 working' style={{cursor:'pointer'}}>
                    <img src='/assest/coworkingpng.png' className='img-fluid d-block m-auto img-spaces' alt="" /> 
                    <p className='text-center' style={{color:'blue'}}>Co-Working <br />Space</p>
                </div>
                </Link>
                <div className='col-xl-1 col-lg-1 col-md-0 col-1'></div>
                <Link to={`/coliving/city/${id}/${name}`} className="text-decoration-none">
                <div className='col-xl-3 col-lg-3 col-md-2 col-2 working' style={{cursor:'pointer'}}>
                    <img src='/assest/double-sharing.svg' className='img-fluid d-block m-auto img-spaces' alt="" /> 
                    <p className='text-center' style={{color:'blue'}}>Co-Living <br />Space</p>
                </div>
                </Link>
                <div className='col-xl-2 col-lg-0 col-md-1 col-1'></div>
            </div>
           </div>
    </div>
  )
}

export default Modal


