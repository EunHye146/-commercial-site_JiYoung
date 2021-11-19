import React, { useState, useEffect } from 'react';
import Header from '../components/common/NewHeader';
import MainCont from '../components/main/MainCont';
import NewMainAbout from '../components/main/NewMainAbout';
import MainSpaces from '../components/main/MainSpaces';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import JoinBanner from '../components/main/JoinBanner';
import PopUp from '../components/main/PopUp';
import User from '../components/common/User';

const Spacer  = styled.div`
    height : 100px;
`;

function Main() {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect (() => {
        const hasVisited = localStorage.getItem('hasVisited');
        let accessTime = new Date();
        accessTime = Date.parse(accessTime);
        if (!hasVisited || hasVisited < accessTime) {
            setShowPopUp(true);
        }
    },[]);

    const closePopUp = () => {
        setShowPopUp(false);
    }

    const checkedClose = () => {
        let closeTime = new Date();
        closeTime = closeTime.setHours(closeTime.getHours() + 24);
        localStorage.setItem('hasVisited', closeTime);
        setShowPopUp(false);
    }

    return (
        <>
            <Header/>
            <User/>
            {showPopUp && <PopUp closePopUp={closePopUp} checkedClose={checkedClose}/>}
            <MainCont/>
            <Spacer/>
            <NewMainAbout/>
            <Spacer/>
            <MainSpaces/>
            <JoinBanner/>
            <Footer/>
        </>
    );
}

export default Main;