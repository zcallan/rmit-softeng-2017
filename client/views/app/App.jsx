import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import Routes from './Routes.jsx';
import { Sidebar, Navbar } from 'views';


class App extends Component {
  static propTypes = {}

  componentDidMount() {
    document.getElementById( 'mounting-preview' ).remove();
  }

  render() {
    return (
      <div className="app">
        <Sidebar>
          <Navbar />

          <main>
            <Routes />
          </main>
        </Sidebar>
      </div>
    );
  }
}

export default App;
