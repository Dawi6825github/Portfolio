import React from 'react';
import styled from 'styled-components';
import cv_own from '../assets/cv own.pdf';

const testimonialsData = [
  {
    name: 'John Doe',
    position: 'CEO of XYZ',
    testimonial: 'Dawit did an excellent job on our project. His attention to detail and expertise in web development were crucial to our success.',
    details: 'He led the team with innovative solutions and met all deadlines with precision.',
    pdfUrl: cv_own, // Replace with the actual URL of the PDF
  },
  {
    name: 'Jane Smith',
    position: 'CTO of ABC Corp',
    testimonial: 'Working with Dawit was a pleasure. He is highly skilled, professional, and delivered everything on time.',
    details: 'His work exceeded our expectations, especially with the complex integrations we required.',
    pdfUrl: '/path-to-jane-smith-testimonial.pdf', // Replace with the actual URL of the PDF
  },
  {
    name: 'Alice Johnson',
    position: 'Freelancer',
    testimonial: 'I highly recommend Dawit for any web development work. His creativity and coding skills are top-notch.',
    details: 'Dawit’s ability to bring ideas to life is truly remarkable. His work on my portfolio was amazing.',
    pdfUrl: '/path-to-alice-johnson-testimonial.pdf', // Replace with the actual URL of the PDF
  },
];

const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 460px;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 350px; /* Set a maximum width */
  min-width: 300px; /* Set a minimum width to prevent compression */
  flex: 1;
  margin: 2rem;
  cursor: pointer;

  &:hover .inner {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  .front,
  .back {
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .front {
    background-color: white;
    padding: 2rem;
  }

  .back {
    background-color: white;
    color: '#de7bff';
    transform: rotateY(180deg);
    padding-right: 20px;
    min-height: 255px;
    min-width: 350px;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const DetailsText = styled.p`
  font-size: 1rem;
  color: #aaa;
  line-height: 1.6;
`;

const Testimonials = () => {
  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <TestimonialSection>
      <Heading>What People Are Saying</Heading>
      <TestimonialGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} onClick={() => handleCardClick(testimonial.pdfUrl)}>
            <InnerCard className="inner">
              <div className="front">
                <Name>{testimonial.name}</Name>
                <Position>{testimonial.position}</Position>
                <TestimonialText>{testimonial.testimonial}</TestimonialText>
              </div>
              <div className="back">
                <DetailsText>{testimonial.details}</DetailsText>
              </div>
            </InnerCard>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default Testimonials;
