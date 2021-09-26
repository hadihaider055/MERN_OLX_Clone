import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import * as HiIcons from "react-icons/hi";
import {
  AssignmentOutlined,
  AccountBalanceWalletOutlined,
  HelpOutlineOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";
import ProfileImage from "../../Assets/dummy.png";

const Dropdown = ({ userEmail, Logout }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <div
        className="account__dropdown"
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <img src={ProfileImage} alt="Profile" className="dropdown__image" />
        <HiIcons.HiOutlineChevronDown className="navbar__chevron__icon" />
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  style={{
                    width: "300px",
                    marginTop: "10px",
                  }}
                >
                  <div className="dropdown__welcomeUser">
                    <div className="dropdown__user__imageDiv">
                      <img src={ProfileImage} alt="Profile" />
                    </div>
                    <div className="dropdown__user__details">
                      <p>Hello,</p>
                      <h3>{JSON.parse(userEmail)}</h3>
                    </div>
                  </div>
                  <Divider />
                  <MenuItem className="menu__item">
                    <AssignmentOutlined className="menu__item__icon" />
                    <p>Buy business packages</p>
                  </MenuItem>
                  <MenuItem className="menu__item">
                    <AccountBalanceWalletOutlined className="menu__item__icon" />
                    <p>Bought Packages & Billing</p>
                  </MenuItem>
                  <Divider />
                  <MenuItem className="menu__item">
                    <HelpOutlineOutlined className="menu__item__icon" />
                    <p>Help</p>
                  </MenuItem>
                  <MenuItem className="menu__item">
                    <SettingsOutlined className="menu__item__icon" />
                    <p>Settings</p>
                  </MenuItem>
                  <Divider />
                  <MenuItem className="menu__item" onClick={Logout}>
                    <ExitToAppOutlined className="menu__item__icon" />
                    <p>Logout</p>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default Dropdown;
