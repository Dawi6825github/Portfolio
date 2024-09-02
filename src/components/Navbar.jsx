import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: transparent; /* Set background to transparent */
  color: black;
  margin: -20px;
  position:relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: green;
    text-decoration: none;

    &:hover {
      text-decoration: underline; /* Optional: Add underline on hover for better visibility */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    
  }

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 2px 0px;
    transition: 0.4s;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <h1>Dawit Tesfaye</h1>
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
        
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
