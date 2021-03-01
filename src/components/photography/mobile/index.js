import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { TXT, BACKGROUND, BOX_SHADOW } from "../../../globalStyles/constants";
import Logo from "../../fixedComponents/logoMathieuMobile";
import Footer from "../../fixedComponents/footerMobile";

const MobilePhotography = () => {
  const slides = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.photography
  );

  return (
    <>
      <MainWrapper>
        <Logo />
        <Header>
          <Title>{slides.title}</Title>
        </Header>
        <Wrapper>
          {slides.content.map((slide, index) => {
            return (
              <ListItem key={index}>
                <TextWrapper>
                  <TextTitle>{slide.text.title}</TextTitle>
                  <ImageWrapper>
                    <Image src={slide.image} alt={slide.text.title} />
                  </ImageWrapper>
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
              </ListItem>
            );
          })}
        </Wrapper>
        <Footer />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  background-color: rgb(${BACKGROUND.homeMobile});
  min-height: 100vh;
  padding-bottom: 25px;
`;

const Header = styled.div`
  background-color: rgb(${BACKGROUND.homeDarker});
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100vw;
  clip-path: ellipse(100% 100% at 50% 0%);
  @media screen and (max-width: 450px) {
    height: 150px;
  }
`;

const Title = styled.h2`
  position: fixed;
  top: 18px;
  width: 100vw;
  color: ${TXT.color};
  font-size: 18pt;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 450px) {
    top: 68px;
  }
`;

const Wrapper = styled.div`
  padding: 130px 50px 0px 50px;
  @media screen and (max-width: 450px) {
    padding: 180px 35px 0px 35px;
  }
`;

const ListItem = styled.div`
  margin-bottom: 60px;
`;

const TextWrapper = styled.div`
  width: 100%;
  z-index: 1;
  color: rgb(${TXT.colorMobile});
  font-weight: 300;
`;

const TextTitle = styled.h2`
  font-size: ${TXT.h2size};
  text-transform: uppercase;
  margin-top: 0px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  user-select: none;
  box-shadow: ${BOX_SHADOW.boxShadow1};
`;

const TextParagraph = styled.p`
  text-align: justify;
  @media screen and (max-width: 450px) {
    text-align: inherit;
  }
`;

const TextDetail = styled.p`
  margin: 3px;
`;

const TextParagraphStrong = styled.span`
  font-weight: 600;
`;

export default MobilePhotography;
