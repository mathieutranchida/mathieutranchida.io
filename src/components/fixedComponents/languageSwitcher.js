import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { receiveNewLanguage } from "../../redux/actions";
import { en } from "../../languages/en";
import { fr } from "../../languages/fr";

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
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1614535129/mathieutranchida.io/Others/france_hkpcmt.png"
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
              src="https://res.cloudinary.com/dldqebddc/image/upload/v1614535129/mathieutranchida.io/Others/uk-flag-04_evwp0n.png"
              alt="en"
            />
          </Wrapper>
        )}
      </div>
    </>
  );
};

const Wrapper = styled.button`
  border-radius: 100%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: transparent;
  cursor: pointer;
`;

const Flag = styled.img`
  max-height: 45px;
  object-fit: contain;
`;

const FlagEnglish = styled.img`
  max-height: 45px;
  object-fit: contain;
`;

export default LanguageSwitcher;
