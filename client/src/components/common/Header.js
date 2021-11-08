import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    margin-left: auto;
  }
`;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: lightgray;
  z-index : 100;
`;

const Logo = styled(Link)`
    text-decoration : none;
    color : gray;
`;

const Header = () => {
    return(
        <>
        <HeaderBlock>
        <Wrapper>
        <span className="logo">
        <Logo to='/'>회사로고</Logo>
        </span>
        <span className="right">
        <Navbar/>
        </span>
        </Wrapper>
        </HeaderBlock>
        </>
    )
}

export default withRouter(Header);