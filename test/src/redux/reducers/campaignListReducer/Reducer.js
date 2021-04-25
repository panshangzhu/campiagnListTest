import update from "immutability-helper"
import CampaignModel from 'models/CampaignModel'
import {SET_CAMPAIGN_LIST} from "./ActionTypes"

const initialState = {
    count: 0,
    campaignList: null,
}

export const reducer = (state = initialState, action) => {
    const actionType = action.type;
    switch(actionType) {
    case SET_CAMPAIGN_LIST:
        return update(state, {
            campaignList: {$set: action.campaignList.map(campaign => CampaignModel.create(campaign))}
        })
    default:
        return state;
    }
}