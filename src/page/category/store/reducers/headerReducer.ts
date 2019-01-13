import { IHeader } from "../types";
import { CHANGE_ACTIVE_CATEGORY } from "../actions/action-types/header";
import config from "../../config";

let buttonList: Array<any> = [
  {
    text: "全部分类",
    key: config.CATEGORY_KEY.categories
  },
  {
    text: "综合排序",
    key: config.CATEGORY_KEY.sort
  },
  {
    text: "筛选",
    key: config.CATEGORY_KEY.filter
  }
];

let initState: IHeader = {
  //条件栏
  buttonList,
  //当前激活分类，当状态为激活，分类菜单是打开状态
  active: config.CATEGORY_KEY.categories
};

function headerReducer(state: IHeader = initState, action: any): IHeader {
  let newState: IHeader = { ...state };

  switch (action.type) {
    case CHANGE_ACTIVE_CATEGORY:
      newState = {
        ...state,
        active: action.payload
      };
      break;
  }

  return newState;
}

export { headerReducer };