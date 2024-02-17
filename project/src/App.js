import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropertyListings from './PropertyListings';
import PropertyDetail from './PropertyDetail';
import PropertyForm from './PropertyForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PropertyListings} />
        <Route path="/property/:id" component={PropertyDetail} />
        <Route path="/property-form" component={PropertyForm} />
      </Switch>
    </Router>
  );
};

export default App;

