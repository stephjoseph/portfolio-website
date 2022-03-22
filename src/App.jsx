import Home from "./Home";
import Portfolio from "./Portfolio";
import Footer from "./components/Footer";
import Contact from "./Contact";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <div id="App" className="grid place-items-center bg-[#fafafa]">
        <div className="relative w-full max-w-[40rem] bg-[#fafafa] px-8 md:max-w-[64rem] md:px-[2.438rem] xl:max-w-[96rem] xl:px-[10.313rem]">
          {size.x < 768 && <MobileNav />}
          {size.x >= 768 && <Navbar />}
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
