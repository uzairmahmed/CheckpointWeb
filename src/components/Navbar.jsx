import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/logo2.svg";

const Nav = styled.nav`
  background-color: var(--white);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary);

  span {
    margin-left: 10px;
    font-family: "Montserrat", sans-serif;
  }
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: var(--white);
    padding-top: 20px;
    z-index: 99;
  }
`;

const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const NavLink = styled.a`
  color: var(--secondary);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 25px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--primary);

    &:after {
      width: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-size: 1.5rem;

    &:after {
      bottom: auto;
      top: 55px;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--secondary);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <Nav
      style={{
        boxShadow: scrolled ? "var(--box-shadow)" : "none",
        height: scrolled ? "70px" : "80px",
      }}
    >
      <Logo>
        <LogoImg src={LogoImage} alt="Checkpoint NOW Logo" />
      </Logo>

      <MobileIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink href="#episodes" onClick={closeMobileMenu}>
            Episodes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#hosts" onClick={closeMobileMenu}>
            Hosts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={closeMobileMenu}>
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
