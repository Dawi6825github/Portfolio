import React from 'react';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';

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
  padding: 5rem;
  padding-Right: 20px;
  margin-Left:50px;
  background: "#222222"; /* Slightly darker background for readability */
  border-radius: 12px;
  animation: ${fadeIn} 1s ease-out;
  transform: translateY(20px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

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

const Highlight = styled.span`
 color: #f9004d;
 fontStyle: bold;
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

// const Content1 = styled.div`
//     max-width: 600px;
//   padding: 5rem;
//   margin-left: 100px;
//   background: "#222222"; /* Slightly darker background for readability */
//   border-radius: 50px;
//   animation: ${fadeIn} 1s ease-out;
//   transform: translateY(20px);
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-Right: 50px;
  border-radius: 50%; /* Makes the image circular */
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;




const Home = () => {
    // Replace this URL with the actual URL of your uploaded PDF

  const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/assets%2Fassets%2Fmy_cv%20dereja_compressed.pdf?alt=media&token=b53bd6f9-4c2d-4546-8ab8-e37b0acef247';
  const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/assets%2Fassets%2Fwow%20for%20home.jpg?alt=media&token=8328ba70-5d3e-45eb-aaa1-101a3edc666c';
  return (
    <Parallax
      bgImage={backgroundImage}
      strength={400}
    >
      <HomeSection>
        <Content>
          <Title>Welcome to My Portfolio</Title>
          <h2>Hi , I'm <Highlight>Dawit</Highlight></h2>
          <Subtitle>Frontend Developer | React.js | JavaScript</Subtitle>
          <Button href={pdfUrl} target="_blank" rel="noopener noreferrer">MY CV</Button>
        </Content>
              
          <content1>
          <Img src='https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/photo_2024-08-05_15-28-03.jpg?alt=media&token=0ec331fc-ffda-4f49-a176-d34c75573e0e'/>
            </content1>    
       

      </HomeSection>
    </Parallax>
  );
};

export default Home;
