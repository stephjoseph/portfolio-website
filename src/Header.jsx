import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
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
    <header className="relative mb-24 w-full max-w-[40rem] px-8 md:max-w-[64rem] md:px-[2.438rem] xl:mb-[9.375rem] xl:max-w-[96rem] xl:px-[10.313rem]">
      {size.x < 768 && <MobileNav />}
    </header>
  );
};

export default Header;
