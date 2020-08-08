import Login from '../login/Login';
import Home from '../home/Home';
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
    },
];

const NoMatchRoute = {
    path: '',
    exact: true,
    auth: false,
    title: 'Lost in space',
    component: PageNotFound,
};

/**
 * Compile Core, Component and NoMatch Routes
 */
const routes = [...CoreRoutes, PageNotFound];
export default routes;
