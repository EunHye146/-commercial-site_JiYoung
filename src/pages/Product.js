import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import chargeImg1 from '../imgs/product/charge1.jpeg';
import chargeImg2 from '../imgs/product/charge2.jpeg';

const Wrapper = styled(Responsive)`
    overflow : auto;
    padding-top : 6rem;
    padding-bottom : 2.5rem;
    text-align : center;
`;


const Img = styled.img`
    padding : 40px;
    margin : 10px;
    border : 2px solid #0f3e85;
    border-radius : 7px;
    @media screen and (max-width: 768px) {
        width : 95%;
        padding : 0;
        margin : 0;
    }
`;

function Product() {
    return (
        <>
            <Header/>
            <Wrapper>
                <Img src={chargeImg1}/>
                <Img src={chargeImg2}/>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Product;