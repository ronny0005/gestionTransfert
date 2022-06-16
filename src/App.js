import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import "./styles.css";
import GlobalStyle from './GlobalStyle';
import Layout from './components/layout/Layout';
import Transfert from "./Pages/Transfert";
import Caisse from "./Pages/Caisse";
import Devise from "./Pages/Devise";
import Compense from "./Pages/Compense";
import {IconContext} from 'react-icons'
import OperationEncour from "./Pages/OperationEncour";
import Login from "./Pages/Login";
import { useState } from "react";
import Achat from "./Pages/Achat";

function App() {
  // console.log(document.location.pathname)
  // console.log(Location.)

  // const layou = document.location.pathname !== '/';
  // console.log(layou)
  const [layou, setLayou] = useState(false)
  const layoo = () => {
    if(document.location.pathname !== '/'){
      return true
    } else {
      return false
    }
    
  }
  return (

      <Router>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <GlobalStyle />
            <Layout layou={layoo}>
              <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/transfert' element={<Transfert />} />
              <Route exact path='/ventedevise' element={<Devise />} />
              <Route exact path='/achatdevise' element={<Achat />} />
              <Route exact path='/compense' element={<Compense />} />
              <Route exact path='/caisse' element={<Caisse />} />
              <Route exact path='/operationencour' element={<OperationEncour />} />
              </Routes>
            </Layout>
         </IconContext.Provider>
      </Router>

  );
}

export default App;
