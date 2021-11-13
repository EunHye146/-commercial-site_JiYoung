import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import Responsive from '../components/common/Responsive';
import styled from 'styled-components';

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
    text-align : center;
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

const ContentWrapper = styled.div`
    width : 330px;
    margin : 0 auto;
    text-align : left;
    padding-top : 30px;
    input {
        margin : 8px;
        width : 330px;
    }
    textarea {
        margin : 8px;
    }
`;

const Button = styled.button`
    background : lightgray;
    border : none;
    width : 200px;
    height : 40px;
    font-size : 15px;
    margin-top : 10px;
    margin-bottom : 30px;
    cursor : pointer;
    &:hover {
        opacity : 0.5;
    }
`;

function Join( {showModal, closeModal}) {
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
    
        emailjs.sendForm('', '', form.current, '')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      // Byte 수 체크 제한
    
    const checkByte = (e) => {
        var str = e.value;
        var str_len = e.length;


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
            if(rbyte <= 80) {
                rlen = i+1;                                          //return할 문자열 갯수
            }
        }
        if (rbyte > 80) {
            // alert("한글 "+(maxByte/2)+"자 / 영문 "+maxByte+"자를 초과 입력할 수 없습니다.");
            alert("메세지는 최대 " + 80 + "byte를 초과할 수 없습니다.")
            str2 = str.substr(0,rlen);                                  //문자열 자르기
            e.value = str2;
            checkByte();
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
                <form ref={form} onSubmit={sendEmail}>
                    <label>이름</label>
                    <input type="text" name="name" />
                    <label>연락처</label>
                    <input type="tel" name="tel" placeholder="010-"/>
                    <label>창업지역</label>
                    <input type="text" name="area" placeholder="창업 희망 지역"/>
                    <label>문의내용</label>
                    <textarea name="message" /><span id="byteInfo">0</span> /80bytes
                    <input type="submit" value="Send" />
                </form>
                </Modal>
            </Background>
        </>
    );
}

export default Join;

