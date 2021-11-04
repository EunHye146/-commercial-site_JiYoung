import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';

const Wrapper = styled(Responsive)`
    overflow : auto;
    padding-top : 5rem;
    padding-bottom : 6rem;
`;

const Div = styled.div`
    text-align : center;
    font-size : 20px;
    font-weight : bold;
`;


function Services() {
    return (
        <>
        <Header/>
        <Wrapper>
            <Div>
                가맹문의
            </Div>
        </Wrapper>
        <Footer/>
        </>
    );
}

export default Services;