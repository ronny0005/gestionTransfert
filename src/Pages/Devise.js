import React, { Fragment, useRef, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './css/montserrat-font.css';
import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import { Countries } from '../components/Countries';
import FormCS from './FormCS';
import { GiTakeMyMoney } from 'react-icons/gi';
import { GiCardExchange } from 'react-icons/gi';
import { MdOutlineSendToMobile } from 'react-icons/md';
import { FaEuroSign } from 'react-icons/fa';


const DevisePage = styled.div`
  /* background-color: purple; */
  height:100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  /* font-weight: 700; */
  
.body {
	margin:  0;
}
.page-content {
	width: 100%;
	margin:  0 auto;
	/* background: #75e2e9; */
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	-o-justify-content: center;
	-ms-justify-content: center;
	-moz-justify-content: center;
	-webkit-justify-content: center;
	align-items: center;
	-o-align-items: center;
	-ms-align-items: center;
	-moz-align-items: center;
	-webkit-align-items: center;
	/* background-image: -moz-linear-gradient( 136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%);
    background-image: -webkit-linear-gradient( 136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%);
    background-image: -ms-linear-gradient( 136deg, rgb(149,153,226) 0%, rgb(139,198,236) 100%); */
}
.form-v10-content  {
	background: #fff;
	width: 95%;
	border-radius: 10px;
	-o-border-radius: 10px;
	-ms-border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
	-o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
	-ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
	margin: 10px 0;
	position: relative;
	font-family: 'Montserrat', sans-serif;
}
.form-v10-content .form-detail {
	position: relative;
	width: 100%;
	display: flex;
	display: -webkit-flex;
}
.form-v10-content .form-detail h2 {
	font-weight: 500;
	font-size: 25px;
	margin-bottom: 34px;
	padding: 33px 50px 0px 60px;
}
.form-v10-content .form-detail .form-left {
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	width: 100%;
}
.form-v10-content .form-detail .form-left h2 {
	color: #2271dd;
}
.form-v10-content .form-detail .form-right {
	width: 100%;
	background: green;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
.form-v10-content .form-detail .form-right h2 {
	color: #fff;
}
.form-v10-content .form-detail .form-group {
	display: flex;
	display: -webkit-flex;
}
.form-v10-content .form-detail .form-row {
	position: relative;
	margin-bottom: 24px;
	padding-left: 60px;
    padding-right: 50px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1 {
	width: 50%;
	padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2 {
	width: 50%;
	padding: 0 50px 0 12px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3 {
	width: 73%;
	padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 {
	width: 50%;
	padding: 0 50px 0 12px;
}
.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1 {
	width: 50%;
	padding: 0 12px 0 60px;
}
.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
	width: 100%;
	padding: 0 50px 0 12px;
}
.form-v10-content .form-detail select,
.form-v10-content .form-detail input {
	width: 100%;
    padding: 11.5px 15px 15px 15px;
    border: 1px solid transparent;
    background: transparent;
    appearance: unset;
    -moz-appearance: unset;
    -webkit-appearance: unset;
    -o-appearance: unset;
    -ms-appearance: unset;
    outline: none;
    -moz-outline: none;
    -webkit-outline: none;
    -o-outline: none;
    -ms-outline: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
}
.form-v10-content .form-detail select {
	background: 0 0;
	position: relative;
	z-index: 9;
	cursor: pointer;
}
.form-v10-content .form-detail .form-left select {
	color: #666;
}
.form-v10-content .form-detail .form-right select {
	color: #f2f2f2;
}
.form-v10-content .form-detail .select-btn {
	z-index: 0;
    position: absolute;
    top: 30%;
    right: 11.5%;
    font-size: 18px;
}
.form-v10-content .form-detail .form-left .select-btn {
    color: #666;
}
.form-v10-content .form-detail .form-right .select-btn {
    color: #f2f2f2;
}
.form-v10-content .form-detail .form-group .form-row.form-row-4 .select-btn {
	top: 20%;
	right: 26%;
}
.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
	top: 20%;
	right: 19%;
}
.form-v10-content .form-detail .form-left input {
	color: #000;
}
.form-v10-content .form-detail .form-right input {
	color: #fff;
}
.form-v10-content .form-detail .form-left input,
.form-v10-content .form-detail .form-left select {
	border-bottom: 1px solid #ccc;
}
.form-v10-content .form-detail .form-left input:focus,
.form-v10-content .form-detail .form-left select:focus {
	border-bottom: 1px solid #999;
}
.form-v10-content .form-detail .form-right input,
.form-v10-content .form-detail .form-right select {
	border-bottom: 1px solid;
	border-bottom-color: rgba(255, 255, 255, 0.3);
}
.form-v10-content .form-detail .form-right input:focus,
.form-v10-content .form-detail .form-right select:focus {
	border-bottom: 1px solid #ccc;
}
.form-v10-content .form-detail .form-right select option {
	background: #4835d4;
}
.form-v10-content .form-detail .form-checkbox {
	margin-top: 37px;
	padding: 0 50px 0 60px;
	position: relative;
}
.form-v10-content .form-detail .form-checkbox input {
	position: absolute;
    opacity: 0;
}
.form-v10-content .form-detail .form-checkbox .checkmark {
	position: absolute;
    top: 1px;
    left: 60px;
    height: 15px;
    width: 15px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
}
.form-v10-content .form-detail .form-checkbox .checkmark::after {
	content: "";
    position: absolute;
    left: 5px;
   	top: 1px;
    width: 3px;
    height: 8px;
    border: 1px solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    display: none;
}
.form-v10-content .form-detail .form-checkbox input:checked ~ .checkmark::after {
    display: block;
}
.form-v10-content .form-detail .form-checkbox p {
    margin-left: 34px;
    color: #e5e5e5;
    font-size: 14px;
    font-weight: 400;
}
.form-v10-content .form-detail .form-checkbox .text {
	font-weight: 400;
	color: #fff;
	text-decoration: underline;
}
.form-v10-content .form-detail .form-right .form-row-last {
    padding-left: 60px;
    margin: 44px 0 10px;
}
.form-v10-content .form-detail .form-right .register {
	background: #fff;
	border-radius: 25px;
	-o-border-radius: 25px;
	-ms-border-radius: 25px;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
	-o-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
	-ms-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
	-webkit-box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.15);
	width: 180px;
	border: none;
	margin: 6px 0 50px 0px;
	cursor: pointer;
	color: #333;
	font-weight: 700;
	font-size: 15px;
}
.form-v10-content .form-detail .form-right .register:hover {
	background: #ccc;
}
.form-v10-content .form-detail .form-right .form-row-last input {
	padding: 12.5px;
    padding-top: 5px;
}
.form-v10-content .form-detail .form-left input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input::-moz-placeholder { /* Firefox 19+ */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input:-ms-input-placeholder { /* IE 10+ */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-left input:-moz-placeholder { /* Firefox 18- */
  color: #666;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input::-moz-placeholder { /* Firefox 19+ */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input:-ms-input-placeholder { /* IE 10+ */
  color: #f2f2f2;
  font-size: 16px;
}
.form-v10-content .form-detail .form-right input:-moz-placeholder { /* Firefox 18- */
  color: #f2f2f2;
  font-size: 16px;
}

/* Responsive */
@media screen and (max-width: 1199px) {
	.form-v10-content {
		margin:  95px 20px;
	}
}
@media screen and (max-width: 991px) and (min-width: 768px) {
	.form-v10-content .form-detail .form-group {
		flex-direction:  column;
		-o-flex-direction:  column;
		-ms-flex-direction:  column;
		-moz-flex-direction:  column;
		-webkit-flex-direction:  column;
	}
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
	    width: auto;
	    padding: 0 50px 0 60px;
	}
	.form-v10-content .form-detail .select-btn,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
		right: 15%;
	}

}
@media screen and (max-width: 767px) {
	.form-v10-content .form-detail {
		flex-direction:  column;
		-o-flex-direction:  column;
		-ms-flex-direction:  column;
		-moz-flex-direction:  column;
		-webkit-flex-direction:  column;
	}
	.form-v10-content .form-detail .form-right {
		border-top-right-radius: 0px;
    	border-bottom-left-radius: 10px;
	}
	.form-v10-content .form-detail .form-left {
		padding-bottom: 50px;
	}
}
@media screen and (max-width: 575px) {
	.form-v10-content .form-detail .form-group {
		flex-direction:  column;
		-o-flex-direction:  column;
		-ms-flex-direction:  column;
		-moz-flex-direction:  column;
		-webkit-flex-direction:  column;
	}
	.form-v10-content .form-detail .form-row,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-1,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-2,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-3,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-1,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 {
	    width: auto;
	    padding: 0 30px;
	}
	.form-v10-content .form-detail .select-btn,
	.form-v10-content .form-detail .form-left .form-group .form-row.form-row-4 .select-btn,
	.form-v10-content .form-detail .form-right .form-group .form-row.form-row-2 .select-btn {
		right: 15%;
	}
	.form-v10-content .form-detail h2 {
	    padding: 33px 30px 0px 30px;
	}
	.form-v10-content .form-detail .form-checkbox {
		padding: 0 30px;
	}
	.form-v10-content .form-detail .form-checkbox .checkmark {
		left: 30px;
	}
	.form-v10-content .form-detail .form-right .form-row-last {
		padding-left: 0;
		text-align: center;
	    margin: 44px 0 30px;
	}
}
.card{width:400px;
	background-color:#fff;
	border:none;
	border-radius: 12px}
label.radio{cursor: pointer;
	width: 100%}label
.radio input{position: absolute;
	top: 0;
	left: 0;
	visibility: hidden;
	pointer-events: none}
label.radio span{padding: 7px 14px;
	border: 2px solid #eee;
	display: inline-block;
	color: #039be5;
	border-radius: 10px;
	width: 100%;
	height: 48px;
	line-height: 27px}
label.radio input:checked+span{border-color: #039BE5;
	background-color: #81D4FA;
	color: #fff;
	border-radius: 9px;
	height: 48px;
	line-height: 27px}
.form-control{margin-top: 10px;
	height: 48px;
	border: 2px solid #eee;
	border-radius: 10px}
.form-control:focus{box-shadow: none;
	border: 2px solid #039BE5}
.agree-text{font-size: 12px}
.terms{font-size: 12px;
	text-decoration: none;
	color: #039BE5}
.confirm-button{height: 50px;
	border-radius: 10px}
`
const Devise = () => {
    
  const [openFormCS, setopenFormCS] = useState(false);
  const showFormCS = id => {
    setopenFormCS(true);
  }
  const hideFormCS = id => {
    setopenFormCS(false);
  }
const [img, setImg ] = useState("https://cdn.kcak11.com/CountryFlags/countries/cm.svg")
const [tInter, settInter ] = useState(false)
const [checked, setChecked] = useState('Cash')
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

const payment = e =>{
    // console.log(e.target)
    if(e.target.labels[0].classList.contains('btn-secondary')){
        e.target.labels[0].classList.remove('btn-secondary')
        e.target.labels[0].classList.add('btn-success')
        const old = document.getElementById(checked)
        old.labels[0].classList.remove('btn-success')
        old.labels[0].classList.add('btn-secondary')
        setChecked(e.target.value)
    }
}

  return (
      
    <DevisePage>
    <div className="form-v10 body" >
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" action="#" method="post" id="myform">
            <div className="form-left">
              
              <h2>Formulaire de ventes de devises</h2>


              <div className="form-row">
                <label htmlFor='depot'>Depôt</label>                              
                <select id='depot' name="depot" className="input-text">
                    <option  value="Dla" selected>Douala</option>
                    <option  value="Ydé">Yaoundé</option>
                    <option  value="Baffousam">Baffousam</option>
                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              
              <div className="form-row form-row-2">
                  <select name="country" >
                                    <option value="country" selected>Monnaie à vendre....</option>
                                    <option value="Euro"><FaEuroSign /> Euro</option>
                                    <option value="Dollar">Dollar</option>
                                    <option value="Livre">Livre sterling</option>
                                    <option value="Yen">Yen</option>
                                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
                </div>
                        {/* <div class="form-row">
                <input type="text" name="nomsender" class="input-text" id="nomsender"  placeholder="Nom Complet" value={''} disabled/>
              </div>
                        <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" name="tel" id="tel" className="input-text" placeholder="Télephone" value={''} disabled/>
                </div>
                <div className="form-row form-row-2">
                  <input type="email" name="last_name" id="emailS" className="input-text" placeholder="Email" value={''} disabled/>
                </div>
              </div> */}
                        <div className="form-row">
                  <input type="number" name="business" className="business" id="business" placeholder="Quantité" required/>
                </div>
                        <div className="form-group">
                            <div className=" form-row form-row-1">
                                <span className="input-group-text text-center">
                                EUR <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up mx-auto" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>XAF
                                </span>
                            </div>
                            <div className=" form-row form-row-2">
                                <span className="input-group-text text-center">
                                    Taux : <span className='mx-auto'> 1 EUR =  650 XAF </span>
                                </span>
                            </div>
                        </div>
                        <div className="form-row">
                            <input class="form-control" type="text" value={''} placeholder="Montant reçu..." aria-label="readonly input example" readonly />
              </div>
              {/* <div className="form-row">
                <input type="text" name="ville" id="ville" className="input-text" required placeholder="Ville"/>
              </div> */}
                                            
                        <div className="form-row">
                            <h4 className=" text-center card-title mb-3 text-light bg-primary" >Moyen de paiement</h4>
                            <div className="d-flex flex-row"> 
                                <div className="btn-group" onChange={payment} style={{width : "100%"}}>
                                    <input type="radio"  className="btn-check " name="payment" id="Cash" value="Cash"  autoComplete="off" />
                                    <label className="btn btn-success border font-weight-bold" htmlFor="Cash" style={{fontSize:'20px', fontWeight:'500'}}><GiTakeMyMoney size={"25px"} /> Cash</label>

                                    <input type="radio"  className="btn-check" name="payment" id="Compense" value="Compense" autoComplete="off" />
                                    <label className="btn btn-secondary border" style={{fontSize:'20px', fontWeight:'500'}} htmlFor="Compense"> <GiCardExchange size={"25px"}/> Compense</label>

                                    <input type="radio" className="btn-check" name="payment" id="Momo" value="Momo" autoComplete="off"/>
                                    <label 
                                        className="btn btn-secondary border" 
                                        style={{fontSize:'20px', fontWeight:'500'}} 
                                        htmlFor="Momo">
                                            <MdOutlineSendToMobile size={"25px"} /> Om/Momo</label>
                                </div>


                            </div>
                        </div>


            </div>
            <div className="form-right">

              <h2>Client Information</h2>
              <div className="form-row">
                <input id="client" type="text" list="dataclient" name="dataclient" className="input-text" placeholder='Choisir le client'/>
                <datalist id="dataclient">
                  <select name="title" className="input-text">
                      <option  value="client1">Client ana 1</option>
                      <option  value="client2">Client polo 2</option>
                      <option  value="client3">Client ron5 3</option>
                  </select>
                </datalist>
                <button onClick={showFormCS} type="button" class="btn btn-primary btn-floating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </button>
              </div>
              <div className="form-row">
                            <input type="text" name="nomreceiver" class="input-text" id="nomreceiver" placeholder="Nom Complet du Client" required/>
              </div>
              {/* <div className="form-row">
                <input type="text" name="additional" className="additional" id="additional" placeholder="Relation avec l'expediteur" required/>
              </div> */}

                        <div className="form-group">
                <div className="form-row form-row-0">
                                <img style={{width:'5em'}} src={img} alt="{name}"/> 
                </div>
                <div className="form-row form-row-2">
                  <select name="country">
                                    <option selected value="country">Cameroun</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="India">India</option>
                                </select>
                <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                </span>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <input type="text" value="+237" name="code" className="code" id="code" placeholder="Code +" required />
                </div>
                <div className="form-row form-row-2">
                  <input type="text" name="phone" className="phone" id="phone" placeholder="Numéro de Téléphone" required/>
                </div>
              </div>

              <div className="form-row-last">
                <input type="submit" name="register" className="register" value="Valider l'opération"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>        
    <FormCS openFormCS={openFormCS} hideFormCS={hideFormCS} />
    </DevisePage>
  )
}

export default Devise