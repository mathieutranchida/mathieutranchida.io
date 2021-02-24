import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import {
  WEB_CONSTANTS_DEMO,
  TXT_CONSTANTS,
  DIMENSIONS,
  NAV_GALLERY_BUTTON,
} from "../../../globalStyles/constants";

import "../style.css";

const slides = [
  {
    video: "https://youtu.be/OV-pgbO35rM",
    text: {
      title: "E-Commerce Photography Website",
      paragraph: [
        "Fully responsive e-commerce application with a functioning store, cart, payment, order confirmation, and admin CRUD features.",
        "The store offers a variety of images that can be bought in different sizes and types of paper. Each cart is saved on a MongoDB database and can be retrieved using a unique ID assigned to each user's local storage. The payment system was created using Stripe. On payment, the user is redirected to the order confirmation page if the payment succeeds or to an error page if the payment fails.",
        "The administrator portal gives the admin the possibility to create, update, and delete products. The portal is protected with a login portal that uses Bcrypt and Json Web Token to secure the user's authentication. If logged out, the admin can't access protected routes and perform protected actions. While logged in, the user can see every order made to the website and modify their status (received, processing, fulfilled, etc.).",
      ],
      details: [
        [
          "Technologies used:",
          " React, JavaScript, Redux, Node.js, CSS, MongoDB, Stripe, Email.js, Cloudinary, Bcrypt, Json Web Tokens",
        ],
      ],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/Mathieu-Tranchida-Website",
  },
  {
    video: "https://www.youtube.com/watch?v=7FnkZZTPXW4",
    text: {
      title: "Road Rage",
      paragraph: [
        "Created a javascript game where the user entered a highway the wrong way and has to avoid upcoming cars. As the game progresses, the user scores points and the cars gain a ramdom speed every 10 seconds.",
        "This was a project for my diploma at Concordia Bootcamps.",
      ],
      details: [["Technologies used:", " HTML, CSS, JavaScript"]],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/project-m2-nyan-cat",
  },
  {
    video: "https://www.youtube.com/watch?v=uP6MGWLTat0",
    text: {
      title: "Slingshot Airlines",
      paragraph: [
        "Created a functional airline booking website where the user can choose a seat and have a confirmation. The user can also see his profile and reservation after buying it.",
        "This was a project for my diploma at Concordia Bootcamps.",
      ],
      details: [
        [
          "Technologies used:",
          " React, JavaScript, Node.js, Express, HTML, CSS",
        ],
      ],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/project-m4-slingair",
  },
  {
    video: "https://www.youtube.com/watch?v=LGrr_AkTSlY",
    text: {
      title: "Twitter clone",
      paragraph: [
        "Partially functionning twitter clone with a functionning feed, profile, post, like, and repost features.",
        "This was a project for my diploma at Concordia Bootcamps.",
      ],
      details: [
        [
          "Technologies used:",
          " React, Redux, JavaScript, Node.js, Express, HTML, CSS",
        ],
      ],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/project-m5-twitter-clone",
  },
  {
    video: "https://www.youtube.com/watch?v=9yIv7FQP2UA",
    text: {
      title: "Vincent Authier Athlete Website",
      paragraph: [
        "Landing page intended to present Vincent Authier as an athlete and put him in relation with potential sponsors and clients.",
        "This app is exclusively front-end and heavily based on GSAP and ScrollTriggers animations. The text reveals itself as you scroll down on the website. The website's sides are made of continuous text moving up and down as the user scrolls (animated using GSAP). The gallery is made with a CSS grid and is fully responsive to the smartphone size.",
      ],
      details: [
        [
          "Technologies used:",
          " React, JavaScript, HTML, CSS, Email.js, GSAP, ScrollTriggers",
        ],
      ],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/vincent-authier-website",
  },
];

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
  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div>
      <Header>./Web_Development</Header>
      <ButtonUp
        onClick={() => {
          minusSlides();
        }}
      >
        <VscChevronUp style={btnStyle} />
      </ButtonUp>
      <ButtonDown
        onClick={() => {
          plusSlides();
        }}
      >
        <VscChevronDown style={btnStyle} />
      </ButtonDown>
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
              <Link href={slide.link}>{slide.text.gitHubLink}</Link>
            </TextWrapper>
          </div>
        );
      })}
    </div>
  );
};

const Header = styled.div`
  position: ${WEB_CONSTANTS_DEMO.positionWrapper};
  top: calc(${WEB_CONSTANTS_DEMO.topWrapper} + 103px);
  right: -77px;
  transform: rotate(90deg);
  text-transform: uppercase;
  font-size: 15pt;
`;

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

const ButtonUp = styled.button`
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

const ButtonDown = styled.button`
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
