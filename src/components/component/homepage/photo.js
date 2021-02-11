import React from "react";
import styled from "styled-components";

import { DIMENSIONS } from "../../../globalStyles/constants";

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
  position: absolute;
  width: ${DIMENSIONS.rightColumnWidth};
  height: ${DIMENSIONS.rightColumnHeight};
  right: 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

export default Photo;
