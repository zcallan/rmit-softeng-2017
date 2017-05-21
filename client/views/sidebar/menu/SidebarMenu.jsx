import './sidebarMenu.scss';
import React from 'react';
import SidebarMenuItems from './items';


const SidebarMenu = ({ companies }) => {
  return (
    <div className="sidebar-menu">
      <img src={companies.active && companies.list[companies.active].logo} />
      <SidebarMenuItems />
    </div>
  );
};

export default SidebarMenu;
