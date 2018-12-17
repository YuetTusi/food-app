import axios from "axios";
import { QUERY_FOOD_LIST_DATA } from "./action-types/food-list";

let actions = {
  /**
   * @description 查询外卖列表数据
   * @param {Number} page 页码（从0开始）
   */
  queryFoodListData: function(page: number = 0): any {
    let url = `http://localhost:3000/api/list/${page}`;
    return function(dispatch: any, getState: any): any {
      axios
        .get(url)
        .then((response: any) => {
          let { data } = response.data;
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: data });
        })
        .catch((err: any) => {
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: null });
        });
    };
  }
};

export default actions;
