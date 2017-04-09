import './contact.scss';
import React, { Component } from 'react';
import { Row, Col } from 'flex-react';
import config from 'config/branding.json';

class Contact extends Component {
  componentDidMount() {
    document.title = `Contact | ${config.companyName}`;
    this.props.setPageTitle( 'Contact', 'Our company contact information can be viewed here' );
  }

  render() {
    return (
      <Row className="contact-page">
        <Col sm={12} className="text-center">
          <img className="logo" src={config.logo} />
          <p><b>Company Owner:</b> {config.companyOwnerName}</p>
          <p><b>Company Address:</b> {config.companyAddress}</p>
          <p><b>Company Phone:</b> {config.companyPhone}</p>
        </Col>
      </Row>
    );
  }
}

export default Contact;
