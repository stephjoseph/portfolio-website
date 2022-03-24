import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import routes from "./components/config/routing/routes";
import PageNotFound from "./components/PageNotFound";

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
            {routes.map((route) => (
              <Route
                exact={true}
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
