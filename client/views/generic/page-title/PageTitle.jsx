import './pageTitle.scss';
import React, { Component, PropTypes } from 'react';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <h1>{this.props.pageTitle.title}</h1>
        <small>{this.props.pageTitle.subtitle}</small>
      </div>
    );
  }
}

PageTitle.propTypes = {
  pageTitle: PropTypes.object,
};

export default PageTitle;
