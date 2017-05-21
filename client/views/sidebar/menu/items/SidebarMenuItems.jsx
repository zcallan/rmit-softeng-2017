import './sidebarMenuItems.scss';
import React, { PropTypes } from 'react';
import SidebarLink from './link';
import map from 'lodash/map';
import routes from 'config/sidebar-menu.json';


const SidebarMenuItems = ({ user, companies, setCompany }) => {
  const routeSet = ( user.authenticated ) ? 'private' : 'public';

  return (
    <div className="sidebar-menu-items text-uppercase">
      {routes && routes[routeSet].map(( route, i ) => {
        return route.divider
          ? <hr />
          : <SidebarLink
              key={i}
              to={route.path}
              text={route.name}
              icon={route.icon}
            />;
      })}
      {map( companies.list, company => (
        <div className="sidebar-link" key={company.id} onClick={() => setCompany( company.id )}>
          <p>{company.name}</p>
        </div>
      ))}
    </div>
  );
};

SidebarMenuItems.propTypes = {
  user: PropTypes.object,
};

export default SidebarMenuItems;
