import { IActionType, IScore } from "../types";
import { QUERY_SCORING } from "../actions/action-types/score";

let initState: IScore = {
  scoring: {
    commentScore: 0,
    foodScore: 0, //口味评分
    packScore: 0, //包装评分
    deliveryScore: 0 //配送评分
  }
};

function scoreReducer(state: IScore = initState, action: IActionType): IScore {
  let newState: IScore = state;
  switch (action.type) {
    case QUERY_SCORING:
      newState = { ...state, scoring: { ...action.payload } };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
}
export { scoreReducer };
