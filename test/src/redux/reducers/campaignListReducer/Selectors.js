import createCachedSelector from "re-reselect"
import get from "lodash/get"

const extractCampaignList = (state) => state.campaignListReducer;
//cache state
const fetchCampaignListData = createCachedSelector(
    extractCampaignList,
    (state, key) => key,
    (data, key) => get(data, key)
)(
    (state, key) => key
);
export const getCampaignList = (state) => fetchCampaignListData(state, 'campaignList')