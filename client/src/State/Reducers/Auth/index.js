const authReducer = (state = { authData: {} }, action) => {
  switch (action.type) {
    case "GOOGLE_AUTH":
      return { ...state, authData: action.payload };
    case "FACEBOOK_AUTH":
      return { ...state, authData: action.payload };
    case "LOGOUT":
      return { ...state, authData: {} };
    case "PHONE_NUMBER_VERIFIER":
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
