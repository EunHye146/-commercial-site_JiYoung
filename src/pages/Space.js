import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

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


function Space() {
    return (
        <>
            <Header/>
            <Wrapper>
            <Div>
                space
            </Div>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Space;