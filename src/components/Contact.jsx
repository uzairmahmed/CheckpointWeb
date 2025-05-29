import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${({ lightBg }) => (lightBg ? 'var(--light)' : 'var(--dark)')};
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ lightBg }) => 
    lightBg 
      ? 'radial-gradient(var(--primary-light) 3px, transparent 3px)'
      : 'radial-gradient(rgba(255, 255, 255, 0.1) 3px, transparent 3px)'
  };
  background-size: 30px 30px;
  opacity: 0.2;
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  span {
    color: var(--primary);
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: ${({ lightBg }) => 
        lightBg ? 'var(--primary-light)' : 'rgba(76, 175, 80, 0.3)'};
      z-index: -1;
      border-radius: 10px;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  font-weight: 600;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border-radius: var(--border-radius);
  border: 1px solid ${({ lightBg }) => (lightBg ? 'var(--gray-300)' : 'var(--gray-700)')};
  background-color: ${({ lightBg }) => (lightBg ? 'var(--white)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px ${({ lightBg }) => 
      lightBg ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)'};
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border-radius: var(--border-radius);
  border: 1px solid ${({ lightBg }) => (lightBg ? 'var(--gray-300)' : 'var(--gray-700)')};
  background-color: ${({ lightBg }) => (lightBg ? 'var(--white)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px ${({ lightBg }) => 
      lightBg ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)'};
  }
`;

const FormButton = styled.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: flex-start;
  margin-top: 0.5rem;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactText = styled.p`
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-300)')};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ lightBg }) => 
    lightBg ? 'var(--primary-light)' : 'rgba(76, 175, 80, 0.2)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-size: 1.2rem;
  transition: var(--transition);
  
  ${ContactItem}:hover & {
    background-color: var(--primary);
    color: var(--white);
    transform: scale(1.1);
  }
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
`;

const ContactValue = styled.p`
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-400)')};
  font-size: 0.9rem;
`;

const Contact = ({ lightBg }) => {
  return (
    <SectionContainer id="contact" lightBg={lightBg}>
      <BackgroundPattern lightBg={lightBg} />
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Get in <span>Touch</span></SectionTitle>
        <ContactGrid>
          {/* <ContactForm>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Name</FormLabel>
              <FormInput type="text" placeholder="Your full name" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Email</FormLabel>
              <FormInput type="email" placeholder="Your email address" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Subject</FormLabel>
              <FormInput type="text" placeholder="Message subject" lightBg={lightBg} />
            </FormGroup>
            <FormGroup>
              <FormLabel lightBg={lightBg}>Message</FormLabel>
              <FormTextarea 
                placeholder="Tell us about your inquiry or feedback..." 
                lightBg={lightBg} 
                rows={5}
              />
            </FormGroup>
            <FormButton>
              <FaPaperPlane />
              Send Message
            </FormButton>
          </ContactForm> */}
          
          <ContactInfo>
            <ContactText lightBg={lightBg}>
              Have questions about the podcast, interested in being a guest, or want to share your feedback? Reach out to us using the contact form or through our details below.
            </ContactText>
            <ContactItems>
              <ContactItem>
                <ContactIcon lightBg={lightBg}>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel lightBg={lightBg}>Email</ContactLabel>
                  <ContactValue lightBg={lightBg}>checkpointnowpodcast@gmail.com</ContactValue>
                </ContactDetails>
              </ContactItem>
              <ContactItem>
                <ContactIcon lightBg={lightBg}>
                  <FaXTwitter />
                </ContactIcon>
                <ContactDetails>
                  <ContactLabel lightBg={lightBg}>X</ContactLabel>
                  <ContactValue lightBg={lightBg}>@CheckpointNowMD</ContactValue>
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
