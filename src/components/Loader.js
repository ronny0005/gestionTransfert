import React, { Fragment } from 'react'
import styled from "styled-components";



const Load = styled.div`
    .loader {
  border: 10px solid red;
  border-radius: 50%;
  border-top: 10px solid black;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  margin: 40px auto 20px;
}

.loaderText {
  text-align: center;
  color: white;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`
const Loader = ({ loadingMsg, styling }) => {
    return (
        <Load>
            <div className="loader"></div>
            <p style={styling}>
                { loadingMsg }
            </p>
        </Load>
    )
}

export default Loader
