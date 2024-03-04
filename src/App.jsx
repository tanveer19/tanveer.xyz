import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;
