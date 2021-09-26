import React, { useState } from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import ProfileImage from "../../Assets/dummy.png";
import { Divider } from "@material-ui/core";
import {
  AssignmentOutlined,
  AccountBalanceWalletOutlined,
  HelpOutlineOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
  CameraAltOutlined,
} from "@mui/icons-material";

function Sidebar({ userEmail, isLoggedIn, setModalShow, Logout }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <div className="menu-bars-div">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className={sidebar ? "sidebar-menu active" : "sidebar-menu"}>
        <ul className="sidebar-menu-items">
          <li className="sidebar-toggle">
            <Link to="#" className="menu-bars-close" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
              <span>Close</span>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <div className="sidebar__user">
                  <div className="sidebar__user__imageDiv">
                    <img src={ProfileImage} alt="Profile" />
                  </div>
                  <div className="sidebar__user__details">
                    <p>Hello,</p>
                    <h3>{JSON.parse(userEmail)}</h3>
                  </div>
                </div>
              </li>
              <Divider className="divider" />
              <Link to="/sell/create" className="sidebar-menu-item">
                <div className="sidebar__item">
                  <CameraAltOutlined className="menu__item__icon" />
                  <p>Start selling</p>
                </div>
              </Link>
              <Divider className="divider" />
              <div className="sidebar__item">
                <AssignmentOutlined className="menu__item__icon" />
                <p>Buy business packages</p>
              </div>
              <div className="sidebar__item">
                <AccountBalanceWalletOutlined className="menu__item__icon" />
                <p>Bought Packages & Billing</p>
              </div>
              <Divider className="divider" />
              <div className="sidebar__item">
                <HelpOutlineOutlined className="menu__item__icon" />
                <p>Help</p>
              </div>
              <div className="sidebar__item">
                <SettingsOutlined className="menu__item__icon" />
                <p>Settings</p>
              </div>
              <Divider className="divider" />
              <div className="sidebar__item" onClick={Logout}>
                <ExitToAppOutlined className="menu__item__icon" />
                <p>Logout</p>
              </div>
            </>
          ) : (
            <>
              <li>
                <div
                  className="sidebar__user"
                  onClick={() => setModalShow(true)}
                >
                  <div className="sidebar__user__imageDiv">
                    <img src={ProfileImage} alt="Profile" />
                  </div>
                  <div className="sidebar__user__notLogin">
                    <p>Enter to your account</p>
                    <p style={{ textDecoration: "underline" }}>
                      Login to your account
                    </p>
                  </div>
                </div>
              </li>
              <Divider className="divider" />
              <div className="sidebar__item">
                <AssignmentOutlined className="menu__item__icon" />
                <p>Buy business packages</p>
              </div>
              <div className="sidebar__item">
                <AccountBalanceWalletOutlined className="menu__item__icon" />
                <p>Bought Packages & Billing</p>
              </div>
              <Divider className="divider" />
              <div className="sidebar__item">
                <HelpOutlineOutlined className="menu__item__icon" />
                <p>Help</p>
              </div>
              <div className="sidebar__item">
                <SettingsOutlined className="menu__item__icon" />
                <p>Settings</p>
              </div>
              <Divider className="divider" />
              <button
                onClick={() => setModalShow(true)}
                className="sidebar__loginBtn"
              >
                Login
              </button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
