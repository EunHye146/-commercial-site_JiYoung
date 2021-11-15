import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height : auto;
    text-align : center;
    font-size : 12px;
    padding-top : 30px;
    padding-bottom : 30px;
    background :#151633;
    color : white;
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