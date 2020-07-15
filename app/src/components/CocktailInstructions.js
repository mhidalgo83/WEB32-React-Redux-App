import React, { useState } from "react";

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
          <button onClick={handleClick}>How Do I Make This?</button>
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
          <button onClick={handleClick}>Close Ingredients</button>
        </>
      )}
    </div>
  );
};

export default CocktailInstructions;
