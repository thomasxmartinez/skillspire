import React from 'react';
import Bootstrap from '../css/bootstrap/bootstrap.min.css';
import * as $ from 'jquery';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';



class Navigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
        };
      }
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  
                  <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle }>
            <DropdownToggle caret color="default" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Menu
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem >Something else here</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
                </li>
              </ul>
            </div>
          </nav>
 
        );
    }
}

  


export default Navigation;