import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import SaaSProductLandingPage from "demos/SaaSProductLandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import ContactUs from "pages/ContactUs";
import MainLandingPage from "MainLandingPage";
import AboutUs from "pages/AboutUs";
import Pricing from "pages/Pricing";
import ComponentRenderer from "ComponentRenderer";
import ThankYouPage from "ThankYouPage";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/thank-you" element={<ThankYouPage />} /> */}
          <Route path="/" element={<SaaSProductLandingPage />} />
          <Route path="/components/pages/Login" element={<Login />} />
          <Route path="/components/pages/ContactUS" element={<ContactUs />} />
          <Route path="/components/pages/Pricing" element={<Pricing />} />
          <Route path="/" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}
