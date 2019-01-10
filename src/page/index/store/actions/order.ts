import { QUERY_ORDER_DATA } from "./action-types/order";
import axios from "axios";

let actions = {
  queryOrderData(pageIndex: number): any {
    let url = `http://localhost:3000/api/orders/${pageIndex}`;
    return function(dispatch: any, action: any): any {
      axios
        .get(url)
        .then((response: any) => {
          let { data } = response.data;
          dispatch({ type: "QUERY_ORDER_DATA", payload: data });
        })
        .catch(() => {
          dispatch({ type: "QUERY_ORDER_DATA", payload: null });
        });
    };
  }
};

export default actions;
