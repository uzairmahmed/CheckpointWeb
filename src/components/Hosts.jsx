import React from 'react';
import styled from 'styled-components';

// Import host images
import shariffImg from '../assets/shariff.jpg';
import funchainImg from '../assets/funchain.jpg';
import zhangImg from '../assets/zhang.jpg';
import { FaLink, FaXTwitter } from 'react-icons/fa6';

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

const HostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HostCard = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? 'var(--white)' : 'var(--secondary)')};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--box-shadow-hover);
  }
`;

const HostImage = styled.div`
  height: 280px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 0.5s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
  
  ${HostCard}:hover &:before {
    transform: scale(1.1);
  }
`;

const HostContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HostName = styled.h3`
  margin-bottom: 0.25rem;
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  font-size: 1.25rem;
`;

const HostRole = styled.p`
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const HostBio = styled.p`
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-300)')};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-700)' : 'var(--gray-400)')};
  font-size: 1.2rem;
  transition: var(--transition);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ lightBg }) => (lightBg ? 'var(--gray-100)' : 'rgba(255, 255, 255, 0.1)')};
  
  &:hover {
    color: var(--primary);
    background-color: ${({ lightBg }) => (lightBg ? 'var(--primary-light)' : 'rgba(76, 175, 80, 0.2)')};
    transform: translateY(-3px);
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
      <BackgroundPattern lightBg={lightBg} />
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
                    <SocialLink href={host.twitter} target="_blank" rel="noopener noreferrer" lightBg={lightBg} title="Twitter">
                      <FaXTwitter />
                    </SocialLink>
                  )}
                  {host.website && (
                    <SocialLink href={host.website} target="_blank" rel="noopener noreferrer" lightBg={lightBg} title="Website">
                      <FaLink />
                    </SocialLink>
                  )}
                  {host.website2 && (
                    <SocialLink href={host.website2} target="_blank" rel="noopener noreferrer" lightBg={lightBg} title="Academic Profile">
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
