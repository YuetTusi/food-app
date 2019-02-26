import * as React from "react";
import { NavLink } from "react-router-dom";
import tabBarAction from "../store/actions/tabBar";
import IState, { ITabBar } from "../store/types";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";
import "./TabBar.scss";
import NavHeader from "../../../component/NavHeader/NavHeader";
import { ITabs } from "../../index/store/types";

interface IProps extends ITabBar {
  changeTab: any;
}

class TabBar extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  renderTab(): any {
    return this.props.tabs.map((item: any) => {
      return (
        <NavLink
          to={"/" + item.key}
          replace={true}
          key={generateKey()}
          activeClassName="active"
        >
          {item.name}
        </NavLink>
      );
    });
  }
  render(): any {
    return (
      <div className="tab-bar">
        <NavHeader title="菜品名称" />
        <div className="content-panel">{this.renderTab()}</div>
      </div>
    );
  }
}
export default connect(
  (state: IState): ITabs => {
    return {
      tabs: state.tabBarReducer.tabs,
      activeKey: state.tabBarReducer.activeKey
    };
  },
  tabBarAction
)(TabBar);
