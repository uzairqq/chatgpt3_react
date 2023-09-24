import React from "react";

import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar.jsx";
import Cta from "./components/cta/Cta.jsx";
import Feature from "./components/feature/Feature.jsx";

const App = () => {
  return (
    <div>
      <h1>GPT-3</h1>
      <Article />
      <Brand />
      <Navbar />
      <Cta />
      <Feature />
    </div>
  );
};

export default App;
