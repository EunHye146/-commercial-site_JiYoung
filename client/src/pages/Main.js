import React from 'react';
import Header from '../components/common/NewHeader';
import MainCont from '../components/main/MainCont';
import MainAbout from '../components/main/MainAbout';
import NewMainAbout from '../components/main/NewMainAbout';
import MainSpaces from '../components/main/MainSpaces';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import JoinBanner from '../components/main/JoinBanner';

const Spacer  = styled.div`
    height : 100px;
`;

function Main() {
    return (
        <>
            <Header/>
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