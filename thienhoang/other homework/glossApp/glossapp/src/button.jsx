import React, { Component  } from "react";
import "./glossary.jsx"
import jsonGloss from "./glossary.jsx";
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



class Button extends Component{

 resultAll = () => {

    
    document.getElementById('resultsletter').innerHTML = JSON.stringify(jsonGloss, ['firstLetter'])
    document.getElementById('resultsdef').innerHTML = JSON.stringify(jsonGloss, ['Def'])
}


render(){
    return(
        <div>
            <button onClick={ this.resultAll }>press

            </button>
            <ul><li>
                <tr>
                    <td><p id='resultsletter'></p>
                    </td>
                </tr>
                <tr>
                    <td><p id='resultsdef'></p>
                    </td>
                </tr>       
                </li>
            </ul>
            
        </div>

    )
}
}

export default Button;