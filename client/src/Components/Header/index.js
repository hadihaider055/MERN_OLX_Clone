import React, { useState, useEffect } from "react";
import Logo from "../../Assets/olx-logo.svg";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";
import ModalComp from "../Modal";
import { logoutAuth } from "../../State/Actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../State/Actions";
import { useHistory } from "react-router-dom";
import Dropdown from "../Dropdown";
import Sidebar from "../Sidebar";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const userData = useSelector((state) => state.productReducer.allProducts);
  const dispatch = useDispatch();
  const [userSearch, setUserSearch] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const history = useHistory();

  const authToken = localStorage.getItem("authToken");
  const logoutFunc = () => {
    dispatch(logoutAuth());
    history.push("/");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (authToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, authToken]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    dispatch(getProductByCategory(userSearch, userData))
      .then(() => {
        history.push(`/products/search/${userSearch}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userEmail = localStorage.getItem("authUser");
  return (
    <>
      <ModalComp
        show={modalShow}
        setshow={setModalShow}
        onHide={() => setModalShow(false)}
      />
      <div className={scrolled ? "navbar navbar__scrolled" : "navbar"}>
        <Sidebar
          userEmail={userEmail}
          isLoggedIn={isLoggedIn}
          setModalShow={setModalShow}
          Logout={logoutFunc}
        />
        <div className="navbar__brand">
          <Link to="/">
            <img src={Logo} alt="Olx" />
          </Link>
        </div>
        <div className="navbar__location">
          <label className="navbar__location__label" htmlFor="navbar__location">
            <BiIcons.BiSearch className="navbar__location__icon" />
            <input
              type="text"
              name="navbar__location"
              id="navbar__location"
              value="Pakistan"
              onChange={(e) => setUserLocation(e.target.value)}
            />
            <HiIcons.HiOutlineChevronDown className="navbar__chevron__icon" />
          </label>
        </div>
        <div className="navbar__search">
          <label className="navbar__search__label" htmlFor="navbar__search">
            <input
              type="text"
              name="navbar__search"
              id="navbar__search"
              placeholder="Find Cars, Mobile Phones and more..."
              onChange={(e) => setUserSearch(e.target.value)}
              value={userSearch}
            />
            <SearchIcon
              className="navbar__search__icon"
              onClick={handleSearch}
            />
          </label>
        </div>
        {isLoggedIn ? (
          <div className="login__account__details">
            <Dropdown userEmail={userEmail} Logout={logoutFunc} />
            <Link to="/sell/create">
              <button className="navbar__sellBtn">Sell</button>
            </Link>
          </div>
        ) : (
          <div className="navbar__account">
            <p className="navbar__loginBtn" onClick={() => setModalShow(true)}>
              Login
            </p>
            <button
              className="navbar__sellBtn"
              onClick={() => setModalShow(true)}
            >
              Sell
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
