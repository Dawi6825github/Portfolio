import React from 'react';
import styled from 'styled-components';

const testimonialsData = [
  {
    name: 'Mohmmed mekuria(MTech.CSE)',
    position: 'MWU Computer science Department Head',
    testimonial: 'I strongly recommend Mr.dawit tesfaye to anyone interested in recuriting his for academic or career programs, and i wish the best lucks in his future career that he so much deserves. ',
    details: 'He led the team with innovative solutions and met all deadlines with precision.please feel free to contact me for further clarification at: phone number:  +251917851204       ,Email:mohammed.adem856@gmail.com',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/cs%20department%20.pdf?alt=media&token=f12558ce-6a82-487b-a4ae-650f4354b40b', // Replace with the actual URL of the PDF
  },
  {
    name: 'Million Sime(MTech.CSE)',
    position: 'MWU Computing College Dean',
    testimonial: 'I am pleasured to write this letter of recommendation for Mr.Dawit Who has been an examplary student and remarkable individual during his time at Mwu knowing him from 2021. i wholeheartedly recommend him and believe he has the potential to excel in any endeavor he persues.I am honored to provide this recommendation on his behalf.',
    details: 'His work exceeded our expectations, especially with the complex integrations we required.  please feel free to contact me at phone number: +251900267857 oe Email: simemillion@gmail.com if you need any questions regarding his qualifications. I am confident that you will find himto be an exceptional candidate. ',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/mr.million.pdf?alt=media&token=5fb4a0f6-6b91-4bac-886a-7424ddfd9d5b', // Replace with the actual URL of the PDF
  },
  {
    name: 'Mabratu Fana(Ass.Professor)',
    position: 'Freelancer',
    testimonial: 'y I strongly recommend him he can excellently perform whatever tasks he will be assigned be it academic career or practical problem solving in computer science. Hence, once again I testify that he will be an invaluable asset to any employer or organization that offers him opportunity.',
    details: ' During this period, he has proved to be one of the most efficient and highly committed students of his batch.In need of any information regarding Mr. Dawit Tesfaye‘s qualification, please feel free to contact me at: +251932-038827 or fanamebratu47@gmail.com ',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/Mr.Dawit-signed.pdf?alt=media&token=31becfb9-6d8c-4313-a285-4da83944da63' // Replace with the actual URL of the PDF
  },
];

const TestimonialSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  height: 460px;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

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
    perspective: 1000px;
  width: 100%;
  max-width: 350px; /* Set a maximum width */
  min-width: 300px; /* Set a minimum width to prevent compression */
  flex: 1;
  margin: 2rem;
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
      padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    height:300px;
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
          <TestimonialCard
                      key={index} 
                      onClick={() => handleCardClick(testimonial.pdfUrl)}>
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
