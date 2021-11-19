import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
    position : fixed;
    top : 4rem;
    right : 0.4rem;
    width : 200px;
    padding : 15px;
    font-size : 13px;
    border-radius : 5px;
    background : gray;
    z-index : 999;
`;

function User({ history }) {
    const [user, setUser] = useState(window.sessionStorage.getItem('id'));

    const logout = () => {
        window.sessionStorage.clear();
        setUser(window.sessionStorage.getItem('id'));
        alert('로그아웃 되었습니다.');
        history.push('/');
    }
    return (
        <>
        { user && <Wrapper>관리자 로그인 : {user}<button onClick={logout}>로그아웃</button></Wrapper>}
        </>
    );
}

export default withRouter(User);