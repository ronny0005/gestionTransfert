import React from 'react'
import styled from "styled-components";
// import 'bootstrap/dist/css/'
import 'bootstrap/dist/css/bootstrap.min.css';
const Modal = styled.div`
    position: fixed;
    z-index: 1;
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

    .modalHeader {
    background-color: var(--dark-red-color);
    padding: 15px;
    color: var(--white-color);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    }

    .modalHeader h2 {
    margin: 0;
    color: var(--white-color);
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

const FormJS = ({openFormCS, hideFormCS}) => {
  return (
    
    <Modal>
        <div className='modalContainer' >
        <div className="container modalBody">
        <main >
            <div className="py-5 text-center">
            <h2>Checkout form</h2>
            
            </div>

            <div className="row g-5">

            <div className="col-md-12 col-lg-12">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" novalidate>
                <div className="row g-3">
                
                    <div className="col-sm-6">
                    <label for="firstName" className="form-label">Nom complet</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                    <div className="invalid-feedback">
                        Entrée un nom.
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <label for="tel" className="form-label">Téléphone</label>
                    <input type="tel" className="form-control" id="tel" placeholder="6xxxxxxxx" required/>
                    <div className="invalid-feedback">
                        Entrée un numero de telephone.
                    </div>
                    </div>


                    <div className="col-12">
                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Entrée une adresse mail.
                        </div>
                    </div>
                    </div>

                    <div className="col-6">
                    <label for="typedoc" className="form-label">Type de document</label>
                    <select className="form-select" id="typedoc" required>
                        <option value="" disabled>Choose...</option>
                        <option selected >CNI</option>
                        <option>Carte de séjour</option>
                        <option>Passport</option>
                        <option>Permis de conduire</option>
                    </select>
                    <div className="invalid-feedback">
                        Entrée un numéro de document.
                    </div>
                    </div>
                    
                    <div className="col-6">
                    <label for="document" className="form-label">N° du document</label>
                    <input type="number" className="form-control" id="document" placeholder="xxxxxxxxxxx" required/>
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

</div>     
        </div>
    </Modal>)
  
}

export default FormJS