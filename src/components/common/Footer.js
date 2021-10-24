import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const Wrapper = styled(Responsive)`
    height : auto;
`;

const Hr = styled.hr`
    width : 90%;
    border-color: lightgray;
    opacity : 50%;
    margin-bottom : 2rem;
`;

const Block = styled.div`
    display : inline-block;
    width : 360px;
    font-size : 14px;
    font-weight : bold;
    li {
        line-height : 1.2rem;
        font-size : 13px;
        font-weight : 1;
    }
    padding : 10px;
`;

const Linkto = styled(Link)`
    text-decoration: none;
    color : black;
    &:hover{
    text-decoration: none;
    color: #afafaf;
}
`;

const CopyRight = styled.div`
    text-align : center;
    padding : 1rem;
    font-size : 10px;
`;

function Footer() {
    return (
        <>
        <Wrapper>
        <Hr/>
        <Block>
        QuickLink
            <ul>
                <li><Linkto to="/services">서비스</Linkto></li>
                <li><Linkto to="/location">위치</Linkto></li>
                <li><Linkto to="/space">공간</Linkto></li>
                <li><Linkto to="/product">이용요금</Linkto></li>
                <li><Linkto to="/notice">notice</Linkto></li>
            </ul>
        </Block>
        <Block>
        Contact us
        <ul>
            <li>Tel. 010-1234-1234</li>
            <li>Fax. 123-123-123</li>
            <li>E-mail. 123@gmail.com</li>
        </ul>
        </Block>
        <Block>
        Office
        <ul>
            <li>(주) 인테리어</li>
            <li>서울특별시 서울구 서울동 어쩌고 저쩌고</li>
            <li>open : am 11:00 - pm 4:00</li>
        </ul>
        </Block>
        <CopyRight>copyright@~</CopyRight>
        </Wrapper>
        </>
    );
}

export default Footer;