import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { receiveNewLanguage } from "../../../redux/actions";
import { en } from "../../../languages/en";
import { fr } from "../../../languages/fr";

const LanguageSwitcher = () => {
  const currentLanguage = useSelector(
    (state) =>
      state.languageReducer.state && state.languageReducer.state.currentLanguage
  );

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {currentLanguage === "english" ? (
          <Wrapper
            aria-label="switch to French - Changer vers langue française"
            onClick={() => {
              dispatch(receiveNewLanguage(fr));
            }}
          >
            <Flag
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1614450886/mathieutranchida.io/Others/1200px-Flag_of_France.svg_ehv8dr_pucwxw.png"
              alt="fr"
            />
          </Wrapper>
        ) : (
          <Wrapper
            aria-label="switch to English - Changer vers langue Anglaise"
            onClick={() => {
              dispatch(receiveNewLanguage(en));
            }}
          >
            <FlagEnglish
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1614450884/mathieutranchida.io/Others/download_n266lb_ilicuu.png"
              alt="en"
            />
          </Wrapper>
        )}
      </div>
    </>
  );
};

const Wrapper = styled.button`
  position: fixed;
  bottom: 62px;
  right: 15px;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;
  cursor: pointer;
  transition: 300ms ease;
  /* filter: drop-shadow(0px 0px 3px rgb(100, 100, 100)); */
`;

const Flag = styled.img`
  max-height: 32px;
  object-fit: contain;
  clip-path: circle(39%);
`;

const FlagEnglish = styled.img`
  max-height: 32px;
  object-fit: contain;
  clip-path: circle(32%);
`;

export default LanguageSwitcher;
