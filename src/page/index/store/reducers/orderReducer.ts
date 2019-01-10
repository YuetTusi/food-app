import { QUERY_ORDER_DATA } from "../actions/action-types/order";
import { IOrder } from "../types/index";

let initState: IOrder = {
  orderList: [],
  //当前页
  pageIndex: 0,
  //是否还有下一页
  hasNextPage: true
};

/**
 * @description 订单Reducer
 * @param state 订单state
 * @param action
 */
function orderReducer(state: IOrder = initState, action: any): IOrder {
  let newState: IOrder = { ...state };

  switch (action.type) {
    case QUERY_ORDER_DATA:
      // console.log(action.payload);
      if (action.payload.page_index === 0) {
        newState = {
          ...state,
          pageIndex: action.payload.page_index,
          hasNextPage: action.payload.poi_has_next_page,
          orderList: [...action.payload.digestlist]
        };
      } else {
        //除第1页追加数据
        // console.log(
        //   state.orderList.length + "" + action.payload.digestlist.length
        // );
        newState = {
          ...state,
          pageIndex: action.payload.page_index,
          hasNextPage: action.payload.poi_has_next_page,
          orderList: [...state.orderList, ...action.payload.digestlist]
        };
      }
      break;
    default:
      newState = { ...state };
      break;
  }

  return newState;
}

export { orderReducer };
