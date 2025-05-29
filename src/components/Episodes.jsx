import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPodcastEpisodes } from '../utils/api';
import { FaPlay } from 'react-icons/fa';

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

const EpisodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EpisodeCard = styled.div`
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

const EpisodeImage = styled.div`
  height: 200px;
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-color: ${({ imageUrl }) => imageUrl ? 'transparent' : '#4CAF50'};
  position: relative;
`;

const EpisodeNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
`;

const EpisodeContent = styled.div`
  padding: 20px;
`;

const EpisodeTitle = styled.h3`
  margin-bottom: 10px;
  color: ${({ lightBg }) => (lightBg ? '#2d2d2d' : '#fff')};
  font-size: 20px;
`;

const EpisodeDescription = styled.p`
  color: ${({ lightBg }) => (lightBg ? '#666' : '#ccc')};
  font-size: 14px;
`;

const EpisodeButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  
  &:hover {
    background-color: #388E3C;
  }
  
  svg {
    margin-right: 8px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 18px;
  color: ${({ lightBg }) => (lightBg ? '#666' : '#ccc')};
`;

const ErrorContainer = styled.div`
  padding: 20px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 5px;
  color: #d32f2f;
  margin: 20px 0;
  text-align: center;
`;

const Episodes = ({ lightBg }) => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const data = await getPodcastEpisodes('1541046019');
        
        // Filter out the first item (podcast info) and take only episodes
        const episodeData = data.results
          .filter(item => item.kind === 'podcast-episode')
          .slice(0, 3); // Get first 3 episodes
        
        setEpisodes(episodeData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching episodes:', err);
        setError('Failed to load episodes. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchEpisodes();
  }, []);
  
  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <SectionContainer id="episodes" lightBg={lightBg}>
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Latest <span>Episodes</span></SectionTitle>
        
        {loading ? (
          <LoadingContainer lightBg={lightBg}>Loading episodes...</LoadingContainer>
        ) : error ? (
          <ErrorContainer>{error}</ErrorContainer>
        ) : (
          <EpisodeGrid>
            {episodes.map((episode) => (
              <EpisodeCard key={episode.trackId} lightBg={lightBg}>
                <EpisodeImage imageUrl={episode.artworkUrl600}>
                  <EpisodeNumber>
                    {episode.trackName}
                  </EpisodeNumber>
                </EpisodeImage>
                <EpisodeContent>
                  <EpisodeTitle lightBg={lightBg}>
                    {episode.trackName}
                  </EpisodeTitle>
                  <EpisodeDescription lightBg={lightBg}>
                    {episode.description}
                  </EpisodeDescription>
                  <small style={{ color: lightBg ? '#888' : '#aaa', display: 'block', margin: '10px 0' }}>
                    {formatDate(episode.releaseDate)}
                  </small>
                  <EpisodeButton as="a" href={episode.trackViewUrl} target="_blank" rel="noopener noreferrer">
                    <FaPlay /> Listen Now
                  </EpisodeButton>
                </EpisodeContent>
              </EpisodeCard>
            ))}
          </EpisodeGrid>
        )}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Episodes;
