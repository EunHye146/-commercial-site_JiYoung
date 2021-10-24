import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';
import Fade from 'react-reveal/Fade';

const TextBlock = styled.div`
    width : 100%;
    padding-top : 25px;
    padding-bottom : 25px;
    background-color : rgba(200, 200, 200, 0.3);
    text-align : center;
    @media screen and (max-width: 768px) {
        position : absolute;
        top : 40%;
        color : white;
        background: transparent; 
    }
`;

const H1 = styled.div`
    font-weight : bold;
    font-size : 30px;
`;

const Text = styled.div`
    padding-top : 15px;
    font-size : 15px;
`;

function MainCont() {
    return (
        <>
        <Fade>
            <PhotoSlide/>
            <TextBlock>
                <H1>프리미엄 스터디카페<br/>지영스터디</H1>
                <Text>
                지영스터디는 ~~를 지향하는 ~~~입니다.<br/>
                색다름을 추구하는~~~ 어쩌고..
                </Text>
            </TextBlock>
        </Fade>
        </>
    );
}

export default MainCont;