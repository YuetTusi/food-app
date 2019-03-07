import axios from "axios";
import { IActionType } from "../types";
import {
  QUERY_SHIPPING_FEE,
  TOGGLE_CART_LIST,
  ADD_CART_ITEM_COUNT,
  REDUCE_ITEM_COUNT
} from "./action-types/shopBar";

let actions = {
  /**
   * @description 查询额外配送费
   */
  queryShippingFee(): any {
    const url: string = "http://localhost:3000/api/food";

    return async function(dispatch: any, getState: any) {
      try {
        let res = await axios.get(url);
        let {
          data: {
            data: {
              poi_info: { shipping_fee }
            }
          }
        }: any = res;
        dispatch({ type: QUERY_SHIPPING_FEE, payload: shipping_fee });
      } catch (error) {
        dispatch({ type: QUERY_SHIPPING_FEE, payload: 0 });
      }
    };
  },
  /**
   * @description 切换显示购物车列表
   * @param payload ture为显示
   */
  toggleCartList(payload: boolean): IActionType {
    return { type: TOGGLE_CART_LIST, payload };
  },
  // /**
  //  * @description 增加购物车中的菜品数量
  //  * @param payload 菜品id
  //  */
  // addCartItemCount(payload: string): IActionType {
  //   return { type: ADD_CART_ITEM_COUNT, payload };
  // },
  // /**
  //  * @description 减少购物车中的菜品数量
  //  * @param payload 菜品id
  //  */
  // reduceCartItemCount(payload: string): IActionType {
  //   return { type: REDUCE_ITEM_COUNT, payload };
  // }
};

export default actions;
