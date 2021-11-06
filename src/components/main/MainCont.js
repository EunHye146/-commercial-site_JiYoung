import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';
import logoImg from '../../imgs/main/BannerLogo.png';

const Wrapper = styled.div`
    position : relative;
    text-align : center;
    font-family : 'Gmarket Sans';
    color : black;
    font-weight : bold;
    @keyframes fadein {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
    animation: fadein 2s;
    height : 100vh;
`;

const TextBlock = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    font-weight : bold;
    @media screen and (max-width: 768px) {
    }
`;

const SubText = styled.div`
    font-size : 18px;
    font-weight : regular;
    letter-spacing: 0.3px;
`;

const TitleText = styled.span`
    font-size : 37px;
    letter-spacing: 3px;
`;
/*
const BannerLogo = styled.img`
    width : 200px;
    margin-right : 10px;
`;
*/

function MainCont() {
    return (
        <>
        <Wrapper>
            <PhotoSlide/>
            <TextBlock><TitleText>ZOAH STUDYCAFE</TitleText>
                <SubText>
                럭셔리한 호텔식 스터디카페
                </SubText>
            </TextBlock>
        </Wrapper>
        </>
    );
}

export default MainCont;