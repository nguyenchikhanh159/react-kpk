import React from 'react'
import Cart from '../components/cart/Cart';
import Category from '../components/category/Category';
import Checkout from '../components/checkout/Checkout';
import Confirmation from '../components/confirmation/Confirmation';
import FormLogin from '../components/formlogin/FormLogin';
import FormSignin from '../components/formlogin/FormSignin';
import FormFgpw from '../components/formlogin/FormFgpw';
import Home from '../components/home/Home';
import SingleProduct from '../components/singleproduct/SingleProduct';
import NotFound from './../components/notfoundpages/NotFound';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/category',
        exact: false,
        main: () => <Category />
    },
    {
        path: '/login',
        exact: false,
        main: ({ location, history }) => <FormLogin location={location} history={history} />
    },
    {
        path: '/signin',
        exact: false,
        main: ({ location, history }) => <FormSignin location={location} history={history} />
    },
    {
        path: '/forgotpw',
        exact: false,
        main: ({ location, history }) => <FormFgpw location={location} history={history} />
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFound />
    },
]
export default routes;