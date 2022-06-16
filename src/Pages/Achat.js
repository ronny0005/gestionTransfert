import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import styled from 'styled-components';

const AchatPage = styled.div`
    background-color: white;
    font-size: 1.5em;
    height:100%;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    justify-content: center;
    width: 80%;
    box-shadow: 0px 0px 39px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 39px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 39px -10px rgba(0,0,0,0.75);
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    /* width: 75%; */
    .input-group{
        margin-top: 10px !important;
        margin-bottom: 10px !important;
        }   
`
const Achat = () => {
  return (
    <div
    style={{
        background: 'rgb(0,212,255)',
        background: 'linear-gradient(311deg, rgba(0,212,255,0.3015405991498161) 0%, rgba(144,144,255,0.7553221117548582) 36%, rgba(34,102,164,0.4247898988697041) 63%, rgba(0,212,255,0.32114844228707107) 100%)' 
    }}
    >
        <AchatPage className="container">
  
    <form className="needs-validation" novalidate>
        <div className="row g-5">

        <div className="col-md-5 col-lg-4 order-md-last bg-dark bg-gradient pt-5 mb-5">
            
            <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary"> </span>
            <span className="badge bg-primary rounded-pill">Recapitulatif</span>
            </h4>
            <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className='py-1'>
                <h5 className="my-0 ">Nom du produit : </h5>
                
                </div>
                <span className="text-muted">Livre Sterling (£)</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className='pt-1'>
                <h5 className="my-0">Prix d'achat</h5>
                
                </div>
                <span className="text-muted">1£ = xxx Fcfa</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className='pt-1'>
                <h5 className="my-0">Quantité</h5>
                
                </div>
                <span className="text-muted">£50</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span>Net à payer(XAF)</span>
                <strong>20 Fcfa</strong>
            </li>
            </ul>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Valider l'operation</button>
        </div>
        <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Formulaire d'achat de devises</h4>
            <div className="col-12 mb-3">
                <div className="input-group has-validation">
                    <span className="input-group-text">Depôt </span>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected value="Dla">Douala</option>
                        <option value="Ydé">Yaoundé</option>
                        <option value="Baf">Baffousam</option>
                    </select>
                   
                    <div className="invalid-feedback">
                        Depôt invalide.
                    </div>
                </div>
            </div>
        
            
            <div className="row g-3">
                <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Nom complet</label>
                <input type="text" className="form-control" list="dataclient"  id="firstName" placeholder="Nom" required/>
                <datalist id="dataclient">
                  <select name="title" className="input-text">
                      <option  value="client1">Client ana 1</option>
                      <option  value="client2">Client polo 2</option>
                      <option  value="client3">Client ron5 3</option>
                  </select>
                </datalist>
                <div className="invalid-feedback">
                    Veuillez Entrée un nom.
                </div>
                </div>

                <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Téléphone</label>
                <input type="text" className="form-control" id="lastName" placeholder="Téléphone" required />
                <div className="invalid-feedback">
                    Veuillez Entrée un numéro de télephone.
                </div>
                </div>

                <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control " id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
                </div>


                <div className="col-12">
                <label htmlFor="state" className="form-label">Monnaie</label>
                <div className="input-group has-validation">
                    <span className="input-group-text">£ </span>
                    <select className="form-select" id="monnaie" required>
                        <option value="">Choose...</option>
                        <option>Euro</option>
                        <option>Dollar</option>
                        <option>EUR</option>
                    </select>
                <div className="invalid-feedback">
                    Your username is required.
                    </div>
                </div>
                </div>
                <div className="col-12">
                <label htmlFor="email" className="form-label">Provenence</label>
                <input type="text" className="form-control" id="provenence" placeholder="Provenence des devises"/>
                <div className="invalid-feedback">
                    Entrée une provenence valide.
                </div>
                </div>

                <div className="col-md-6">
                <div className="input-group has-validation">
                    <span className="input-group-text">Qté </span>
                    <input type="number" className="form-control h-100" id="qté" placeholder="Quantité" value="" required />
                    <div className="invalid-feedback">
                    Qté invalide.
                    </div>
                </div>
                </div>

                <div className="col-md-6">
                <div className="input-group has-validation">
                    <span className="input-group-text">PU </span>
                    <input type="number" className="form-control  h-100 " id="pu" placeholder="Prix unitaire" value="" required/>
                    <div className="invalid-feedback">
                    Prix Unitaire invalide.
                    </div>
                </div>
                </div>
            </div>

            <hr className="my-4"/>
        </div>
        </div>
        </form>
    
    </AchatPage></div>
  )
} 

export default Achat