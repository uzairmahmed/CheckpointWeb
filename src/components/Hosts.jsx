import React from 'react';
import styled from 'styled-components';

// Import host images
import shariffImg from '../assets/shariff.jpg';
import funchainImg from '../assets/funchain.jpg';
import zhangImg from '../assets/zhang.jpg';
import { FaLink, FaXTwitter } from 'react-icons/fa6';

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
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.9;
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
      name: 'Dr. Afreen Shariff',
      role: 'Host & Co-founder',
      bio: 'Endocrinologist and Associate Professor at Duke University School of Medicine. Co-founder of Citrus Oncology, specializing in endocrine disorders in cancer patients with a focus on improving healthcare delivery and equity.',
      twitter: 'https://x.com/afreenshariffmd',
      website: 'https://citrusoncology.com',
      website2: 'https://scholars.duke.edu/person/afreen.shariff',
      image: shariffImg,
    },
    {
      id: 2,
      name: 'Dr. Pauline Funchain',
      role: 'Host',
      bio: 'Medical oncologist at Stanford Cancer specializing in melanoma, high risk skin cancers, immunotherapy toxicities, and hereditary cancer genetics. Co-director of the Immunotherapy Toxicity Working Group at Stanford.',
      twitter: 'https://x.com/funchainmd',
      website: 'https://med.stanford.edu/profiles/pauline-funchain',
      image: funchainImg,
    },
    {
      id: 3,
      name: 'Dr. Tian Zhang',
      role: 'Former Host',
      bio: 'Associate Professor at UT Southwestern Medical Center specializing in genitourinary malignancies. A clinical trialist and translational researcher who co-hosted Checkpoint NOW from 2020 to 2024.',
      twitter: 'https://x.com/TiansterZhang',
      website: 'https://utswmed.org/doctors/tian-zhang/',
      image: zhangImg,
    },
  ];

  return (
    <SectionContainer id="hosts" lightBg={lightBg}>
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Meet the <span>Hosts</span></SectionTitle>
        <HostsGrid>
          {hosts.map((host) => (
            <HostCard key={host.id} lightBg={lightBg}>
              <HostImage image={host.image} />
              <HostContent>
                <HostName lightBg={lightBg}>{host.name}</HostName>
                <HostRole>{host.role}</HostRole>
                <HostBio lightBg={lightBg}>{host.bio}</HostBio>
                <SocialLinks>
                  {host.twitter && (
                    <SocialLink href={host.twitter} target="_blank" rel="noopener noreferrer" lightBg={lightBg}>
                      <FaXTwitter />
                    </SocialLink>
                  )}
                  {host.website && (
                    <SocialLink href={host.website} target="_blank" rel="noopener noreferrer" lightBg={lightBg}>
                      <FaLink />
                    </SocialLink>
                  )}
                  {host.website2 && (
                    <SocialLink href={host.website2} target="_blank" rel="noopener noreferrer" lightBg={lightBg}>
                      <FaLink />
                    </SocialLink>
                  )}
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
