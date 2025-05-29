import React from "react";
import styled from "styled-components";
import { FaApple, FaSpotify, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import LogoImage from "../assets/logo2.svg";

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
  color: #4caf50;

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
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 2px;
    width: 30px;
    background-color: #4caf50;
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
      color: #4caf50;
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
    color: #4caf50;
  }
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
`;

const PlatformItem = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 30px;
  color: ${(props) => (props.platform === "spotify" ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.platform === "spotify" ? "#1DB954" : "#f2f2f2"};
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  svg {
    font-size: 18px;
    margin-right: 8px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterGrid>
          {" "}
          <FooterColumn>
            <FooterLogo>
              <LogoImg src={LogoImage} alt="Checkpoint NOW Logo" />
            </FooterLogo>

            <FooterDescription>
              All you need to know about the latest evidence based practice in
              the diagnosis and management of immune related toxicities from
              cancer therapies straight from the experts in the field.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="mailto:checkpointnowpodcast@gmail.com">
                <FaEnvelope />
              </SocialLink>
              <SocialLink href="https://x.com/CheckpointNowMD">
                <FaXTwitter />
              </SocialLink>
              <SocialLink href="https://podcasts.apple.com/us/podcast/checkpoint-now/id1541046019?uo=4">
                <FaApple />
              </SocialLink>
              <SocialLink href="https://open.spotify.com/show/11GGvT4Mk6IVelrJpXgY6I">
                <FaSpotify />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#episodes">Episodes</a>
              </FooterLink>
              <FooterLink>
                <a href="#hosts">Hosts</a>
              </FooterLink>
              <FooterLink>
                <a href="#contact">Contact Us</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Follow Us</FooterTitle>
            <FooterDescription>
              Follow us for in-depth conversations with leading 
              oncologists and researchers in this rapidly evolving field.
            </FooterDescription>
            <PlatformItem
              href={"https://open.spotify.com/show/11GGvT4Mk6IVelrJpXgY6I#"}
              target="_blank"
              platform="spotify"
            >
              <FaSpotify />
              <span>Listen on Spotify</span>
            </PlatformItem>
            <PlatformItem
              href={
                "https://podcasts.apple.com/us/podcast/checkpoint-now/id1541046019?uo=4"
              }
              target="_blank"
              platform="apple"
            >
              <FaApple />
              <span>Apple Podcasts</span>
            </PlatformItem>
          </FooterColumn>
        </FooterGrid>
        <FooterBottom>
          <p>
            &copy; {new Date().getFullYear()} Checkpoint. All rights reserved.
          </p>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
