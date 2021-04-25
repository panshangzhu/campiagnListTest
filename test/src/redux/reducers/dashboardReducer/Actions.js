import { INJECT_DATA, RESET_DASHBOARD, SET_DASHBOARD_NAME } from "./ActionTypes";
import { apiGetDashboardData } from "./Api";

const _injectSingle = (dashboardSingle) => ({
  type: INJECT_DATA,
  dashboardSingle,
});

export const resetDashboard = () => ({
    type: RESET_DASHBOARD
})
export const setDashboardName = (dashboardName) => ({
    type: SET_DASHBOARD_NAME,
    dashboardName,
})

// thunk to fetch new data and inject
export const fetchNewDashboardData = (id, num) => (dispatch) => {
  return apiGetDashboardData(id, num)
    .then((response) => {
      dispatch(_injectSingle(response));
    })
    .catch((error) => {
      throw error;
    });
};
