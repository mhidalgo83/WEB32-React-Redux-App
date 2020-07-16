import React from "react";

import Cocktail from "./components/Cocktail";
import CocktailList from "./components/CocktailList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Cocktail />
      <CocktailList  />
    </div>
  );
}

export default App;
