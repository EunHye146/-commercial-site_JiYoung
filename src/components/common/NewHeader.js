import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';
import menu_icon from '../../imgs/menu_icon.png';
import insta from '../../imgs/insta.png';
import facebook from '../../imgs/facebook.png';
import blog from '../../imgs/blog.png';
import logo from '../../imgs/logo.png';
import Slide from 'react-reveal/Slide';

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
  &:hover{
    border-bottom: 1px solid gray;
    color : gray;
    padding-bottom: 3px;
    trasition: all 0.2s ease;
    transition-duration: 0.3s;
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

const NewHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [snsToggle, setSnsToggle] = useState(false);

    const CkMenuToggle = () => {
        document.getElementById('toggleSns').style.display = 'none';
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
    return(
        <>
        <div className="header">
            <div className="navBar_toggleBtn"><img className="menu_icon_img" src={menu_icon} onClick={CkMenuToggle}/></div>
            <div><Link to="/"><LogoImg src={logo}/></Link></div>
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

            <div className="sns_drop_icon" onClick={CkSnsToggle}>sns +</div>
            <ul className="sns_icons">
                <li className="sns_icons_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"><Img src={insta}/></a>
                </li>
                <li className="sns_icons_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"><Img src={facebook}/></a>
                </li>
                <li className="sns_icons_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://blog.naver.com"><Img src={blog}/></a>
                </li>
            </ul>
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
        <Slide top when={snsToggle}>
            <ul id="toggleSns">
                <li className="toggleSns_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/"><Img src={insta}/></a>
                </li>
                <li className="toggleSns_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"><Img src={facebook}/></a>
                </li>
                <li className="toggleSns_icon">
                    <a className="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://blog.naver.com"><Img src={blog}/></a>
                </li>
            </ul>
        </Slide>
        </>
    )
}

export default withRouter(NewHeader);