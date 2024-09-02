import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: 'Transparent';
  color: #333;
  text-align: center;
 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; Datnet 2024. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
