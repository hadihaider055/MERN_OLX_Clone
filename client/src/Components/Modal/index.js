import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import OlxLogo from "../../Assets/olx-logo.svg";
import "./style.css";
import { Link } from "react-router-dom";
import { LocalPhone, Email, FacebookRounded } from "@mui/icons-material";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  getFacebookAuthDetails,
  getGoogleAuthDetails,
  phoneNumberVerifier,
} from "../../State/Actions/Auth";
import { ArrowBackOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
require("dotenv").config();

const ModalComp = (props) => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.authReducer.authData);
  const [currentStep, setCurrentStep] = useState(0);
  const [userPhone, setUserPhone] = useState({
    phoneNumber: "",
    password: "",
  });

  const googleSuccess = async (res) => {
    dispatch(getGoogleAuthDetails(res));
    props.setshow(false);
  };
  const googleFailure = (error) => {
    console.log(`Google Login Failed. Try again later! ${error}`);
  };

  const responseFacebook = async (response) => {
    dispatch(getFacebookAuthDetails(response));
    props.setshow(false);
  };

  const handleCloseModal = () => {
    props.setshow(false);
    setCurrentStep(0);
    setUserPhone({ phoneNumber: "", password: "" });
  };

  const onChangePhoneHandler = (e) => {
    setUserPhone({ ...userPhone, [e.target.name]: e.target.value });
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    dispatch(phoneNumberVerifier(userPhone));
    props.setshow(false);
    setCurrentStep(0);
    setUserPhone({ phoneNumber: "", password: "" });
    if (result.status === 500) {
      alert(result.statusText);
    }
  };
  return (
    <>
      <Modal
        className="modal"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation="true"
        fullscreen="sm-down"
      >
        <Modal.Header className="modal__header">
          <div className="modal__header__icons">
            {currentStep !== 0 ? (
              <ArrowBackOutlined
                onClick={() => setCurrentStep(currentStep - 1)}
                className="modal__back"
              />
            ) : null}
            <h5 onClick={handleCloseModal}>X</h5>
          </div>
          <img src={OlxLogo} alt="OLX" />
          <h4>Welcome to OLX</h4>
          <h6>The trusted community of buyers and sellers.</h6>
        </Modal.Header>
        <Modal.Body className="modal__body">
          {currentStep === 0 ? (
            <>
              <GoogleLogin
                clientId={process.env.GOOGLE_API_KEY}
                render={(renderProps) => (
                  <div className="modal__medium" onClick={renderProps.onClick}>
                    <img
                      src="https://img.icons8.com/color/50/000000/google-logo.png"
                      alt="google_icon"
                      className="google__icon"
                    />
                    <h6>Continue with Google</h6>
                  </div>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <FacebookLogin
                appId={process.env.FACEBOOK_APP_ID}
                render={(renderProps) => (
                  <div className="modal__medium" onClick={renderProps.onClick}>
                    <FacebookRounded className="fb__icon" />
                    <h6>Continue with Facebook</h6>
                  </div>
                )}
                callback={responseFacebook}
                autoLoad={false}
              />
              <div className="modal__medium">
                <Email />
                <h6>Continue with Email</h6>
              </div>
              <div
                className="modal__medium"
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                <LocalPhone />
                <h6>Continue with Phone</h6>
              </div>
            </>
          ) : null}
          {currentStep === 1 ? (
            <>
              <div className="modal__input">
                <form onSubmit={() => setCurrentStep(currentStep + 1)}>
                  <input
                    type="text"
                    id="phone"
                    maxLength="13"
                    minLength="13"
                    placeholder="Phone Number"
                    value={userPhone.phoneNumber}
                    onChange={onChangePhoneHandler}
                    name="phoneNumber"
                    required
                    autoFocus
                  />
                  <button>Continue</button>
                  <h6>Must use Country Code.</h6>
                  <p>
                    We won't reveal your phone number to anyone else nor use it
                    to send you spam.
                  </p>
                </form>
              </div>
            </>
          ) : null}
          {currentStep === 2 ? (
            <>
              <div className="modal__input">
                <form onSubmit={handlePhoneSubmit}>
                  <input
                    type="password"
                    id="phone"
                    minLength="6"
                    placeholder="Password"
                    value={userPhone.password}
                    onChange={onChangePhoneHandler}
                    required
                    autoFocus
                    name="password"
                  />
                  <button>Submit</button>
                </form>
              </div>
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer className="modal__footer">
          <p>By continuing, you are accepting</p>
          <Link to="/customer/terms&conditions">
            OLX Terms and Conditions and Privacy Policy
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
