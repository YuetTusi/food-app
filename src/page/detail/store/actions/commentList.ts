import { QUERY_COMMENT_LIST } from "./action-types/commentList";
import axios from "axios";

let actions = {
  /**
   * @description 查询外卖评价列表数据
   * @param page 页码
   */
  queryCommentList(page: number = 0): Function {
    let url = `http://localhost:3000/api/comments/${page}`;
    return async function(dispatch: Function) {
      try {
        let { data } = await axios.get(url);
        if (data) {
          dispatch({ type: QUERY_COMMENT_LIST, payload: data.data });
        } else {
          dispatch({ type: QUERY_COMMENT_LIST, payload: null });
        }
      } catch (err) {
        dispatch({ type: QUERY_COMMENT_LIST, payload: null });
      }
    };
  }
};

export default actions;
