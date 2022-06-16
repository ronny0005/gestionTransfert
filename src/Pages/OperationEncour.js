import React from 'react'
import styled from 'styled-components'

const Operation= styled.div`
        background-color: none;
        height:100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        font-weight: 700;
        width: 100%;
    .answerContainer {
      overflow-x: "auto";
      /* background-color: red; */
      width: 100%;
      
    }

    .answers {
      border-collapse: collapse;
      width: 100%;
    }

    .answers td,
    .answers th {
      border: 1px solid gray;
      padding: 15px;
    }

    .answers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: red;
      color: white;
      text-transform: uppercase;
    }
    .btnInfo {
      background-color: red;
      border: 2px solid red;
      color: white;
      text-transform: uppercase;
      border-radius: 4px;
      cursor: pointer;
      margin: 0;
      padding: 9px;
      width: 100%;
      font-size: 15px;
    }

    .btnInfo:hover {
      background-color: blueviolet;
      border: 2px solid blueviolet;
      color: white;
    }
`
const OperationEncour = () => {
    
  return (
    <Operation>
            {/* <hr />
            <p>Les réponses aux questions posées:</p> */}

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Operation</th>
                            <th>Fournisseur</th>
                            <th>Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr >
                        <td>Operation</td>
                        <td>                            
                            <select name="title" className="btnInfo">
                                <option  value="title">Choisir le Fournisseur</option>
                                <option  value="Fournisseur1">Fournisseur 1</option>
                                <option  value="Fournisseur2">Fournisseur 2</option>
                                <option  value="Fournisseur3">Fournisseur 3</option>
                            </select></td>
                        <td>
                            <button 
                              className="btnInfo"
                              
                            >
                            Validé
                            </button>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
    </Operation>
  )
}

export default OperationEncour