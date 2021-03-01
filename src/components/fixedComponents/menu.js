import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { TXT, BACKGROUND } from "../../globalStyles/constants";
import LanguageSwitcher from "./languageSwitcher";
import { disableScroll, enableScroll } from "../../customHooks/scrollFunctions";
import SocialMedia from "./socialMediaWhiteReducedOpacity";

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
  let menuItem1 = useRef(null);
  let menuItem2 = useRef(null);
  let menuItem3 = useRef(null);
  let menuItem4 = useRef(null);

  function openMenu() {
    setMenuIsOpen(true);
    disableScroll();
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
    gsap.fromTo(
      menuItem1,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      menuItem2,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.1,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      menuItem3,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.2,
        ease: "power1.out",
      }
    );
    gsap.fromTo(
      menuItem4,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.25,
        delay: 0.3,
        ease: "power1.inOut",
      }
    );
  }

  function closeMenu() {
    setMenuIsOpen(false);
    enableScroll();
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
          <section
            ref={(e) => {
              menuItem1 = e;
            }}
          >
            <Link exact to="/" onClick={closeMenu}>
              {menu[0]}
            </Link>
          </section>
          <section
            ref={(e) => {
              menuItem2 = e;
            }}
          >
            <Link to="/web-development" onClick={closeMenu}>
              {menu[1]}
            </Link>
          </section>
          <section
            ref={(e) => {
              menuItem3 = e;
            }}
          >
            <Link to="/photography" onClick={closeMenu}>
              {menu[2]}
            </Link>
          </section>
          <section
            ref={(e) => {
              menuItem4 = e;
            }}
          >
            <Link to="/design" onClick={closeMenu}>
              {menu[3]}
            </Link>
          </section>
          <SocialMediaDiv>
            <SocialMedia />
          </SocialMediaDiv>
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
  height: 100%;
  width: 100%;
  border: none;
  background-color: rgb(${BACKGROUND.menuBackground});
  opacity: 0;
`;

const LanguageSelectorPosition = styled.div`
  position: fixed;
  top: 24px;
  right: 28px;
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
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }
  @media screen and (max-width: 450px) {
    font-size: 7.5vw;
    margin: 25px 0px;
  }
`;

const SocialMediaDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export default Menu;
