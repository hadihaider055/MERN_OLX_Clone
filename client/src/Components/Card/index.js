import React from "react";
import { format } from "timeago.js";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({
  CardImg,
  Category,
  Price,
  adTitle,
  Address,
  Time,
  Featured,
  detailedProduct,
}) => {
  return (
    <>
      <Link to={`/product/detail/${detailedProduct}`} className="card__link">
        <div className="card">
          {Featured === "true" ? (
            <>
              <div className="featured__label">
                <p>Featured</p>
              </div>
              <span className="label__border"></span>
            </>
          ) : null}
          <FavoriteBorderIcon className="favorite__icon" />
          <div className="card__img">
            <img src={CardImg} alt={Category} />
          </div>
          <div className="card__content">
            <p className="card__price">Rs {Price}</p>
            <p className="card__description">{adTitle}</p>
          </div>
          <div className="card__footer">
            <p className="card__address">{Address}</p>
            <p className="card__time">{format(Time)}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
