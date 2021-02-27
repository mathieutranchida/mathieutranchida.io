import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  DESIGN_CONSTANTS_IMAGE,
  TXT_CONSTANTS,
  DIMENSIONS,
  NAV_GALLERY_BUTTON,
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
  let slides = document.getElementsByClassName("design-slide");
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

const Design = () => {
  const slides = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.design
  );

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <>
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
      {slides.map((slide, index) => {
        return (
          <div className="design-slide fade-animation" key={index}>
            <ImageWrapper>
              <ImageDiv>
                <Image src={slide.image} alt={slide.text.title} />
              </ImageDiv>
            </ImageWrapper>
            <TextWrapper>
              <TextTitle>{slide.text.title}</TextTitle>
              {slide.text.paragraph.map((para, index) => {
                return <TextParagraph key={index}>{para}</TextParagraph>;
              })}
              {slide.text.details.map((detail, index) => {
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
    </>
  );
};

const ButtonRight = styled.button`
  cursor: pointer;
  position: absolute;
  top: 350vh;
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
  top: 350vh;
  left: ${DIMENSIONS.leftColumnWidth};
  transform: translate(-100%, 0%);
  border: none;
  height: 60px;
  width: 45px;
  background-color: ${NAV_GALLERY_BUTTON.btnBckgColor};
  outline: none;
  z-index: 1000;
`;

const TextWrapper = styled.div`
  /* display: none; */
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topDesign};
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

const Image = styled.img`
  max-height: 85vh;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  user-select: none;
`;

export default Design;
