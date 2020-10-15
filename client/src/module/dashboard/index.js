import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { MakeRouteWithSubRoutes } from '../../routes/makeRouteWithSubRoutes';
import MainLayouts from '../../layouts/MainLayouts';

const Home = (props) => {
  const { routes, match } = props;
  return (
    <MainLayouts path={props.location.pathname}>
      <div>
        <Switch>
          {routes && routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)}
          <Redirect to={`${match.path}/dashboard`} />
        </Switch>
      </div>
    </MainLayouts>
  );
};

export default Home;
