import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { MakeRouteWithSubRoutes } from '../routes/makeRouteWithSubRoutes';
import HomeLayout from '../layouts/home/HomeLayout';

const Home = (props) => {
    console.log("1", props)
  const { routes, match } = props;
  return (
    <HomeLayout path={props.location.pathname}>
      <div className="">
        <Switch>
          {routes && routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)} <Redirect to={`${match.path}/dashboard`} />
        </Switch>
      </div>
    </HomeLayout>
  );
};

export default Home;