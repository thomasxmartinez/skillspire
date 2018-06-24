import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border : 2px;
  padding-right: 10px;
  overflow: hidden;
`

const Puppies = () => (
  <Wrapper className='puppies'>

  <h1>sdfasd</h1>
  <input type='text' placeholder="Search"/>
  <Link to='search'> or browza </Link>

</Wrapper>
)

export default Puppies;
