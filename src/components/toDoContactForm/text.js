import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateEmailTemplate } from "../../../redux/actions";
import "./radioButton.css";

import { TXT_CONSTANTS } from "../../../globalStyles/constants";

const Text = () => {
  const emailTemplate = {
    general: "general_template_qu7pwha",
    work: "work_template_07lourr",
  };

  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Title>Contact</Title>
        <Paragraph>
          Feel free to contact me for business, fun, or anything else! Use the
          form or contact me on my social medias bellow.
        </Paragraph>
        <ObjectStrong>Connect with Mathieu:</ObjectStrong>
        <ObjectSelect>Select an object*</ObjectSelect>
        <Section>
          <label className="email-object-label">
            <input
              type="radio"
              name="email object"
              value={emailTemplate.general}
              className="email-object-input"
              onChange={(e) => {
                dispatch(updateEmailTemplate(e.target.value));
              }}
            />
            <span className="design"></span>
            <span className="text">General inquiry</span>
          </label>

          <label className="email-object-label">
            <input
              type="radio"
              name="email object"
              value={emailTemplate.work}
              className="email-object-input"
              onChange={(e) => {
                dispatch(updateEmailTemplate(e.target.value));
              }}
            />
            <span className="design"></span>
            <span className="text">Web development</span>
          </label>

          <label className="email-object-label">
            <input
              type="radio"
              name="email object"
              value={emailTemplate.work}
              className="email-object-input"
              onChange={(e) => {
                dispatch(updateEmailTemplate(e.target.value));
              }}
            />
            <span className="design"></span>
            <span className="text">Photography</span>
          </label>

          <label className="email-object-label">
            <input
              type="radio"
              name="email object"
              value={emailTemplate.work}
              className="email-object-input"
              onChange={(e) => {
                dispatch(updateEmailTemplate(e.target.value));
              }}
            />
            <span className="design"></span>
            <span className="text">Design</span>
          </label>
        </Section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: ${TXT_CONSTANTS.position};
  top: ${TXT_CONSTANTS.topContact};
  max-width: ${TXT_CONSTANTS.maxWidth};
  margin: ${TXT_CONSTANTS.margin};
  font-weight: ${TXT_CONSTANTS.fontWeight};
  color: ${TXT_CONSTANTS.color};
`;

const Title = styled.h2`
  margin-top: ${TXT_CONSTANTS.marginTop};
  font-weight: ${TXT_CONSTANTS.fontWeightTitle};
  text-transform: ${TXT_CONSTANTS.textTransform};
  font-size: ${TXT_CONSTANTS.fontWeightStrong};
`;

const Paragraph = styled.p`
  text-align: ${TXT_CONSTANTS.textAlign};
`;

const ObjectStrong = styled.p`
  margin-top: 35px;
  margin-bottom: 10px;
  font-weight: ${TXT_CONSTANTS.fontWeightStrong};
  font-size: ${TXT_CONSTANTS.fontSizeStrong};
`;

const ObjectSelect = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 11pt;
  margin: 0;
`;

const Section = styled.section`
  margin-left: 10px;
  width: 225px;
`;

export default Text;
