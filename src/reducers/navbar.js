const intialState = {
  color: "black",
};

const navbarReducer = (state = intialState, action) => {
  console.log("IN-NAV " + action.type);
  switch (action.type) {
    case "SET_NAV_COLOR":
      return { color: action.payload };
    default:
      return state;
  }
};

export default navbarReducer;
