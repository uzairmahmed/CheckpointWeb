import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSpotify, FaApple, FaHeadphones } from "react-icons/fa";
import { getPodcastInfo, getSpotifyPodcastInfo } from "../utils/api";
import LogoImage from "../assets/logo1.svg";

const HeroContainer = styled.div`
  background: linear-gradient(135deg, var(--light) 0%, var(--gray-100) 100%);
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: auto;
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
  background: radial-gradient(var(--primary-light) 3px, transparent 4px);
  background-size: 30px 30px;
  opacity: 0.2;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 20px;

  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-left: 8px;
    padding-right: 8px;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-right: 20px;
  @media screen and (max-width: 968px) {
    padding-right: 0;
    margin-bottom: 50px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  @media screen and (max-width: 968px) {
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const HeroH1 = styled.h1`
  color: var(--secondary);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;

  span {
    color: var(--primary);
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: var(--primary-light);
      z-index: -1;
      border-radius: 10px;
    }
  }
`;

const HeroP = styled.p`
  margin-top: ${(props) => (props.description ? "1.5rem" : "1rem")};
  color: ${(props) =>
    props.description ? "var(--gray-800)" : "var(--gray-600)"};
  font-size: ${(props) =>
    props.description ? "clamp(1.1rem, 2vw, 1.3rem)" : "0.9rem"};
  max-width: ${(props) => (props.description ? "700px" : "600px")};
  line-height: ${(props) => (props.description ? "1.6" : "1.5")};
  margin-bottom: ${(props) => (props.description ? "2rem" : "1rem")};
`;

const PlatformsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;

  @media screen and (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PlatformItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  border-radius: 50px;
  color: ${(props) => (props.platform === "spotify" ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.platform === "spotify" ? "#1DB954" : "#f2f2f2"};
  text-decoration: none;
  transition: var(--transition);
  font-weight: 600;
  box-shadow: var(--box-shadow);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover);
  }

  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: var(--primary);
  z-index: 4;
`;

const PodcastLogo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2.5rem;
  filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

const GenreTagsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const GenreTag = styled.span`
  background: var(--gray-200);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--gray-700);
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
  }
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
        const iTunesData = await getPodcastInfo("1541046019");
        if (iTunesData.results && iTunesData.results.length > 0) {
          setPodcastInfo(iTunesData.results[0]);
        }

        // Fetch Spotify data
        const spotifyData = await getSpotifyPodcastInfo(
          "11GGvT4Mk6IVelrJpXgY6I"
        );
        setSpotifyInfo(spotifyData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching podcast information:", err);
        setError("Failed to load podcast information");
        setLoading(false);
      }
    };

    fetchPodcastData();
  }, []);

  return (
    <HeroContainer>
      {loading && (
        <LoadingOverlay>
          <div>
            <FaHeadphones style={{ fontSize: "40px", marginBottom: "15px" }} />
            <p>Loading podcast information...</p>
          </div>
        </LoadingOverlay>
      )}
      <HeroBg>
        <HeroPattern />
      </HeroBg>
      <HeroContent>
        <LeftColumn>
          <PodcastLogo src={LogoImage} alt="Checkpoint NOW Logo" />
          <PlatformsWrapper>
            <PlatformItem
              href={spotifyInfo?.external_urls?.spotify || "#"}
              target="_blank"
              platform="spotify"
            >
              <FaSpotify />
              <span>Listen on Spotify</span>
            </PlatformItem>
            <PlatformItem
              href={podcastInfo?.collectionViewUrl || "#"}
              target="_blank"
              platform="apple"
            >
              <FaApple />
              <span>Apple Podcasts</span>
            </PlatformItem>
          </PlatformsWrapper>
        </LeftColumn>

        <RightColumn>
          <HeroH1>
            Checkpoint <span>NOW</span>
          </HeroH1>
          <HeroP description>
            All you need to know about the latest evidence based practice in the
            diagnosis and management of immune related toxicities from cancer
            therapies straight from the experts in the field.
          </HeroP>
          {podcastInfo && (
            <HeroP>
              {`By ${podcastInfo.artistName} • ${podcastInfo.primaryGenreName} • ${podcastInfo.trackCount} episodes`}
            </HeroP>
          )}

          {podcastInfo?.genreIds && (
            <GenreTagsContainer>
              {podcastInfo.genres.map((genre, index) => (
                <GenreTag key={index}>{genre}</GenreTag>
              ))}
            </GenreTagsContainer>
          )}
        </RightColumn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
