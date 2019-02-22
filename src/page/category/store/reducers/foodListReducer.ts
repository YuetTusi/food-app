import {
  QUERY_FOOD_LIST_DATA,
  QUERY_FILTER_LIST_DATA
} from "../actions/action-types/food-list";
import { IState, IFoodList } from "../types";

let initState: IFoodList = {
  foodData: {},
  filterData: null,
  pageIndex: 0
};

function foodListReducer(state: IFoodList = initState, action: any): IFoodList {
  let newState: IFoodList = { ...state };

  switch (action.type) {
    case QUERY_FOOD_LIST_DATA:
      //若不是第一页，追加列表
      // console.log(action.payload.page_index);
      if (action.payload && action.payload.data.page_index > 0) {
        newState = {
          foodData: {
            ...action.payload.data,
            poilist: [...state.foodData.poilist, ...action.payload.data.poilist]
          },
          filterData: null,
          pageIndex: Number(action.payload.data.page_index)
        };
      } else {
        newState = {
          foodData: {
            ...action.payload.data,
            poilist: [...action.payload.data.poilist]
          },
          filterData: null,
          pageIndex: action.payload.data.page_index
        };
      }
      break;
    case QUERY_FILTER_LIST_DATA:
      //若不是第一页，追加列表
      if (action.payload && action.payload.data.page_index > 0) {
        newState = {
          ...state,
          foodData: {
            ...action.payload,
            poilist: [...state.foodData.poilist, ...action.payload.data.poilist]
          },
          pageIndex: Number(action.payload.data.page_index)
        };
      } else {
        newState = {
          ...state,
          foodData: {
            ...action.payload.data,
            poilist: [...action.payload.data.poilist]
          },
          pageIndex: action.payload.data.page_index
        };
      }
      break;
  }
  return newState;
}

export { foodListReducer };
