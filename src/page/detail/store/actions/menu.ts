import {
  QUERY_FOOD_LIST,
  CHANGE_CURRENT_FOOD,
  ADD_FOOD_COUNT,
  MINUS_FOOD_COUNT,
  RESET_FOOD_COUNT
} from "./action-types/menu";
import { IActionType } from "../types";
import axious from "axios";

const action = {
  /**
   * @description 查询点菜左侧菜品列表数据
   */
  queryFoodList(): Function {
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
  changeCurrentFood(index: number): IActionType {
    return { type: CHANGE_CURRENT_FOOD, payload: index };
  },
  /**
   * @description 增加菜品数量
   * @param id 菜品id
   */
  addFoodCount(id: string): IActionType {
    return { type: ADD_FOOD_COUNT, payload: id };
  },
  /**
   * @description 减少菜品数量
   * @param id 菜品id
   */
  minusFoodCount(id: string): IActionType {
    return { type: MINUS_FOOD_COUNT, payload: id };
  },
  /**
   * @description 重置所有菜品数量（购物车清零）
   */
  resetFoodCount(): IActionType {
    return { type: RESET_FOOD_COUNT, payload: null };
  }
};

export default action;
