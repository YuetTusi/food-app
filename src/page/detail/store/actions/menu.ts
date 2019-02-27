import {
  QUERY_FOOD_LIST,
  CHANGE_CURRENT_FOOD,
  ADD_FOOD_COUNT,
  MINUS_FOOD_COUNT
} from "./action-types/menu";
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
        dispatch({ type: QUERY_FOOD_LIST, payload: null });
      }
    };
  },
  /**
   * @description 切换当前显示的菜品
   * @param index 菜品索引
   */
  changeCurrentFood(index: number) {
    return { type: CHANGE_CURRENT_FOOD, payload: index };
  },
  /**
   * @description 增加菜品数量
   * @param id 菜品id
   */
  addFoodCount(id: string) {
    return { type: ADD_FOOD_COUNT, payload: id };
  },
  /**
   * @description 减少菜品数量
   * @param id 菜品id
   */
  minusFoodCount(id: string) {
    return { type: MINUS_FOOD_COUNT, payload: id };
  }
};

export default action;
