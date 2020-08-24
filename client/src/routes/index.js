import React from "react";
import { connect } from "react-redux";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import routes from "./Routes";

const Routes = (props) => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              return (
                <PrivateRoute
                  key={i}
                  isAuthenticated={props.isAuthenticated}
                  {...route}
                />
              );
            } else {
              return (
                <PublicRoute
                  key={i}
                  isAuthenticated={props.isAuthenticated}
                  {...route}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </>
  );
};

// export default Routes;
const mapStateToProps = state => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Routes);
