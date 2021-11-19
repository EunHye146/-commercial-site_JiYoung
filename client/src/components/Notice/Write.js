import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import User from '../common/User';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { withRouter } from 'react-router';
import axios from 'axios';

const Spacer = styled.div`
  height : 3.5rem;
`;

const Wrapper = styled.div`
    margin-top : 80px;
    margin-bottom : 45px;
    text-align : center;
`;

const PostWrap = styled.div`
    display : inline-block;
    width : 80%;
    text-align : left;
`;

const Title = styled.div`
    font-size : 23px;
    font-weight : bold;
    margin-bottom : 10px;
    padding-left : 5%;
    padding-right : 5%;
    input {
        margin-left : 10px;
        width : 50%;
        font-size : 25px;
        padding : 5px;
        outline:none;
    }
`;

const Hr = styled.hr`
    color : lightgray;
    border-width : 1px 0px 0px 0px;
    opacity : 0.5;
    margin-bottom : 70px;
`;

const Body = styled.div`
    width : 100%;
    padding-left : 5%;
    padding-right : 5%;
    margin-bottom : 20px;
    textarea {
        margin-top : 10px;
        width : 90%;
        height : 400px;
        font-size : 20px;
        padding : 20px;
        outline:none;
    }
`;

const Button = styled.div`
    float : right;
    margin-right : 5%;
    width : 70px;
    padding : 10px;
    background : gray;
    cursor : pointer;
    font-size : 13px;
    text-decoration: none;
    color : black;
    text-align : center;
    border-radius : 5px;
    &:hover {
        background : lightgray;
    }
`;

function Write({ history }) {
    const user = window.sessionStorage.getItem('id');

    if (!user) {
        alert('관리자 권한 페이지입니다.');
        history.push('/notice');
    }

    const upload = () => {
        const title = document.getElementById('title').value;
        const bodycont = document.getElementById('bodycont').value;

        let body = {
            title: title,
            body: bodycont
        }

        axios
        .post('/post', body)
        .then((res) => console.log(res));
        
        alert('게시물이 작성되었습니다.');
        history.push('/notice');
    }
    return (
        <>
            <Header/>
            <User/>
            <Spacer/>
            <Fade delay={500}>
            <Wrapper>
            <PostWrap>
                <Title>제목 <input type="text" id="title"/></Title>
                <Hr/>
                <Body>내용<br/><textarea id="bodycont"/></Body>
                <Button onClick={upload}>올리기</Button>
            </PostWrap>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default withRouter(Write);