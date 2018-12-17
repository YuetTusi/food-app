import { QUERY_FOOD_LIST_DATA } from "../actions/action-types/food-list";
import { IState, IFoodList } from "../types";

let initState: IFoodList = {
  foodList: []
};

function foodListReducer(state: IFoodList = initState, action: any): IFoodList {
  let newState = { ...state };

  switch (action.type) {
    case QUERY_FOOD_LIST_DATA:
      newState = {
        ...state,
        foodList: [...action.payload]
      };
      break;
  }
  return newState;
}

export { foodListReducer };
