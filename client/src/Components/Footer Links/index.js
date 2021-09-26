import React from "react";
import "./style.css";
import { LinksData } from "./data.js";
import { PlayArrow, Twitter, Instagram } from "@material-ui/icons";
import * as CgIcons from "react-icons/cg";
import GooglePlayStore from "../../Assets/playstore.png";
import AppStore from "../../Assets/appstore.png";

const FooterLinks = () => {
  return (
    <div className="footer__links__main">
      <div className="section">
        {LinksData.map((item) => {
          return (
            <div className="footer__links" key={item.id}>
              <p className="footer__heading">{item.name}</p>
              <ul className="footer__links__list">
                {item.categories.map((link, id) => {
                  return <li key={id}>{link}</li>;
                })}
              </ul>
            </div>
          );
        })}
        <div className="follow">
          <p>Follow us</p>
          <CgIcons.CgFacebook className="social__icon" />
          <Twitter className="social__icon" />
          <PlayArrow className="social__icon" />
          <Instagram className="social__icon" />
          <div className="download__olx">
            <img src={GooglePlayStore} alt="Playstore" />
            <img src={AppStore} alt="Appstore" className="appstore"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
