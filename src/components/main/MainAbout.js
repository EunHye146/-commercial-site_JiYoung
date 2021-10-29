import React from 'react';
import styled from 'styled-components';
import img1 from '../../imgs/img1.jpeg';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.jpeg';
import Slide from 'react-reveal/Slide';

const Wrapper = styled.div`
    height : auto;
    background : white;
    padding : 50px 150px 0px 150px;
`;

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin : 1rem;
    text-decoration : underline;
`;

const ContentWrapper = styled.div`
    height : 400px;
    text-align: center;
    @media screen and (max-width: 768px) {
        height : auto;
    }
`;

const About1 = styled.span`
    width : 48%;
    float: left;
    border : 1px solid;
    padding : 10px;
    @media screen and (max-width: 768px) {
        float : none;
        width : 90%;
        display : inline-block;
    }
`;

const Img = styled.img`
    width : 48%;
    float: right;
    @media screen and (max-width: 768px) {
        float : none;
        width : 90%;
        margin-top : 20px;
    }
`;

function MainAbout() {
    const abouts = [
        {
            content: "메인 첫 번째 내용입니다.<br/>쏼라쏼라",
            img : img1
        },
        {
            content: "메인 두 번째 내용입니다.<br/>쏼라쏼라",
            img : img2
        },
        {
            content: "메인 세 번째 내용입니다.<br/>쏼라쏼라",
            img : img3
        }
    ];
    const AboutList = abouts.map(about => <Slide bottom><ContentWrapper><Img src={about.img}/><About1>{about.content}</About1></ContentWrapper></Slide>);
    return (
        <>
        <Wrapper>
            <Title>
                about us
            </Title>
            {AboutList}
        </Wrapper>
        </>
    );
}

export default MainAbout;