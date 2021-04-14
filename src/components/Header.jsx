import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <Title>My personal blog</Title>
            <Menu>
                <NavLink to="/" exact={true}>Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </Menu>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    text-align: center;
    margin-bottom: 40px;
`;

const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }

    a:hover{
        color: #191668
    }
    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`;