import React, { useEffect } from "react";
import styled from "styled-components";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  DESIGN_CONSTANTS_IMAGE,
  TXT_CONSTANTS,
  DIMENSIONS,
  NAV_GALLERY_BUTTON,
} from "../../../globalStyles/constants";

import "../style.css";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612977896/mathieutranchida.io/design/g13_itm5kz.jpg",
    text: {
      title: "Concordia Tennis Tryouts",
      paragraph: [
        "Concordia Tennis hired me to take a photo and make a design for their 2020 tryouts. The shoot took place in the IGA Stadium and I made the design the very next days in less than 2 hours.",
        "The design was made using photoshop.",
      ],
      details: [["Athlete:", " Antoine Clement"]],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612977897/mathieutranchida.io/design/g12_iohwu3.jpg",
    text: {
      title: "CSSC Season Opener",
      paragraph: [
        "The Concordia Ski & Snowboard Club is one of the most popular clubs on campus with more than 500 members and +12 trips every year. Here is a design I did for the club in 2018.",
        "The design was made using photoshop.",
      ],
      details: [["Project:", " Concordia Ski & Snowboard Club"]],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612977896/mathieutranchida.io/design/g10_spkgz2.jpg",
    text: {
      title: "COVID Solar System",
      paragraph: [
        "At the beginning of the pandemic, I was looking for small fun projects and Adobe came out with a “daily challenge”. I did a couple of these challenges and this one was one of my best.",
        "It’s the solar system with all of its planets and their relative distance to the sun. This was entirely made using Adobe Illustrator in one day.",
      ],
      details: [["Project:", " Adobe Creative Program"]],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612977896/mathieutranchida.io/design/g5_ru3fy5.jpg",
    text: {
      title: "Portfolio Magazine Project",
      paragraph: [
        "During the pandemic and on the side of my studies, I decided to make a “fake” magazine showcasing my best photos. The magazine is made of 54 pages and divided in four categories: Skiing, Climbing, Landscape, and Lifestyle. Each page has a unique design touch.",
        "This double page is definitely my favorite design / photo combination. It is the introduction for the climbing section. The word “climbing” is hidden and faded behind the three diving platforms. It is simple but effective!",
        "The design was made using Adobe Photoshop with layers and masks. Made in one hour.",
      ],
      details: [["Project:", " Magazine portfolio"]],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612977896/mathieutranchida.io/design/g11_xras71.jpg",
    text: {
      title: "Thirsty Thursday",
      paragraph: [
        "Another design for an event of the Concordia Ski & Snowboard Club (CSSC). This was a Facebook banner for one of the monthly Thirsty Thursdays in 2018.",
        "During my time at the CSSC, I did more than 20 designs for social media with different sizes (square, banners, and stories).",
        "This design was done using Adobe Photoshop.",
      ],
      details: [["Project:", " Concordia Ski & Snowboard Club"]],
    },
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
