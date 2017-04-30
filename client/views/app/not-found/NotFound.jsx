/* This file provides the page not found view for the application */
import './not-found.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from 'config/branding.json';

class NotFound extends Component {
  /* When the component mounts / loads update the page title */
  componentDidMount() {
    document.title = `Page not found | ${config.companyName}`;
    this.props.setPageTitle( 'Page not found', 'Unfortunately this page could not be found' );
  }

  /* This function renders the component */
  render() {
    /* Render the page not found message and a return to home button */
    return (
      <div className="not-found">
        <h2>Page not found. Sorry!</h2>

        <Link to="/">Return to home</Link>
      </div>
    );
  }
}

export default NotFound;
