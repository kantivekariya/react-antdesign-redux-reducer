import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../login/Login';
import Home from '../home/Home';
import Registration from '../Registration/Registration';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/registration" component={Registration}></Route>
            </Switch>
        </>
    )
}

export default Routes;