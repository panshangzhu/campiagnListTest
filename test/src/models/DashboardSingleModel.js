import BaseModel from "./BaseModel";
import { TYPE } from "utils/Types";

export default class DashboardSingleModel extends BaseModel {
  impressions = 0;
  clicks = 0;
  users = 0;
  singleCtr = 0;

  static create(newValues, errors = []) {
    // if newValues is not an object, return empty
    if (typeof newValues !== TYPE.OBJECT) {
      return this.createEmpty();
    }

    return new DashboardSingleModel().inject({
        ...newValues,
        singleCtr: (newValues.clicks / newValues.impressions * 100).toFixed(2) // keep 2 decimals
    })
  }
}