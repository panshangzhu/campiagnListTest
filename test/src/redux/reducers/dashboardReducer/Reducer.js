import update from "immutability-helper";
import DashboardSingleModel from "models/DashboardSingleModel";
import DashboardTotalModel from "models/DashboardTotalModel";
import {
  INJECT_DATA,
  RESET_DASHBOARD,
  SET_DASHBOARD_NAME,
} from "./ActionTypes";

const initialState = {
  dashboardName: "",
  dashboardTotal: DashboardTotalModel.createEmpty(),
};

export const reducer = (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
    case INJECT_DATA:
      return update(state, {
        dashboardTotal: {
          $set: state.dashboardTotal
            .clone()
            .injectRecentSingle(
              DashboardSingleModel.create(action.dashboardSingle)
            ),
        },
      });
    case SET_DASHBOARD_NAME:
      return update(state, {
        dashboardName: { $set: action.dashboardName },
      });
    case RESET_DASHBOARD:
      return initialState;
    default:
      return state;
  }
};
