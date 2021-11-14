import React, { useState } from 'react';
import styled from 'styled-components';
import Join from  '../../pages/Join';

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


function JoinBanner() {
    let [showModal, setShowModal] = useState(false);
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
            { showModal && <Join closeModal={closeModal}/>}
        </>
    );
}

export default JoinBanner;