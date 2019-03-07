import {
  QUERY_SHIPPING_FEE,
  TOGGLE_CART_LIST
} from "../actions/action-types/shopBar";
import { IShopBar, IActionType } from "../types";

let initState: IShopBar = {
  foodList: [],
  shippingFee: 0,
  showCartList: false
};

/**
 * @description 购物车逻辑
 */
function shopBarReducer(
  state: IShopBar = initState,
  action: IActionType
): IShopBar {
  let newState: IShopBar = { ...state };
  switch (action.type) {
    case QUERY_SHIPPING_FEE:
      newState = { ...state, shippingFee: action.payload };
      break;
    case TOGGLE_CART_LIST:
      newState = { ...state, showCartList: action.payload };
      break;

  }
  return newState;
}

// function addCartItemCount(state: IShopBar, id: string): IShopBar {
//   debugger;
//   let foodList = state.foodList || [];
//   for (var i = 0; i < foodList.length; i++) {
//     let spus = foodList[i].spus || [];
//     spus = spus.map((item: any) => {
//       if (item.id === id) {
//         item.chooseCount++;
//       }
//     });
//   }

//   return { ...state, foodList };
// }
// function reduceCartItemCount(state: IShopBar, id: string): IShopBar {
//   let foodList = state.foodList || [];
//   for (var i = 0; i < foodList.length; i++) {
//     let spus = foodList[i].spus || [];
//     spus = spus.map((item: any) => {
//       if (item.id === id) {
//         item.chooseCount--;
//       }
//     });
//   }
//   return { ...state, foodList };
// }

export { shopBarReducer };
