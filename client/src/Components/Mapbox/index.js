import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./style.css";

const Mapbox = (props) => {
  return (
    <>
      <div className="map__main">
        <p className="map__heading">Posted in</p>
        <p className="map__address">{props.address}</p>
        <div className="map__div">
          <Map google={props.google} zoom={14} className="google__map" />
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyD9hXlWH3G8L5oyU4Qo0sg8lY36CYks4cs",
})(Mapbox);
