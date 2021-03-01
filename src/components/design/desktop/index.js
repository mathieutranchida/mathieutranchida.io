import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TXT, DIMENSIONS } from "../../../globalStyles/constants";

const DesktopDesign = () => {
  const slides = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.design
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
              </TextWrapper>
              <ImageWrapper>
                <Image src={slide.image} alt={slide.text.title} />
              </ImageWrapper>
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
  z-index: 5;
  color: ${TXT.color};
  font-size: 20pt;
  text-transform: uppercase;
  margin: 0px 40px;
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

const TextDetail = styled.p`
  margin: 3px;
`;

const TextParagraphStrong = styled.span`
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  width: ${DIMENSIONS.rightColumnWidth};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: -1;
`;

const Image = styled.img`
  max-width: 50vw;
  max-height: 75vh;
  object-fit: contain;
`;

export default DesktopDesign;
