import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Slick from 'react-slick';
import leftarrow from '../imgs/leftarrow.png';
import rightarrow from '../imgs/rightarrow.png';
import first1 from '../imgs/first/f1.jpg';
import first2 from '../imgs/first/f2.jpg';
import first3 from '../imgs/first/f3.jpg';
import first4 from '../imgs/first/f4.jpg';
import first5 from '../imgs/first/f5.jpg';
import first6 from '../imgs/first/f6.jpg';
import first7 from '../imgs/first/f7.jpg';
import first8 from '../imgs/first/f8.jpg';
import second1 from '../imgs/second/s1.JPG';
import second2 from '../imgs/second/s2.JPG';
import second3 from '../imgs/second/s3.JPG';
import second4 from '../imgs/second/s4.JPG';
import second5 from '../imgs/second/s5.JPG';
import third1 from '../imgs/third/t1.JPG';
import third2 from '../imgs/third/t2.JPG';
import third3 from '../imgs/third/t3.JPG';
import third4 from '../imgs/third/t4.JPG';
import third5 from '../imgs/third/t5.JPG';
import fourth1 from '../imgs/fourth/f1.jpg';
import fourth2 from '../imgs/fourth/f2.jpg';
import fourth3 from '../imgs/fourth/f3.jpg';
import fourth4 from '../imgs/fourth/f4.jpg';
import fifth1 from '../imgs/fifth/f1.png';
import fifth2 from '../imgs/fifth/f2.jpg';
import fifth3 from '../imgs/fifth/f3.png';



const Wrapper = styled(Responsive)`
    position : relative;
    padding-top : 7rem;
    height : 700px;
`;

const Category = styled.div`
    position : absolute;
    border : 1px solid;
    border-radius : 5px;
    width : 15%;
    font-size : 13px;
    color : gray;
    ul {
        list-style : none;
    }
    li {
        padding-top : 15px;
        padding-bottom : 15px;
        cursor : pointer;
    }
    #first {
        font-size : 15px;
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
    width : 80%;
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

    const [clickedCate, setClickedCate] = useState([first1, first2, first3, first4, first5, first6, first7, first8]);
    const [title, setTitle] = useState('내부');

    var cate = document.getElementsByClassName('cate');
    const categoryClick = (e) => {
        const clicked = e.target;
        for (var i= 0; i<cate.length ; i++) {
            cate[i].style.fontSize = "13px";
            cate[i].style.color = "gray";
            cate[i].style.fontWeight = "normal";
        }
        clicked.style.fontSize = "15px";
        clicked.style.color = "black";
        clicked.style.fontWeight = "bold";
        if (clicked.id === 'first') {
            setClickedCate([first1, first2, first3, first4, first5, first6, first7, first8]);
            setTitle('내부');
        }
        else if (clicked.id === 'second') {
            setClickedCate([second1, second2, second3, second4, second5]);
            setTitle('스터디카페');
        }
        else if (clicked.id === 'third') {
            setClickedCate([third1, third2, third3, third4, third5]);
            setTitle('스터디룸');
        }
        else if (clicked.id === 'fourth') {
            setClickedCate([fourth1, fourth2, fourth3, fourth4]);
            setTitle('카페존');
        }
        else {
            setClickedCate([fifth1, fifth2, fifth3]);
            setTitle('기타');
        }
    }
    return (
        <>
            <Header/>
            <Wrapper>
            <Category>
                <ul>
                    <li className="cate" id="first" onClick={categoryClick}>내부</li>
                    <li className="cate" id="second" onClick={categoryClick}>스터디카페</li>
                    <li className="cate" id="third" onClick={categoryClick}>스터디룸</li>
                    <li className="cate" id="fourth" onClick={categoryClick}>카페존</li>
                    <li className="cate" id="fifth" onClick={categoryClick}>기타</li>
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