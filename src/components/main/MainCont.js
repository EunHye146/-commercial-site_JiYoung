import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';
import logoImg from '../../imgs/BannerLogo.png';

const Wrapper = styled.div`
    position : relative;
    text-align : center;
    @keyframes fadein {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
    animation: fadein 2s;
`;

const TextBlock = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    color : white;
    @media screen and (max-width: 768px) {
    }
`;

const Text = styled.div`
    font-size : 18px;
    font-weight : regular;
    letter-spacing: 0.3px;
`;

const SubText = styled.span`
    font-size : 37px;
    letter-spacing: 3px;
`;

const BannerLogo = styled.img`
    width : 200px;
    margin-right : 10px;
`;

function MainCont() {
    return (
        <>
        <Wrapper>
            <PhotoSlide/>
            <TextBlock><BannerLogo src={logoImg}/><SubText>STUDYCAFE</SubText>
                <Text>
                럭셔리한 호텔식 스터디카페
                </Text>
            </TextBlock>
        </Wrapper>
        </>
    );
}

export default MainCont;