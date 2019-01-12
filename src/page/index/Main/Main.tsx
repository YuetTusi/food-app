import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import { history } from "../store/store";
import actions from "../store/actions";
import Home from "../Home/Home";
import Order from "../Order/Order";
import Profile from "../Profile/Profile";
import BottomBar from "../BottomBar/BottomBar";
import "./Main.scss";

/**
 * @description 主页（路由配置）
 */
class Main extends React.Component<any> {
  render(): any {
    return (
      <ConnectedRouter history={history}>
        <Router>
          <React.Fragment>
            <Route path="/home" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/my" component={Profile} />
            <BottomBar />
          </React.Fragment>
        </Router>
      </ConnectedRouter>
    );
  }
}
export default connect(
  (state: any) => {
    return state;
  },
  actions
)(Main);
