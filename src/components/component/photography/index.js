import React, { useEffect } from "react";
import styled from "styled-components";

import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import {
  DIMENSIONS,
  NAV_GALLERY_BUTTON,
  PHOTO_CONSTANTS_IMAGE,
  TXT_CONSTANTS,
} from "../../../globalStyles/constants";

import "../style.css";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-5_jlojlc.jpg",
    text: {
      title: "Muraille stunt",
      paragraph: [
        "One of my all-time favorites.",
        "This shot it a composited panorama. I started shooting the action vertically. Once I got the shot, I shot the extremities and stiched it all the shots together in Photoshop to get a HDR file ready for large prints. Other from the stitching, there are very little edits.",
      ],
      details: [
        ["Location:", " Obergoms, Switzerland"],
        ["Athlete:", " Laurent de Martin"],
        ["Project:", " From Switzerland with Love"],
        ["Publication:", " The Ski Journal, Issue 3, 2020"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-7_x5oljh.jpg",
    text: {
      title: "Tuffa Perspectives",
      paragraph: [
        "This shot was a big surprise! We were supposed to shoot another spot but the area was closed. Bea spotted this wall and we decided to give it a try. I immediately tried to give it a unique perspctive and I love the result.",
        "Shot this on a 70-200mm f/2.8 wide open and there is little to no edits made in post. Definitely one of my favorite raw shots from this year.",
      ],
      details: [
        ["Location:", " Montreal, Canada"],
        ["Athlete:", " Bea Evans"],
        ["Project:", " Montreal’s Urban Climbing"],
        ["Publication:", " Gripped Magazine, October / November Issue, 2020"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820352/mathieutranchida.io/photos/MathieuTranchidaWeb-2_hmjz8r.jpg",
    text: {
      title: "Psicobloc finals",
      paragraph: [
        "Shot during the women’s final of the Montreal’s Psicobloc Open Series in 2019. Every photographers decided to go on the structure of the wall to get their shot during the final. Seeing that shaping up, I decided to stay on the ground and find an angle that showed the public and emphises the height of the structure. This angle was a no brainer when I found it.",
        "Shot on a 16mm lens.",
      ],
      details: [
        ["Location:", " Montreal, Canada"],
        ["Athletes:", " Unknown"],
        ["Project:", " Psicobloc Open Series 2019"],
        ["Publication:", " Gripped Magazine, October / November Issue, 2020"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820354/mathieutranchida.io/photos/MathieuTranchidaWeb-11_tskknm.jpg",
    text: {
      title: "La Fontaine boarding",
      paragraph: [
        "We built a small jump out of a snowed out elephant sculpture. After a while, some birds showed up to the party and got the scare of their life as Aidan almost landed on them. The background, the birds and the unique trick make for an photo. I love the fact that the photo blends our unique urban lifestyle with mere mortals skating in the background.",
        "Shot in January 2021 on a 24mm lens.",
      ],
      details: [
        ["Location:", " Montreal, Canada"],
        ["Athlete:", " Aidan Cameron"],
        ["Project:", " Just for fun"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820353/mathieutranchida.io/photos/MathieuTranchidaWeb-8_rqzaon.jpg",
    text: {
      title: "Appollo",
      paragraph: [
        "I dreamed of taking this shot for more than two years. It took a lot of planning and five tries to get the a full moon on top of the Montreal’s Olympic Stadium at the right angle with a clear sky.",
        "In August 2020, I shot this on a 24mm lens at 2AM. The photo is composited of two pictures, one with the correct exposure for the moon and the other for the tower. The moon wasn’t moved from it’s original position. Super proud of the result.",
      ],
      details: [
        ["Location:", " Montreal’s Olympic Stadium"],
        ["Project:", " Just for fun"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820354/mathieutranchida.io/photos/MathieuTranchidaWeb_t3dvkd.jpg",
    text: {
      title: "First Publication",
      paragraph: [
        "In 2018, I followed skier Leo Taillefer in his home resort of Val d’Isère. I got a lot of unique shots but this one stands out from the rest.",
        "Here, you can see Leo jumping out of a cliff and the whole resort of Val d’Isère in the background. Val d’Isère is one of the greatest ski resort in the world and know for its many freeride itenaries.",
        "This photo was used by L’Équipe as a cover of an online article. L’Équipe is one of the most recognized and acclaimed sports magazines in France. I am really proud to have the cover of one of their articles.",
      ],
      details: [
        ["Location:", " Val d'Isère, France"],
        ["Athlete:", " Leo Taillefer"],
        ["Project:", " Leo Taillefer | Val d’Isère"],
        [
          "Publication:",
          " L’Équipe | Couloir, itinéraire, domaine, piste préférés... Le Val d'Isère de Léo Taillefer",
        ],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820354/mathieutranchida.io/photos/MathieuTranchidaWeb-10_glaipp.jpg",
    text: {
      title: "First Ascent",
      paragraph: [
        "This unique urban high ball has been tried for more than ten years without success. In October 2020, Marc-Antoine did the first ascent of this V9 highball in the middle of the city.",
        "I love this shot because it collides the world of a climber and more “normal” people coming out of the metro station. It was incredible to see the reaction of the people realizing what was happening.",
        "This photo was used by L’Équipe as a cover of an online article. L’Équipe is one of the most recognized and acclaimed sports magazines in France. I am really proud to have the cover of one of their articles.",
      ],
      details: [
        ["Location:", " Montreal, Canada"],
        ["Athlete:", " Marc-Antoine Vigneault"],
        ["Project:", " Disturban | Allez Up | Jackalope"],
        ["Publications:", " Gripped Magazine Online, Jackalope TV"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820354/mathieutranchida.io/photos/MathieuTranchidaWeb-3_qswgte.jpg",
    text: {
      title: "Fire in the hole",
      paragraph: [
        "During the shoot of Laurent de Martin and Titouan Bessire’s movie “From Switzerland with Love”, Remco had the idea of jumping through an abandonned ski lift. The trick was one of the most impressive I had ever seen at the time. There was no margin for error.",
        "Initially, I had trouble finding the angle I wanted for this photo. I did a couple of vertical head-on shots before deciding to capture the full scene with the mountains behind. I love the result and it’s one of my favorite photos.",
      ],
      details: [
        ["Location:", " Grand Saint-Bernard, Switzerland"],
        ["Athlete:", " Remco Kayser"],
        ["Project:", " From Switzerland with Love"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820353/mathieutranchida.io/photos/MathieuTranchidaWeb-9_vun2wx.jpg",
    text: {
      title: "Disturban Cover",
      paragraph: [
        "This was the first spot we shot for the urban part of the Disturban movie made by Allez Up and Jackalope TV. It was really impressive to climbing this so close to the iconic Atwater Tunnel in Montreal.",
        "My idea was to show the road as much as the climb to really get an understanding of how dangerous it was. Unfortunately, it didn’t work my second idea was this shot. It is a composite of two pictures, the climbing part and the moving car on the bottom. Created in Photoshop.",
      ],
      details: [
        ["Location:", " Montreal, Canada"],
        ["Athlete:", " Jay Jeong"],
        ["Project:", " Disturban | Allez Up | Jackalope"],
        ["Use:", " Cover of the Disturban movie"],
      ],
    },
  },
  {
    image:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1612820353/mathieutranchida.io/photos/MathieuTranchidaWeb-4_ztu3fj.jpg",
    text: {
      title: "Bye Bye Ronin",
      paragraph: [
        "After a long day, Remco and Titouan decided to shoot some lifestyle shots for the movie. As they lined up, I had this idea to put Remco inside Titouan’s arm. Turned out to be one of my best pictures of the whole project.",
        "It was also my first printed publication in the great ski magazine “The Ski Journal”. As a kid, I dreamed of gettting published in that magazine. Aftter 5 years of hard work, I am really proud to be in such a great piece.",
      ],
      details: [
        ["Location:", " Obergoms, Switzerland"],
        ["Athlete:", " Remco Kayser | Titouan Bessire"],
        ["Project:", " From Switzerland with Love"],
        ["Publication:", " The Ski Journal | Issue One, Page 2 | 2020"],
      ],
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
  let slides = document.getElementsByClassName("photo-slide");
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

const Photography = () => {
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
      {slides.map((content, index) => {
        return (
          <div className="photo-slide fade-animation" key={index}>
            <ImageWrapper>
              <ImageDiv>
                <Image src={content.image} alt={content.text.title} />
              </ImageDiv>
            </ImageWrapper>
            <TextWrapper>
              <TextTitle>{content.text.title}</TextTitle>
              {content.text.paragraph.map((para, index) => {
                return <TextParagraph key={index}>{para}</TextParagraph>;
              })}
              {content.text.details.map((detail, index) => {
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
    </div>
  );
};

const TextWrapper = styled.div`
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topPhoto};
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
  position: ${PHOTO_CONSTANTS_IMAGE.positionWrapper};
  width: ${PHOTO_CONSTANTS_IMAGE.widthWrapper};
  height: ${PHOTO_CONSTANTS_IMAGE.heightWrapper};
  top: ${PHOTO_CONSTANTS_IMAGE.topWrapper};
  right: ${PHOTO_CONSTANTS_IMAGE.rightWrapper};
`;

const ImageDiv = styled.div`
  position: ${PHOTO_CONSTANTS_IMAGE.positionPhotoDiv};
  top: ${PHOTO_CONSTANTS_IMAGE.topPhotoDiv};
  left: ${PHOTO_CONSTANTS_IMAGE.leftPhotoDiv};
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 50vw;
  max-height: 85vh;
  object-fit: contain;
  user-select: none;
`;

const ButtonRight = styled.button`
  cursor: pointer;
  position: absolute;
  top: 250vh;
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
  top: 250vh;
  left: ${DIMENSIONS.leftColumnWidth};
  transform: translate(-100%, 0%);
  border: none;
  height: 60px;
  width: 45px;
  background-color: ${NAV_GALLERY_BUTTON.btnBckgColor};
  outline: none;
  z-index: 1000;
`;

export default Photography;
