import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderContainer>
            <Title>My personal blog</Title>
            <Menu>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
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
`;