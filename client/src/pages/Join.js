import React, { useRef } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import emailjs from 'emailjs-com';

require('dotenv').config();


let service_id = process.env.REACT_APP_SERVICE_ID;
let template_id = process.env.REACT_APP_TEMPLATE_ID;
let user_id = process.env.REACT_APP_USER_ID;

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
    margin-bottom : 45px;
    text-align : center;
    width : 100%;
`;

const Form = styled.form`
    display : inline-block;
    width : 50%;
`;

const Table = styled.table`
    text-align : left;
    width : 100%;
    td {
        padding : 10px;
    }
    input {
        width : 100%;
        height : 30px;
    }
    textarea {
        width : 100%;
        height : 200px;
    }
    
`;

const Button = styled.input`
    width : 150px;
    height : 50px;
    background : black;
    border : none;
    border-radius : 5px;
    color : white;
    font-size : 15px;
    font-weight : 500;
    margin-top : 30px;
    cursor : pointer;
    &:hover {
        background : gray;
    }
`;

const ByteInfo = styled.div`
    font-size : 13px;
    text-align : right;
`;

function Join() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      //console.log(form.current.name.value=="");
      emailjs.sendForm(service_id, template_id, form.current, user_id)
        .then((result) => {
            alert('문의하신 내용이 접수되었습니다.');
            form.current.reset();
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
            <Header/>
            <Spacer/>
            <Title>가맹문의</Title>
            <Wrapper>
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
                            <td><textarea name="message" onKeyUp={checkByte}/><ByteInfo><span id="byteInfo">0</span>/100bytes</ByteInfo></td>
                        </tr>
                    </Table>
                    <Button type="submit" value="문의하기" />
                </Form>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Join;

