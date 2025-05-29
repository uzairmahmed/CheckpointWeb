import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPodcastEpisodes, getSpotifyPodcastEpisodes } from '../utils/api';
import { FaPlay, FaSpotify, FaCalendarAlt, FaClock } from 'react-icons/fa';

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

const EpisodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EpisodeCard = styled.div`
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

const EpisodeImage = styled.div`
  height: 200px;
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-color: ${({ imageUrl }) => imageUrl ? 'transparent' : 'var(--primary)'};
  position: relative;
`;

const EpisodeNumber = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.85rem;
`;

const EpisodeContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const EpisodeTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: ${({ lightBg }) => (lightBg ? 'var(--secondary)' : 'var(--white)')};
  font-size: 1.25rem;
  line-height: 1.4;
`;

const EpisodeDescription = styled.p`
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-300)')};
  font-size: 0.9rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EpisodeMeta = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-400)')};
  font-size: 0.85rem;
  
  svg {
    margin-right: 5px;
  }
  
  & > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const EpisodeButton = styled.a`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: var(--transition);
  flex: 1;
  justify-content: center;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
  }
  
  svg {
    margin-right: 8px;
  }
`;

const SpotifyButton = styled.a`
  background-color: #1DB954;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: var(--transition);
  flex: 1;
  justify-content: center;
  
  &:hover {
    background-color: #1aa34a;
    transform: translateY(-3px);
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
  color: ${({ lightBg }) => (lightBg ? 'var(--gray-600)' : 'var(--gray-300)')};
`;

const ErrorContainer = styled.div`
  padding: 20px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: var(--border-radius);
  color: #d32f2f;
  margin: 20px 0;
  text-align: center;
`;

const Episodes = ({ lightBg }) => {
  const [episodes, setEpisodes] = useState([]);
  const [spotifyEpisodes, setSpotifyEpisodes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchAllEpisodes = async () => {
      try {
        setLoading(true);
        
        // Fetch iTunes episodes data
        const iTunesData = await getPodcastEpisodes('1541046019');
        const episodeData = iTunesData.results
          .filter(item => item.kind === 'podcast-episode')
          .slice(0, 3); // Get first 3 episodes
        
        setEpisodes(episodeData);
        
        // Fetch Spotify episodes data
        const spotifyData = await getSpotifyPodcastEpisodes('11GGvT4Mk6IVelrJpXgY6I', 20);
        
        // Map Spotify episodes to a lookup object by name for easier matching
        const spotifyMap = {};
        spotifyData.items.forEach(episode => {
          // Clean up the name for comparison
          const cleanName = episode.name.replace(/^Episode \d+:?\s*/i, '').trim();
          spotifyMap[cleanName] = episode;
        });
        
        setSpotifyEpisodes(spotifyMap);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching episodes:', err);
        setError('Failed to load episodes. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchAllEpisodes();
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
  
  // Format duration to human readable format
  const formatDuration = (milliseconds) => {
    if (!milliseconds) return '';
    const minutes = Math.floor(milliseconds / 60000);
    return `${minutes} min`;
  };

  // Find matching Spotify episode
  const findSpotifyMatch = (itunesEpisode) => {
    if (!itunesEpisode || !spotifyEpisodes) return null;
    
    // Clean up the name for better matching
    const title = itunesEpisode.trackName;
    const cleanTitle = title.replace(/^Episode \d+:?\s*/i, '').trim();
    
    // Try direct match
    if (spotifyEpisodes[cleanTitle]) {
      return spotifyEpisodes[cleanTitle];
    }
    
    // Try fuzzy match
    for (const key in spotifyEpisodes) {
      if (key.includes(cleanTitle) || cleanTitle.includes(key)) {
        return spotifyEpisodes[key];
      }
    }
    
    return null;
  };

  // Extract episode number from title
  const getEpisodeNumber = (title) => {
    const match = title.match(/^Episode (\d+)/i);
    return match ? `EP ${match[1]}` : 'EP';
  };

  return (
    <SectionContainer id="episodes" lightBg={lightBg}>
      <BackgroundPattern lightBg={lightBg} />
      <SectionWrapper>
        <SectionTitle lightBg={lightBg}>Latest <span>Episodes</span></SectionTitle>
        
        {loading ? (
          <LoadingContainer lightBg={lightBg}>Loading episodes...</LoadingContainer>
        ) : error ? (
          <ErrorContainer>{error}</ErrorContainer>
        ) : (
          <EpisodeGrid>
            {episodes.map((episode) => {
              const spotifyEpisode = findSpotifyMatch(episode);
              const episodeNumber = getEpisodeNumber(episode.trackName);
              return (
                <EpisodeCard key={episode.trackId} lightBg={lightBg}>
                  <EpisodeImage imageUrl={episode.artworkUrl600}>
                    <EpisodeNumber>{episodeNumber}</EpisodeNumber>
                  </EpisodeImage>
                  <EpisodeContent>
                    <EpisodeTitle lightBg={lightBg}>
                      {episode.trackName.replace(/^Episode \d+:?\s*/i, '')}
                    </EpisodeTitle>
                    <EpisodeDescription lightBg={lightBg}>
                      {episode.description}
                    </EpisodeDescription>
                    
                    <EpisodeMeta lightBg={lightBg}>
                      <div>
                        <FaCalendarAlt />
                        <span style={{ marginLeft: '5px' }}>{formatDate(episode.releaseDate)}</span>
                      </div>
                      
                      {spotifyEpisode && (
                        <div>
                          <FaClock />
                          <span style={{ marginLeft: '5px' }}>{formatDuration(spotifyEpisode.duration_ms)}</span>
                        </div>
                      )}
                    </EpisodeMeta>
                    
                    <ButtonGroup>
                      <EpisodeButton href={episode.trackViewUrl} target="_blank" rel="noopener noreferrer">
                        <FaPlay /> Apple
                      </EpisodeButton>
                      
                      {spotifyEpisode && (
                        <SpotifyButton href={spotifyEpisode.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                          <FaSpotify /> Spotify
                        </SpotifyButton>
                      )}
                    </ButtonGroup>
                  </EpisodeContent>
                </EpisodeCard>
              );
            })}
          </EpisodeGrid>
        )}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Episodes;
