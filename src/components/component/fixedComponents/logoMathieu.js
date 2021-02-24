import React from "react";
import styled from "styled-components";
import { Link, scroller } from "react-scroll";

const Logo = () => {
  return (
    <>
      <Wrapper
        to="section1"
        spy={true}
        smooth={true}
        duration={300}
        tabIndex="0"
        aria-label="Home"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.stopPropagation();
            scroller.scrollTo("section1", {
              spy: true,
              smooth: true,
              duration: 300,
            });
          }
        }}
      >
        <Img
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1612814605/mathieutranchida.io/logo/mtlogowhite_okjone.png"
          alt="Mathieu Tranchida Logo"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Link)`
  max-width: 100px;
  position: fixed;
  left: 15px;
  top: 15px;
  outline: none;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Logo;
