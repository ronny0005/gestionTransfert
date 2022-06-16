import React from 'react'
import styled from 'styled-components'
import OptionHome from '../components/OptionHome'
import img from '../images/1.jpg'
import {Services as links} from "../components/layout/Services";
import { Link } from 'react-router-dom';

const HomePage = styled.div`
  background-image: url(${img}) ;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  padding: 20px;
  display: grid;
  justify-content: center;
  font-weight: 700;
`
const Div = styled.div`
  display: grid;
  
`
const Home = () => {
  return (
    <HomePage>
      

      
        {links.map((l, index) => (
          <Link key={index} to={l.to}>
            <OptionHome  label={l.label}/>
          </Link>
        
      ))}

      
  
      
    </HomePage>
  )
}

export default Home