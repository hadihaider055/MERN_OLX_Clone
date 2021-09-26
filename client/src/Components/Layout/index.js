import React from "react";
import Categories from "../Categories";
import Footer from "../Footer";
import FooterLinks from "../Footer Links";
import Header from "../Header";
import OlxAd from "../Olx-Ad";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Categories />
      {children}
      <OlxAd />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default Layout;
