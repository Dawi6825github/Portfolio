import React from 'react';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '../assets/wow for home.jpg'; // Import your local image
import pdf from '../assets/cv own.pdf'
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* Optional overlay for better text visibility */
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 2rem;
  background: "#222222"; /* Slightly darker background for readability */
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-out;
  transform: translateY(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #dddddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #333222;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <Parallax
      bgImage={backgroundImage}
      strength={400}
    >
      <HomeSection>
        <Content>
          <Title>Welcome to My Portfolio</Title>
          <Subtitle>Frontend Developer | React.js | JavaScript</Subtitle>
          <Button href={pdf}>MY CV</Button>
        </Content>
      </HomeSection>
    </Parallax>
  );
};

export default Home;
