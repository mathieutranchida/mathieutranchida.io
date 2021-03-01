import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { TXT, BACKGROUND } from "../../globalStyles/constants";
import LanguageSwitcher from "./languageSwitcher";

const Menu = () => {
  const menu = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.menu
  );

  let [menuIsOpen, setMenuIsOpen] = useState(false);

  let hamburgerBar1 = useRef(null);
  let hamburgerBar2 = useRef(null);
  let hamburgerBar3 = useRef(null);
  let menuBackground = useRef(null);
  let languageSelector = useRef(null);

  function openMenu() {
    setMenuIsOpen(true);
    gsap.to(hamburgerBar1, {
      duration: 0.3,
      rotate: 45,
      y: 7,
    });
    gsap.to(hamburgerBar2, {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(hamburgerBar3, {
      duration: 0.3,
      rotate: -45,
      y: -7,
    });
    gsap.to(menuBackground, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.set(menuBackground, {
      zIndex: 999,
    });
    gsap.to(languageSelector, {
      duration: 0.5,
      ease: "power2.out",
      x: -70,
    });
  }

  function closeMenu() {
    setMenuIsOpen(false);
    gsap.to(hamburgerBar1, {
      duration: 0.3,
      rotate: 0,
      y: 0,
    });
    gsap.to(hamburgerBar2, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(hamburgerBar3, {
      duration: 0.3,
      rotate: 0,
      y: 0,
    });
    gsap.to(menuBackground, {
      duration: 0.3,
      opacity: 0,
      zIndex: -1,
    });
    gsap.to(languageSelector, {
      duration: 0.5,
      ease: "power2.inOut",
      x: 0,
    });
  }

  return (
    <div>
      {menuIsOpen === false ? (
        <Button onClick={openMenu}>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></HamburgerBar>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></HamburgerBar>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></HamburgerBar>
        </Button>
      ) : (
        <Button onClick={closeMenu}>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar1 = e;
            }}
          ></HamburgerBar>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar2 = e;
            }}
          ></HamburgerBar>
          <HamburgerBar
            ref={(e) => {
              hamburgerBar3 = e;
            }}
          ></HamburgerBar>
        </Button>
      )}
      <MenuBackground
        ref={(e) => {
          menuBackground = e;
        }}
      >
        <LanguageSelectorPosition
          ref={(e) => {
            languageSelector = e;
          }}
        >
          <LanguageSwitcher />
        </LanguageSelectorPosition>
        <MenuPosition>
          <Link to="/" onClick={closeMenu}>
            {menu[0]}
          </Link>
          <Link to="/web-development" onClick={closeMenu}>
            {menu[1]}
          </Link>
          <Link to="/photography" onClick={closeMenu}>
            {menu[2]}
          </Link>
          <Link to="/design" onClick={closeMenu}>
            {menu[3]}
          </Link>
        </MenuPosition>
      </MenuBackground>
    </div>
  );
};

const Button = styled.button`
  z-index: 1000;
  position: fixed;
  top: 25px;
  right: 25px;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  border: none;
  background-color: rgb(${BACKGROUND.menuButtonBackground});
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 14px 0px;
  outline: none;
  cursor: pointer;
`;

const HamburgerBar = styled.div`
  height: 3px;
  width: 22px;
  background-color: rgb(${BACKGROUND.homeDarker});
  border-radius: 5px;
`;

const MenuBackground = styled.div`
  z-index: -1;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  border: none;
  background-color: rgb(${BACKGROUND.menuBackground});
  opacity: 0;
`;

const LanguageSelectorPosition = styled.div`
  position: fixed;
  top: 24px;
  right: 31px;
  height: 45px;
  width: 45px;
`;

const MenuPosition = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${TXT.color};
  font-weight: 900;
  font-size: 25pt;
  margin: 6px;
  transition: 300ms ease-in-out;
  text-transform: uppercase;
`;

export default Menu;
