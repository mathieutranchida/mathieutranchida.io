import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";

import { TXT, DIMENSIONS, BOX_SHADOW } from "../../../globalStyles/constants";

const DesktopWebDev = () => {
  const slides = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.webDevelopment
  );

  return (
    <>
      <Title>{slides.title}</Title>
      <Wrapper>
        {slides.content.map((slide, index) => {
          return (
            <ListItem key={index}>
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
                <Link
                  href={slide.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {slide.text.gitHubLink}
                </Link>
              </TextWrapper>
              <VideoWrapper>
                <VideoDiv>
                  <ReactPlayer width="100%" height="100%" url={slide.video} />
                </VideoDiv>
              </VideoWrapper>
            </ListItem>
          );
        })}
      </Wrapper>
    </>
  );
};

const Title = styled.h2`
  position: fixed;
  top: 35px;
  right: 60vw;
  margin: 0px;
  z-index: 2;
  color: ${TXT.color};
  font-size: 20pt;
  text-transform: uppercase;
  margin: 0px 40px;
  @media screen and (max-width: 1150px) {
    font-size: 2.2vw;
  }
  @media screen and (max-width: 1045px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 990px) {
    font-size: 2vw;
  }
`;

const Wrapper = styled.div`
  padding: 120px 0px 50px 0px;
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const TextWrapper = styled.div`
  width: calc(${DIMENSIONS.leftColumnWidth} - 11vw);
  z-index: 1;
  color: ${TXT.color};
  padding: 0px 5vw 0px 6vw;
  font-weight: 300;
`;

const TextTitle = styled.h2`
  font-size: ${TXT.h2size};
  text-transform: uppercase;
  margin-top: 0px;
`;

const TextParagraph = styled.p`
  text-align: justify;
`;

const TextDetail = styled.p``;

const TextParagraphStrong = styled.span`
  font-weight: 600;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  color: ${TXT.color};
`;

const VideoWrapper = styled.div`
  width: ${DIMENSIONS.rightColumnWidth};
  display: flex;
  justify-content: center;
`;

const VideoDiv = styled.div`
  height: ${DIMENSIONS.videoHeight};
  width: ${DIMENSIONS.videoWidth};
  box-shadow: ${BOX_SHADOW.boxShadow1};
`;

export default DesktopWebDev;
