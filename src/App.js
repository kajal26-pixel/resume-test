import PropTypes from 'prop-types';
import React from "react";

import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes/index.js";

// Import all middleware
import Authmiddleware from "./routes/route.js";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/index.js";
// import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout.js";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

import fakeBackend from "./helpers/AuthType/fakeBackend.js"
// import { alerShow, apiHeader } from './admin/commonFunction'

// Activating fake backend
fakeBackend()

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

const App = props => {

  function getLayout() {
    let layoutCls = VerticalLayout;
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = VerticalLayout;// HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();
  
  // Set Header
  // apiHeader();
  
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

App.propTypes = {
  layout: PropTypes.any
};

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  };
};

export default connect(mapStateToProps, null)(App);
