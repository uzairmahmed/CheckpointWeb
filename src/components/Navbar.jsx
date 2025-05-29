import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/logo2.svg";

const Nav = styled.nav`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #4caf50;

  span {
    margin-left: 10px;
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
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #fff;
    padding-top: 20px;
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
  color: #2d2d2d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #4caf50;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-size: 1.5rem;
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
    color: #e0e0e0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Nav>
      <Logo>
        <LogoImg src={LogoImage} alt="Checkpoint NOW Logo" />
      </Logo>

      <MobileIcon onClick={toggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink href="#episodes" onClick={toggle}>
            Episodes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#hosts" onClick={toggle}>
            Hosts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact" onClick={toggle}>
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
