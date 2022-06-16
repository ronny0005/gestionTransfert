import React, { useEffect, useState } from 'react'
import styled from "styled-components";
// import 'bootstrap/dist/css/'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormJS from './Formul';
import Loader from '../components/Loader';
import $ from "jquery";

const Modal = styled.div`
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .modalContainer {
    flex: 0 1 50%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    display: flex;
    flex-direction: column;

    }


    .modalBody {
    padding: 5px 30px;
    background-color: rgb(223, 220, 220);
    /* background: var(--white-color) !important; */
    /* height: 400px; */
    overflow: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;
    }

    
`;
// 

const FS = styled.div`
.card{
	width:100%;
	background-color:#fff;
	border:none;
	border-radius: 12px}

.form-control{
	margin-top: 10px;
	height: 48px;
	border: 2px solid #eee;
	border-radius: 10px}
.form-control:focus{
	box-shadow: none;
	border: 2px solid #039BE5}


.confirm-button{
	height: 50px;
	border-radius: 10px}`




const FormCS = ({openFormCS, hideFormCS}) => {
  const [type, setType] = useState("")
  const [afficheform, setAfficheform] = useState(false)
  const [nom, setnom] = useState("")
  const [tel, settel] = useState("")
  const [typedoc, settypedoc] = useState("")
  const [numdoc, setnumdoc] = useState("")
  const [email, setemail] = useState("")



  const typeSeelect = () => {
    // console.log(document.getElementById('typedoc').value);
    setType(document.getElementById('typecustomer').value);
  } 


  useEffect(() => {
    if(type === 'client'){
        setAfficheform(true)
    }else{
        setAfficheform(false)
    } 
  }, [type]  )

  const onsubmit = () =>{

  }
  const formul = afficheform && (
        <main className='modalBody'>
            <hr className="my-2"/>
            <div className="row g-5">
                <hr className="my-4"/>
                <div className="col-md-12 col-lg-12">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" novalidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Nom complet</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value={nom} required onChange={() => setnom(document.getElementById('firstName').value)}/>
                                <div className="invalid-feedback">
                                    Entrée un nom.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="tel" className="form-label">Téléphone</label>
                                <input type="number" className="form-control" id="tel" value={tel} placeholder="6xxxxxxxx" required onChange={() => settel(document.getElementById('tel').value)}/>
                                <div className="invalid-feedback">
                                    Entrée un numero de telephone.
                                </div>
                            </div>


                            <div className="col-12">
                                <label htmlFor="email" className="form-label" >Email <span className="text-muted">(Optional)</span></label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={() => setemail(document.getElementById('email').value)}/>
                                    <div className="invalid-feedback">
                                        Entrée une adresse mail.
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="typedoc" className="form-label">Type de document</label>
                                <select className="form-select" id="typedoc" required onChange={() => settypedoc(document.getElementById('typedoc').value)}>
                                    <option value="" selected disabled>Choose...</option>
                                    <option value="CNI">CNI</option>
                                    <option value="Carte de séjour">Carte de séjour</option>
                                    <option value="Passport">Passport</option>
                                    <option value="Permis de conduire">Permis de conduire</option>
                                </select>
                                <div className="invalid-feedback">
                                    Entrée un numéro de document.
                                </div>
                            </div>
                    
                            <div className="col-6">
                                <label htmlFor="document" className="form-label">N° du document</label>
                                <input type="number" className="form-control" id="numdoc" placeholder="xxxxxxxxxxx" required value={numdoc} onChange={() => setnumdoc(document.getElementById('numdoc').value)}/>
                                <div className="invalid-feedback">
                                    Entrée un numéro de document.
                                </div>
                                </div>
                            </div>
                        

                            <hr className="my-4"/>


                            <div className="row gy-3">
                                <div className="col-md-4">
                                    <button className="w-100 btn btn-primary btn-lg" type="submit">Enregistrer</button>
                                </div>
                                <div className="col-md-4">
                                
                                </div>
                                <div className="col-md-4">
                                    <button className="w-100 btn btn-danger btn-lg" onClick={hideFormCS} type="submit">Fermer</button>
                                </div>

                            </div>
                            <hr className="my-4"/>
                    </form>
                </div>
            </div>
        </main>
  )

  const formul1 = afficheform && (
    <main >
        <FS className="containerfluide mt-1 mb-1 d-flex justify-content-center">
    <div className="card px-1 py-4">
        <div className="card-body">
            <h6 className="card-title mb-3">This appointment is for</h6>
            <div className="d-flex flex-row"> <label className="radio mr-1"> <input type="radio" name="add" value="anz" checked/> <span> <i className="fa fa-user"></i> Anz CMK </span> </label> <label className="radio"> <input type="radio" name="add" value="add"/> <span> <i className="fa fa-plus-circle"></i> Add </span> </label> </div>
            <h6 className="information mt-4">Please provide following information about Anz CMK</h6>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label for="name">Name</label>  <input className="form-control" type="text" placeholder="Name"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Mobile"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> 
                            <select className="form-select form-control" id="typedoc" required onChange={() => settypedoc(document.getElementById('typedoc').value)}>
                                <option value="" selected disabled>Choose...</option>
                                <option value="CNI">CNI</option>
                                <option value="Carte de séjour">Carte de séjour</option>
                                <option value="Passport">Passport</option>
                                <option value="Permis de conduire">Permis de conduire</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Email ID"/> </div>
                    </div>
                </div>
            </div>
            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small className="agree-text">By Booking this appointment you agree to the</small> <a href="#" className="terms">Terms & Conditions</a> </div> <button className="btn btn-primary btn-block confirm-button">Confirm</button>
        </div>
    </div>
</FS>
    </main>
)


const focusFoc = () =>{

}
  return (
    openFormCS && (
    <Modal>
        <div className='modalContainer' >
            {/* <div className="container modalBody">
              
                <div className="col-12">
                    <label htmlFor="typedoc" className="form-label">Type de personne</label>
                    <select className="form-select" id="typecustomer" required onChange={() => typeSeelect()}>
                        <option value=""  selected disabled>Choose...</option>
                        <option value="client" >Client</option>
                        <option value="supplier">Fournisseur</option>
                        <option value="client&supplier" >Client & Fournisseur</option>
                    </select>
                    
                </div><br/>
               
            </div>   
            {formul1} */}



<form >
 <FS className="containerfluide mt-1 mb-1 d-flex justify-content-center">
    <div className="card px-1 py-4">
        <div className="card-body">
        <h6 className="card-title mb-3">Veuillez choisir le type</h6>
        <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> 
                            <select className="form-select form-control" id="typedoc" required onChange={() => typeSeelect()}>
                                <option value="" selected disabled>Choose...</option>
                                <option value="client" >Client</option>
                                <option value="supplier">Fournisseur</option>
                                <option value="client&supplier" >Client & Fournisseur</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            

            <h4 className="information mt-4 text-center">Veuillez remplir le formulaire</h4>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        {/* <label for="name">Name</label>  */}
                         <input className="form-control" type="text" placeholder="Nom complet"/> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Numéro de téléphone"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="input-group"> 
                            <select className="form-select form-control" id="typedoc" required onChange={() => settypedoc(document.getElementById('typedoc').value)}>
                                <option value="" selected disabled>Type de document...</option>
                                <option value="CNI">CNI</option>
                                <option value="Carte de séjour">Carte de séjour</option>
                                <option value="Passport">Passport</option>
                                <option value="Permis de conduire">Permis de conduire</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="text" placeholder="Numéro de document"/> </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        <div className="input-group"> <input className="form-control" type="email" placeholder="Adresse Mail"/> </div>
                    </div>
                </div>
            </div>
            <div className=" d-flex flex-column text-center px-5 mt-3 mb-3"> 
                {/* <small className="agree-text">By Booking this appointment you agree to the</small>  */}
            </div> 
            <div className="row">
                <div className="col-sm-6 text-center">
                    
                    <button className="btn btn-primary btn-block confirm-button" onClick={focusFoc}>Confirm</button>
                    
                </div>
                <div className="col-sm-6 text-center">
                    <button type='submit' className="btn btn-danger btn-block confirm-button" onClick={hideFormCS}>Exit</button>
                </div>
            </div>

        </div>
    </div>
</FS>
    </form>
        </div>
    </Modal>)
  )
}

export default FormCS