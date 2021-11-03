import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainImg1 from '../../imgs/mainImg1.jpg';
import mainImg2 from '../../imgs/mainImg2.jpeg';
import mainImg3 from '../../imgs/mainImg3.png';
import mainImg4 from '../../imgs/mainImg4.jpeg';


const Wrapper = styled.div`
    margin: 0 auto; /* 중앙 정렬 */
    object-fit: cover;
    overflow:hidden;
    @media screen and (max-width: 768px) {
        margin:0 auto;
    }
`;

const Img = styled.img`
    @media screen and (max-width: 768px) {
        height : 90vh;
        object-fit:cover;
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
    const imgs = [mainImg1, mainImg4];
    const imgList = imgs.map((img) => <Img src={img}/>);
    return (
        <>
            <Wrapper>
            <Slider {...settings}>{imgList}</Slider>
            </Wrapper>
        </>
    );
};
};

export default PhotoSlide;