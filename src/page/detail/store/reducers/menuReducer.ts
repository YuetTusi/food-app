import {
  QUERY_FOOD_LIST,
  CHANGE_CURRENT_FOOD
} from "../actions/action-types/menu";
import { IMenu } from "../types";

let initState: IMenu = {
  foodList: [],
  currentFoodIndex: 0
};

function menuReducer(state: IMenu = initState, action: any): IMenu {
  let newState: IMenu = { ...state };

  switch (action.type) {
    case QUERY_FOOD_LIST:
      newState = { ...state, foodList: [...action.payload] };
      break;
    case CHANGE_CURRENT_FOOD:
      newState = { ...state, currentFoodIndex: action.payload };
      break;
  }

  return newState;
}

export { menuReducer };
