import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Login from "./Login";


export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  render() {
    const { authenticated } = this.props;
    return (
      
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        

        {authenticated ? (
          <li onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={this._handleClick}>Login</li>
        )}
        <li>
        
        </li>
        
      </ul>
      
    );
  }

  _handleClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:4000/auth/twitter", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}