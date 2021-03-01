import React from "react";
import styled from "styled-components";

const Photo = () => {
  return (
    <>
      <Wrapper>
        <Image
          src="https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-6_insm6c.jpg"
          alt="Mathieu Tranchida photo"
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 75vh;
  right: 0px;
  clip-path: ellipse(111% 100% at 50% 0%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Photo;
