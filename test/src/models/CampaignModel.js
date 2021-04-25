import BaseModel from "./BaseModel";
import { TYPE } from "utils/Types";

export default class CampaignModel extends BaseModel {
  id = null;
  name = "";

  static create(newValues, errors = []) {
    // if newValues is not an object, return empty
    if (typeof newValues !== TYPE.OBJECT) {
      return this.createEmpty();
    }

    return new CampaignModel().inject({
        ...newValues,
    })
  }
}
