import React from 'react';
import Header from '../components/common/NewHeader';
import MainCont from '../components/main/MainCont';
import MainAbout from '../components/main/MainAbout';
import NewMainAbout from '../components/main/newMainAbout';
import MainSpaces from '../components/main/MainSpaces';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Slide from 'react-reveal/Slide';
import JoinBanner from '../components/main/JoinBanner';

const Wrapper = styled(Responsive)`
    padding-top : 3rem;
`;

function Main() {
    return (
        <>
            <Header/>
            <MainCont/>
            <Slide bottom><NewMainAbout/></Slide>
            <Wrapper>
            <Slide bottom>
            <MainSpaces/>
            </Slide>
            </Wrapper>
            <JoinBanner/>
            <Footer/>
        </>
    );
}

export default Main;