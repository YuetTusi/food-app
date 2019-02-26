import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import { history } from "../store/store";
// import actions from "../store/actions";
import Menu from "../Menu/Menu";
import Evo from "../Evo/Evo";
import Restaurant from "../Restaurant/Restaurant";
import TabBar from "../TabBar/TabBar";
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
            <TabBar />
            <Route path="/menu" component={Menu} />
            <Route path="/evo" component={Evo} />
            <Route path="/restaurant" component={Restaurant} />
          </React.Fragment>
        </Router>
      </ConnectedRouter>
    );
  }
}

// export default Main;
export default connect(
  (state: any) => {
    return state;
  }
  // actions
)(Main);
