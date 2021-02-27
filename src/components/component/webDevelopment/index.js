import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  WEB_CONSTANTS_DEMO,
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
  let slides = document.getElementsByClassName("web-slide");
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

const WebDevelopment = () => {
  const slides = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.webDevelopment
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
      {slides.map((slide, index) => {
        return (
          <div className="web-slide fade-animation" key={index}>
            <VideoWrapper>
              <VideoDiv>
                <ReactPlayer width="100%" height="100%" url={slide.video} />
              </VideoDiv>
            </VideoWrapper>
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
              <Link href={slide.link} rel="noopener noreferrer" target="_blank">
                {slide.text.gitHubLink}
              </Link>
            </TextWrapper>
          </div>
        );
      })}
    </div>
  );
};

const VideoWrapper = styled.div`
  position: ${WEB_CONSTANTS_DEMO.positionWrapper};
  width: ${WEB_CONSTANTS_DEMO.widthWrapper};
  height: ${WEB_CONSTANTS_DEMO.heightWrapper};
  top: ${WEB_CONSTANTS_DEMO.topWrapper};
  right: ${WEB_CONSTANTS_DEMO.rightWrapper};
`;

const VideoDiv = styled.div`
  position: ${WEB_CONSTANTS_DEMO.positionVideoDiv};
  top: ${WEB_CONSTANTS_DEMO.topVideoDiv};
  left: ${WEB_CONSTANTS_DEMO.leftVideoDiv};
  transform: ${WEB_CONSTANTS_DEMO.transformVideoDiv};
  width: ${WEB_CONSTANTS_DEMO.widthVideoDiv};
  height: ${WEB_CONSTANTS_DEMO.heightVideoDiv};
`;

const TextWrapper = styled.div`
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.top};
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

const Link = styled.a`
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
  color: ${TXT_CONSTANTS.color};
  text-decoration: none;
  cursor: pointer;
`;

const ButtonRight = styled.button`
  cursor: pointer;
  position: absolute;
  top: 150vh;
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
  top: 150vh;
  left: ${DIMENSIONS.leftColumnWidth};
  transform: translate(-100%, 0%);
  border: none;
  height: 60px;
  width: 45px;
  background-color: ${NAV_GALLERY_BUTTON.btnBckgColor};
  outline: none;
  z-index: 1000;
`;

export default WebDevelopment;
