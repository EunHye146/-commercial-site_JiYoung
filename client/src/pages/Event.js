import React, { useEffect, useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Spacer = styled.div`
  height : 3.5rem;
`;

const Title = styled.div`
    font-size : 25px;
    font-weight : bold;
    margin-top : 45px;
    text-align : center;
`;

const Wrapper = styled.div`
    margin-top : 45px;
    text-align : center;
`;

const Hr = styled.hr`
  width : 250px;
  display : block;
`;

const PostWrap = styled.div`
  display : inline-block;
  width : 80%;
  text-align : left;
  margin-bottom : 45px;
  @media screen and (max-width: 768px) {
    width : 90%;
    text-algin : center;
  }
`;

const Posts = styled(Link)`
  display : inline-block;
  width : 300px;
  border-radius : 10px;
  margin : 10px;
  padding : 20px;
  background : gray;
  cursor: pointer;
  text-decoration: none;
  color : black;
  @media screen and (max-width: 768px) {
    width : 90%;
    margin : 10px 0px 10px 0px;
  }
`;

const PostTitle = styled.div`
  font-size : 18px;
  margin-top : 10px;
  text-align : left;
`;

const PostImg = styled.img`
  width : 100%;
  height : 300px;
  background : red;
`;

const WhiteSpace = styled.div`
  height : 300px;
`;

const NoCont = styled.div`
  font-size : 15px;
  height : 400px;
  margin-top : 100px;
`;

function Event() {
  const [posts, setPosts] = useState([]);

  const callApi = async () => {
    const response = await fetch('/post');
    const body = await response.json();
    return body;
  }

  useEffect(() => {
    callApi()
    .then(res => setPosts(res))
    .catch(err => console.log(err));
  },[])

    return (
        <>
            <Header/>
            <Spacer/>
            <Title><Fade left><Hr/></Fade><Fade delay={400}>EVENT</Fade><Fade right><Hr/></Fade></Title>
            <Fade delay={500}>
            <Wrapper>
              <PostWrap>
                {posts.map(post => 
                  <Posts to={`/post/${post._id}`}>
                    <PostImg/>
                    <PostTitle>{post.title}</PostTitle>
                  </Posts>
                )}
                {posts.length < 4 && posts.length > 0 && <WhiteSpace/>}
                {posts.length === 0 && <NoCont>등록된 게시물이 없습니다.</NoCont>}
              </PostWrap>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default Event;