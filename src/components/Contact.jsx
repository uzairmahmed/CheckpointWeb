import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 80px 0;
  background-color: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#1a1a1a')};
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#fff')};
  
  span {
    color: #4CAF50;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#e0e0e0')};
  font-weight: 600;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${({ lightBg }) => (lightBg ? '#ddd' : '#444')};
  background-color: ${({ lightBg }) => (lightBg ? '#fff' : '#2d2d2d')};
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#e0e0e0')};
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${({ lightBg }) => (lightBg ? '#ddd' : '#444')};
  background-color: ${({ lightBg }) => (lightBg ? '#fff' : '#2d2d2d')};
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#e0e0e0')};
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const FormButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #388E3C;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactText = styled.p`
  color: ${({ lightBg }) => (lightBg ? '#666' : '#ccc')};
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#e0e0e0')};
  margin-bottom: 5px;
`;

const ContactValue = styled.p`
  color: ${({ lightBg }) => (lightBg ? '#666' : '#ccc')};
`;

const Contact = ({ lightBg }) => {
  return (
    <SectionContainer id="contact" lightBg={lightBg}>
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Get in <span>Touch</span></SectionTitle>
        <ContactGrid>
          <ContactForm>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Name</FormLabel>
              <FormInput type="text" placeholder="Your name" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Email</FormLabel>
              <FormInput type="email" placeholder="Your email" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Subject</FormLabel>
              <FormInput type="text" placeholder="Subject" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Message</FormLabel>
              <FormTextarea placeholder="Your message" lightBg={lightBg} />
            </FormGroup>
            <FormButton>Send Message</FormButton>
          </ContactForm>
          
          <ContactInfo>
            <ContactText lightBg={lightBg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat, urna turpis accumsan mi, vel sagittis odio eros vel nisi.
            </ContactText>
            <ContactItems>
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel lightBg={lightBg}>Email</ContactLabel>
                  <ContactValue lightBg={lightBg}>info@checkpoint.com</ContactValue>
                </ContactDetails>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel lightBg={lightBg}>Phone</ContactLabel>
                  <ContactValue lightBg={lightBg}>(123) 456-7890</ContactValue>
                </ContactDetails>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel lightBg={lightBg}>Address</ContactLabel>
                  <ContactValue lightBg={lightBg}>123 Podcast Street, Audio City</ContactValue>
                </ContactDetails>
              </ContactItem>
            </ContactItems>
          </ContactInfo>
        </ContactGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Contact;
