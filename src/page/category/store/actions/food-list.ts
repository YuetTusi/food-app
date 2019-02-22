import axios from "axios";
import {
  QUERY_FOOD_LIST_DATA,
  QUERY_FILTER_LIST_DATA
} from "./action-types/food-list";

let actions = {
  /**
   * @description 查询外卖列表数据
   * @param {Number} page 页码（从0开始）
   */
  queryFoodListData(page: number = 0): any {
    let listUrl = `http://localhost:3000/api/list/${page}`;
    let filterUrl = `http://localhost:3000/api/listparams/${page}`;
    return async function(dispatch: any, getState: any) {
      // console.log(getState());
      if (getState().headerReducer.filterData) {
        try {
          let { data } = await axios.get(filterUrl);
          dispatch({ type: QUERY_FILTER_LIST_DATA, payload: data });
        } catch (error) {
          dispatch({ type: QUERY_FILTER_LIST_DATA, payload: null });
        }
      } else {
        try {
          let { data } = await axios.get(listUrl);
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: data });
        } catch (error) {
          dispatch({ type: QUERY_FOOD_LIST_DATA, payload: null });
        }
      }
    };
  }
  // queryFilterListData(page: number = 0, filterData: any): any {
  //   const url = `http://localhost:3000/api/listparams/${page}`;
  //   return async function(dispatch: any, getState: any) {
  //     try {
  //       let { data } = await axios.get(url);
  //       dispatch({ type: QUERY_FILTER_LIST_DATA, payload: data });
  //     } catch (error) {
  //       dispatch({ type: QUERY_FILTER_LIST_DATA, payload: null });
  //     }
  //   };
  // }
};

export default actions;
