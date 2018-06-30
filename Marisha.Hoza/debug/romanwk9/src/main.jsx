import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Example from './example.jsx';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>My Vocabulary List</h1>
                    <ul className="header">
                        <li><NavLink to="/example">Example</NavLink></li>
 

                    </ul>
                    <div className="content">
                        <Route path="/example" component={Example} />

                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default Main;