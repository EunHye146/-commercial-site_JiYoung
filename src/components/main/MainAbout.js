import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import mainImg1 from '../../imgs/mainabout1.png';
import mainImg2 from '../../imgs/mainabout2.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    width : 100%;
    background : #ebe7e4;
    margin-top : 100px;
    padding-bottom : 60px;
`;

const Title = styled(Responsive)`
    font-size : 20px;
    font-weight : bold;
    padding-top : 60px;
`;

const Block = styled.div`
    position :relative;
    margin-top : 60px;
    .right {
        width : 45%;
        height : 400px;
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
        position : absolute;
        top : 0;
        right : 0;
        overflow : hidden;
    }
    .left {
        width : 55%;
        height : 400px;
        border-top-right-radius:30px;
        border-bottom-right-radius:30px;
        overflow : hidden;
    }
    img {
        width : 900px;
        height : 500px;
    }
    @media screen and (max-width: 768px) {
        .right {
            position : static;
            width : 100%;
            height : auto;
            border-radius : 0;
        }
        .left { 
            position : static;
            width : 100%;
            height : auto;
            border-radius : 0;
        }
    }
`;

const Text = styled.div`
    padding : 10%;
`;



function MainAbout() {
    
    return (
        <>
        <Wrapper>
            <Title>About</Title>
            <Fade>
            <Block>
                <div className="left">
                    <img src={mainImg1}/>
                </div>
                <div className="right">
                    <Text>
                        <h2>쾌적한 환경</h2>
                        <p>~를 사용하여 ~한 환경에서 공부를 할 수 있도록 어쩌고 저쩌고~
                            누구나 어쩌고 저쩌고~
                        </p>
                    </Text>
                </div>
            </Block>
            <Block>
                <div className="right">
                    <img src={mainImg2}/>
                </div>
                <div className="left">
                    <Text>
                        <h2>24시 무인시스템</h2>
                        <p>24시간 언제나 사용가능한~ 어쩌고입니다.
                            빠른 응답 어쩌고~
                        </p>
                    </Text>
                </div>
            </Block>
            </Fade>
        </Wrapper>
        </>
    );
}

export default MainAbout;