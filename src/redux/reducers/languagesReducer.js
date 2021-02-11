// import { en as state } from "../../languages";

const initialState = {
  //   state,
  status: "delete this",
};

export default function languagesReducer(state = initialState, action) {
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
