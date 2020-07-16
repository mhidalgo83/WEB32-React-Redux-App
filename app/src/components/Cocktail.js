import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { initialCocktail } from "../store/actions";

import CocktailInstructions from "./CocktailInstructions";
import CocktailForm from "./CocktailForm";

const fadeIn = keyframes`
from {
    opacity: 0;
} to {
    opacity: 1;
}
`;

const Drink = styled.div`
  animation: ${fadeIn} 3s;
`;

const DrinkImage = styled.img`
  box-shadow: 35px 35px 78px -20px rgba(0, 0, 0, 0.5);
  
  }
`;

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
        <Drink>
          <h2>{drink.strDrink}</h2>
          <DrinkImage src={`${drink.strDrinkThumb}/preview`}></DrinkImage>
          <CocktailInstructions drink={drink} />
          <CocktailForm />
        </Drink>
      )}
    </div>
  );
};

export default Cocktail;
