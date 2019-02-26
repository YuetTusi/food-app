import { QUERY_FOOD_LIST } from "../actions/action-types/menu";
import { IMenu } from "../types";

let initState: IMenu = {
  foodList: []
};

function menuReducer(state: IMenu = initState, action: any): IMenu {
  let newState: IMenu = { ...state };

  switch (action.type) {
    case QUERY_FOOD_LIST:
      newState = { ...state, foodList: [...action.payload] };
      break;
  }

  return newState;
}

export { menuReducer };
