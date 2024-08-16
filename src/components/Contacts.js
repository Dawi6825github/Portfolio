import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import backgroundImage from '../assets/th.jpg';
// Background Image Style
const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

// Form Container Style
const FormContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
`;

// Form Field Style
const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #fff;
  font-weight: 500;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: none;
  margin-top: 0.25rem;
  font-size: 1rem;
`;

const ErrorText = styled.div`
  color: #ff6f61;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #ff6f61;
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4c4c;
  }
`;

// Social Media Links Style
const SocialMedia = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6f61;
    }
  }
`;

// Form Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  return (
    <ContactSection>
      <FormContainer>
        <h2 style={{ color: '#fff', textAlign: 'center' }}>Contact Us</h2>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission here
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <FieldContainer>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" />
              <ErrorMessage name="name" component={ErrorText} />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" />
              <ErrorMessage name="email" component={ErrorText} />
            </FieldContainer>
            <FieldContainer>
              <Label htmlFor="message">Message</Label>
              <Input id="message" name="message" as="textarea" rows="4" />
              <ErrorMessage name="message" component={ErrorText} />
            </FieldContainer>
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </Formik>
        <SocialMedia>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialMedia>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
