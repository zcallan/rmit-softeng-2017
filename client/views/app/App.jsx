import React, { Component } from 'react';
import Routes from './Routes.jsx';
import { Sidebar, Navbar } from 'views';
import { PageTitle } from 'views/generic';
import API from 'utils/api/api.js';
import { Grid } from 'flex-react';

window.moment = require( 'moment' );

class App extends Component {
  static propTypes = {}

  componentDidMount() {
    document.getElementById( 'mounting-preview' ).remove();

    /* Print the API information to the console */
    API.version().then( response => {
      console.log( 'API Information', response.data );
    });
  }

  render() {
    return (
      <div className="app">
        <Sidebar>
          <Navbar />
          <main>
            <PageTitle>Employees</PageTitle>
            <Grid>
              <Routes />
            </Grid>
          </main>
        </Sidebar>
      </div>
    );
  }
}

export default App;
