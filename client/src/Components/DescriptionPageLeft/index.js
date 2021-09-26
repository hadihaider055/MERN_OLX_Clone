import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

const DescriptionPageLeft = ({
  images,
  price,
  description,
  adTitle,
  featured,
}) => {
  let updatedPrice;
  if (price !== undefined) {
    updatedPrice = price.toLocaleString();
  }

  return (
    <div className="description__pageLeft">
      <div className="description__pageImage" title={adTitle}>
        {featured === "true" ? (
          <div className="description__feature">
            <p>Featured</p>
          </div>
        ) : null}
        <img src={images} alt="description" />
      </div>
      <div className="description__details">
        <div className="details__div">
          <p className="details__divHeading">Details</p>
          <div className="details__data">
            <Row>
              <Col>
                <p>Price</p>
              </Col>
              <Col>
                <p>{updatedPrice}</p>
              </Col>
            </Row>
          </div>
          <hr />
          <div className="details__descDiv">
            <p className="details__divHeading">Description</p>
            <div className="details__descData">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPageLeft;
