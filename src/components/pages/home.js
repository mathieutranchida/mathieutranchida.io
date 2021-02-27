import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DIMENSIONS, TXT, BACKGROUND } from "../../globalStyles/constants";
import FixedComponents from "../component/fixedComponents/index";
import Homepage from "../component/homepage/index";
import WebDevelopment from "../component/webDevelopment/index";
import Photography from "../component/photography/index";
import Design from "../component/design/index";
import Contact from "../component/contact/index";
import Menu from "../component/fixedComponents/menu";
import HelpBtn from "../component/bottomCornerButton/index";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  let bulletRef = useRef(null);
  let introRef = useRef(null);
  let sectionRef = useRef(null);
  let helpRef = useRef(null);

  // bullet point animation
  useEffect(() => {
    gsap.set(bulletRef, { opacity: 0 });
    gsap.to(bulletRef, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: introRef,
        start: "top top",
        end: "bottom-=250 top",
        scrub: true,
      },
    });
    gsap.to(bulletRef, {
      ease: "none",
      y: "115",
      scrollTrigger: {
        trigger: sectionRef,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  // help animation
  useEffect(() => {
    gsap.set(helpRef, { opacity: 0 });
    gsap.to(helpRef, {
      duration: 1,
      opacity: 1,
      ease: "ease",
      scrollTrigger: {
        start: "top+=150 top",
        end: "top+=350 top",
        scrub: true,
      },
    });
  });

  return (
    <>
      {/* Intro content divider for gsap bullet point animation triggers*/}
      <div
        style={{
          position: "absolute",
          top: "0px",
          width: "100vw",
          height: "100vh",
        }}
        ref={(e) => {
          introRef = e;
        }}
      ></div>
      {/* Section content divider for gsap bullet point animation triggers*/}
      <div
        style={{
          position: "absolute",
          top: "100vh",
          width: "100vw",
          height: "400vh",
        }}
        ref={(e) => {
          sectionRef = e;
        }}
      ></div>
      <LeftColumn>
        <div
          ref={(e) => {
            helpRef = e;
          }}
        >
          <HelpBtn />
        </div>
        <CoverTop></CoverTop>
        <CoverTopBlur></CoverTopBlur>
        <CoverBottom>
          <CoverBottomBlur>
            <FixedComponents />
            <FixedMenuDiv>
              <Bullet
                ref={(e) => {
                  bulletRef = e;
                }}
              ></Bullet>
              <div style={{ gridColumn: "2/3" }}>
                <Menu />
              </div>
            </FixedMenuDiv>
          </CoverBottomBlur>
        </CoverBottom>
        <Section id="section1">
          <Homepage />
        </Section>
        <Section id="section2">
          <WebDevelopment />
        </Section>
        <Section id="section3">
          <Photography />
        </Section>
        <Section id="section4">
          <Design />
        </Section>
        <Section id="section5">
          <Contact />
        </Section>
      </LeftColumn>
    </>
  );
};

const LeftColumn = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: ${DIMENSIONS.totalHeight};
  background-color: rgb(${BACKGROUND.home});
`;

const CoverTop = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 7vh;
  position: fixed;
  top: 0vh;
  left: 0;
  background-color: rgb(${BACKGROUND.home});
  z-index: 500;
`;

const CoverTopBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 5vh;
  position: fixed;
  top: 7vh;
  left: 0;
  z-index: 500;
  background: -webkit-linear-gradient(
    to top,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
  background: linear-gradient(
    to top,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
`;

const CoverBottom = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 265px;
  position: fixed;
  bottom: 0px;
  left: 0;
  background-color: rgb(${BACKGROUND.home});
  z-index: 500;
`;

const CoverBottomBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 50px;
  position: fixed;
  bottom: 265px;
  left: 0;
  z-index: 500;
  background: linear-gradient(
    to bottom,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
  background: -webkit-linear-gradient(
    to bottom,
    rgba(${BACKGROUND.home}, 0) 0%,
    rgba(${BACKGROUND.home}, 1) 100%
  );
`;

const FixedMenuDiv = styled.div`
  position: fixed;
  bottom: 90px;
  margin-left: calc(7vw - 29px);
  display: grid;
  grid-template-columns: 12px 350px;
  grid-column-gap: 17px;
`;

const Bullet = styled.div`
  background-color: ${TXT.color};
  height: 11px;
  width: 11px;
  border-radius: 100%;
  z-index: 1000;
  margin-top: 9px;
`;

const Section = styled.section`
  height: 100vh;
`;

export default Home;
