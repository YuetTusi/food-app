import { QUERY_COMMENT_LIST } from "../actions/action-types/commentList";
import { IActionType, ICommentList } from "../types";

let initState: ICommentList = {
  comments: []
};

function commentListReducer(
  state: ICommentList = initState,
  action: IActionType
): ICommentList {
  let newState: ICommentList = state;
  switch (action.type) {
    case QUERY_COMMENT_LIST:
      newState = {
        ...state,
        ...action.payload
      };
      break;
  }
  return newState;
}

export { commentListReducer };
