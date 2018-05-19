import React from 'react';
import { Link } from 'react-router-dom';
const Wowza = () => (
  <div className="wowza">
    <h1> wowzers</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search"> or Browza</Link>
  </div>
);

export default Wowza;
