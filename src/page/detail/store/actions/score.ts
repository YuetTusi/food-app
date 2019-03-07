import { IActionType } from "../types";
import { QUERY_SCORING } from "./action-types/score";
import axios from "axios";

let actions = {
  /**
   * @description 查询外卖打分
   */
  queryScoring(): Function {
    let url = "http://localhost:3000/api/comments";
    return async function(dispatch: Function) {
      try {
        
        let { data } = await axios.get(url);
        let scoring = {
          commentScore: data.data.comment_score, //商家评分
          foodScore: data.data.food_score, //口味评分
          packScore: data.data.pack_score, //包装评分
          deliveryScore: data.data.delivery_score //配送评分
        };
        dispatch({ type: QUERY_SCORING, payload: scoring });
      } catch (error) {
        dispatch({ type: QUERY_SCORING, payload: null });
      }
    };
  }
};

export default actions;
