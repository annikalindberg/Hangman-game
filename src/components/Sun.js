import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sunImage from '../assets/sun.png';

const StyledSun = styled.img`
  width: 100px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: -1;
`;

const Sun = ({ top, left }) => {
  return <StyledSun src={sunImage} alt="sun" top={top} left={left} />;
};

Sun.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};
export default Sun;
