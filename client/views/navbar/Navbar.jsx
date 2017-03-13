import './navbar.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  static propTypes = {
    toggleSidebar: PropTypes.func,
  }

  toggleSidebar = () => {
    this.props.toggleSidebar();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <i className="material-icons" onClick={this.toggleSidebar}>menu</i>
          <Link to="/">
            <h1>Company Name</h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
