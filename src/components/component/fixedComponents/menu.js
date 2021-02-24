import React from "react";
import styled from "styled-components";
import { Link, scroller } from "react-scroll";

import { TXT } from "../../../globalStyles/constants";

const Menu = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 70vh;
  max-width: ${TXT.width};
  margin: ${TXT.margin};
  font-weight: 600;
  font-size: 18pt;
  color: ${TXT.color};
  display: flex;
  flex-direction: column;
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
