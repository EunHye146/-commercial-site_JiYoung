import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Slick from 'react-slick';
import leftarrow from '../imgs/leftarrow.png';
import rightarrow from '../imgs/rightarrow.png';
import high1 from '../imgs/high/01.jpg';
import high2 from '../imgs/high/02.jpg';
import high3 from '../imgs/high/03.jpg';
import high4 from '../imgs/high/04.jpg';
import high5 from '../imgs/high/05.jpg';
import high6 from '../imgs/high/06.jpg';
import low1 from '../imgs/low/01.JPG';
import low2 from '../imgs/low/02.JPG';
import low3 from '../imgs/low/03.JPG';
import low4 from '../imgs/low/04.JPG';
import low5 from '../imgs/low/05.JPG';
import flat1 from '../imgs/flat/01.jpg';
import flat2 from '../imgs/flat/02.jpg';
import flat3 from '../imgs/flat/03.jpg';
import room1 from '../imgs/room/01.JPG';
import room2 from '../imgs/room/02.JPG';
import room3 from '../imgs/room/03.JPG';
import room4 from '../imgs/room/04.JPG';
import cafe1 from '../imgs/cafe/01.jpg';
import cafe2 from '../imgs/cafe/02.jpg';
import cafe3 from '../imgs/cafe/03.jpg';
import cafe4 from '../imgs/cafe/04.jpg';
import other1 from '../imgs/other/01.jpg';
import other2 from '../imgs/other/02.jpg';
import other3 from '../imgs/other/03.jpg';
import other4 from '../imgs/other/04.jpg';
import other5 from '../imgs/other/05.jpg';



const Wrapper = styled(Responsive)`
    position : relative;
    padding-top : 7rem;
    height : 700px;
`;

const Category = styled.div`
    position : absolute;
    border : 1px solid;
    border-radius : 5px;
    width : 20%;
    font-size : 15px;
    color : gray;
    ul {
        list-style : none;
    }
    li {
        padding-top : 15px;
        padding-bottom : 15px;
        cursor : pointer;
    }
    #high {
        font-weight : bold;
        color : black;
    }
    @media screen and (max-width: 768px) {
        position : static;
        width : 75%;
        margin : 0 auto;
        font-size : 12px;
        overflow : hidden;
        ul {
            display: flex;
            justify-content: space-around;
            padding-left : 0px;
        }
        li {
            padding-top : 0;
            padding-bottom : 0;
        }
    }
`;

const ImgWrap = styled.div`
    position : absolute;
    right : 0;
    width : 75%;
    text-align : center;
    @media screen and (max-width: 768px) {
        position : static;
        width : 100%;
    }
    #main-slide-wrapper {
    }
    #main-slide {
        width : 70%;
        margin : 0 auto;
        overflow : hidden;
    }
    #subslide {
        cursor : pointer;
    }
    h2 {
        margin-top : 0;
    }
`;

const PrevButton = styled.img`
    position : absolute;
    top : 50%;
    left : 0;
    transform : translateY(-50%);
    width : 30px;
    cursor : pointer;
`;

const NextButton = styled.img`
    position : absolute;
    top : 50%;
    right : 0;
    transform : translateY(-50%);
    width : 30px;
    cursor : pointer;
`;

const Img = styled.img`
    border : 3px solid white;
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
    const [title, setTitle] = useState('하이파티션');

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
        setTitle(clicked.innerHTML);
    }
    return (
        <>
            <Header/>
            <Wrapper>
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
            <h2>{title}</h2>
            <div id="main-slide-wrapper">
                <div id="main-slide">
                    <Slick ref={mainSlickRef} asNavFor={pagingSlick} {...mainSettings}>
                        {clickedCate.map((first) => <Img src={first}/>)}
                    </Slick>
                </div>
                <PrevButton src={leftarrow} onClick={onClickPrev(mainSlickRef)}/>
                <NextButton src={rightarrow} onClick={onClickNext(mainSlickRef)}/>
            </div>
            <div id="subslide">
                <Slick ref={pagingSlickRef} asNavFor={mainSlick} {...pagingSettings}>
                    {clickedCate.map((first) => <Img src={first}/>)}
                </Slick>
            </div>
            </ImgWrap>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Space;