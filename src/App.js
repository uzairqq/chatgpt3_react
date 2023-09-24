import React from "react";

import { Article, Brand, Navbar, Cta, Feature } from "./components/index";

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
