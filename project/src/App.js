import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import PropertyListings from './PropertyListings';
import PropertyForm from './PropertyForm';
import PropertyDetail from './PropertyDetail';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/property-form">Add Property</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={PropertyListings} />
          <Route path="/property-form" component={PropertyForm} />
          <Route path="/property/:id" component={PropertyDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


