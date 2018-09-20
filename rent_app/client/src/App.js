import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Landlord from "./pages/Landlord";
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/Landing";

// Import Components
import Nav from "./components/Nav";

// Global CSS (unedited form Create-React-App command!)
import './App.css';
  
  const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Landlord" component={Landlord} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );


export default App;
