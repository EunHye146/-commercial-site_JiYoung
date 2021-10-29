import React from 'react';
import Header from '../components/common/NewHeader';
import MainCont from '../components/main/MainCont';
import MainAbout from '../components/main/MainAbout';
import MainSpaces from '../components/main/MainSpaces';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Slide from 'react-reveal/Slide';

const Wrapper = styled(Responsive)`
    padding-top : 3rem;
`;

const JoinBanner = styled.div`
    position : fixed;
    bottom : 20px;
    right : 20px;
    background : #303030;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    text-align:center;
    line-height : 110px;
    color : white;
    box-shadow: 5px 5px 5px gray;
    letter-spacing: 1px;
    font-family : NanumBarunGothic;
    font-weight : bold;
`;

function Main() {
    return (
        <>
            <Header/>
            <MainCont/>
            <Slide bottom>
            <MainAbout/>
            </Slide>
            <Wrapper>
            <Slide bottom>
            <MainSpaces/>
            </Slide>
            </Wrapper>
            <JoinBanner>가맹문의</JoinBanner>
            <Footer/>
        </>
    );
}

export default Main;