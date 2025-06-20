import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import  Nav from "./Nav";
export const Header = () => {
  return (
    <MainHeader>
       <NavLink to="/">
            <img src="./images/logo.png" alt="logo" className="logo" />
       </NavLink>
       <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    posaition: relative;
  
    .logo{
        heightr: 5rem;
    }
`;