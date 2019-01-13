import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
declare let module: any;
declare function require(p: any): any;

function hotRender(): void {
  let NewComponent = require("./Main/Main").default;
  ReactDOM.render(
    <Provider store={store}>
      <NewComponent />
    </Provider>,
    document.getElementById("root")
  );
}

hotRender();
if (module.hot) {
  module.hot.accept(
    "./Main/Main",
    (components: Array<any>): void => {
      hotRender();
    }
  );
}
