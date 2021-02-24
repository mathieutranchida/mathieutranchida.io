import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DIMENSIONS, TXT } from "../../globalStyles/constants";
import FixedComponents from "../component/fixedComponents/index";
import Homepage from "../component/homepage/index";
import WebDevelopment from "../component/webDevelopment/index";
import Photography from "../component/photography/index";
import Design from "../component/design/index";
import Contact from "../component/contact/index";

gsap.registerPlugin(ScrollTrigger);

const backgroundColors = {
  homepage: "#b4c1bf",
  contact: "#424242",
};

const Home = () => {
  let bulletRef = useRef(null);
  let introRef = useRef(null);
  let sectionRef = useRef(null);

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
        markers: true,
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
        <Bullet
          ref={(e) => {
            bulletRef = e;
          }}
        ></Bullet>
        <CoverTop></CoverTop>
        <CoverTopBlur></CoverTopBlur>
        <CoverBottom>
          <CoverBottomBlur>
            <FixedComponents />
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
  background-color: ${backgroundColors.homepage};
`;

const Bullet = styled.div`
  background-color: ${TXT.color};
  height: 12px;
  width: 12px;
  border-radius: 100%;
  position: absolute;
  top: 70.64vh;
  left: 5.6vw;
  z-index: 1000;
  position: fixed;
`;

const CoverTop = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 7vh;
  position: fixed;
  top: 0vh;
  left: 0;
  background-color: ${backgroundColors.homepage};
  z-index: 500;
`;

const CoverTopBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 5vh;
  position: fixed;
  top: 7vh;
  left: 0;
  z-index: 500;
  background: linear-gradient(
    0deg,
    transparent 0%,
    ${backgroundColors.homepage} 100%
  );
`;

const CoverBottom = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 33vh;
  position: fixed;
  top: 67vh;
  left: 0;
  background-color: ${backgroundColors.homepage};
  z-index: 500;
`;

const CoverBottomBlur = styled.div`
  width: ${DIMENSIONS.leftColumnWidth};
  height: 5vh;
  position: fixed;
  top: 62vh;
  left: 0;
  z-index: 500;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${backgroundColors.homepage} 100%
  );
`;

const Section = styled.section`
  height: 100vh;
`;

export default Home;
