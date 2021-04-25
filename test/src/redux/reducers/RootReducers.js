import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// reducers
import { reducer as campaignListReducer } from "./campaignListReducer/Reducer";
import { reducer as dashboardReducer } from "./dashboardReducer/Reducer";

const RootReducers = (history) =>
  combineReducers({
    campaignListReducer,
    dashboardReducer,
    router: connectRouter(history),
  });
export default RootReducers;
