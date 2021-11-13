import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import studyroomA from '../../imgs/main/studyroomA.JPG';
import highpart from '../../imgs/main/highpart.jpg';
import cafezone1 from '../../imgs/main/cafezone1.jpg';
import './MainSpaces.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Wrapper = styled.div`
    margin-top : 20px;
    padding-bottom : 40px;
`;

const Title = styled.div`
    text-align : center;
    margin-bottom : 50px;
`;

const LeftHr = styled.hr`
    display : inline-block;
    width : 40%;
`;

const RightHr = styled.hr`
    display : inline-block;
    width : 40%;
`;

const Text = styled.div`
    display : inline-block;
    font-size : 25px;
    margin : 10px;
    letter-spacing : 5px;
`;

const MoreWrapper = styled.div`
    text-align : center;
    padding-top : 35px;
`;

const More = styled(Link)`
    text-decoration: none;
    color : gray;
    font-size : 17px;
    font-weight : bold;
    &:hover {
        color : lightgray;
    }
`;
const ImgListWrapper = styled.div`
    text-align : center;
`;


function MainSpaces() {
    const spaces = [
        {
            content : "스터디룸 6인실",
            img : studyroomA
        },
        {
            content: "하이파티션 ZONE",
            img : highpart
        },
        {
            content: "카페 ZONE",
            img : cafezone1
        }
    ];
    const imgList = spaces.map(space => <div className="image"><img src = {space.img} alt="?"/>
    <div className="text">
      <h1>{space.content}</h1>
    </div>
  </div>);
    return (
        <>
        <Wrapper>
        <Title>
        <Fade left delay={500}><LeftHr/></Fade>
        <Fade><Text>공간</Text></Fade>
        <Fade right delay={500}><RightHr/></Fade>
        </Title>
        <Slide bottom>
        <ImgListWrapper>
            {imgList}
        </ImgListWrapper>
        <MoreWrapper>
        <More to="/space">+ MORE</More>
        </MoreWrapper>
        </Slide>
        </Wrapper>
        </>
    );
}

export default MainSpaces;