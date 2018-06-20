import React, { Component  } from "react";
import "./glossary.jsx"


class Button extends Component{

function resultAll(){
    document.getElementById('results').innerHTML = "hello" 
}


render(){
    return(
        <div>
            <button onClick={ resultAll }>press

            </button>
            <p id='results'></p>
        </div>

    )
}
}

export default Button;