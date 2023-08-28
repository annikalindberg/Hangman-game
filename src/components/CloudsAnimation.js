import React from 'react';
import styled from 'styled-components';
import clouds from '../assets/clouds.png';
import singlecloud from '../assets/singlecloud.png';

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
        <StyledCloud src={singlecloud} alt="cloud" top={150} left={100} />
        <StyledCloud src={singlecloud} alt="cloud" top={150} left={200} />
        <StyledCloud src={singlecloud} alt="cloud" top={150} left={200} />
        <StyledCloud src={singlecloud} alt="cloud" top={100} left={300} />
        <StyledClouds src={clouds} alt="raincloud" top={100} left={400} />
      </CloudsWrapper>
    </div>
  );
};

export default InitialClouds;
