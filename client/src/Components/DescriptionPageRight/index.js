import React from "react";
import "./style.css";
import Dummy from "../../Assets/dummy.png";
import * as HiIcons from "react-icons/hi";
import { format } from "timeago.js";
import { ShareOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import { Row, Col } from "react-bootstrap";
import Mapbox from "../Mapbox";

const DescriptionPageRight = ({
  price,
  address,
  adTitle,
  createdAt,
  userName,
  phoneNumber,
}) => {
  let updatedPrice;
  if (price !== undefined) {
    updatedPrice = price.toLocaleString();
  }
  return (
    <div className="description__pageRight">
      <div className="price__section">
        <div className="price__sectionDiv">
          <h4 className="price__sectionTitle">Rs {updatedPrice}</h4>
          <div className="details__sharingDiv">
            <ShareOutlined className="Mui__Icon" />
            <FavoriteBorderOutlined className="Mui__Icon" />
          </div>
        </div>
        <p className="price__sectionDiv__title">{adTitle}</p>
        <div className="price__sectionDiv__Footer">
          <p className="price__sectionDiv__address">{address}</p>
          <p className="price__sectionDiv__time">{format(createdAt)}</p>
        </div>
      </div>
      <div className="seller__description">
        <p className="seller__descriptionHeading">Seller Description</p>
        <div className="seller__description__content">
          <Row>
            <Col md={2}>
              <img src={Dummy} alt="Profile" />
            </Col>
            <Col md={10}>
              <h6>{userName}</h6>
              <p>Member since Feb 2021</p>
            </Col>
          </Row>
        </div>
        <button>Chat with seller</button>
        <div className="seller__description__footer">
          <HiIcons.HiOutlinePhone className="phoneIcon" />
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div>
        <Mapbox address={address} />
      </div>
    </div>
  );
};

export default DescriptionPageRight;
