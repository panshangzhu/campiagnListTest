import createCachedSelector from "re-reselect"
import get from "lodash/get"

// get current location
const extractRouterData = (state) => state.router;
// cache state
const fetchRouterData = createCachedSelector(
    extractRouterData,
    (state, key) => key,
    (data, key) => get(data, key)
)(
    (state, key) => key
);
export const getLocation = (state) => fetchRouterData(state, 'location');