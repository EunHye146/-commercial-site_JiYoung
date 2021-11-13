import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainImg1 from '../../imgs/main/mainImg1.jpeg';
import mainImg2 from '../../imgs/main/mainImg2.jpeg';
import mainImg3 from '../../imgs/main/mainImg3.jpeg';


const Wrapper = styled.div`
    margin: 0 auto; /* 중앙 정렬 */
    object-fit: cover;
    opacity : 0.8;
`;

const Img = styled.img`
    height : 95vh;
    object-fit:cover;
    @media screen and (max-width: 768px) {
        height : 100vh;
    }
`;


class PhotoSlide extends React.Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            //얘 없으면 옆으로 슬라이드 형식
            fade:true,
            autoplay: true,
        };
    const imgs = [mainImg1, mainImg2, mainImg3];
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