import { QUERY_ORDER_DATA } from "../actions/action-types/order";
import { IOrder } from "../types/index";

let initState: IOrder = {
  orderList: []
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
      newState = {
        ...state,
        orderList: [...action.payload.digestlist]
      };
      break;
    default:
      newState = { ...state };
      break;
  }

  return newState;
}

export { orderReducer };
