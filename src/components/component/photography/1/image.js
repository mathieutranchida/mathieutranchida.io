import React from "react";
import styled from "styled-components";

import { PHOTO_CONSTANTS_IMAGE } from "../../../../globalStyles/constants";

const Image = () => {
  return (
    <>
      <Wrapper>
        <ImageDiv>
          <Photo src="https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-5_jlojlc.jpg" />
        </ImageDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  visibility: hidden;
  position: ${PHOTO_CONSTANTS_IMAGE.positionWrapper};
  width: ${PHOTO_CONSTANTS_IMAGE.widthWrapper};
  height: ${PHOTO_CONSTANTS_IMAGE.heightWrapper};
  top: ${PHOTO_CONSTANTS_IMAGE.topWrapper};
  right: ${PHOTO_CONSTANTS_IMAGE.rightWrapper};
`;

const ImageDiv = styled.div`
  position: ${PHOTO_CONSTANTS_IMAGE.positionPhotoDiv};
  top: ${PHOTO_CONSTANTS_IMAGE.topPhotoDiv};
  left: ${PHOTO_CONSTANTS_IMAGE.leftPhotoDiv};
  transform: ${PHOTO_CONSTANTS_IMAGE.transformPhotoDiv};
  max-width: ${PHOTO_CONSTANTS_IMAGE.widthPhotoDiv};
  max-height: ${PHOTO_CONSTANTS_IMAGE.heightPhotoDiv};
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
`;

export default Image;
