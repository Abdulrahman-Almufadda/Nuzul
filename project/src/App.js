import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyListings from './PropertyListings';
import PropertyDetail from './PropertyDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PropertyListings} />
        <Route path="/property/:id" component={PropertyDetail} />
      </Switch>
    </Router>
  );
};

export default App;



