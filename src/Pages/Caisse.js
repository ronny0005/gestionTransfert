import React from 'react'
import styled from 'styled-components'

const CaissePage = styled.div`
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
const Caisse = () => {
    
  return (
    <CaissePage>
            {/* <hr />
            <p>Les réponses aux questions posées:</p> */}

            <div className="answerContainer">
                <table className="answers">
                    <thead>
                        <tr>
                            <th>Caisse</th>
                            <th>Collaborateur</th>
                            <th>Entrée</th>
                            <th>Sortie</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr >
                        <td>Caisse</td>
                        <td>Collaborateur</td>
                        <td>Entrée</td>
                        <td>Sortie</td>

                      </tr>
                    </tbody>
                </table>
            </div>
    </CaissePage>
  )
}

export default Caisse