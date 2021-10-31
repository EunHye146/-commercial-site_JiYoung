import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Map from '../components/Location/Map';

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

function Location() {
    return (
        <>
            <Header/>
            <Wrapper>
            address : 경기도 파주시 미래로 622 대흥프라자 401,402호
            <Map/>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Location;