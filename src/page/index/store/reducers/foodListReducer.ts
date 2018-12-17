import { QUERY_FOOD_LIST_DATA } from "../actions/action-types/food-list";
import { IState, IFoodList } from "../types";

let initState: IFoodList = {
  foodData: {}
};

function foodListReducer(state: IFoodList = initState, action: any): IFoodList {
  let newState: IFoodList = { ...state };

  switch (action.type) {
    case QUERY_FOOD_LIST_DATA:
      //若不是第一页，追加列表
      if (action.payload && action.payload.page_index) {
        newState = {
          foodData: {
            ...action.payload,
            poilist: [...state.foodData.poilist, ...action.payload.poilist]
          }
        };
      } else {
        newState = {
          foodData: { ...action.payload }
        };
      }
      break;
  }
  return newState;
}

export { foodListReducer };
