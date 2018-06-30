import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import preload from './vocabulary.json';


const Wrapper = styled.div`
	height: auto;
	width: 75%;
    margin: auto;
    text-align: left;
    white-space: pre-line;
`;


const Def = styled.li`
	padding: 0.5em;
	font-family: sans-serif;
`;




let allDefinitions = preload.map(file => file.definition);

let wholeFile = preload.map(file => (file.definition.charAt(0).toUpperCase()));


function sortMe(letter) {
    let justLetter = []
    for (var i = 0; i < wholeFile.length; i++) {
        if (wholeFile[i] == letter) {
            justLetter.push(<Def> {allDefinitions[i]} </Def>)
        }
    }
    return justLetter
} 



class Sort extends React.Component {
    render(){
        let choice = (this.props.choice);
        return(
            <Wrapper>
                {sortMe(choice)}
            </Wrapper>
        )
    }
};



export default Sort;