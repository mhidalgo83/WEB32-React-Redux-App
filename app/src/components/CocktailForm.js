import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCocktails } from "../store/actions";

import styled from "styled-components";

const Button = styled.button`
  border-radius: 50px;
  border: none;
  margin: 5%;
  padding: 10%;
  background: #ff574c;
  text-transform: uppercase;
  font-weight: bold;
  transition: .2s all;
  &:hover {
    cursor: pointer;
    box-shadow: 35px 35px 78px -20px rgba(0, 0, 0, 1);
  }
`;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 25%;
align-items: center;
margin: auto;
`


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
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="spirit"
          value={spirit}
          placeholder="Enter spirit here"
          onChange={handleChanges}
        ></input>
        <Button type="submit">Find me some drinks</Button>
      </Form>
    </div>
  );
};

export default CocktailForm;
