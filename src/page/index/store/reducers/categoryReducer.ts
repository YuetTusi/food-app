import { QUERY_CATEGORY_DATA } from "../actions/action-types/category";
import { IState, ICategory } from "../types";

let initState: ICategory = {
  items: []
};

function categoryReducer(state = initState, action: any): ICategory {
  let newState = { ...state };

  switch (action.type) {
    case QUERY_CATEGORY_DATA:
      newState = {
        ...state,
        items: [...action.payload]
      };
      break;
  }
  return newState;
}

export { categoryReducer };
