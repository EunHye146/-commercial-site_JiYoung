import React, { useState } from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const Div = styled.div`
    position : fixed;
    bottom : 20px;
    right : 20px;
    background : #303030;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    text-align:center;
    line-height : 110px;
    color : white;
    box-shadow: 5px 5px 5px gray;
    letter-spacing: 1px;
    font-family : NanumBarunGothic;
    font-weight : bold;
    cursor : pointer;
    @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
        line-height : 80px;
        font-size : 13px;
    }
`;

const Modal = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    width : 650px;
    transform : translate(-50%,-50%);
    border-radius : 7px;
    background : #fafafa;        
    border : 2px solid gray;
    box-shadow : 5px 5px 5px #7d7d7d;
    text-align : center;
    @media screen and (max-width: 768px) {
        width : 100%;
        height : 100%;
        padding-top : 5rem;
    }
`;

const Title = styled.div`
    font-size : 30px;
    font-weight : bold;
    padding-top : 3rem;
`;

const Close = styled.div`
    font-size : 70px;
    transform: rotate(45deg);
    cursor : pointer;
    position : absolute;
    top : 0.1rem;
    right : 1.1rem;
    font-weight : 300;
    @media screen and (max-width: 768px) {
        top : 5.5rem;
    }
`;

const ContentWrapper = styled.div`
    width : 330px;
    margin : 0 auto;
    text-align : left;
    padding-top : 30px;
    input {
        margin : 8px;
        width : 330px;
    }
    textarea {
        margin : 8px;
    }
`;

const Button = styled.button`
    background : lightgray;
    border : none;
    width : 200px;
    height : 40px;
    font-size : 15px;
    margin-top : 10px;
    margin-bottom : 30px;
    cursor : pointer;
    &:hover {
        opacity : 0.5;
    }
`;

function JoinBanner() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        if (showModal) {
            setShowModal(false);
        }
        else {
            setShowModal(true);
        }
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <Div onClick={openModal}>가맹문의</Div>
            { showModal && <Modal><Title>가맹문의</Title><Close onClick={closeModal}>+</Close>
            <ContentWrapper>
                <div>이름</div><input type="text"/>
                <div>연락처</div>
                    <input type="tel" placeholder="010-"/>
                    <div>창업지역</div>
                    <input type="text" placeholder="창업 희망 지역"/>
                    <div>문의내용</div>
                    <textarea cols="40" rows="10"/><br/>
            </ContentWrapper>
            <Button>문의하기</Button>
            </Modal>}
        </>
    );
}

export default JoinBanner;