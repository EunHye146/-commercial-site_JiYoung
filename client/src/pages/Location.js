import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import User from '../components/common/User';
import Map from '../components/Location/Map';

function Location() {
    return (
        <>
            <Header/>
            <User/>
            <Map/>
            <Footer/>
        </>
    );
}

export default Location;