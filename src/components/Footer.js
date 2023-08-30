import React from 'react';
import styled from 'styled-components';

const StyledFooterWrapper = styled.footer`
    position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        height: 7rem;
        padding: 0 3rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #EEECFB;
        color: #686161;
        flex-direction: row;
        @media screen and (max-width: 480px){
          flex-direction: column;
          height: 15rem;
        
        }

.footer-text {
  text-align: center;
  font-size: 0.5rem;
  color: #272525;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
}
`
const StyledFooterText = styled.p`
  text-align: center;
  font-size: 0.8rem;
  color: #686161;
  `

const StyledFooterLinks = styled.a`
  color: #272525;
  text-decoration: none;
  font-weight: bold;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: white;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;


const Footer = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooterText>Made by © Annika Lindberg</StyledFooterText>
            <StyledFooterLinks
                href="https://annikalindberg-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Portfolio{' '}
            </StyledFooterLinks>
            <span>|</span>
            <StyledFooterLinks
                href="https://www.linkedin.com/in/annika-lindberg-frontend-developer/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn{' '}
            </StyledFooterLinks>
            <span>|</span>
            <StyledFooterLinks
                href="https://github.com/annikalindberg"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </StyledFooterLinks>
        </StyledFooterWrapper>
    );
};

export default Footer;
