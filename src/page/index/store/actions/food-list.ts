import axios from "axios";
import { QUERY_FOOD_LIST_DATA } from "./action-types/food-list";

let actions = {
  /**
   * @description 查询外卖列表数据
   */
  queryFoodListData: function(): any {
    return function(dispatch: any, getState: any): any {
      axios
        .get("http://localhost:3000/api/list")
        .then((response: any) => {
          let { poilist } = response.data.data;
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: poilist });
        })
        .catch((err: any) => {
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: null });
        });
    };
  }
};

export default actions;
