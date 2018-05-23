import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 32%;
broder: 2px solid #fafaf7;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;
`;

const Puppies = () => (
    <Wrapper className="puppies">
    <h1> Marisha hates puppies</h1>
    <input type="text" placeholder="Search"/>
    <Link to="/search"> or Browza</Link>
    </Wrapper>
)


export default Puppies;