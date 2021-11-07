import React, { useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

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
    margin-top : 45px;
`;

function Event() {
    return (
        <>
            <Header/>
            <Spacer/>
            <Title>EVENT</Title>
            <Wrapper>
            
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Event;