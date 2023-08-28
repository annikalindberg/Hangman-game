/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import clouds from '../assets/clouds.png';
/* import singlecloud from '../assets/singlecloud.png'; */
import Sun from './Sun';

/* const CloudsWrapper = styled.div`
    position: absolute;
    width: 100%;
    max-width: 700px;
    margin-top: 50%;
    margin-left: auto;
    margin-right: auto;
    ` */

const StyledClouds = styled.img`
    width: 15rem;
position: absolute;
 top: ${(props) => props.top}px;
left: ${(props) => props.left}px;;
`;

/* const StyledCloud = styled.img`
    width: 8rem;
top: ${(props) => props.top}px; 
left: ${(props) => props.left}px;
    `; */

const InitialClouds = () => {
  return (
    <div className="clouds-and-sun">
     {/*  <CloudsWrapper> */}
        <Sun top={700} left={300} />

        <StyledClouds src={clouds} alt="raincloud" top={700} left={400} />
     {/*  </CloudsWrapper> */}
    </div>
  );
};

export default InitialClouds;
