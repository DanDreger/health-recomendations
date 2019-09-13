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
    case "UPDATE_BASIC_INFO":
      return {
        ...state, 
          firstName: action.value.firstName,
          lastName: action.value.lastName,
          email: action.value.email
        
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