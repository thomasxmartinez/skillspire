import React, { Component}  from 'react';
import './alert2.js';
import './alert3.js';


function DisplayAlert (props) {
    return <p> props.firstWord + props.secondWord + props.thirdWord</p>
}

export default DisplayAlert;
