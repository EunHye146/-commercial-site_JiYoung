import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';
import menu_icon from '../../imgs/main/menu_icon.png';
import logo from '../../imgs/main/logo.png';
import naver_icon from '../../imgs/main/naver_icon.png';
import Slide from 'react-reveal/Slide';

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
  &:hover{
    color : #e8c74d;
  }
`

const LogoImg = styled.img`
  height : 3rem;
`;

const Img = styled.img`
  width : 1.5rem;
  height : 1.5rem;
  @media screen and (max-width: 768px) {
    width : 3rem;
    height : 3rem;
    padding : 1rem;
  }
`;

const User = styled.div`
  font-size : 12px;
`;

const NaverImg = styled.img`
  width : 40px;
  cursor : pointer;
`;

const NewHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [snsToggle, setSnsToggle] = useState(false);

    const CkMenuToggle = () => {
        //document.getElementById('toggleSns').style.display = 'none';
        setSnsToggle(false);
        if (menuToggle) {
            setMenuToggle(!menuToggle);
            setTimeout(() => {
                document.getElementById('toggleMenus').style.display = 'none';
              }, 720);
        } 
        else {
            document.getElementById('toggleMenus').style.display = 'block';
            setMenuToggle(!menuToggle);
        }
    }

    const CkSnsToggle = () => {
        document.getElementById('toggleMenus').style.display = 'none';
        setMenuToggle(false);
        if (snsToggle) {
            setSnsToggle(!snsToggle);
            setTimeout(() => {
                document.getElementById('toggleSns').style.display = 'none';
              }, 720);
        } 
        else {
            document.getElementById('toggleSns').style.display = 'block';
            setSnsToggle(!snsToggle);
        }
    }

    const user = window.sessionStorage.getItem('id');

    const openBlog = () => {
        window.open('https://map.naver.com/v5/search/%EC%A1%B0%EC%95%84%EC%8A%A4%ED%84%B0%EB%94%94/place/1336064146?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14109386.6864605,4541731.1410773,15,0,0,0,dh', '_blank')
    }

    return(
        <>
        <div className="header">
            <div className="navBar_toggleBtn"><img className="menu_icon_img" src={menu_icon} onClick={CkMenuToggle}/></div>
            <div><Link to="/"><LogoImg src={logo}/></Link></div>
            <ul className="navBar_menus">
                <li className="navBar_menus_menu">
                    <LinkTo to="/space">공간</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/location">위치</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/product">이용요금</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/event">EVENT</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/join">가맹문의</LinkTo>
                </li>
            </ul>
            <NaverImg src={naver_icon} onClick={openBlog}/>
        </div>
         <Slide top when={menuToggle}>
            <ul id="toggleMenus">
                <li className="toggleMenus_menu">
                    <LinkTo to="/space">공간</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/location">위치</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/product">이용요금</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/event">EVENT</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/join">가맹문의</LinkTo>
                </li>
            </ul>
        </Slide>
        </>
    )
}

export default withRouter(NewHeader);