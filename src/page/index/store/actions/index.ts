import { GET_TAB_ITEM, CHANGE_TAB_ITEM } from "./action-types/tab";

let actions = {
  /**
   * @description 获取标签页数据（首页、订单、我的）
   * @param payload 暂不使用
   */
  getTabItem: function(payload: any): any {
    return { type: GET_TAB_ITEM, payload };
  },
  /**
   * @description 切换标签，更新状态
   * @param payload 标签页Key
   */
  changeTabItem: function(payload: string): any {
    return { type: CHANGE_TAB_ITEM, payload };
  }
};

export default actions;
