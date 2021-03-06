import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { fetchCocktail } from "../store/actions";

const Item = styled.li`
  width: 25%;
  margin: .5% auto;
  &:hover {
    background: #ff574c;
  }
`;

const CocktailList = () => {
  const { drinks } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {drinks.length === 0 && (
        <div>
          <h1>Select a spirit to get started</h1>
        </div>
      )}
      {drinks.length > 0 && (
        <div>
          <h1>Cocktail List</h1>
          <h3>Click on cocktail below to learn how to make it</h3>
          <ul>
            {drinks.map((drink) => (
              <Item
                onClick={() => dispatch(fetchCocktail(drink.idDrink))}
                key={drink.idDrink}
              >
                {drink.strDrink}
              </Item>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CocktailList;
