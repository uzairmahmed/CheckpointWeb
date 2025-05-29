import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

const HostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HostCard = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? '#fff' : '#2d2d2d')};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const HostImage = styled.div`
  height: 250px;
  background-color: #4CAF50;
  opacity: 0.8;
`;

const HostContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const HostName = styled.h3`
  margin-bottom: 5px;
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#fff')};
`;

const HostRole = styled.p`
  color: #4CAF50;
  font-weight: 600;
  margin-bottom: 15px;
`;

const HostBio = styled.p`
  color: ${({ lightBg }) => (lightBg ? '#666' : '#ccc')};
  font-size: 14px;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#e0e0e0')};
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4CAF50;
  }
`;

const Hosts = ({ lightBg }) => {
  const hosts = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Host & Producer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat.',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Co-Host',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Audio Engineer',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat.',
    },
  ];

  return (
    <SectionContainer id="hosts" lightBg={lightBg}>
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Meet the <span>Hosts</span></SectionTitle>
        <HostsGrid>
          {hosts.map((host) => (
            <HostCard key={host.id} lightBg={lightBg}>
              <HostImage />
              <HostContent>
                <HostName lightBg={lightBg}>{host.name}</HostName>
                <HostRole>{host.role}</HostRole>
                <HostBio lightBg={lightBg}>{host.bio}</HostBio>
                <SocialLinks>
                  <SocialLink href="#" target="_blank" lightBg={lightBg}>
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href="#" target="_blank" lightBg={lightBg}>
                    <FaInstagram />
                  </SocialLink>
                  <SocialLink href="#" target="_blank" lightBg={lightBg}>
                    <FaLinkedin />
                  </SocialLink>
                </SocialLinks>
              </HostContent>
            </HostCard>
          ))}
        </HostsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Hosts;
