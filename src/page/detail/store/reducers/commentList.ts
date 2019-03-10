import { QUERY_COMMENT_LIST } from "../actions/action-types/commentList";
import { IActionType, ICommentList } from "../types";

let initState: ICommentList = {
  comments: [],
  pageIndex: 0,
  hasNextPage: true
};

function commentListReducer(
  state: ICommentList = initState,
  action: IActionType
): ICommentList {
  let newState: ICommentList = state;
  switch (action.type) {
    case QUERY_COMMENT_LIST:
      newState = mergeState(state, action);
      break;
  }
  return newState;
}

function mergeState(state: ICommentList, action: IActionType): ICommentList {
  let newState: ICommentList = state;
  if (action.payload.page_index == 0) {
    newState = {
      ...state,
      comments: [...action.payload.comments],
      hasNextPage: action.payload.poi_has_next_page,
      pageIndex: action.payload.page_index
    };
  } else {
    newState = {
      ...state,
      comments: [...state.comments, ...action.payload.comments],
      hasNextPage: action.payload.poi_has_next_page,
      pageIndex: action.payload.page_index
    };
  }
  return newState;
}

export { commentListReducer };
