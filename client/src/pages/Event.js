import React, { useEffect, useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import User from '../components/common/User';
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
    margin-top : 25px;
    text-align : center;
`;

const Hr = styled.hr`
  width : 250px;
  display : block;
`;

const PostWrap = styled.div`
  display : inline-block;
  width : 75%;
  text-align : left;
  margin-bottom : 45px;
  @media screen and (max-width: 768px) {
    width : 95%;
  }
`;

const PostLink = styled(Link)`
  display : block;
  text-decoration: none;
  color : black;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size : 13px;
  th {
    font-size : 15px;
  }
`;

const WhiteSpace = styled.div`
  height : 300px;
`;

const NoCont = styled.div`
  font-size : 15px;
  height : 400px;
  margin-top : 100px;
  text-align : center;
`;

const WriteButton = styled.div`
  width : 70px;
  padding : 10px;
  background : green;
  float : right;
  text-align : center;
  cursor : pointer;
  margin-bottom : 10px;
  border-radius : 5px;
  font-size : 13px;
  &:hover {
    background : lightgreen;
  }
`;


function Event() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(window.sessionStorage.getItem('id'));

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
            <User/>
            <Spacer/>
            <Title><Fade left><Hr/></Fade><Fade delay={400}>공지사항</Fade><Fade right><Hr/></Fade></Title>
            <Fade delay={500}>
            <Wrapper>
              <PostWrap>
              {user && <WriteButton>글작성</WriteButton>}
                <Table>
                <thead>
                  <tr style={{borderBottom : '1px solid gray'}}>
                    <th style={{width:'15%', padding : '20px'}}>번호</th>
                    <th style={{width:'70%'}}>제목</th>
                    <th style={{width:'15%'}}>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => 
                    <tr style={{borderBottom : '1px solid lightgray'}}>
                      <td style={{padding : '20px'}}>{posts.length-index}</td>
                      <td><PostLink to={`/post/${post._id}`}>{post.title}</PostLink></td>
                      <td>{post.publishedDate.substring(0,10)}</td>
                    </tr>
                  )}
                </tbody> 
                </Table>
                {posts.length < 6 && posts.length > 0 && <WhiteSpace/>}
                {posts.length === 0 && <NoCont>등록된 게시물이 없습니다.</NoCont>}
              </PostWrap>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default Event;