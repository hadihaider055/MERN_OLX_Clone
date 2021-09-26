import React from "react";
import MobileAd from "../../Assets/olx-mobile.png";
import GooglePlayStore from "../../Assets/playstore.svg";
import AppStore from "../../Assets/appstore.svg";
import "./style.css";

const OlxAd = () => {
  return (
    <div className="ad__main">
      <div className="ad__container">
        <div className="container__img">
          <img src={MobileAd} alt="Olx Mobile Ad" className="olx__mobile" />
        </div>
        <div className="ad_container__content">
          <h3>Try the Olx App</h3>
          <p>
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
        <hr />
        <div className="download__link">
          <p>Get your app today</p>
          <div className="download__buttons">
            <img src={GooglePlayStore} alt="PlayStore" />
            <img src={AppStore} alt="AppStore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlxAd;
