import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";

import { TXT, BACKGROUND } from "../../../globalStyles/constants";
import Logo from "../../fixedComponents/logoMathieuMobile";
import Footer from "../../fixedComponents/footerMobile";

const MobileWebDev = () => {
  const slides = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.webDevelopment
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
                  <VideoWrapper>
                    <VideoDiv>
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url={slide.video}
                      />
                    </VideoDiv>
                  </VideoWrapper>
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
  background-color: rgb(${BACKGROUND.home});
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
  @media screen and (max-width: 550px) {
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
  @media screen and (max-width: 550px) {
    top: 68px;
  }
`;

const Wrapper = styled.div`
  padding: 130px 50px 0px 50px;
  @media screen and (max-width: 550px) {
    padding: 180px 50px 0px 50px;
  }
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
  color: ${TXT.color};
  font-weight: 300;
`;

const TextTitle = styled.h2`
  font-size: ${TXT.h2size};
  text-transform: uppercase;
  margin-top: 0px;
  text-align: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VideoDiv = styled.div`
  height: 50vw;
  width: 80vw;
`;

const TextParagraph = styled.p`
  text-align: justify;
  @media screen and (max-width: 550px) {
    text-align: inherit;
  }
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

export default MobileWebDev;
