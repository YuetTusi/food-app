import "./BottomBar.scss";
import * as React from "react";
import { IState, ITabs } from "../store/types";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";

/**
 * @description 首页底部的标签Tab页
 */
class BottomBar extends React.Component<ITabs> {
  constructor(props: any) {
    super(props);
  }
  renderTabItem(): any {
    let tabs = this.props.tabs;
    return tabs.map((item: any) => {
      let { name, key } = item;
      let itemCls = `btn-item ${key}`; //Tab的键值区分每个Tab样式
      let activeCls = `tab-icon${this.props.activeKey === key ? " active" : ""}`;
      return (
        <div className={itemCls} key={generateKey()}>
          <i className={activeCls} />
          <div className="btn-name">{name}</div>
        </div>
      );
    });
  }
  render(): any {
    return <div className="bottom-bar">{this.renderTabItem()}</div>;
  }
}
export default connect((state: IState) => {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey
  };
})(BottomBar);
