const intialState = {
  color: "black",
};

const navbarReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_NAV_COLOR":
      return { color: action.payload };
    default:
      return state;
  }
};

export default navbarReducer;
