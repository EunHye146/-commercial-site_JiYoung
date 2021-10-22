import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    height : 600px;
`;

const TextBlock = styled.div`
    position : absolute;
    z-index : 10;
    padding : 30px;
    text-align : center;
    top : 50%;
    right : 0;
    transform: translateY(-25%);
    background-color : rgba(255, 255, 255, 0.5);
`;

const PhotoBlock = styled.div`
    top : 5%;
`;

const Title = styled.div`
    font-size : 30px;
    font-weight : bold;
`;

const Content = styled.div`
    font-size : 15px;
    color : gray;
    padding-top : 15px;
`;


function MainCont() {
    return (
        <>
        <Wrapper>
            <TextBlock>
                <Fade>
                <Title>지영스터디</Title>
                <Content>
                    안정감을 주는 스터디 카페<br/>
                    지영 스터디카페 만의 차별화된 프리미엄 무인시스템
                </Content>
                </Fade>
            </TextBlock>
            <Fade>
            <PhotoBlock>
                <PhotoSlide/>
            </PhotoBlock>
            </Fade>
        </Wrapper>
        </>
    );
}

export default MainCont;