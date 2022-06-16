import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import { Countries } from '../components/Countries';
const TransfertPage = styled.div`
  background-color: purple;
  height:100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  
body {
    min-height: 100vh;
}

.form-control:not(select) {
    padding: 1.5rem 0.5rem;
}

select.form-control {
    height: 52px;
    padding-left: 0.5rem;
}

.form-control::placeholder {
    color: #ccc;
    font-weight: bold;
    font-size: 0.9rem;
}
.form-control:focus {
    box-shadow: none;
}

`
const Transfert1 = () => {
const [img, setImg ] = useState("https://cdn.kcak11.com/CountryFlags/countries/af.svg")
const [tInter, settInter ] = useState(false)
const typeRef = useRef('local')

const flagcontry = id => {
  // return Countries
  // console.log(Countries[id].flag)
  setImg(Countries[id].flag)
}

const internationale = tInter && 
(<><div className="input-group-text px-0 py-0 bg-white" >
<img style={{width:'3em'}} src={img} alt="{name}"/>

</div>

<div className="input-group-text px-0 py-0 bg-white" >
<select id="countryCode" name="countryCode" style={{border : "none"}} className="form-select bg-white" onChange={() => flagcontry(document.getElementById('countryCode').value)}>
{
  Countries.map(({name, dialCode, flag}, index) =>{
    return   <option value={index} key={index}> {dialCode}</option>
  })
}

 
</select>
</div>
</>
)
  return (
    <TransfertPage>
        



<div className="container">
  <div className='row'>
    <div className="input-group col-12 mb-4">
      <select id="job" 
      name="jobtitle" 
      className="form-control form-select custom-select bg-white border-left-0 border-md"
      ref={typeRef}
      onChange={()=> {
        if(typeRef.current.value === "tInter"){
          settInter(true)
        }else {
          settInter(false)
        }
      }}
      >
          <option value="" disabled selected>Type de Transfert....</option>
          <option value="tLocal">Transfert Local</option>
          <option value="tInter">Transfert internationale</option>
      </select>
    </div>
  </div>
    <div className="row  align-items-center">   
                
        <div className="col-md-6 pr-lg-5 mb-5 mb-md-0">
           
        <form action="#">
                <div className="row">

                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-text bg-white px-4 border-md border-right-0">
                              <i className="fa fa-user text-muted" ></i>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                      
                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                           
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                        
                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"></i>
                           
                        </div>

                        {/* {internationale} */}
                        
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>
                    <div className="input-group col-lg-12 mb-4">

                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-black-tie text-muted"></i>
                            
                        </div>
                        <select id="job" name="jobtitle" className="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose your job</option>
                            <option value="">Designer</option>
                            <option value="">Developer</option>
                            <option value="">Manager</option>
                            <option value="">Accountant</option>
                        </select>
                    </div>



                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold">Create your account</span>
                        </a>
                    </div>

                    {/* <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div> */}

                   

                    
                </div>
            </form>
        </div>

        <div className="col-md-6 col-lg-6 ml-auto">
            <form action="#">
                <div className="row">

                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-text bg-white px-4 border-md border-right-0">
                              <i className="fa fa-user text-muted" ></i>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                      
                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-envelope text-muted"></i>
                           
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    <div className="input-group col-lg-12 mb-4">
                        
                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-phone-square text-muted"></i>
                           
                        </div>
                        {internationale}
                        
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>
                    <div className="input-group col-lg-12 mb-4">

                            <div className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-black-tie text-muted"></i>
                            
                        </div>
                        <select id="job" name="jobtitle" className="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose your job</option>
                            <option value="">Designer</option>
                            <option value="">Developer</option>
                            <option value="">Manager</option>
                            <option value="">Accountant</option>
                        </select>
                    </div>



                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <span className="font-weight-bold">Create your account</span>
                        </a>
                    </div>

                    {/* <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div> */}

                   

                    
                </div>
            </form>
        </div>
      </div>
    </div>
    </TransfertPage>
  )
}

export default Transfert1