import React, { Component  } from "react";
import "./glossary.jsx"
import jsonGloss from "./glossary.jsx";
import "./button.css"


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