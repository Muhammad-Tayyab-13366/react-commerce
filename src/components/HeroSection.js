import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from "../styles/Button";
const HeroSection = ({myData}) => {
    
    const { name } = myData;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to </p>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                    <NavLink to="/">
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                <div className='hero-section-image'>
                    <figure>
                        <img src="images/hero.jpg" className='image-style'/>
                    </figure>

                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    width: 150%; /* Makes the image responsive */
    height: auto; /* Maintains aspect ratio */
    max-width: 35rem; /* Limits maximum width */
    }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 4.5rem;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
