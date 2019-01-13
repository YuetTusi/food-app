import axios from "axios";
import {
  QUERY_CATEGORY_FILTER,
  CHANGE_ACTIVE_CATEGORY
} from "./action-types/header";

let actions = {
  /**
   * @description 查询分类过滤数据
   */
  queryCategoryFilter() {
    return async function(dispatch: any) {
      let action: any = { type: QUERY_CATEGORY_FILTER };
      try {
        let res: any = await axios.get("http://localhost:3000/api/filter");
        if (res.code === 0) {
          action.payload = {
            category_filter_list: res.data.category_filter_list,
            sort_type_list: res.data.sort_type_list,
            activity_filter_list: res.data.activity_filter_list
          };
        } else {
          action.payload = null;
        }
      } catch (error) {
        action.payload = null;
      }
      dispatch(action);
    };
  },
  /**
   * @description 切换活动分类
   * @param payload 分类key
   */
  changeActiveCategory(payload: any): any {
    return { type: CHANGE_ACTIVE_CATEGORY, payload };
  }
};

export default actions;
