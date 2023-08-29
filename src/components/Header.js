/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import rainbow from "../assets/rainbow.png";
import clouds from "../assets/clouds.png";

const HeaderWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 6rem;
    width: 100%;
    font-family: 'Mina', sans-serif;
    text-align: center;
    position: relative; /* Add this */
      

    h1 {
      font-size: 2rem;
      color: #3498db;
      z-index: 2; /* Add this to make the h1 appear above the rainbow */
      position: relative; /* Add this */
      @media screen and (max-width: 390px) {
        font-size: 1rem;
      }
    }
`;

const StyledClouds = styled.img`
    width: 10rem;
    position: absolute;
    right: 0%; /* Adjust this */
    transform: translateX(-50%); /* Adjust this */
    z-index: 1; /* Add this to make the clouds appear behind the h1 and rainbow */
`;

const AnimatedRainbow = styled.img`
  width: 30rem;
  height: 20rem;
  filter: drop-shadow(0 0 0.75rem #fff);
  position: absolute;
  left: 50%; /* Center the rainbow horizontally */
  transform: translate(-50%, -50%); /* Center the rainbow exactly */
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
    background-color: rgba(255, 255, 255, 0.5); /* Adjust the opacity as needed */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
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
