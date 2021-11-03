import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/common/NewHeader';
import Footer from '../components/common/Footer';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import Slick from 'react-slick';
import a1 from '../imgs/cafezone1.jpg';
import a2 from '../imgs/highpart.JPG';
import a3 from '../imgs/studyroomA.JPG';
import a4 from '../imgs/mainImg3.png';
import a5 from '../imgs/highpart.JPG';

const Wrapper = styled(Responsive)`
    position : relative;
    padding-top : 3.5rem;
    height : 700px;
`;

const Category = styled.div`
    position : absolute;
    border : 1px solid;
    width : 16%;
    ul {
        list-style : none;
    }
    li {
        padding-top : 15px;
        padding-bottom : 15px;
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
    @media screen and (max-width: 768px) {
        position : static;
        width : 100%;
    }
    #main-slide-wrapper {
    }
    #main-slide {
        width : 60%;
        margin : 0 auto;
    }
    #subslide {
    }
`;



function Space() {
    const [mainSlick, setMainSlick] = useState(null);
    const [pagingSlick, setPagingSlick] = useState(null);
    const mainSlickRef = useRef(null);
    const pagingSlickRef = useRef(null);

    useEffect(() => { setMainSlick(mainSlickRef.current); setPagingSlick(pagingSlickRef.current); }, []);

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

    const [cate1, setCate1] = useState(true);
    const [cate2, setCate2] = useState(false);
    const [cate3, setCate3] = useState(false);
    const [cate4, setCate4] = useState(false);
    const [cate5, setCate5] = useState(false);


    var cate = document.getElementsByClassName('cate');
    const categoryClick = (e) => {
        for (var i= 0; i<cate.length ; i++) {
            cate[i].style.fontSize = "13px";
            cate[i].style.color = "gray";
            cate[i].style.fontWeight = "normal";
        }
        e.target.style.fontSize = "15px";
        e.target.style.color = "black";
        e.target.style.fontWeight = "bold";
    }
    return (
        <>
            <Header/>
            <Wrapper>
            <Category>
                <ul>
                    <li className="cate" id="first" onClick={categoryClick}>내부</li>
                    <li className="cate" onClick={categoryClick}>스터디카페</li>
                    <li className="cate" onClick={categoryClick}>스터디룸</li>
                    <li className="cate" onClick={categoryClick}>카페존</li>
                    <li className="cate" onClick={categoryClick}>기타</li>
                </ul>
            </Category>
            <ImgWrap>
            <div id="main-slide-wrapper">
                <div id="main-slide">
                    <Slick ref={mainSlickRef} asNavFor={pagingSlick} {...mainSettings}>
                        <img src={a1}/>
                        <img src={a2}/>
                        <img src={a3}/>
                        <img src={a4}/>
                        <img src={a5}/>
                    </Slick>
                </div>
            </div>
            <div id="subslide">
                <Slick ref={pagingSlickRef} asNavFor={mainSlick} {...pagingSettings}>
                    <img src={a1}/>
                    <img src={a2}/>
                    <img src={a3}/>
                    <img src={a4}/>
                    <img src={a5}/>
                </Slick>
            </div>
            </ImgWrap>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Space;