import { CHANGE_TAB } from "../actions/action-types/tabBar";
import IState, { ITabBar } from "../types";
import config from "../../config";

let initState: ITabBar = {
  tabs: [
    {
      name: "点菜",
      key: config.TABKEY.menu
    },
    {
      name: "评价",
      key: config.TABKEY.evo
    },
    {
      name: "商家",
      key: config.TABKEY.restaurant
    }
  ],
  activeKey: config.TABKEY.menu
};

function tabBarReducer(state: ITabBar = initState, action: any): ITabBar {
  let newState: ITabBar = { ...state };

  switch (action.type) {
    case CHANGE_TAB:
      newState = { ...state, activeKey: action.payload };
      break;
  }

  return newState;
}

export { tabBarReducer };
