import { ADD_COUNT, SET_CAMPAIGN_LIST } from "./ActionTypes";
import { apiGetCampaignList } from "./Api";

export const addCount = (count) => ({
  type: ADD_COUNT,
  count,
});

const set_compaign_List = (campaignList) => ({
  type: SET_CAMPAIGN_LIST,
  campaignList,
});

// THUNK: fetch campaign list from API
export const fetchCampaignList = () => (dispatch) => {
  return apiGetCampaignList.then((response) => {
    if (response.campaigns) {
      dispatch(set_compaign_List(response.campaigns));
    }
  });
};
