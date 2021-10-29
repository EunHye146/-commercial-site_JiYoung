import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';
import Fade from 'react-reveal/Fade';
import LogoImg from '../../imgs/BannerLogo.png';

const TextBlock = styled.div`
    position : absolute;
    top : 40%;
    width : 100%;
    text-align : center;
    color : white;
    @media screen and (max-width: 768px) {
        position : absolute;
        top : 40%;
        color : white;
        background: transparent; 
    }
`;

const H1 = styled.div`
    
`;

const Text = styled.div`
    padding-top : 5px;
    font-size : 18px;
    line-height : 1.5rem;
    font-weight : regular;
    letter-spacing: 0.3px;
`;

const SubText = styled.div`
    display : inline-block;
    font-size : 37px;
    letter-spacing: 3px;
`;

const BannerLogo = styled.img`
    width : 200px;
    padding-right : 10px;
`;

function MainCont() {
    return (
        <>
        <Fade>
            <PhotoSlide/>
        </Fade>
            <TextBlock>
            <Fade>
                <BannerLogo src={LogoImg}/><SubText>STUDYCAFE</SubText>
                <Text>
                럭셔리한 호텔식 스터디카페
                </Text>
            </Fade>
            </TextBlock>
        </>
    );
}

export default MainCont;