import React from "react";
import styled from "styled-components";
import { Link, scroller } from "react-scroll";

import { TXT } from "../../../globalStyles/constants";

const Menu = () => {
  return (
    <>
      <Wrapper>
        <BigScreen>
          <NavLink
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section2", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Web Development Portfolio
          </NavLink>
          <NavLink
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section3", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Photography Portfolio
          </NavLink>
          <NavLink
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section4", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Design Portfolio
          </NavLink>
          <NavLink
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section5", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Contact
          </NavLink>
        </BigScreen>
        <SmallScreen>
          <NavLink
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section2", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Web Development
          </NavLink>
          <NavLink
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section3", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Photography
          </NavLink>
          <NavLink
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section4", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Design
          </NavLink>
          <NavLink
            activeClass="active"
            to="section5"
            spy={true}
            smooth={true}
            duration={300}
            tabIndex="0"
            aria-label="Web development portfolio"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                scroller.scrollTo("section5", {
                  spy: true,
                  activeClass: "active",
                  smooth: true,
                  duration: 300,
                });
              }
            }}
          >
            Contact
          </NavLink>
        </SmallScreen>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: ${TXT.width};
  font-weight: 600;
  font-size: 18pt;
  color: ${TXT.color};
`;

const BigScreen = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1134px) {
    display: none;
  }
`;

const SmallScreen = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1135px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  margin-bottom: 9px;
  transition: 200ms ease-in-out;
  cursor: pointer;
  outline: none;
  /* &.active {
    font-size: 20pt;
  } */
`;

export default Menu;
