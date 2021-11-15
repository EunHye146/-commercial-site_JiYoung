import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    width : 100%;
    background : #ebe7e4;
    padding-top : 60px;
    padding-bottom : 60px;
    text-align : center;
`;

const Title = styled.div`
    font-size : 25px;
    padding-bottom : 50px;
    #the {
        font-size : 30px;
        padding-right : 5px;
        font-weight : bold;
    }
    
`;

const DivWrap = styled.div`
    display : inline-block;
    position : relative;
    width : 380px;
    height : 380px;
    background : black;
    color : white;
    margin : 10px;
`;

const Div = styled.div`
    position : absolute;
    left : 50%;
    transform : translateX(-50%);
    #title-top {
        padding-top : 60px;
        font-size : 15px;
        font-family : 'GmarketSansTTFLight';
        padding-bottom : 10px;
        letter-spacing : 1px;
    }
    #title-bottom {
        color : black;
        font-size : 35px;
        font-weight : bold;
        padding-bottom : 50px;
        -webkit-text-stroke-width: 1px;
	    -webkit-text-stroke-color: white;
    }
    #content {
        width : 380px;
        font-size : 18px;
        line-height : 30px;
    }
`;

const FadeWrap = styled.div`
    display : inline-block;
`;


function NewMainAbout() {
    return (
        <>
        <Wrapper>
            <Zoom><Title><span id="the">THE</span> 공부하고 싶은 곳</Title></Zoom>
            <FadeWrap><Fade delay={500} bottom>
            <DivWrap>
                <Div>
                <div id="title-top">OPERATION SYSTEM</div>
                <div id="title-bottom">24시 운영시스템</div>
                <div id="content">키오스크 결제 무인시스템<br/>지문인식 시스템으로 자유로운 입/퇴실<br/>안전을 위한 24시 CCTV 작동<br/>쾌적한 환경을 위한 공기청정기 가동</div>
                </Div>
            </DivWrap>
            </Fade></FadeWrap>
            <FadeWrap><Fade delay={1000} bottom>
            <DivWrap>
                <Div>
                <div id="title-top">INTERIOR CONCEPT</div>
                <div id="title-bottom">인테리어 차별화</div>
                <div id="content">럭셔리한 호텔식 무드의 인테리어와<br/>자연을 모티브로 편안한 분위기에서<br/>공부를 집중할 수 있도록 조성했습니다</div>
                </Div>
            </DivWrap>
            </Fade></FadeWrap>
            <FadeWrap><Fade delay={1500} bottom>
            <DivWrap>
                <Div>
                <div id="title-top">BASIC SERVICE</div>
                <div id="title-bottom">기본제공 서비스</div>
                <div id="content">무선인터넷 이용<br/>음료 및 간식 무제한 제공<br/>흑백 프린트 무료이용<br/>학습 물품 대여 서비스<br/>전좌석 콘센트 설치</div>
                </Div>
            </DivWrap>
            </Fade></FadeWrap>
        </Wrapper>
        </>
    );
}

export default NewMainAbout;