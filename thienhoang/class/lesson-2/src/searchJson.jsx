import React from 'react';
import preload from './sample.json';
import './search.css'

const Search = () => (
    <div>
        <pre>
            {preload.map(document => (
                <div>
                    <li className='listOne'> {`text = ${document.id}`}</li>
                    <li className='listTwo'> {`text = ${document.name + document.type}`}</li>
                    
                </div>
            ))}
        </pre>
    </div>
)

export default Search;