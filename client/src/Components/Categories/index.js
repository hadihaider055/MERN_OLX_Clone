import React from "react";
import * as HiIcons from "react-icons/hi";
import { Link } from "react-router-dom";
import CategoryDropdown from "../CategoryDropdown";
import "./style.css";

const Categories = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };
  return (
    <div className="categories__main">
      <div
        className="all__categories"
        aria-haspopup="true"
        aria-controls="basic-menu"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h6>All Categories</h6>
        <HiIcons.HiOutlineChevronDown className="categories__chevron" />
        <CategoryDropdown
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
      </div>
      <div className="categories">
        <Link to="/products/mobiles">Mobiles</Link>
        <Link to="/products/vehicles">Vehicles</Link>
        <Link to="/products/bikes">Bikes</Link>
        <Link to="/products/services">Services</Link>
        <Link to="/products/jobs">Jobs</Link>
        <Link to="/products/property for rent">Property for Rent</Link>
      </div>
    </div>
  );
};

export default Categories;
