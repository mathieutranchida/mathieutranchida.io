import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <Wrapper>
        <Img
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1612814605/mathieutranchida.io/logo/mtlogowhite_okjone.png"
          alt="Mathieu Tranchida Logo"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  max-width: 100px;
  position: fixed;
  left: 15px;
  top: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Logo;
