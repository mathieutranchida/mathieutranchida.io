import React from "react";
import styled from "styled-components";

import { DESIGN_CONSTANTS_IMAGE } from "../../../../globalStyles/constants";

const Image = () => {
  return (
    <>
      <Wrapper>
        <ImageDiv>
          <Photo src="https://res.cloudinary.com/dldqebddc/image/upload/v1612977896/mathieutranchida.io/design/g10_spkgz2.jpg" />
        </ImageDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  position: ${DESIGN_CONSTANTS_IMAGE.positionWrapper};
  width: ${DESIGN_CONSTANTS_IMAGE.widthWrapper};
  height: ${DESIGN_CONSTANTS_IMAGE.heightWrapper};
  top: ${DESIGN_CONSTANTS_IMAGE.topWrapper};
  right: ${DESIGN_CONSTANTS_IMAGE.rightWrapper};
`;

const ImageDiv = styled.div`
  position: ${DESIGN_CONSTANTS_IMAGE.positionDesignDiv};
  top: ${DESIGN_CONSTANTS_IMAGE.topDesignDiv};
  left: ${DESIGN_CONSTANTS_IMAGE.leftDesignDiv};
  transform: ${DESIGN_CONSTANTS_IMAGE.transformDesignDiv};
  max-width: ${DESIGN_CONSTANTS_IMAGE.widthDesignDiv};
  max-height: ${DESIGN_CONSTANTS_IMAGE.heightDesignDiv};
`;

const Photo = styled.img`
  max-height: 85vh;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
`;

export default Image;
