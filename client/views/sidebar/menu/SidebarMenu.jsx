import './sidebarMenu.scss';
import React from 'react';
import SidebarMenuItems from './items';
import branding from 'config/branding.json';


const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <img src={branding.logo} />
      <SidebarMenuItems />
    </div>
  );
};

export default SidebarMenu;
