import {
  FETCH_COCKTAIL_START,
  FETCH_COCKTAIL_SUCCESS,
  FETCH_COCKTAIL_FAILURE,
  FETCH_COCKTAILS_START,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_FAILURE,
  SELECT_COCKTAIL_START,
  SELECT_COCKTAIL_SUCCESS,
  SELECT_COCKTAIL_FAILURE
} from "../actions";

export const initialState = {
  drink: {},
  drinks: [],
  isLoading: false,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAIL_START:
      return { ...state, isLoading: true, error: "" };
    case FETCH_COCKTAIL_SUCCESS:
      return { ...state, isLoading: false, drink: action.payload };
    case FETCH_COCKTAIL_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case FETCH_COCKTAILS_START:
      return { ...state, isFetching: true, error: "" };
    case FETCH_COCKTAILS_SUCCESS:
      return { ...state, isFetching: false, drinks: action.payload };
    case FETCH_COCKTAILS_FAILURE:
      return { ...state, isFetching: false, error: action.payload, drinks: [] };
      case SELECT_COCKTAIL_START:
        return{...state, isLoading: true, error: "", drink: {}};
        case SELECT_COCKTAIL_SUCCESS:
        return{...state, isLoading: false, drink: action.payload}
        case SELECT_COCKTAIL_FAILURE:
        return{...state, isLoading: false,}
    default:
      return state;
  }
};
