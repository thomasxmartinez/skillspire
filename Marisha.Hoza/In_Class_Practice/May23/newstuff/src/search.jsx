import React from "react";
import preload from './file.json';
import styled from 'styled-components';


const Wrapper = styled.div`
	height: auto;
	width: 25%;
	padding: 0 0 2em 0;
	margin: 1em;
	border-radius: 15px;
	background-color: aquamarine;
    border: 2px solid black;
    display: inline-block;
    margin-right: 10%;
`;

const Name = styled.p`
    font-size: 2em;
`

const Search = () => (
	<div>
		<pre>
			{preload.map(file => (
				<Wrapper>
					<Name>{`${file.name}`}</Name>
					<li>{`type: ${file.type}`}</li>
					<li>{`id: ${file.id}`}</li>
				</Wrapper>
			))}
		</pre>
	</div>
);


export default Search;