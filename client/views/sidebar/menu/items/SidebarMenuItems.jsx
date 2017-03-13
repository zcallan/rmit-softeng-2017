import './sidebarMenuItems.scss';
import React, { PropTypes } from 'react';
import SidebarLink from './link';
import routes from 'config/sidebar-menu.json';


const SidebarMenuItems = () => {
  return (
    <div className="sidebar-menu-items text-uppercase">
      {routes && routes.map(( route, i ) => {
        return route.divider
          ? <hr />
          : <SidebarLink
              key={i}
              to={route.path}
              text={route.name}
              icon={route.icon}
            />;
      })}
    </div>
  );
};

export default SidebarMenuItems;
