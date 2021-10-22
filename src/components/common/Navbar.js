import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.span`
    a {
        margin-left: 60px;
    }
`;

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
  &:hover{
    border-bottom: 1px solid gray;
    color : gray;
    padding-bottom: 3px;
    trasition: all 0.2s ease;
    transition-duration: 0.3s;
  }
`

const Navbar = () => {
    return (
        <>
        <Wrapper>
        <LinkTo to="/services">서비스</LinkTo>
        <LinkTo to="/location">위치</LinkTo>
        <LinkTo to="/space">공간</LinkTo>
        <LinkTo to="/product">이용요금</LinkTo>
        <LinkTo to="/notice">NOTICE</LinkTo>
        </Wrapper>
        </>
    );
};

export default Navbar;