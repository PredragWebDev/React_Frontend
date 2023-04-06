import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Stock } from "./components/stock";
import { Practice } from "./components/practice";
import { Trade } from "./components/trade";
import { Yourself } from "./components/yourself";
import { Faqs } from "./components/faqs";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Stock data={landingPageData.Header} />
      <Practice data={landingPageData.Features} />
      <Trade data={landingPageData.About} />
      <Yourself data={landingPageData.Services} />
      <Faqs data={landingPageData.Gallery}/>
    </div>
  );
};

export default App;
