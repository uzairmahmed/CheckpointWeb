import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMicrophone } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  color: #666;
  padding: 60px 0 20px;
`;

const FooterWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4CAF50;
  
  span {
    margin-left: 10px;
  }
`;

const FooterDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  color: #2d2d2d;
  margin-bottom: 25px;
  font-size: 18px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 2px;
    width: 30px;
    background-color: #4CAF50;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 15px;
  
  a {
    color: #666;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #4CAF50;
      padding-left: 5px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: #666;
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4CAF50;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterGrid>          <FooterColumn>
            <FooterLogo>
              <FaMicrophone />
              <span>Checkpoint</span>
            </FooterLogo>
            <FooterDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat, urna turpis accumsan mi.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#episodes">Episodes</a></FooterLink>
              <FooterLink><a href="#hosts">Hosts</a></FooterLink>
              <FooterLink><a href="#contact">Contact Us</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Resources</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Support</a></FooterLink>
              <FooterLink><a href="#">Privacy Policy</a></FooterLink>
              <FooterLink><a href="#">Terms of Service</a></FooterLink>
              <FooterLink><a href="#">FAQ</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Subscribe</FooterTitle>
            <FooterDescription>
              Subscribe to our newsletter to get updates on new episodes, behind-the-scenes content, and exclusive offers.
            </FooterDescription>
          </FooterColumn>
        </FooterGrid>
          <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Checkpoint. All rights reserved.</p>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
