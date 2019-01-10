import { QUERY_CATEGORY_DATA } from "./action-types/category";
import axios from "axios";

//外卖分类Action
let actions = {
  queryCategoryData: function(): any {
    return function(dispatch: any, getState: any): void {
      axios.get("http://localhost:3000/api/head").then((response: any) => {
        let {
          data: {
            data: { primary_filter }
          }
        } = response;
        dispatch({ type: QUERY_CATEGORY_DATA, payload: primary_filter });
      });
    };
  }
};

export default actions;
