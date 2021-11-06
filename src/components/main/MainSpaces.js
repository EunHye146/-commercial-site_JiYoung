import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import studyroomA from '../../imgs/main/studyroomA.JPG';
import highpart from '../../imgs/main/highpart.jpg';
import cafezone1 from '../../imgs/main/cafezone1.jpg';
import './MainSpaces.css';

const Wrapper = styled.div`
    margin-top : 20px;
    padding-bottom : 2rem;
`;

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin : 1rem;
    text-decoration : underline;
`;
const MoreWrapper = styled.div`
    text-align : center;
    padding-top : 10px;
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
    display : flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        display : block;
        text-align : center;
    }
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
        공간
        </Title>
        <ImgListWrapper>
        {imgList}
        </ImgListWrapper>
        <MoreWrapper>
        <More to="/space">+ More</More>
        </MoreWrapper>
        </Wrapper>
        </>
    );
}

export default MainSpaces;