import { GET_TAB_ITEM } from "../actions/action-types/tab";
import config from "../../config";
import { IState, ITabs } from "../types";

let initState: ITabs = {
  tabs: [
    {
      name: "首页",
      key: config.TABKEY.home
    },
    {
      name: "订单",
      key: config.TABKEY.order
    },
    {
      name: "我的",
      key: config.TABKEY.my
    }
  ],
  //当前激活的标签
  activeKey: config.TABKEY.home
};

function tabReducer(state: ITabs = initState, action: any) {
  let newState = { ...state };

  switch (action.type) {
    case GET_TAB_ITEM:
      newState = { ...state };
      break;
  }
  return newState;
}

export { tabReducer };
