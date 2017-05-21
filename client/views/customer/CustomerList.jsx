/* Import the dependencies */
import './customerList.scss';
import React, { Component, PropTypes } from 'react';
import { IconCard, UserCard } from 'views/generic';
import { Row, Col } from 'flex-react';
import API from 'utils/api/api.js';
import config from 'config/branding.json';

/* Create the customer list component */
class CustomerList extends Component {
  /* Defines the prop types for this component */
  static propTypes = {
    requestedCustomers: PropTypes.func,
    receivedCustomers: PropTypes.func,
    fetchCustomersFail: PropTypes.func,
    customers: PropTypes.object,
  }

  /* When the component mounts set the page title and fetch a list of customers */
  componentDidMount() {
    document.title = `Customers | ${config.companyName}`;
    this.props.setPageTitle( 'Customers', 'A list of registered customers' );
    this.props.requestedCustomers();

    API.getCustomers().then(({ data }) => {
      this.props.receivedCustomers( data );
    }).catch(() => {
      this.props.fetchCustomersFail();
    });
  }

  /* Render the customer list */
  render() {
    const { fetching, list, error } = this.props.customers;

    return (
      <div className="employee-list">
        {( list ) ? (
          <div className="employee-list-group">
            <Row>
            {( list.length > 0 ) ? list.map( customer => (
              <Col sm={4} key={customer.email}>
                  <UserCard user={customer} />
              </Col>
            )) : (
              <Row>
                <Col sm={6} smOffset={3}>
                  <IconCard icon="person_add">
                    <h3>No customers</h3>
                    <p>
                      There is currently no customers on record,
                      add one by clicking the link below
                    </p>
                  </IconCard>
                </Col>
              </Row>
            )}
            </Row>
          </div>
        ) : ( fetching ) ? (
          <Row>
            <Col sm={6} smOffset={3}>
              <IconCard icon="cached">
                <h3>Loading customers</h3>
                <p>Please wait whilst customers load</p>
              </IconCard>
            </Col>
          </Row>
        ) : ( error ) ? (
          <Row>
            <Col sm={6} smOffset={3}>
              <IconCard icon="error_outline" error>
                <h3>Uh oh! An error has occurred.</h3>
                <p>Please refresh the page or try again later</p>
              </IconCard>
            </Col>
          </Row>
        ) : (
          <div className="employee-list-else">
            <IconCard icon="error_outline" error>
              <h3>Uh oh! An error has occurred.</h3>
              <p>Please refresh the page or try again later</p>
            </IconCard>
          </div>
        )}
      </div>
    );
  }
}

export default CustomerList;
