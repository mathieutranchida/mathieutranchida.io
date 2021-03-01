import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Wrapper to="/">
        <Img
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1612814605/mathieutranchida.io/logo/mtlogowhite_okjone.png"
          alt="Mathieu Tranchida Logo"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(NavLink)`
  max-width: 100px;
  position: fixed;
  left: 15px;
  top: 15px;
  outline: none;
  z-index: 10000;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Logo;
