import BaseModel from "./BaseModel";
import { TYPE } from "utils/Types";
import DashboardSingleModel from "./DashboardSingleModel";

export default class DashboardTotalModel extends BaseModel {
    totalImpressions = 0;
    totalClicks = 0;
    totalUsers = 0;
    ctr=0;
    recentSingle = DashboardSingleModel.createEmpty();
  
    static create(newValues, errors = []) {
      // if newValues is not an object, return empty
      if (typeof newValues !== TYPE.OBJECT) {
        return this.createEmpty();
      }
  
      return new DashboardListModel().inject({
          ...newValues,
      })
    }

    injectRecentSingle(single) {
        this.recentSingle = single;
        this.totalImpressions += single.impressions;
        this.totalClicks += single.clicks;
        this.totalUsers += single.users;
        // keep 2 decimals
        this.ctr = ((this.totalClicks / this.totalImpressions) * 100).toFixed(2);
        return this;

    }
  }