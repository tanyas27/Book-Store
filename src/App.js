import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard'
import Cover from './components/Cover/Cover';
import { Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact component={Cover} />
      </div>
    );
  }
}

export default App;
