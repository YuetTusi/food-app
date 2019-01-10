import * as React from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import Home from "../Home/Home";
import Order from "../Order/Order";
import BottomBar from "../BottomBar/BottomBar";
import "./Main.scss";

class Main extends React.Component<any> {
  render(): any {
    return (
      <div>
        {/* <Home /> */}
        <Order />
        <BottomBar />
      </div>
    );
  }
}
export default connect(
  (state: any) => {
    return state;
  },
  actions
)(Main);
