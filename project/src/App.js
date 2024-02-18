import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import PropertyListings from './PropertyListings';
import PropertyForm from './PropertyForm';
import PropertyDetail from './PropertyDetail';
import EditProperty from './EditProperty';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Real Estate Management
          </Typography>
          <Button component={NavLink} to="/" color="inherit">Home</Button>
          <Button component={NavLink} to="/property-form" color="inherit">Add Property</Button>
        </Toolbar>
      </AppBar>
      <br></br>
      <Container>
        <Switch>
        <Route exact path="/" component={PropertyListings} />
        <Route path="/property-form" component={PropertyForm} />
        <Route path="/property/:id" component={PropertyDetail} />
        <Route path="/edit-property/:id" component={EditProperty} />
      </Switch>
      </Container>
    </Router>
  );
};

export default App;



