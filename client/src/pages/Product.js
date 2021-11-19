import React from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import User from '../components/common/User';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import chargeImg1 from '../imgs/product/charge1.jpeg';
import chargeImg2 from '../imgs/product/charge2.jpeg';

const Wrapper = styled.div`
    margin-top : 35px;
    margin-bottom : 45px;
    text-align : center;
`;

const Spacer = styled.div`
  height : 3.5rem;
`;

const Title = styled.div`
    font-size : 25px;
    font-weight : bold;
    margin-top : 45px;
    text-align : center;
`;

const Img = styled.img`
    display : inline-block;
    border-radius : 7px;
    border : 2px solid #0f3e85;
    width : 33%;
    padding : 3%;
    margin : 1%;
    @media screen and (max-width: 768px) {
        width : 70%;
        padding : 0;
        padding : 10%;
    }
`;

const Hr = styled.hr`
  width : 250px;
  display : block;
`;

function Product() {
    return (
        <>
            <Header/>
            <User/>
            <Spacer/>
            <Title><Fade left><Hr/></Fade><Fade delay={400}>이용요금</Fade><Fade right><Hr/></Fade></Title>
            <Fade delay={700}>
            <Wrapper>
                <Img src={chargeImg1}/>
                <Img src={chargeImg2}/>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default Product;