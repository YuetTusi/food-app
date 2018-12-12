import { GET_TAB_ITEM } from "./action-types/tab";

let actions = {
  getTabItem: function(payload: any): any {
    return { type: GET_TAB_ITEM, payload };
  }
};

export default actions;
