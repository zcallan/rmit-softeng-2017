import './not-found.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from 'config/branding.json';

class NotFound extends Component {
  componentDidMount() {
    document.title = `Page not found | ${config.companyName}`;
  }

  render() {
    return (
      <div className="not-found">
        <h2>Page not found. Sorry!</h2>

        <Link to="/">Return to home</Link>
      </div>
    );
  }
}

export default NotFound;
