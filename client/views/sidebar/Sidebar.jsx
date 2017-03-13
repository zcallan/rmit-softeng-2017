import './sidebar.scss';
import ReactSidebar from 'react-sidebar';
import React from 'react';
import SidebarMenu from './menu';


const Sidebar = ({ sidebar, toggleSidebar, children }) => (
  <ReactSidebar
    sidebar={( <SidebarMenu /> )}
    open={sidebar}
    onSetOpen={toggleSidebar}
    contentClassName="sidebar-content"
    overlayClassName="sidebar-overlay"
    rootClassName="sidebar-root"
    sidebarClassName="sidebar-sidebar"
  >
    {children}
  </ReactSidebar>
);

Sidebar.propTypes = {
  sidebar: React.PropTypes.bool,
  toggleSidebar: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Sidebar;
