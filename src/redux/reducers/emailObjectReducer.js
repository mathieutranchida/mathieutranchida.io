const initialState = {
  templateId: "",
};

export default function emailObjectReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_EMAIL_TEMPLATE": {
      return {
        ...state,
        state: action.templateId,
      };
    }
    default: {
      return state;
    }
  }
}
