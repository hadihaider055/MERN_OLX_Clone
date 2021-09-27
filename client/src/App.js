import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import DescriptionPage from "./Pages/Description";
import ScrollToTop from "./Components/Scroll to top";
import SellPage from "./Pages/Sell";
import SearchPage from "./Pages/searchPage";
import PageNotFound from "./Pages/PageNotFound";
import PrivacyPolicy from "./Pages/Privacy Policy";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/product/detail/:id" component={DescriptionPage} />
        <Route exact path="/sell/create" component={SellPage} />
        <Route exact path="/products/search/:keyword" component={SearchPage} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
