import React from 'react';
import logo from '../imgs/main/logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    position : absolute;
    top : 20%;
    left : 50%;
    transform : translateX(-50%);
    text-align : center;
`;

const Title = styled.div`
    font-size : 40px;
    font-weight : bold;
`;

const Logo = styled.img`
    width : 150px;
`;

const Form = styled.form`
    margin-top : 30px;
    display : inline-block;
    border : 1px solid;
    padding : 30px 45px 30px 45px;
    border-radius : 6px;
    td {
        padding : 10px
    }
`;

const Button = styled.button`
    margin-top : 10px;
    color : gray;
    background : #e3e3e3l;
    width : 100px;
    padding : 10px;
    border-radius : 5px;
    border : none;
    cursor : pointer;
    &:hover {
        background : #70719c;
        color : white;
        opacity : 0.7;
    }
`;

function Admin({ history }) {
    const user = window.sessionStorage.getItem('id');
    if (user) {
        history.push('/');
    }
    
    const id = "jiyoung";
    const password = "1111";

    const onLogin = () => {
        const inputId = document.getElementById('id').value;
        const inputPw = document.getElementById('pw').value;
        if (id === inputId && password === inputPw) {
            window.sessionStorage.setItem('id', inputId);
            window.sessionStorage.setItem('password', inputPw);
            history.push('/');
        }
        else {
            alert("아이디와 비밀번호를 확인해주세요.");
        }
    }
    return (
        <>
        <Wrapper>
        <Logo src={logo}/>
        <Title>ADMIN LOGIN</Title>
        <Form>
        <table>
            <tr>
                <td>id</td>
                <td><input type="text" id="id" placeholder="id"/></td>
            </tr>
            <tr>
                <td>password</td>
                <td><input type="password" id="pw" placeholder="password"/></td>
            </tr>
        </table>
        <Button onClick={onLogin}>login</Button>
        </Form>
        </Wrapper>
        </>
    );
}

export default Admin;