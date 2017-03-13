import './sidebarMenu.scss';
import React from 'react';
import SidebarMenuItems from './items';


const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <img src="/images/sidebar-logo.png" />
      <SidebarMenuItems />
    </div>
  );
};

export default SidebarMenu;
