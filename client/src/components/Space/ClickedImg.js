import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    z-index : 999;
    background: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
    position : fixed;
    left : 50%;
    top : 50%;
    transform : translate(-50%, -50%);
    width : 55%;
    z-index : 1000;
    background : white;
    border-radius : 10px;
    border : 2px solid gray;
    padding : 20px;
`;

const ImgBlock = styled.div`
    position : relative;
    text-align : center;
`;

const Img = styled.img`
    width : 100%;
`;

const CloseButton = styled.div`
    position : absolute;
    transform : rotate(45deg);
    font-size : 51px;
    text-align : center;
    color : white;
    top : -28px;
    right : -28px;
    width : 56px;
    height : 56px;
    background : black;
    border-radius : 50%;
    cursor : pointer;
`;

function ClickedImg({clickedImg, closeImg}) {
    return (
        <>
        <Background>
        <Wrapper>
            <CloseButton onClick={closeImg}>+</CloseButton>
            <ImgBlock>
            <Img src={clickedImg}/>
            </ImgBlock>
        </Wrapper>
        </Background>
        </>
    );
}

export default ClickedImg;