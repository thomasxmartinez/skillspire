import React, { Component } from "react";
import preload from './defs.json';


let Sort = preload.map(file => file.vocabulary);



class Example extends Component {
    render() {

        function vocab (abc) {
            let alpha = abc;
            alpha.sort();

            let lines = [];
            for (var i=0; i<alpha.length; i++){
                lines.push(<li> {alpha[i]} </li>)
            }

            return lines;
        }

        return (
            <div>
                <pre>
                    <ul>
                        {vocab(Sort)}
                    </ul>
                </pre>
            </div>
        );
    }
}
export default Example;