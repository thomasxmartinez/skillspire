import React, { Component  } from "react";
import jsonGloss from "../glossary.jsx";
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



 var keyResults = [];
    var defResults = [];


class Button extends Component{
  
   

 resultAll = () => {
    
    for( var i = 0; i < jsonGloss.length; i++ ){
        defResults.push('<li>' + jsonGloss[i].Def + '</li>')
        
    }
   

   return document.getElementById('resultsdef').innerHTML='<td>' + defResults + '</td>'
}


render(){
    return(
        <div>
            <button onClick={ this.resultAll }>press for vocab words & def

            </button>
            <Wrapper>
                <ol id='resultsdef'>
                    
                </ol>
            </Wrapper>
            
            
        </div>

    )
}
}

export default Button;