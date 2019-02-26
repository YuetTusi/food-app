import { CHANGE_TAB } from "./action-types/tabBar";

const action = {
  /**
   * 切换标签页
   * @param payload 标签页key
   */
  changeTab(payload: string) {
    return { type: CHANGE_TAB, payload };
  }
};

export default action;
