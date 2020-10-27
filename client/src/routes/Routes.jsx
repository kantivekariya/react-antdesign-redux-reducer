import { lazy } from 'react';
import Login from '../login/Login';
import Account from '../module/Account/Account';
import Home from '../module/dashboard';
import Dashboard from '../module/dashboard/Dashboard';
import Sales from '../module/sales/sales';
import Taxes from '../module/Taxes/taxes';
import Registration from '../registration/Registration';
import LandingPage from '../site/LandingPage';
import PageNotFound from '../site/PageNotFound';

const CoreRoutes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: LandingPage,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    redirectIfAuth: true,
    title: 'Login',
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    title: 'Register',
    component: Registration,
  },
  {
    path: '/home',
    auth: true,
    title: 'Home',
    component: Home,
    routes: [
      {
        path: '/home/dashboard',
        title: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/home/invoice',
        auth: true,
        title: 'Invoice',
        component: Sales,
      },
      {
        path: '/home/taxes',
        auth: true,
        title: 'Taxes',
        component: Taxes,
      },
      {
        path: '/home/account',
        auth: true,
        title: 'Account',
        component: Account,
      },
    ],
  },


];

const NoMatchRoute = {
  path: '',
  exact: true,
  auth: false,
  title: 'Lost in space',
  component: PageNotFound,
};

const routes = [...CoreRoutes, NoMatchRoute];
export default routes;
