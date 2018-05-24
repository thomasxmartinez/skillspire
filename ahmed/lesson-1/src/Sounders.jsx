import React from 'react';
import preload from './pokemon.json';
import styled from 'styled-components';

const Steez = styled.div`
width: 32%;
broder: 2px solid #fafaf7;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px
overflow: hidden;
text-color: rebecca-purple`
;

const Sounders = () => (
    <Steez>
        <pre>
            {preload.map(document => (
                <div>
                    <li>{`this is your id ${document.id}`}</li> 
                    <li>{`Comments:  ${document.name}`}</li>
                    </div>
            ))}
            </pre>
        </Steez>
);



export default Sounders;