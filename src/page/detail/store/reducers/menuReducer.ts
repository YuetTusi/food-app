import {
  QUERY_FOOD_LIST,
  CHANGE_CURRENT_FOOD,
  ADD_FOOD_COUNT,
  MINUS_FOOD_COUNT
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
    case ADD_FOOD_COUNT:
      newState = addFoodCount(state, action);
      break;
    case MINUS_FOOD_COUNT:
      newState = minusFoodCount(state, action);
      break;
  }

  return newState;
}

function addFoodCount(state: IMenu, action: any): IMenu {
  let newState: IMenu = { ...state };
  let list = state.foodList[state.currentFoodIndex];
  if (list.spus && list.spus.length > 0) {
    list = list.spus.map((item: any) => {
      if (item.id == action.payload) {
        if (item.chooseCount) {
          item.chooseCount++;
        } else {
          item.chooseCount = 1;
        }
      }
      return item;
    });
    newState.foodList[state.currentFoodIndex].spus = [...list];
  }
  return newState;
}
function minusFoodCount(state: IMenu, action: any): IMenu {
  let newState: IMenu = { ...state };
  let list = state.foodList[state.currentFoodIndex];
  if (list.spus && list.spus.length > 0) {
    list = list.spus.map((item: any) => {
      if (item.id == action.payload) {
        if (item.chooseCount > 0) {
          item.chooseCount--;
        }
      }
      return item;
    });
    newState.foodList[state.currentFoodIndex].spus = [...list];
  }
  return newState;
}

export { menuReducer };
