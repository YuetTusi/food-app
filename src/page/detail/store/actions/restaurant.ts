import axios from "axios";
import { QUERY_RESTAURANT } from "./action-types/restaurant";

let actions = {
  /**
   * @description 查询商家店面信息
   */
  queryRestaurant(): Function {
    const url = "http://localhost:3000/api/restaurant";
    return async function(dispatch: Function) {
      try {
        let { data } = await axios(url);
        dispatch({ type: QUERY_RESTAURANT, payload: data.data });
      } catch (error) {
        dispatch({ type: QUERY_RESTAURANT, payload: null });
      }
    };
  }
};

export default actions;
