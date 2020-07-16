import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50px;
  border: none;
  margin: 5%;
  padding: 3%;
  background: #ff574c;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    box-shadow: 35px 35px 78px -20px rgba(0, 0, 0, 1);
  }
`;

const CocktailInstructions = ({ drink }) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {isHidden ? (
        <>
          <Button onClick={handleClick}>How Do I Make This?</Button>
        </>
      ) : (
        <>
          <h2>Drink Instructions:</h2>
          <p>{drink.strInstructions}</p>
          <h2>Ingredients</h2>
          <h3>Glass used: {drink.strGlass}</h3>
          <ul>
            <li>
              {drink.strMeasure1} {drink.strIngredient1}
            </li>
            <li>
              {drink.strMeasure2} {drink.strIngredient2}
            </li>
            <li>
              {drink.strMeasure3} {drink.strIngredient3}
            </li>
            <li>
              {drink.strMeasure4} {drink.strIngredient4}
            </li>
            <li>
              {drink.strMeasure5} {drink.strIngredient5}
            </li>
            <li>
              {drink.strMeasure6} {drink.strIngredient6}
            </li>
            <li>
              {drink.strMeasure7} {drink.strIngredient7}
            </li>
            <li>
              {drink.strMeasure8} {drink.strIngredient8}
            </li>
            <li>
              {drink.strMeasure9} {drink.strIngredient9}
            </li>
            <li>
              {drink.strMeasure10} {drink.strIngredient10}
            </li>
            <li>
              {drink.strMeasure11} {drink.strIngredient11}
            </li>
            <li>
              {drink.strMeasure12} {drink.strIngredient12}
            </li>
            <li>
              {drink.strMeasure13} {drink.strIngredient13}
            </li>
            <li>
              {drink.strMeasure14} {drink.strIngredient14}
            </li>
            <li>
              {drink.strMeasure15} {drink.strIngredient15}
            </li>
          </ul>
          <Button onClick={handleClick}>Close Ingredients</Button>
        </>
      )}
    </div>
  );
};

export default CocktailInstructions;
