import './navbar.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import branding from 'config/branding.json';


class Navbar extends Component {
  static propTypes = {
    toggleSidebar: PropTypes.func,
    user: PropTypes.object,
  }

  toggleSidebar = () => {
    this.props.toggleSidebar();
  }

  renderPublicButtons() {
    return (
      <ul className="hide-xs">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }

  render() {
    const { authenticated } = this.props.user;

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <i className="material-icons" onClick={this.toggleSidebar}>menu</i>
          <Link to="/">
            <h1>{branding.companyName}</h1>
          </Link>
        </div>

        {authenticated ? (
          <ul className="hide-xs">
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        ) : this.renderPublicButtons()}
      </nav>
    );
  }
}

export default Navbar;
