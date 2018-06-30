import React from "react";
import preload from "./vocabulary.json";
import styled from "styled-components";



const Wrapper = styled.div`
	height: auto;
	width: 75%;
    margin: auto;
`;

const List = styled.pre`
	text-align: left;
    white-space: pre-line;
`;

const Def = styled.li`
	padding: 0.5em;
	font-family: sans-serif;
`;


const AllWords = () => (
    <Wrapper>
        <List>
            {preload.map(file => (
                <Def>{file.definition}</Def>
            ))}
        </List>
    </Wrapper>
);



export default AllWords;