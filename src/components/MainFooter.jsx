import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  font-size: 1.1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  margin-bottom: 1.5rem;

  a {
    margin: 0 1.5rem;
    color: #61dafb;
    text-decoration: none;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #b2ebf2;
    }
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 2rem;
  opacity: 0.8;
`;

const MainFooter = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://github.com/shukrishariif/Pomodoro-Technique.git" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </SocialLinks>
        <Copyright>
          © {new Date().getFullYear()} shukri. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default MainFooter;