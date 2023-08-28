/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import clouds from '../assets/clouds.png';
import singlecloud from '../assets/singlecloud.png';
import Sun from './Sun';

const CloudsWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
   
    `

const StyledClouds = styled.img`
    width: 10rem;
    position: absolute;
 top: ${(props) => props.top}px;
left: ${(props) => props.left}px;;
`;

const StyledCloud = styled.img`
    width: 8rem;
    position: absolute;
top: ${(props) => props.top}px; 
left: ${(props) => props.left}px;
    `;

const InitialClouds = () => {
  return (
    <div className="clouds-and-sun">
      <CloudsWrapper>
        <Sun top={200} left={600} />
        <StyledCloud src={singlecloud} alt="cloud" top={250} left={600} />
        <StyledCloud src={singlecloud} alt="cloud" top={250} left={600} />
        <StyledCloud src={singlecloud} alt="cloud" top={200} left={500} />
        <StyledCloud src={singlecloud} alt="cloud" top={200} left={600} />
        <StyledClouds src={clouds} alt="raincloud" top={100} left={600} />
      </CloudsWrapper>
    </div>
  );
};

export default InitialClouds;
