import { QUERY_FOOD_LIST } from "./action-types/menu";
import axious from "axios";

const action = {
  /**
   * @description 查询点菜左侧菜品列表数据
   */
  queryFoodList(): any {
    const url: string = "http://localhost:3000/api/food";
    return async function(dispatch: any, getState: any) {
      try {
        let {
          data: {
            data: { food_spu_tags }
          }
        } = await axious.get(url);
        dispatch({ type: QUERY_FOOD_LIST, payload: food_spu_tags });
      } catch (error) {
        console.log(error);
        dispatch({ type: QUERY_FOOD_LIST, payload: null });
      }
    };
  }
};

export default action;
