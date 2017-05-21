/* This file is the top level component for the application and all the pages are rendered inside it */

/* Import dependencies */
import React, { Component } from 'react';
import Routes from './Routes.jsx';
import { Sidebar, Navbar } from 'views';
import { PageTitle } from 'views/generic';
import API from 'utils/api/api.js';
import { Grid } from 'flex-react';

window.moment = require( 'moment' );

/* Create the App component */
class App extends Component {

  /* When the app mounts hide the preview and print the API information to the screen */
  componentDidMount() {
    /* Hide the preview spinner */
    document.getElementById( 'mounting-preview' ).remove();

    /* Print the API information to the console */
    API.version().then( response => {
      console.log( 'API Information', response.data );
    });
  }

  /* Render the application to the screen */
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
