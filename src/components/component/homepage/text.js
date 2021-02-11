import React from "react";
import styled from "styled-components";

import { TXT } from "../../../globalStyles/constants";
import SocialMedia from "../reusables/socialMedia";

const Text = () => {
  const socialMediaColor = "white";
  return (
    <>
      <Wrapper>
        <Paragraph>
          Passionnate about new technologies and digital content creation. I’m a
          young professional ready to put my skills to work. Over the years, I
          have developped strong skills in photography, design, video
          production, and web development. After completing a Full-Stack Web
          Development Diploma, I now have a full-scope understanding of the
          development process, and I am more passionate than ever about frontend
          development.
        </Paragraph>
        <Paragraph>
          Here, you will find the collection of my best work under different
          categories: Web Development, Photography, and Design.
        </Paragraph>
        <Paragraph>
          Feel free to contact me for work, fun, or any other inquiries you
          might have!
        </Paragraph>
        <LogoDiv>
          <SocialMedia color={socialMediaColor} />
        </LogoDiv>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 12vh;
  max-width: ${TXT.width};
  margin: ${TXT.margin};
  font-weight: 300;
  color: ${TXT.color};
`;

const Paragraph = styled.p`
  text-align: justify;
`;

const LogoDiv = styled.div`
  float: right;
  margin-top: 15px;
`;

export default Text;
