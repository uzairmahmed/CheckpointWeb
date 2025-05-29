import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaSpotify, FaApple, FaGoogle } from 'react-icons/fa';
import { getPodcastInfo } from '../utils/api';

const HeroContainer = styled.div`
  background-color: #f9f9f9;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 100px 0;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(#4CAF50 3px, transparent 4px);
  background-size: 30px 30px;
  opacity: 0.1;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroH1 = styled.h1`
  color: #2d2d2d;
  font-size: 48px;
  font-weight: bold;
  
  span {
    color: #4CAF50;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #666;
  font-size: 24px;
  max-width: 700px;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#4CAF50' : 'transparent')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #4CAF50')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#388E3C' : '#4CAF50')};
  }
`;

const PlatformsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 40px;
  
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

const PlatformItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4CAF50;
  }
  
  svg {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #4CAF50;
  z-index: 4;
`;

const PodcastArtwork = styled.div`
  margin-bottom: 30px;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-image: ${({ url }) => url ? `url(${url})` : 'none'};
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
`;

const Hero = () => {
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcastInfo = async () => {
      try {
        setLoading(true);
        const data = await getPodcastInfo('1541046019');
        
        if (data.results && data.results.length > 0) {
          setPodcastInfo(data.results[0]);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching podcast info:', err);
        setError('Failed to load podcast information');
        setLoading(false);
      }
    };
    
    fetchPodcastInfo();
  }, []);

  return (
    <HeroContainer>
      {loading && <LoadingOverlay>Loading podcast information...</LoadingOverlay>}
      <HeroBg>
        <HeroPattern />
      </HeroBg>
      <HeroContent>
        {podcastInfo?.artworkUrl600 && (
          <PodcastArtwork url={podcastInfo.artworkUrl600} />
        )}
        <HeroH1>
          {podcastInfo?.trackName || 'Checkpoint'}
        </HeroH1>
        <HeroP>
          {podcastInfo ? `By ${podcastInfo.artistName} • ${podcastInfo.primaryGenreName} • ${podcastInfo.country}` : 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, justo vel tincidunt consequat, urna turpis accumsan mi, vel sagittis odio eros vel nisi.'}
        </HeroP>
        {podcastInfo && (
          <HeroP>
            {`${podcastInfo.trackCount} episodes • Released: ${new Date(podcastInfo.releaseDate).toLocaleDateString()}`}
          </HeroP>
        )}
        <HeroBtnWrapper>
          <Button href={podcastInfo?.trackViewUrl || '#'} target="_blank" primary big fontBig>
            <FaPlay style={{ marginRight: '8px' }} />
            Latest Episode
          </Button>
          <Button href={podcastInfo?.collectionViewUrl || '#'} target="_blank" primary big fontBig>
            Subscribe Now
          </Button>
        </HeroBtnWrapper>
        
        <PlatformsWrapper>
          <PlatformItem href={podcastInfo?.trackViewUrl || '#'} target="_blank">
            <FaSpotify />
            <span>Spotify</span>
          </PlatformItem>
          <PlatformItem href={podcastInfo?.collectionViewUrl || '#'} target="_blank">
            <FaApple />
            <span>Apple</span>
          </PlatformItem>
          <PlatformItem href={podcastInfo?.feedUrl ? `https://podcasts.google.com/?feed=${encodeURIComponent(podcastInfo.feedUrl)}` : '#'} target="_blank">
            <FaGoogle />
            <span>Google</span>
          </PlatformItem>
        </PlatformsWrapper>
        
        {podcastInfo?.genreIds && (
          <div style={{ marginTop: '40px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {podcastInfo.genres.map((genre, index) => (
              <span key={index} style={{ 
                background: '#eee', 
                padding: '5px 15px', 
                borderRadius: '20px', 
                fontSize: '14px',
                color: '#333'
              }}>
                {genre}
              </span>
            ))}
          </div>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
