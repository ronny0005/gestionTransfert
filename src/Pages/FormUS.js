import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styled from "styled-components";

const FormUS = ({openFormUS, hideFormUS}) => {

    const Modal = 
{    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}



;
  return   openFormUS && (
    
        <div  style={Modal}>
           Hello
           <button type='submit' className="btn btn-danger btn-block confirm-button" onClick={hideFormUS}>Exit</button>
        </div>

  )
}

export default FormUS