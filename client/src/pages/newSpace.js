import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import User from '../components/common/User';
import styled from 'styled-components';
import Slick from 'react-slick';
import Fade from 'react-reveal/Fade';
import leftarrow from '../imgs/space/leftarrow.png';
import rightarrow from '../imgs/space/rightarrow.png';
import high1 from '../imgs/space/high/01.jpg';
import high2 from '../imgs/space/high/02.jpg';
import high3 from '../imgs/space/high/03.jpg';
import high4 from '../imgs/space/high/04.jpg';
import high5 from '../imgs/space/high/05.jpg';
import high6 from '../imgs/space/high/06.jpg';
import low1 from '../imgs/space/low/01.JPG';
import low2 from '../imgs/space/low/02.JPG';
import low3 from '../imgs/space/low/03.JPG';
import low4 from '../imgs/space/low/04.JPG';
import low5 from '../imgs/space/low/05.JPG';
import flat1 from '../imgs/space/flat/01.jpg';
import flat2 from '../imgs/space/flat/02.jpg';
import flat3 from '../imgs/space/flat/03.jpg';
import room1 from '../imgs/space/room/01.JPG';
import room2 from '../imgs/space/room/02.JPG';
import room3 from '../imgs/space/room/03.JPG';
import room4 from '../imgs/space/room/04.JPG';
import cafe1 from '../imgs/space/cafe/01.jpg';
import cafe2 from '../imgs/space/cafe/02.jpg';
import cafe3 from '../imgs/space/cafe/03.jpg';
import cafe4 from '../imgs/space/cafe/04.jpg';
import other1 from '../imgs/space/other/01.jpg';
import other2 from '../imgs/space/other/02.jpg';
import other3 from '../imgs/space/other/03.jpg';
import other4 from '../imgs/space/other/04.jpg';
import other5 from '../imgs/space/other/05.jpg';

const Wrapper = styled.div`
    margin-top : 45px;
    margin-bottom : 45px;
    text-align : center;
`;

const Spacer = styled.div`
  height : 3.5rem;
`;

const Title = styled.div`
    font-size : 25px;
    font-weight : bold;
    margin-top : 45px;
    text-align : center;
`;

const Div = styled.div`
    display : inline-block;
    width : 80%;
    text-align : right;
    @media screen and (max-width: 768px) {
        width : 100%;
        text-align : center;
    }
`;

const Category = styled.div`
    position : absolute;
    width : 17%;
    border : 1px solid black;
    border-radius : 5px;
    font-size : 15px;
    color : gray;
    text-align : left;
    ul {
        list-style : none;
        padding : 0;
    }
    li {
        cursor : pointer;
        margin : 26px 26px 26px 26px;
    }
    #high {
        font-weight : bold;
        color : black;
    }
    @media screen and (max-width: 768px) {
        position : static;
        width : 95%;
        margin : 0 auto;
        margin-bottom : 10px;
        font-size : 12px;
        overflow : hidden;
        ul {
            display: flex;
            justify-content: space-around;
        }
        li {
            margin : 0;
        }
    }
`;

const ImgWrap = styled.div`
    display : inline-block;
    position : relative;
    width : 76%;
    text-align : center;
    @media screen and (max-width: 768px) {
        width : 95%;
    }
`;

const SlideWrap = styled.div`
    display : inline-block;
    width : 80%;
    @media screen and (max-width: 768px) {
        width : 90%;
    }
`;

const PrevButton = styled.img`
    position : absolute;
    top : 50%;
    left : 0;
    transform : translateY(-50%);
    width : 30px;
    cursor : pointer;
    @media screen and (max-width: 768px) {
        width : 10px;
    }
`;

const NextButton = styled.img`
    position : absolute; 
    top : 50%;  
    right : 0;
    transform : translateY(-50%);
    width : 30px;
    cursor : pointer;
    @media screen and (max-width: 768px) {
        width : 10px;
    }
`;

const Img = styled.img`
    border : 2px solid white;
`;

const Hr = styled.hr`
  width : 250px;
  display : block;
`;

function Space() {
    const [mainSlick, setMainSlick] = useState(null);
    const [pagingSlick, setPagingSlick] = useState(null);
    const mainSlickRef = useRef(null);
    const pagingSlickRef = useRef(null);

    useEffect(() => { 
        setMainSlick(mainSlickRef.current); 
        setPagingSlick(pagingSlickRef.current); 
    }, []);

    const mainSettings =
    {
        dots: false,
        arrows: false, 
        infinite: true, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
    };

    const pagingSettings = 
    {
        dots: false, 
        arrows: false, 
        centerMode: true, 
        slidesToShow: 3, 
        swipeToSlide: true, 
        focusOnSelect: true, 
    };

    const onClickPrev = useCallback((ref) => () => ref.current.slickPrev(), []); 
    const onClickNext = useCallback((ref) => () => ref.current.slickNext(), []);

    const [clickedCate, setClickedCate] = useState([high1,high2,high3,high4,high5,high6]);

    var cate = document.getElementsByClassName('cate');
    const categoryClick = (e) => {
        const clicked = e.target;
        for (var i= 0; i<cate.length ; i++) {
            cate[i].style.color = "gray";
            cate[i].style.fontWeight = "normal";
        }
        clicked.style.color = "black";
        clicked.style.fontWeight = "bold";
        if (clicked.id === 'high') {
            setClickedCate([high1,high2,high3,high4,high5,high6]);
        }
        else if (clicked.id === 'low') {
            setClickedCate([low1,low2,low3,low4,low5]);
        }
        else if (clicked.id === 'flat') {
            setClickedCate([flat1,flat2,flat3]);
        }
        else if (clicked.id === 'room') {
            setClickedCate([room1,room2,room3,room4]);
        }
        else if (clicked.id === 'cafe') {
            setClickedCate([cafe1,cafe2,cafe3,cafe4]);
        }
        else {
            setClickedCate([other1,other2,other3,other4,other5]);
        }
    }
    return (
        <>
            <Header/>
            <User/>
            <Spacer/>
            <Title><Fade left><Hr/></Fade><Fade delay={400}>공간</Fade><Fade right><Hr/></Fade></Title>
            <Fade delay={700}>
            <Wrapper>
                <Div>
                    <Category>
                    <ul>
                        <li className="cate" id="high" onClick={categoryClick}>하이파티션</li>
                        <li className="cate" id="low" onClick={categoryClick}>로우파티션</li>
                        <li className="cate" id="flat" onClick={categoryClick}>평상형</li>
                        <li className="cate" id="room" onClick={categoryClick}>스터디룸(4인/6인)</li>
                        <li className="cate" id="cafe" onClick={categoryClick}>카페존</li>
                        <li className="cate" id="other" onClick={categoryClick}>기타</li>
                    </ul>
                    </Category>
                    <ImgWrap>
                        <SlideWrap>
                            <Slick ref={mainSlickRef} asNavFor={pagingSlick} {...mainSettings}>
                                {clickedCate.map((first, index) => <Img src={first} key={index}/>)}
                            </Slick>
                            <Slick ref={pagingSlickRef} asNavFor={mainSlick} {...pagingSettings}>
                                {clickedCate.map((first, index) => <Img src={first} key={index}/>)}
                            </Slick>
                        </SlideWrap>
                        <PrevButton src={leftarrow} onClick={onClickPrev(mainSlickRef)}/>
                        <NextButton src={rightarrow} onClick={onClickNext(mainSlickRef)}/>
                    </ImgWrap>
                </Div>
            </Wrapper>
            </Fade>
            <Footer/>
        </>
    );
}

export default Space;