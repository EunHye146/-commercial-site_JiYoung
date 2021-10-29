import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../imgs/img1.jpeg';
import img2 from '../../imgs/img2.png';
import img3 from '../../imgs/img3.jpeg';
import mainImg from '../../imgs/mainImg.jpg';


const Wrapper = styled.div`
    margin: 0 auto; /* 중앙 정렬 */
    object-fit: cover;
    @media screen and (max-width: 768px) {
        height : 100vh;
        overflow: hidden;
    }
`;

const Img = styled.img`
    @media screen and (max-width: 768px) {
        width : 100vh;
        height : 100vh;
    }
`;


class PhotoSlide extends React.Component {
    render() {
        const settings = {
            dots: true,
            arrows:true,
            infinite: true,
            speed: 500,
            //얘 없으면 옆으로 슬라이드 형식
            fade:true,
            autoplay: true,
        };
    const imgs = [img1, img2, img3];
    const imgList = imgs.map((img) => <Img src={img}/>);
    return (
        <>
            <Wrapper>
            <Slider><Img src={mainImg}/></Slider>
            </Wrapper>
        </>
    );
};
};

export default PhotoSlide;