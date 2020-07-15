import axios from "axios";

export const FETCH_COCKTAIL_START = "FETCH_COCKTAIL_START";
export const FETCH_COCKTAIL_SUCCESS = "FETCH_COCKTAIL_SUCCESS";
export const FETCH_COCKTAIL_FAILURE = "FETCH_COCKTAIL_FAILURE";

export const FETCH_COCKTAILS_START = "FETCH_COCKTAILS_START";
export const FETCH_COCKTAILS_SUCCESS = "FETCH_COCKTAILS_SUCCESS";
export const FETCH_COCKTAILS_FAILURE = "FETCH_COCKTAILS_FAILURE";

export const SELECT_COCKTAIL_START = "SELECT_COCKTAIL_START";
export const SELECT_COCKTAIL_SUCCESS = "SELECT_COCKTAIL_SUCCESS";
export const SELECT_COCKTAIL_FAILURE = "SELECT_COCKTAIL_FAILURE";

// Load random cocktail
export const initialCocktail = () => (dispatch) => {
  dispatch({ type: FETCH_COCKTAIL_START });
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      dispatch({ type: FETCH_COCKTAIL_SUCCESS, payload: res.data.drinks[0] });
      console.log(res.data.drinks);
    })
    .catch((err) => {
      dispatch({ type: FETCH_COCKTAIL_FAILURE, payload: err.message });
    });
};

// Search by ingredient
export const fetchCocktails = (spirit) => (dispatch) => {
  dispatch({ type: FETCH_COCKTAILS_START });
  axios
    .get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${spirit.toLowerCase()}`
    )
    .then((res) => {
      if (res.data.drinks === undefined) {
        dispatch({
          type: FETCH_COCKTAILS_FAILURE,
          payload: "Sprit not found, please try again.",
        });
      } else {
        dispatch({ type: FETCH_COCKTAILS_SUCCESS, payload: res.data.drinks });
        console.log(res.data.drinks);
      }
    })
    .catch((err) => {
      dispatch({ type: FETCH_COCKTAILS_FAILURE });
      console.log(err);
    });
};

// Search by id

export const fetchCocktail = (id) => (dispatch) => {
  dispatch({ type: SELECT_COCKTAIL_START });
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      console.log("select cocktail success res: ", res);
      dispatch({ type: SELECT_COCKTAIL_SUCCESS, payload: res.data.drinks[0] });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SELECT_COCKTAIL_FAILURE });
    });
};
