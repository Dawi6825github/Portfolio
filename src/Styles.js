import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Section = styled.section`
  padding: 4rem 0;
  text-align: center;
`;
