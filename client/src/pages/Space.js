import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import high1 from '../imgs/space/high/01.jpg';
import high2 from '../imgs/space/high/02.jpg';
import high3 from '../imgs/space/high/03.jpg';
import high4 from '../imgs/space/high/04.jpg';
import high5 from '../imgs/space/high/05.jpg';
import high6 from '../imgs/space/high/06.jpg';
import low1 from '../imgs/space/low/01.JPG';
import low2 from '../imgs/space/low/02.JPG';
import low3 from '../imgs/space/low/03.JPG';
import low4 from '../imgs/space/low/04.JPG';
import low5 from '../imgs/space/low/05.JPG';
import flat1 from '../imgs/space/flat/01.jpg';
import flat2 from '../imgs/space/flat/02.jpg';
import flat3 from '../imgs/space/flat/03.jpg';
import room1 from '../imgs/space/room/01.JPG';
import room2 from '../imgs/space/room/02.JPG';
import room3 from '../imgs/space/room/03.JPG';
import room4 from '../imgs/space/room/04.JPG';
import cafe1 from '../imgs/space/cafe/01.jpg';
import cafe2 from '../imgs/space/cafe/02.jpg';
import cafe3 from '../imgs/space/cafe/03.jpg';
import cafe4 from '../imgs/space/cafe/04.jpg';
import other1 from '../imgs/space/other/01.jpg';
import other2 from '../imgs/space/other/02.jpg';
import other3 from '../imgs/space/other/03.jpg';
import other4 from '../imgs/space/other/04.jpg';
import other5 from '../imgs/space/other/05.jpg';

const Spacer = styled.div`
  height : 3.5rem;
`;

const Title = styled.div`
    font-size : 25px;
    font-weight : bold;
    margin-top : 45px;
    text-align : center;
`;

const Wrapper = styled(Responsive)`
    margin-bottom : 115px;
`;

const Cate = styled.div`
    font-size : 18px;
    text-align : left;
    margin-top : 45px;
    margin-bottom : 20px;
`;

const ImgWrap = styled.div`
    display : inline-block;
    position : relative;
    text-align : center;
    width : 25%;
    @media screen and (max-width: 768px) {
        width : 100%;
    }
`;

const Img = styled.img`
    width : 98.5%;
    border-radius : 5px;
`;

const Hr = styled.hr`
    border: 0;
    height: 1px;
    background: gray;
    margin-top : 45px;
`;

function Space() {
    const spaces = [
        {
            cate : "하이파티션",
            imgs : [high1,high2,high3,high4,high5,high6]
        },
        {
            cate : "로우파티션",
            imgs : [low1,low2,low3,low4,low5]
        },
        {
            cate : "평상형",
            imgs : [flat1,flat2,flat3]
        },
        {
            cate : "스터디룸",
            imgs : [room1,room2,room3,room4]
        },
        {
            cate : "카페존",
            imgs : [cafe1,cafe2,cafe3,cafe4]
        }
    ];
    const lastspace = {
        cate : "기타",
        imgs : [other1,other2,other3,other4,other5]
    }
    const spaceList = spaces.map(space => <><Cate>{space.cate}</Cate>{space.imgs.map((img) => <ImgWrap><Img src={img}/></ImgWrap>)}<Hr/></>)
    return (
        <>
            <Header/>
            <Spacer/>
            <Title>공간</Title>
            <Wrapper>
                {spaceList}
                <Cate>{lastspace.cate}</Cate>{lastspace.imgs.map((img) => <ImgWrap><Img src={img}/></ImgWrap>)}
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Space;