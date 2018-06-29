import React, { Component  } from "react";
import "./glossary.jsx"
import jsonGloss from "./glossary.jsx";
<<<<<<< HEAD
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

=======
import "./button.css"
>>>>>>> 259a48b3870f5a3f7b20fa9c36b410021ad51300


class Button extends Component{
   
    

 resultAll = () => {
    var keyResults = [];
    var defResults = [];
    for(var key = jsonGloss['firstLetter'], var def = jsonGloss['Def'], var i = 0; i < jsonGloss.length; i++ ){
        
    }

    // let first = JSON.stringify(jsonGloss, ['firstLetter'])
    // document.getElementById('resultsdef').innerHTML = JSON.stringify(jsonGloss, ['Def'])
}


render(){
    return(
        <div>
            <button onClick={ this.resultAll }>press

            </button>
            <ul><li>
                <tr>
                    <td><p>{first}</p>
                    </td>
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