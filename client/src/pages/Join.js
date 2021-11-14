import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

require('dotenv').config();


let service_id = process.env.REACT_APP_SERVICE_ID;
let template_id = process.env.REACT_APP_TEMPLATE_ID;
let user_id = process.env.REACT_APP_USER_ID;

const Background = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 2500px;
    z-index : 999;
    background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
    position : fixed;
    top : 50%;
    left : 50%;
    width : 650px;
    transform : translate(-50%,-50%);
    border-radius : 7px;
    background : #fafafa;        
    border : 2px solid gray;
    box-shadow : 5px 5px 5px #7d7d7d;
    @media screen and (max-width: 768px) {
        width : 100%;
        height : 100%;
        padding-top : 5rem;
    }
`;

const Title = styled.div`
    font-size : 30px;
    font-weight : bold;
    padding-top : 3rem;
    text-align : center;
`;

const Close = styled.div`
    font-size : 70px;
    transform: rotate(45deg);
    cursor : pointer;
    position : absolute;
    top : 0.1rem;
    right : 1.1rem;
    font-weight : 300;
    @media screen and (max-width: 768px) {
        top : 5.5rem;
    }
`;

const Form = styled.form`
    text-align : center;
    padding : 50px;
`;

const Table = styled.table`
    display : inline-block;
    text-align : left;
    input {
        width : 200px;
    }
    td {
        padding : 5px;
    }
`;

const Button = styled.input`
    width : 120px;
    height : 40px;
    background : black;
    border : none;
    border-radius : 5px;
    color : white;
    margin-top : 20px;
    cursor : pointer;
    &:hover {
        background : gray;
    }
`;

const ByteInfo = styled.span`
    font-size : 12px;
    margin-left : 5px;
`;

function Join( {closeModal, history}) {
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
        //console.log(form.current.name.value=="");
        emailjs.sendForm(service_id, template_id, form.current, user_id)
          .then((result) => {
              alert('문의하신 내용이 접수되었습니다.');
              closeModal();
          }, (error) => {
              alert('오류가 발생하였습니다. 전화로 문의바랍니다.');
          });
          
      };
      // Byte 수 체크 제한
    
    const checkByte = (e) => {
        var str = e.target.value;
        var str_len = e.target.value.length;

        var rbyte = 0;
        var rlen = 0;
        var one_char = "";
        var str2 = "";


        for (var i=0; i<str_len; i++) {
            one_char = str.charAt(i);
            if(escape(one_char).length > 4) {
                rbyte += 2;                                         //한글2Byte
            }else{
                rbyte++;                                            //영문 등 나머지 1Byte
            }
            if(rbyte <= 100) {
                rlen = i+1;                                          //return할 문자열 갯수
            }
        }
        if (rbyte > 100) {
            // alert("한글 "+(maxByte/2)+"자 / 영문 "+maxByte+"자를 초과 입력할 수 없습니다.");
            alert("메세지는 최대 " + 100 + "byte를 초과할 수 없습니다.")
            str2 = str.substr(0,rlen);                                  //문자열 자르기
            e.target.value = str2;
        }
        else {
            document.getElementById('byteInfo').innerText = rbyte;
        }
    }
    return (
        <>
            <Background>
                <Modal>
                <Title>가맹문의</Title><Close onClick={closeModal}>+</Close>
                <Form ref={form} onSubmit={sendEmail}>
                    <Table>
                        <tr>
                            <td><label>이름</label></td>
                            <td><input type="text" name="name" required/></td>
                        </tr>
                        <tr>
                            <td><label>연락처</label></td>
                            <td><input type="tel" name="tel" placeholder="010-" required/></td>
                        </tr>
                        <tr>
                            <td><label>창업지역</label></td>
                            <td><input type="text" name="area" placeholder="창업 희망 지역"/></td>
                        </tr>
                        <tr>
                            <td><label>문의내용</label></td>
                            <td><textarea name="message" cols="30" rows="5" onKeyUp={checkByte}/><ByteInfo><span id="byteInfo">0</span>/100bytes</ByteInfo></td>
                        </tr>
                    </Table><br/>
                    <Button type="submit" value="문의하기" />
                </Form>
                </Modal>
            </Background>
        </>
    );
}

export default withRouter(Join);

