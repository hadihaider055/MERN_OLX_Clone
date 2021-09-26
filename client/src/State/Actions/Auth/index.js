import axios from "axios";
export const getGoogleAuthDetails = (res) => async (dispatch) => {
  try {
    const result = res?.profileObj;
    const token = res?.tokenId;
    dispatch({ type: "GOOGLE_AUTH", payload: { result, token } });
    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("authUser", JSON.stringify(result.name));
  } catch (error) {
    console.log(error);
  }
};

export const logoutAuth = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUT" });
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

export const getFacebookAuthDetails = (response) => async (dispatch) => {
  try {
    const result = response;
    const token = response?.accessToken;
    dispatch({ type: "FACEBOOK_AUTH", payload: { result, token } });
    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("authUser", JSON.stringify(result.name));
  } catch (error) {
    console.log(error);
  }
};

export const phoneNumberVerifier = (response) => async (dispatch) => {
  try {
    const result = await axios.post("/api/users/phoneNumberVerifier", response);
    dispatch({
      type: "PHONE_NUMBER_VERIFIER",
      payload: result,
    });
    let token = result.data.token;
    let user = JSON.parse(result.config.data);
    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("authUser", JSON.stringify(user.phoneNumber));
  } catch (error) {
    console.log(error.response);
  }
};
