import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import {
  DIMENSIONS,
  NAV_GALLERY_BUTTON,
  PHOTO_CONSTANTS_IMAGE,
  TXT_CONSTANTS,
} from "../../../globalStyles/constants";

import "../style.css";

const btnStyle = {
  height: "18px",
  width: "18px",
  color: "black",
  paddingTop: "3px",
};

let slideIndex = 1;

function plusSlides() {
  showSlides((slideIndex += 1));
}

function minusSlides() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("photo-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const Photography = () => {
  const slides = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.photography
  );

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div>
      <ButtonRight
        onClick={() => {
          plusSlides();
        }}
      >
        <VscChevronRight style={btnStyle} />
      </ButtonRight>
      <ButtonLeft
        onClick={() => {
          minusSlides();
        }}
      >
        <VscChevronLeft style={btnStyle} />
      </ButtonLeft>
      {slides.map((content, index) => {
        return (
          <div className="photo-slide fade-animation" key={index}>
            <ImageWrapper>
              <ImageDiv>
                <Image src={content.image} alt={content.text.title} />
              </ImageDiv>
            </ImageWrapper>
            <TextWrapper>
              <TextTitle>{content.text.title}</TextTitle>
              {content.text.paragraph.map((para, index) => {
                return <TextParagraph key={index}>{para}</TextParagraph>;
              })}
              {content.text.details.map((detail, index) => {
                return (
                  <TextDetail key={index}>
                    <TextParagraphStrong>{detail[0]}</TextParagraphStrong>
                    {detail[1]}
                  </TextDetail>
                );
              })}
            </TextWrapper>
          </div>
        );
      })}
    </div>
  );
};

const TextWrapper = styled.div`
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topPhoto};
  max-width: ${TXT_CONSTANTS.maxWidth};
  margin: ${TXT_CONSTANTS.margin};
  font-weight: ${TXT_CONSTANTS.fontWeight};
  color: ${TXT_CONSTANTS.color};
`;

const TextTitle = styled.h2`
  margin-top: ${TXT_CONSTANTS.marginTop};
  font-weight: ${TXT_CONSTANTS.fontWeightTitle};
  text-transform: ${TXT_CONSTANTS.textTransform};
  font-size: ${TXT_CONSTANTS.fontWeightStrong};
`;

const TextParagraph = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
`;

const TextDetail = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
  margin: ${TXT_CONSTANTS.photoDetailMargin};
`;

const TextParagraphStrong = styled.span`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
`;

const ImageWrapper = styled.div`
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
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  z-index: -1;
`;

const Image = styled.img`
  max-width: 50vw;
  max-height: 85vh;
  object-fit: contain;
  user-select: none;
`;

const ButtonRight = styled.button`
  cursor: pointer;
  position: absolute;
  top: 250vh;
  left: ${DIMENSIONS.leftColumnWidth};
  transform: translate(0%, -100%);
  border: none;
  height: 60px;
  width: 45px;
  background-color: ${NAV_GALLERY_BUTTON.btnBckgColor};
  outline: none;
  z-index: 1000;
`;

const ButtonLeft = styled.button`
  cursor: pointer;
  position: absolute;
  top: 250vh;
  left: ${DIMENSIONS.leftColumnWidth};
  transform: translate(-100%, 0%);
  border: none;
  height: 60px;
  width: 45px;
  background-color: ${NAV_GALLERY_BUTTON.btnBckgColor};
  outline: none;
  z-index: 1000;
`;

export default Photography;
