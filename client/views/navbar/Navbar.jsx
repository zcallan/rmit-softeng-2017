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
    const { active, list } = this.props.companies;

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <i className="material-icons" onClick={this.toggleSidebar}>menu</i>
          <Link to="/">
            <h1>{active ? list[active].name : 'Company'}</h1>
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
