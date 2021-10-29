import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    height : auto;
    text-align : center;
    font-size : 12px;
    padding-top : 30px;
    padding-bottom : 30px;
    background :#151633;
    color : white;
`;

const Hr = styled.hr`
    border-color: lightgray;
    opacity : 50%;
    margin-bottom : 1rem;
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
        사업자등록번호: 767-93-01555<br/>
TEL: 010-8661-0052<br/>
경기도 파주시 미래로 622 대흥프라자 401,402호<br/>
Copyright 2021. ZOAH. All rights reserved
        </Wrapper>
        </>
    );
}

export default Footer;