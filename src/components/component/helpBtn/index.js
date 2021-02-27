import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";

import { IoHelp } from "react-icons/io5";
import { BACKGROUND } from "../../../globalStyles/constants";

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        return (supportsPassive = true);
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

const Help = () => {
  const text = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.help
  );

  let modalRef = useRef(null);

  const openModal = () => {
    scroller.scrollTo("section2", {
      spy: true,
      activeClass: "active",
      smooth: true,
      duration: 300,
    });
    gsap.to(modalRef, {
      duration: 1,
      ease: "Power3.inOut",
      zIndex: 20000,
      opacity: 1,
    });
    disableScroll();
  };

  const closeModal = () => {
    gsap.to(modalRef, {
      duration: 0.5,
      ease: "Power3.inOut",
      zIndex: -1,
      opacity: 0,
    });
    enableScroll();
  };

  return (
    <>
      <div>
        <HelpBtn onClick={openModal}>
          <QuestionMark />
        </HelpBtn>
        <Modal
          ref={(e) => {
            modalRef = e;
          }}
          onClick={closeModal}
        >
          <Arrow
            src="https://res.cloudinary.com/dldqebddc/image/upload/v1614371353/mathieutranchida.io/Others/arrowLeft_xhhpwc.png"
            alt="arrow-left"
          />
          <Info>{text}</Info>
        </Modal>
      </div>
    </>
  );
};

const HelpBtn = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  outline: none;
  border: none;
  background-color: rgb(${BACKGROUND.home});
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  transition: 300ms ease;
  filter: drop-shadow(0px 0px 5px rgb(180, 180, 180));
  &:hover {
    background-color: rgb(${BACKGROUND.homeDarker});
  }
`;

const QuestionMark = styled(IoHelp)`
  color: white;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(
    circle at 40% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 8%,
    rgba(200, 0, 0, 1) 8%,
    rgba(200, 0, 0, 1) 8.6%,
    rgba(0, 0, 0, 0.7) 8.6%
  );
  opacity: 0;
`;

const Arrow = styled.img`
  position: fixed;
  top: 38%;
  left: 48%;
  transform: translate(-50%, -50%);
  max-width: 125px;
`;

const Info = styled.div`
  position: fixed;
  top: calc(38% - 17px);
  left: calc(48% + 235px);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 15pt;
  max-width: 300px;
`;

export default Help;
