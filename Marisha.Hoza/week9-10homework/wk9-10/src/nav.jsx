import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid black;
    padding: 0.5em;
`

 
const Navigation = () => (
	<Wrapper>
        <Link to="/"> ALL </Link>
        <br/>
		<Link to="/a"> A </Link>
		<Link to="/b"> B </Link>
		<Link to="/c"> C </Link>
		<Link to="/d"> D </Link>
		<Link to="/e"> E </Link>
		<Link to="/f"> F </Link>
		<Link to="/g"> G </Link>
		<Link to="/h"> H </Link>
		<Link to="/i"> I </Link>
		<Link to="/j"> J </Link>
		<Link to="/k"> K </Link>
		<Link to="/l"> L </Link>
		<Link to="/m"> M </Link>
		<Link to="/n"> N </Link>
		<Link to="/o"> O </Link>
		<Link to="/p"> P </Link>
		<Link to="/q"> Q </Link>
		<Link to="/r"> R </Link>
		<Link to="/s"> S </Link>
		<Link to="/t"> T </Link>
		<Link to="/u"> U </Link>
		<Link to="/v"> V </Link>
		<Link to="/w"> W </Link>
		<Link to="/x"> X </Link>
		<Link to="/y"> Y </Link>
		<Link to="/z"> Z </Link>
	</Wrapper>
);




export default Navigation;