/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import rainbow from "../assets/rainbow.png";
import clouds from "../assets/clouds.png";

const HeaderWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 6rem;
    width: 100vw;
    font-family: 'Mina', sans-serif;
    text-align: center;
    position: relative; 
    @media screen and (max-width: 480px){
        margin-top: 2rem;
        margin-bottom: 2rem;
    }  

    h1 {
      font-size: 2rem;
      color: #3498db;
      z-index: 2; 
      position: relative; 
      width: 100vw;
      margin-left: auto;
      margin-right: auto;        
      // iPhone 5/SE
        @media screen and (max-width: 480px) {
        font-size: 1rem;
        width: 100vw;
        @media screen and (min-width: 768px) {
            font-size: 3rem;
        }
      } }`; 

const StyledClouds = styled.img`
    width: 10rem;
    position: absolute;
    right: 0%; 
    transform: translateX(-50%); 
    z-index: 1; 
    opacity: 0.6;
    @media screen and (max-width: 480px){
        display: none;
        
    }
`;

const AnimatedRainbow = styled.img`
  width: 30rem;
  height: 20rem;
  filter: drop-shadow(0 0 0.75rem #fff);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%); 
  animation: rainbowAnimation 3s ease-in-out infinite;

  @keyframes rainbowAnimation {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    50% {
        transform: translate(-50%, -50%) rotate(10deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    }

`;
const RainbowOverlay = styled.div`
    background-color: rgba(255, 255, 255, 0.5); 
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 1;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <StyledClouds src={clouds} alt="clouds" />
            <RainbowOverlay />
            <h1>What swedish word is hiding behind the clouds..?</h1>
            <AnimatedRainbow src={rainbow} alt="rainbow" />
        </HeaderWrapper>
    );
}

export default Header;
