import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { gsap } from "gsap";

import { CONTACT_CONSTANTS } from "../../../globalStyles/constants";
import { RiLoaderLine } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let formArea = useRef(null);
  let messageArea = useRef(null);
  let loadingSpinner = useRef(null);
  let confirmationMessage = useRef(null);

  const handleClick = () => {
    gsap.to(formArea, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      userSelect: "none",
      zIndex: -1,
    });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 1.5,
      opacity: 1,
    });
    gsap.to(loadingSpinner, {
      duration: 0.5,
      delay: 3.5,
      opacity: 0,
    });
    gsap.to(confirmationMessage, {
      duration: 0.5,
      delay: 4,
      opacity: 1,
      zIndex: 1,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lz9tdc",
        "template_qu7pwha",
        e.target,
        "user_48pmgavLTUZbdVapzMSzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <FormWrapper>
        <Main>
          <Form
            className="contact-form"
            ref={(e) => {
              formArea = e;
            }}
            onSubmit={sendEmail}
          >
            <Title>To: mathieu.tranchida@gmail.com</Title>
            <Input type="hidden" name="contact_number" />
            <Div>
              <Input
                type="text"
                name="user_name"
                placeholder="*name"
                value={name}
                onChange={(ev) => {
                  setName(ev.target.value);
                }}
              />
            </Div>
            <Div>
              <Input
                type="email"
                name="user_email"
                placeholder="*email"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </Div>
            <Div>
              <Textarea
                name="message"
                value={message}
                placeholder="*message"
                ref={(e) => {
                  messageArea = e;
                }}
                onChange={(ev) => {
                  setMessage(ev.target.value);
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "150px",
                    ease: "power2",
                  });
                }}
                onSelect={() => {
                  gsap.to(messageArea, {
                    duration: 1,
                    height: "150px",
                    ease: "power2",
                  });
                }}
              />
              <TextareaReducedMotion
                name="message"
                value={message}
                placeholder="*message"
                onChange={(ev) => {
                  setMessage(ev.target.value);
                }}
              />
            </Div>
            <Button
              type="submit"
              value="send"
              disabled={!name || !email.includes("@") || !message}
              variant="contained"
              color="primary"
              onClick={handleClick}
            />
          </Form>
        </Main>
      </FormWrapper>
      <LoadingWrapper
        ref={(e) => {
          loadingSpinner = e;
        }}
      >
        <LoadingLogoDiv>
          <SpinningLoader />
        </LoadingLogoDiv>
      </LoadingWrapper>
      <ConfirmationWrapper
        ref={(e) => {
          confirmationMessage = e;
        }}
      >
        <Confirmation>
          Your message has been sent successfully! I will come back to you as
          soon as I have the chance.
        </Confirmation>
      </ConfirmationWrapper>
    </div>
  );
};

const FormWrapper = styled.div`
  position: ${CONTACT_CONSTANTS.positionWrapper};
  width: ${CONTACT_CONSTANTS.widthWrapper};
  height: ${CONTACT_CONSTANTS.heightWrapper};
  top: ${CONTACT_CONSTANTS.topWrapper};
  right: ${CONTACT_CONSTANTS.rightWrapper};
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12vh 2vw 2vw 2vw;
`;

const Title = styled.p`
  margin-bottom: 10px;
`;

const Form = styled.form`
  max-width: ${CONTACT_CONSTANTS.formMaxWidth};
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 12pt;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: calc(100% + 2px);
  height: 15px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 12pt;
  padding: 0px 0px 5px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion) {
    display: none;
  }
`;

const TextareaReducedMotion = styled.textarea`
  width: calc(100% + 2px);
  height: 150px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 12pt;
  padding: 0px 0px 5px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion: no-preference) {
    display: none;
  }
`;

const Button = styled.input`
  background-color: transparent;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 14pt;
  color: black;
  border: none;
  text-transform: uppercase;
  font-weight: 900;
  margin: 4px 0px 0px 0px;
  &:disabled {
    color: grey;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

const LoadingWrapper = styled.div`
  position: ${CONTACT_CONSTANTS.positionWrapper};
  width: ${CONTACT_CONSTANTS.widthWrapper};
  height: ${CONTACT_CONSTANTS.heightWrapper};
  top: ${CONTACT_CONSTANTS.topWrapper};
  right: ${CONTACT_CONSTANTS.rightWrapper};
  opacity: 0;
  z-index: -1;
`;

const LoadingLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25vh 2vw 2vw 2vw;
`;

const SpinningLoader = styled(RiLoaderLine)`
  height: 30px;
  width: 30px;
  color: black;
  animation-duration: 1500ms;
  animation-name: spin;
  animation-iteration-count: infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ConfirmationWrapper = styled.div`
  position: ${CONTACT_CONSTANTS.positionWrapper};
  width: ${CONTACT_CONSTANTS.widthWrapper};
  height: ${CONTACT_CONSTANTS.heightWrapper};
  top: ${CONTACT_CONSTANTS.topWrapper};
  right: ${CONTACT_CONSTANTS.rightWrapper};
  opacity: 0;
  z-index: -1;
`;

const Confirmation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25vh 2vw 2vw 2vw;
`;

export default Contact;
