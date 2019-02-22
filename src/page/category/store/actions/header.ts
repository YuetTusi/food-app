import axios from "axios";
import {
  QUERY_CATEGORY_FILTER,
  CHANGE_ACTIVE_CATEGORY,
  CHANGE_FILTER
} from "./action-types/header";

let actions = {
  /**
   * @description 查询分类过滤数据
   */
  queryCategoryFilter() {
    return async function(dispatch: any) {
      let action: any = { type: QUERY_CATEGORY_FILTER };
      try {
        let { data } = await axios.get("http://localhost:3000/api/filter");
        if (data.code === 0) {
          action.payload = {
            category_filter_list: data.data.category_filter_list || [],
            sort_type_list: data.data.sort_type_list || [],
            activity_filter_list: data.data.activity_filter_list || []
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
  },
  /**
   * @description 切换过滤条件
   * @param payload  用户点击的条件对象
   */
  changeFilter(payload: any): any {
    return { type: CHANGE_FILTER, payload };
  }
};

export default actions;
