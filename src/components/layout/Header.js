import styled from "styled-components";
import { breakpoints as bp } from "../../GlobalStyle";
import { useState } from "react";
import Tooltip from "../../ui/Tooltip";
import { Avatar, IconButton } from "../../ui/core";
import img from '../../images/logo.png';
import head from '../../images/head.webp';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ButtonH from "../ButtonH";
import FormCS from "../../Pages/FormCS";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FormUS from "../../Pages/FormUS";

const Grid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 1fr min-content;
  height: min-content;
  align-items: stretch;
  /* background-color: black; */
  background-image: url(${head});
  padding: 0 24px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
    height: 48px;
    line-height: 48px;
  }
  .nav-toggle {
    pointer-events: none;
    opacity: 0;
    @media (max-width: ${bp.desktop}) {
      opacity: 1;
      pointer-events: all;
    }

  }
  .boutonn{
    display: flex;
    @media (max-width: ${bp.desktop}) {
      display: grid;
      
      /* grid-auto-rows : auto */
    }
    
  }
  
`;

const ButtonG = styled.button`
  white-space: nowrap;
  display: flex;
  padding: 5px 20px;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 25px;

  font-family: 'Nunito', sans-serif;
  /* letter-spacing: 1.3px; */
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 1px 1px 10px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  /* position: relative; */
  /* padding: 10px; */

  button::before {
  content: '';
  /* border-radius: 1000px; */
  /* min-width: calc(300px + 12px);
  min-height: calc(60px + 12px); */
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

  &:hover, &:focus {
  color: #313133;
  border: 3px solid #ffffff;
  transform: translateY(-6px);
  }
  
  

`;




function Header({ toggle }) {
  const [openFormCS, setopenFormCS] = useState(false);
  const [openFormUS, setopenFormUS] = useState(false);
  const showFormCS = id => {
    setopenFormCS(true);
  }
  const hideFormCS = id => {
    setopenFormCS(false);
  }

  const showFormUS = id => {
    setopenFormUS(true);
  }
  const hideFormUS = id => {
    setopenFormUS(false);
  }
  
  return (
    <Grid>
      <IconButton
        className="nav-toggle"
        onClick={toggle}
        icon={faBars}
        style={{ marginLeft: "-11px" }}
      />

      <div className="mid">
        <img src={img} alt="Money-X" className='img-banner' />
      </div>
      <div className="boutonn">
        <ButtonG onClick={showFormCS}>Ajouter un Client / Founisseur</ButtonG>
        <ButtonG onClick={showFormUS}>Ajouter un utilisateur</ButtonG>
        <ButtonG >Ajouter un collaborateur</ButtonG>
        <ButtonG >Ajouter un caisse</ButtonG>

        {/* <ButtonH /> */}
      </div>
      <div>

        <Tooltip text="Déconnexion">

          <IconButton bg="primary" size={5}>
            <Avatar
              size={5}
              bg="primary"
              image="Test"
              name="Test"
            >ddd</Avatar>
          </IconButton>
        </Tooltip>
        {/* <Tooltip
          text="Lorem ipsum dolor sit amet del consectitore"
          bg="secondary"
        >
          <Button onClick={async () => await auth.signOut()}>Sign Out</Button>
        </Tooltip> */}
      </div>
      <FormCS openFormCS={openFormCS} hideFormCS={hideFormCS} />
      <FormUS openFormUS={openFormUS} hideFormUS={hideFormUS} />

    </Grid>
  );
}

export default Header;
