////////// Redux Store ////////////

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  sex: "",
};

// Function to accept state and actions. Default
// param used is initialState if one is not specified:
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FIRSTNAME":
      return {
        ...state,
        firstName: action.value
      };
    case "UPDATE_LASTNAME":
      return {
        ...state,
        firstName: action.value
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.value
      };
    case "UPDATE_AGE":
      return {
        ...state,
        age: action.value
      };
    case "UPDATE_SEX":
      return {
        ...state,
        sex: action.value
      };
    default:
      return state;
  }
};

export default reducer;