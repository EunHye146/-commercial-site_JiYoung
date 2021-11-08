import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const Spacer = styled.div`
  height : 3.5rem;
`;

const Title = styled.div`
    font-size : 25px;
    font-weight : bold;
    margin-top : 45px;
    text-align : center;
`;

const Wrapper = styled(Responsive)`
    margin-top : 45px;
`;

function Event() {
    const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://localhost:5000/api/events'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
    return (
        <>
            <Header/>
            <Spacer/>
            <Title>EVENT</Title>
            <Wrapper>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <img src={user.img}/>
                    </li>
                ))}
            </ul>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Event;