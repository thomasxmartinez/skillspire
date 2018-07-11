import React, { Component  } from "react";
import jsonGloss from '../glossary.jsx';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



 
    var firstLetterResults = [];


class ButtonN extends Component{
  
   

 resultAll = () => {
    
    for( var i = 0; i < jsonGloss.length; i++ ){
        if (jsonGloss[i].firstLetter === "n" ){
                firstLetterResults.push('<li>' + jsonGloss[i].Def + '</li>')
        
    }}
   

   return document.getElementById('resultsdef').innerHTML='<td>' + firstLetterResults + '</td>'
}


render(){
    return(
        <div>
            <button onClick={ this.resultAll }>N

            </button>
            <Wrapper>
                <ol id='resultsdef'>
                    
                </ol>
            </Wrapper>
            
            
        </div>

    )
}
}

export default ButtonN;