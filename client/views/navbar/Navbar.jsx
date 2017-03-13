import './navbar.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';


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
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>,
        <li>
          <Link to="/register">Register</Link>
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
            <h1>Company Name</h1>
          </Link>
        </div>

        {authenticated ? (
          <ul>
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
