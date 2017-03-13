import './sidebarLink.scss';
import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';


const SidebarLink = ({ to, toggleSidebar, text, icon }) => (
  <NavLink
    className="sidebar-link"
    to={to}
    onClick={() => toggleSidebar()}
    activeClassName="active"
    exact
  >
    {icon && <i className="material-icons">{icon}</i>}
    <p>{text}</p>
  </NavLink>
);

SidebarLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  toggleSidebar: PropTypes.func,
  icon: PropTypes.string,
};

export default SidebarLink;
