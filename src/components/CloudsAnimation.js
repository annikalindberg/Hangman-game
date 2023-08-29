/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import clouds from '../assets/clouds.png';
import rainbow from '../assets/rainbow.png';
/* import sun_1 from '../assets/sun_1.png';
import sun_2 from '../assets/sun_2.png';
import sun_3 from '../assets/sun_3.png'; */
import singlecloud from '../assets/singlecloud.png';
import sunImage from '../assets/sun.png';


// STYLED COMPONENTS
const CloudsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* height: 100vh; */
    `

const StyledClouds = styled.img`
    width: 10rem;
position: absolute;
 top: ${(props) => props.top}px;
left: ${(props) => props.left}px;
opacity: ${(props) => props.opacity}; 
@media screen and (min-width: 768px) {
  width: 8rem;
  @media screen and (min-width: 1024px) {
    width: 13rem;
    
  }
}
`;

const StyledSun = styled.img`
  width: 10rem;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  opacity: ${(props) => props.opacity};
  z-index: -1;
`;

const StyledRainbow = styled.img`
  width: 30rem;
  height: 20rem;
  filter: drop-shadow(0 0 0.75rem #fff);
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  `


const StyledCloud = styled.img`
  position: absolute;
    width: 8rem;
top: ${(props) => props.top}px; 
left: ${(props) => props.left}px;
@media screen and (min-width: 768px) {
  width: 10rem;
  @media screen and (min-width: 1024px) {
    width: 13rem;
    
  }
}

    `;



const calculateProgressLevel = (correctGuesses) => {
  if (correctGuesses.length === 0) {
    // Return the initial state or level for images
    return 0;
  } else if (correctGuesses.length < 2) {
    return 1;
  } else if (correctGuesses.length < 3) {
    return 2;
  } else if (correctGuesses.length < 4) {
    return 3;
  } else if (correctGuesses.length < 5) {
    return 3;
  } else {
    return 3;
  }
}; 

const InitialClouds = ({ correctGuesses }) => {
  // Calculate progress level based on the number of correct guesses
  const progressLevel = calculateProgressLevel(correctGuesses);

  // Determine the maximum number of clouds to display
  const maxNumClouds = 5; 

  return (
    <div className="clouds-and-sun">
      <CloudsWrapper>
        {/* Display clouds based on correct guess progress */}
        {Array.from({ length: maxNumClouds }).map((_, index) => (
          <StyledClouds
            src={clouds}
            top={600}
            left={300 + index * 50}
            key={index}
            style={{
              display: index < progressLevel ? "none" : "block",
              zIndex: maxNumClouds - index,
            }}
          />
        ))}

        {/* Display sun and clouds based on correct guess progress */}
        {correctGuesses.length === 0 && <StyledClouds src={clouds} top={500} left={300} />} 
        {correctGuesses.length === 0 && <StyledClouds src={clouds} top={550} left={200} />} 
        {correctGuesses.length === 0 && <StyledCloud src={singlecloud} top={550} left={400} />} 
        {correctGuesses.length === 0 && <StyledClouds src={clouds} top={550} left={300} style={{ zIndex: -1 }} />} 
        {correctGuesses.length > 0 && <StyledSun src={sunImage} top={550} left={100} />}
        {/* Increase anount of clouds as the user makes more correct guesses */}
        {/* Display rainbow when the game is complete */}
        {correctGuesses.length >= 4 && <StyledRainbow src={rainbow} top={650} left={300} />}
      </CloudsWrapper>
    </div>
  );
};



InitialClouds.propTypes = {
  correctGuesses: PropTypes.arrayOf(PropTypes.string).isRequired, 
  gameReset: PropTypes.bool.isRequired,
};

export default InitialClouds;
