import { en as state } from "../../languages/en";

const initialState = {
  state,
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_NEW_LANGUAGE": {
      return {
        ...state,
      };
    }
    case "RECEIVE_NEW_LANGUAGE": {
      return {
        ...state,
        state: action.content,
      };
    }
    case "RECEIVE_NEW_LANGUAGE_ERROR": {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
