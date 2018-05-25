import React from 'react';
import preload from './feedback.json';

const Search = () => (
  <div>
    <pre>
      {preload.documents.map(document => (
        <div>
          <li>{`this is your id # ${document.id}`}</li>
          <li>{`text = ${document.text}`}</li>
        </div>
      ))}
    </pre>
  </div>
);

export default Search;

//have an array of show data and want to transform an array to another thing it would be considered a map
//it is a basic arrow function that will
//preload.text is an array, map will call this function once on every element, whatever it returns is a new array
//we are transforming it into an array of react components
//template literal is the javascript object concatenated with a string
//would teach prop types but it has been depricated, some companies use prop types but not necessary
