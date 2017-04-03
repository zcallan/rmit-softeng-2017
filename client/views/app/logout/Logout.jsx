import './logout.scss';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'views/generic';


class Logout extends Component {
  state = {
    authenticated: this.props.user.authenticated,
  }

  componentDidMount() {
    /* Remove the auth information from localStorage */
    localStorage.removeItem( 'auth' );

    this.props.userLogout();
  }

  componentWillReceiveProps( nextProps ) {
    if ( nextProps.user.authenticated !== this.state.authenticated ) {
      this.setState({ authenticated: nextProps.user.authenticated });
    }
  }

  render() {
    const { authenticated } = this.state;

    if ( !authenticated ) {
      return <Redirect to="/" />;
    }

    return (
      <Container className="logout">
        <h3>Logging you out, please wait...</h3>
      </Container>
    );
  }
}

export default Logout;
