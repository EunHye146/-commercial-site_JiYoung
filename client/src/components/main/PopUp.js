import React from 'react';
import styled from 'styled-components';
import eventImg from '../../imgs/main/event.jpeg';


const Wrapper = styled.div`
    position : absolute;
    top : 100px;
    left : 100px;
    z-index : 1000;
    background : white;
    border-radius : 5px;
    @media screen and (max-width: 768px) {
        top : 10%;
        left : 50%;
        transform : translateX(-50%);
        width : 350px;
    }
`;

const Img = styled.img`
    width : 450px;
    margin : 10px 10px 0px 10px;
    @media screen and (max-width: 768px) {
        width : 330px;
    }
`;

const CloseWrap = styled.div`
    height : 20px;
    padding : 5px 10px 10px 10px;
`;
const Close = styled.div`
    cursor : pointer;
    display : inline-block;
    float : right;
`;

const Label = styled.label`
    cursor : pointer;
    font-size : 13px;
    display : inline-block;
`;

function PopUp({closePopUp, checkedClose}) {
    return (
        <>
        <Wrapper>
            <Img src={eventImg}/>
            <CloseWrap>
            <Label onClick={checkedClose}>24시간동안 열람하지 않습니다</Label>
            <Close onClick={closePopUp}>닫기</Close>
            </CloseWrap>
        </Wrapper>
        </>
    );
}

export default PopUp;