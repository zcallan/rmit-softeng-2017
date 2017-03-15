import './sidebarLink.scss';
import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';


const SidebarLink = ({ to, toggleSidebar, text, icon }) => (
  <Link
    className="sidebar-link"
    to={to}
    onClick={() => toggleSidebar()}
  >
    {icon && <i className="material-icons">{icon}</i>}
    <p>{text}</p>
  </Link>
);

SidebarLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  toggleSidebar: PropTypes.func,
  icon: PropTypes.string,
};

export default SidebarLink;
