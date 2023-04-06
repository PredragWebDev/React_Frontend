import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Stock } from "./components/stock";
import { Practice } from "./components/practice";
import { Trade } from "./components/trade";
import { Yourself } from "./components/yourself";
import { Faqs } from "./components/faqs";
import {Footer} from "./components/footer";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <div>
      <Navigation/>
      <Stock/>
      <Practice/>
      <Trade/>
      <Yourself/>
      <Faqs />
      <Footer/>
    </div>
  );
};

export default App;
