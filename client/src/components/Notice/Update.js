import React, { useState, useEffect } from 'react';
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
    margin-bottom : 10px;
    textarea {
        margin-top : 10px;
        width : 90%;
        height : 400px;
        font-size : 20px;
        padding : 20px;
        outline:none;
    }
`;

const Button = styled.input`
    float : right;
    width : 80px;
    border : none;
    padding : 10px;
    font-size : 13px;
    background : gray;
    cursor : pointer;
    border-radius : 5px;
    &:hover {
        background : lightgray;
    }
`;

function Update({ history, match }) {
    const user = window.sessionStorage.getItem('id');
    const [post, setPost] = useState([]);

    if (!user) {
        alert('관리자 권한 페이지입니다.');
        history.push('/notice');
    }

    const callApi = async () => {
        const response = await fetch(`/post/${match.params.id}`);
        const body = await response.json();
        return body;
    }
    
    useEffect(() => {
        callApi()
        .then(res => setPost(res))
        .catch(err => console.log(err));
    },[]);

    const handleChange = (e) => {
        if (e.target.id === 'title')
            setPost({ title: e.target.value });
        if (e.target.id === 'bodycont')
            setPost({ body: e.target.value });
    }

    const update = () => {
        const title = document.getElementById('title').value;
        const bodycont = document.getElementById('bodycont').value;

        let body = {
            title: title,
            body: bodycont
        }

        axios
        .patch(`/post/${match.params.id}`, body)
        .catch(err => console.log(err));
        
        alert('게시물이 수정되었습니다.');
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
                <form onSubmit={update}>
                    <Title>제목 <input type="text" id="title" value={post.title} onChange={handleChange} required/></Title>
                    <Hr/>
                    <Body>내용<br/><textarea id="bodycont" value={post.body} onChange={handleChange} required/></Body>
                    <Button type="submit" value="수정하기"/>
                </form>
            </PostWrap>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default withRouter(Update);