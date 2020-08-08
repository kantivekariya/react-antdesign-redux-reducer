import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  console.log("isAuthenticated12", isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} title={rest.title} routes={rest.routes} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
