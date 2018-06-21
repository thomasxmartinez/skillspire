import React, { Component  } from "react";
import "./glossary.jsx"


class Button extends Component{

 resultAll = () => {
    document.getElementById('results').innerHTML = "hello" 
}


render(){
    return(
        <div>
            <button onClick={ this.resultAll }>press

            </button>
            <p id='results'></p>
        </div>

    )
}
}

export default Button;