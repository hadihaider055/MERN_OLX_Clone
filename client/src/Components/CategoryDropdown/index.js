import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { CategoryData } from "./data";
import Menu from "@mui/material/Menu";

const CategoryDropdown = ({ open, anchorEl, setAnchorEl }) => {
  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{
          marginTop: "10px",
          padding: "40px 0",
          height: "80vh",
        }}
      >
        {CategoryData.map((item) => {
          return (
            <MenuItem className="menu__item" key={item.id}>
              {item.icon}
              <p>{item.name}</p>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CategoryDropdown;
