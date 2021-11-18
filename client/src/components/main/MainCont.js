import React from 'react';
import styled from 'styled-components';
import PhotoSlide from './PhotoSlide';

const Wrapper = styled.div`
    position : relative;
    color : black;
    @keyframes fadein {
        0%   { opacity: 0; }
        100% { opacity: 1; }
    }
    animation: fadein 2s;
`;

const TextBlock = styled.div`
    position : absolute;
    top : 50%;
    transform : translateY(-50%);
    width : 100%;
    text-align : center;
    font-weight : bold;
`;

const Zoah = styled.div`
    display : inline-block;
    font-size : 48px;
    letter-spacing: 3px;
    padding-right : 5px;
`;

const Study = styled.div`
    display : inline-block;
    font-size : 37px;
    letter-spacing: 3px;
`;

const SubText = styled.div`
    font-size : 18px;
    font-weight : regular;
    letter-spacing: 0.3px;
    margin-top : 5px;
`;

function MainCont() {
    return (
        <>
        <Wrapper>
            <PhotoSlide/>
            <TextBlock>
                <Zoah>ZOAH</Zoah><Study>STUDYCAFE</Study>
                <SubText>럭셔리한 호텔식 스터디카페</SubText>
            </TextBlock>
        </Wrapper>
        </>
    );
}

export default MainCont;