import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Section = styled.section`
  max-width: 800px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    z-index: 0;
    transform: rotate(-30deg);
  }

  h1, h2 {
    color: #333;
    z-index: 1;
  }

  p {
    color: #666;
    line-height: 1.6;
    z-index: 1;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const About = () => {
  return (
    <Container>
      <Section>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I'm <strong>Dawit</strong>, a passionate and driven <strong>full-stack developer</strong> based in Addis Abeba, Ethiopia. With a background in <strong>Computer Science</strong>, I am dedicated to creating intuitive and dynamic web applications that offer seamless user experiences.
        </Paragraph>
      </Section>
      <Section>
        <SubHeading>My Journey</SubHeading>
        <Paragraph>
          My journey in the tech world started with a strong interest in <strong>programming</strong> and <strong>software development</strong> during my studies. Over the years, I've honed my skills in both frontend and backend technologies, and I'm continually expanding my expertise to stay at the forefront of the industry.
        </Paragraph>
        <Paragraph>
          I have experience working with a variety of technologies including <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Firestore</strong>, and more. My goal is to become a highly skilled full-stack developer by 2026, capable of taking on complex challenges and delivering high-quality solutions.
        </Paragraph>
      </Section>
      <Section>
        <SubHeading>What I Do</SubHeading>
        <Paragraph>
          I specialize in creating responsive, user-friendly websites and applications. My recent projects include:
        </Paragraph>
        <List>
          <ListItem><strong>A Music School Website</strong>: A comprehensive platform for a music school, featuring interactive course displays, testimonials, and advanced contact forms.</ListItem>
          <ListItem><strong>Portfolio Website</strong>: A showcase of my skills and projects, complete with detailed project pages and a modern, responsive design.</ListItem>
        </List>
      </Section>
      <Section>
        <SubHeading>My Approach</SubHeading>
        <Paragraph>
          I believe in a collaborative approach to development, where understanding client needs and delivering beyond expectations is key. I strive for continuous improvement, always looking for ways to enhance both the functionality and aesthetics of the websites I create.
        </Paragraph>
      </Section>
      <Section>
        <SubHeading>Let's Connect</SubHeading>
        <Paragraph>
          I'm always excited to take on new projects or discuss innovative ideas. Whether you're looking to collaborate or just want to chat about the latest in web development, feel free to reach out!
        </Paragraph>
      </Section>
    </Container>
  );
}

export default About;
