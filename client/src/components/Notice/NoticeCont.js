import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import User from '../common/User';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link, withRouter } from 'react-router-dom';
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

const Head = styled.div`
    position : relative;
`;

const Title = styled.div`
    font-size : 23px;
    font-weight : bold;
    margin-bottom : 10px;
    padding-left : 50px;
`;

const Pre = styled.pre`
    font-size : 13px;
    font-family : 'GmarketSansTTFMedium';
    letter-spacing : 1px;
    padding-left: 50px;
    padding-right : 50px;
    line-height : 1.4;
    height : 500px;
    overflow : auto;
`;

const Date = styled.div`
    display : inline-block;
    font-size : 12px;
    padding-left : 50px;
`;

const Hr = styled.hr`
    color : lightgray;
    border-width : 1px 0px 0px 0px;
    opacity : 0.5;
    margin-bottom : 70px;
`;

const ButtonWrap = styled.div`
    position : absolute;
    bottom : 0;
    right : 0;
`;

const Button = styled.div`
    display : inline-block;
    width : 50px;
    padding : 7px;
    margin-left : 5px;
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

const ButtonTo = styled(Link)`
    display : inline-block;
    width : 50px;
    padding : 7px;
    margin-left : 5px;
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

function NoticeCont({match, history}) {
    const [post, setPost] = useState([]);
    const user = window.sessionStorage.getItem('id');

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

      const removePost = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            axios.delete(`/post/${match.params.id}`);
            alert('해당글이 삭제되었습니다.');
            history.push('/notice');
        } else {
            return false;
        }
      }
    return (
        <>
            <Header/>
            <User/>
            <Spacer/>
            <Fade delay={500}>
            <Wrapper>
                <PostWrap>
                    <Head>
                    <Title>{post.title}</Title>
                    <Date>작성일 : {(post.publishedDate+'').substring(0,10)}</Date>
                    <ButtonWrap>{user && <><ButtonTo to={`/update/${post._id}`}>수정</ButtonTo><Button onClick={removePost}>삭제</Button></>}<ButtonTo to='/notice'>목록</ButtonTo></ButtonWrap>
                    </Head>
                <Hr/>
                <Pre>{post.body}</Pre>
                </PostWrap>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default withRouter(NoticeCont);