import './dashboardItem.scss';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className="dashboard-item">
          <i className="material-icons">{this.props.icon}</i>
          {this.props.title}
        </div>
      </Link>
    );
  }
}

DashboardItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default DashboardItem;
