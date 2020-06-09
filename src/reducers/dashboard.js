const initialState = {
    active: "dashboard"
};

const dashboardReducer = (state = initialState, action) => {
    console.log("INI : "+action.type);
    switch (action.type) {
        case "SET_ACTIVE_DASHBOARD":
        return { active: action.payload };
        default:
        return state;
    }
};
  
export default dashboardReducer;
  