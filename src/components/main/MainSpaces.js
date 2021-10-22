import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img1 from '../../imgs/img1.jpeg';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.jpeg';

const Wrapper = styled.div`
    height : 300px;
    margin-top : 20px;
`;

const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin : 1rem;
    text-decoration : underline;
`;
const MoreWrapper = styled.div`
    text-align : center;
`;

const More = styled(Link)`
    border : lightgray 1px solid;
    text-decoration: none;
    color : black;
    font-size : 20px;
    color : white; 
    background : gray;
`;
const ImgListWrapper = styled.div`
    text-align : center;
`;

const Img = styled.img`
    width : 30%;
    height : 200px;
    padding : 10px;
`;

function MainSpaces() {
    const imgs = [img1, img2, img3];
    const imgList = imgs.map((img) => <Img src={img}/>);
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