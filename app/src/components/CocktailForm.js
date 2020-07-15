import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions";

const CocktailForm = () => {
  const [spirit, setSpirit] = useState("");

  const dispatch = useDispatch();

  const handleChanges = (e) => {
    setSpirit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCocktails(spirit));
    setSpirit("");
  };
  return (
    <div>
      <h1>...or, find a cocktail by spirit used</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="spirit"
          value={spirit}
          placeholder="Enter spirit here"
          onChange={handleChanges}
        ></input>
        <button type="submit">Find me some drinks</button>
      </form>
    </div>
  );
};

export default CocktailForm;
