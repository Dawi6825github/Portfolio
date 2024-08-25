import React from 'react';
import { styled } from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(0, 0, 255, 0.005); /* Light blue with transparency */
  background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.1));
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  padding: 20px;
    background: rgba(255, 255, 255, 0.1); /* Semi-transparent white background */
height: 450px;
border-radius: 10px;
`;

const Image = styled.img`
  width: 70%;
  height: 450px;
  border-radius: 10px;
  transition: transform 0.66s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  flex-basis: 50%;
  height:397px;
  padding:50px;
  background: rgba(255, 255, 255, 0.17); /* Semi-transparent white background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #f9004d;
  font-weight: bold;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const SocialMediaIcon = styled.a`
  color: #333;
  margin-right: 15px;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f9004d;
  }
`;

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/photo_2024-08-05_01-45-29.jpg?alt=media&token=37330894-2809-4302-97ef-eb01290bfa7e" alt="About Me Image" />
      </ImageContainer>
      <TextContainer>
        <div>
          <Heading>About Me</Heading>
          <Paragraph>
            Hi, My name is <Highlight>Dawit</Highlight> Tesfaye, and I am on the path to becoming a full-stack developer, with a strong foundation in Computer Science. I specialize in building dynamic and user-centric web applications, leveraging modern technologies such as React.js, Node.js, and Firestore. Committed to continuous learning and growth, I am driven to excel as a full-stack developer by 2026.
          </Paragraph>
        </div>
        <SocialMediaContainer>
          <SocialMediaIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </TextContainer>
    </Container>
  );
}

export default About;
