import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,  
} from "react-router-dom";
import LoginPage from '../../Pages/Login/Login.container';
import Dashboard from '../../Pages/Dashboard/dashboard';
import NavBar from '../NavBar/navBar';
import GlobalLoader from '../GlobalLoader/loader';
import ROUTER_LINKS from './RootConstants';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated ? ( <Component {...props}/> ): <Redirect to={{  pathname: '/' }} />}
  />
);

const RouterApp = props => {
  const { showLoader = false, isAuthenticated  = false } = props;
  return (<Router>
    <div>
      {isAuthenticated ? <NavBar links={ROUTER_LINKS} /> : null}
      <GlobalLoader showLoader={showLoader}/>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <ProtectedRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated}/>
        <Redirect exact from="/" to="login" />
      </Switch>
    </div>
  </Router>);
}

const mapStateToProps = state => {
  const { loaderReducer: {
    showLoader = false
  } = {},
  userReducer: {
    isAuthenticated = false
  } = {}
} = state;
  return {
    showLoader,
    isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  null
)(RouterApp);
