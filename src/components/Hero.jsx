import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSpotify, FaApple } from 'react-icons/fa';
import { getPodcastInfo, getSpotifyPodcastInfo } from '../utils/api';

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
  font-size: ${props => props.description ? '24px' : '16px'};
  max-width: ${props => props.description ? '700px' : '600px'};
  
  @media screen and (max-width: 768px) {
    font-size: ${props => props.description ? '20px' : '14px'};
  }
  
  @media screen and (max-width: 480px) {
    font-size: ${props => props.description ? '18px' : '12px'};
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
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  color: ${props => props.platform === 'spotify' ? '#fff' : '#000'};
  background-color: ${props => props.platform === 'spotify' ? '#1DB954' : '#f2f2f2'};
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
  
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
  
  svg {
    font-size: 24px;
    margin-right: 8px;
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
  const [spotifyInfo, setSpotifyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPodcastData = async () => {
      try {
        setLoading(true);
        
        // Fetch iTunes data
        const iTunesData = await getPodcastInfo('1541046019');
        if (iTunesData.results && iTunesData.results.length > 0) {
          setPodcastInfo(iTunesData.results[0]);
        }
        
        // Fetch Spotify data
        const spotifyData = await getSpotifyPodcastInfo('11GGvT4Mk6IVelrJpXgY6I');
        setSpotifyInfo(spotifyData);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching podcast information:', err);
        setError('Failed to load podcast information');
        setLoading(false);
      }
    };
    
    fetchPodcastData();
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
          {podcastInfo?.trackName || 'Checkpoint NOW'}
        </HeroH1>
        <HeroP description>
          All you need to know about the latest evidence based practice in the diagnosis and management of immune related toxicities from cancer therapies straight from the experts in the field.
        </HeroP>
        {podcastInfo && (
          <HeroP>
            {`By ${podcastInfo.artistName} • ${podcastInfo.primaryGenreName} • ${podcastInfo.country} • ${podcastInfo.trackCount} episodes • Released: ${new Date(podcastInfo.releaseDate).toLocaleDateString()}`}
          </HeroP>
        )}
        
        <PlatformsWrapper>
          <PlatformItem href={spotifyInfo?.external_urls?.spotify || '#'} target="_blank" platform="spotify">
            <FaSpotify />
            <span>Listen on Spotify</span>
          </PlatformItem>
          <PlatformItem href={podcastInfo?.collectionViewUrl || '#'} target="_blank" platform="apple">
            <FaApple />
            <span>Listen on Apple Podcasts</span>
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
