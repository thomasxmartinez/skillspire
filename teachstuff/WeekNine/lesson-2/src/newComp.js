import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//tagged template literal valid js
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Wowza = () => (
  <Wrapper className="wowza">
    <h1> wowzers</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search"> or Browza</Link>
    {/*
  generates anchor tag with correct url
*/}
  </Wrapper>
);

export default Wowza;
