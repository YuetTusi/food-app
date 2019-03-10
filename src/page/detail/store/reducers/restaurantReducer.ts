import { IActionType, IRestaurant } from "../types";
import { QUERY_RESTAURANT } from "../actions/action-types/restaurant";

let initState: IRestaurant = {
  //电话
  callCenter: "",
  //地址
  address: "",
  //时间
  shippingTime: "",
  //配送服务
  discounts: []
};

function restaurantReducer(
  state: IRestaurant = initState,
  action: IActionType
): IRestaurant {
  let newState = state;
  switch (action.type) {
    case QUERY_RESTAURANT:
      newState = {
        ...state,
        callCenter: action.payload.call_center,
        address: action.payload.address,
        shippingTime: action.payload.shipping_time,
        discounts: [...action.payload.discounts2]
      };
      break;
  }
  return newState;
}

export { restaurantReducer };
