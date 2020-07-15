import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { initialCocktail } from "../store/actions";

import CocktailInstructions from "./CocktailInstructions";
import CocktailForm from "./CocktailForm";

const Cocktail = () => {
  const { drink, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialCocktail());
  }, []);

  return (
    <div>
      <h1>Drink Maker</h1>
      {isLoading && <h4>...Loading</h4>}
      {error && <p>{error}</p>}
      {drink && (
        <div>
          <h2>{drink.strDrink}</h2>
          <img src={`${drink.strDrinkThumb}/preview`}></img>
          <CocktailInstructions drink={drink} />
          <CocktailForm />
        </div>
      )}
    </div>
  );
};

export default Cocktail;
