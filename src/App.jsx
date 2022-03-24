import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Tip from "./components/detail/tip/Tip";
import Officelite from "./components/detail/officelite/Officelite";
import Maker from "./components/detail/maker/Maker";
import Typemaster from "./components/detail/typemaster/Typemaster";
import Github from "./components/detail/github/Github";
import Art from "./components/detail/art/Art";
import Suite from "./components/detail/suite/Suite";
import Time from "./components/detail/time/Time";
import Crowdfunding from "./components/detail/crowdfunding/Crowdfunding";
import Pricing from "./components/detail/interactive-pricing/Pricing";
import Testimonials from "./components/detail/testimonials-slider/Testimonials";
import Equalizer from "./components/detail/equalizer/Equalizer";
import Meet from "./components/detail/meet/Meet";
import Pod from "./components/detail/pod/Pod";
import FAQAccordion from "./components/detail/faq-accordion/FAQAccordion";

function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  useEffect(() => (window.onresize = updateSize), []);
  return (
    <Router>
      <ScrollToTop />
      <div id="App" className="grid place-items-center bg-[#fafafa]">
        <div className="relative w-full max-w-[40rem] bg-[#fafafa] px-8 md:max-w-[64rem] md:px-[2.438rem] xl:max-w-[96rem] xl:px-[10.313rem]">
          {size.x < 768 && <MobileNav />}
          {size.x >= 768 && <Navbar />}
        </div>
        <div
          id="content"
          className="mb-20 flex  w-full max-w-[40rem] overflow-hidden  px-8 md:max-w-[64rem]  md:px-[2.438rem] xl:mb-[9.375rem] xl:max-w-[96rem] xl:px-[10.313rem]"
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio/tip">
              <Tip />
            </Route>
            <Route path="/portfolio/officelite">
              <Officelite />
            </Route>
            <Route path="/portfolio/maker">
              <Maker />
            </Route>
            <Route path="/portfolio/typemaster">
              <Typemaster />
            </Route>
            <Route path="/portfolio/github-user-search">
              <Github />
            </Route>
            <Route path="/portfolio/art-gallery">
              <Art />
            </Route>
            <Route exact path="/portfolio/suite">
              <Suite />
            </Route>
            <Route exact path="/portfolio/time-tracking-dashboard">
              <Time />
            </Route>
            <Route exact path="/portfolio/crowdfunding">
              <Crowdfunding />
            </Route>
            <Route exact path="/portfolio/interactive-pricing">
              <Pricing />
            </Route>
            <Route exact path="/portfolio/testimonials-slider">
              <Testimonials />
            </Route>
            <Route exact path="/portfolio/equalizer">
              <Equalizer />
            </Route>
            <Route exact path="/portfolio/meet">
              <Meet />
            </Route>
            <Route exact path="/portfolio/pod">
              <Pod />
            </Route>
            <Route exact path="/portfolio/faq-accordion">
              <FAQAccordion />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
