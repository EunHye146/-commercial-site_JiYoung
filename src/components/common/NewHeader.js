import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';
import menu_icon from '../../imgs/menu_icon.png';
import insta from '../../imgs/insta.png';
import facebook from '../../imgs/facebook.png';
import blog from '../../imgs/blog.png';
import logo from '../../imgs/logo.png';
import logo2 from '../../imgs/logo2.png';
import Slide from 'react-reveal/Slide';

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
  &:hover{
    color : gray;
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

const Blog = styled.div`
  color : black;
  cursor : pointer;
  font-weight : 200;
  letter-spacing : 0.1rem;
  &:hover {
      color : #099e18;
      font-weight : 500;
  }
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
        window.open('https://section.blog.naver.com/', '_blank')
    }

    return(
        <>
        <div className="header">
            <div className="navBar_toggleBtn"><img className="menu_icon_img" src={menu_icon} onClick={CkMenuToggle}/></div>
            <div><Link to="/"><LogoImg src={logo2}/></Link></div>
            <ul className="navBar_menus">
                <li className="navBar_menus_menu">
                    <LinkTo to="/services">서비스</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/location">위치</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/space">공간</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/product">이용요금</LinkTo>
                </li>
                <li className="navBar_menus_menu">
                    <LinkTo to="/notice">NOTICE</LinkTo>
                </li>
            </ul>
            <Blog onClick={openBlog}>blog</Blog>
        </div>
         <Slide top when={menuToggle}>
            <ul id="toggleMenus">
                <li className="toggleMenus_menu">
                    <LinkTo to="/services">서비스</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/location">위치</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/space">공간</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/product">이용요금</LinkTo>
                </li>
                <li className="toggleMenus_menu">
                    <LinkTo to="/notice">NOTICE</LinkTo>
                </li>
            </ul>
        </Slide>
        </>
    )
}

export default withRouter(NewHeader);