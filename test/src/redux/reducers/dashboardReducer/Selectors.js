import createCachedSelector from "re-reselect"
import get from "lodash/get"

const extractDashboard = (state) => state.dashboardReducer;
const fetchDashboardData = createCachedSelector(
    extractDashboard,
    (state, key) => key,
    (data, key) => get(data, key)
)(
    (state, key) => key
);
export const getDashboardData = (state) => fetchDashboardData(state, 'dashboardTotal');
export const getDashboardName = (state) => fetchDashboardData(state, 'dashboardName');