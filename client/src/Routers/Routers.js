import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Join from '../pages/Join';
import Space from '../pages/newSpace';
import Location from '../pages/Location';
import Product from '../pages/Product';
import Event from '../pages/Event';
import Admin from '../pages/Admin';
//import Space2 from '../pages/Space';


const Routers = () => {
    return (
        <BrowserRouter>
        <Route component={Main} path='/' exact/>
        <Route component={Join} path='/join'/>
        <Route component={Location} path='/location'/>
        <Route component={Space} path='/space'/>
        <Route component={Product} path='/product'/>
        <Route component={Event} path='/event'/>
        <Route component={Admin} path='/admin'/>
        </BrowserRouter>
    );
};

export default Routers;