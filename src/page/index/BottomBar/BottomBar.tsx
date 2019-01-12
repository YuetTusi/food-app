import "./BottomBar.scss";
import * as React from "react";
import { NavLink } from "react-router-dom";
import actions from "../store/actions";
import { IState, ITabs } from "../store/types";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";

/**
 * @description 组件属性规范
 */
interface IProps extends ITabs {
  //Action动作：
  changeTabItem: any;
}

/**
 * @description 首页底部的标签Tab页
 */
class BottomBar extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  tabClick = (e: any) => {
    let key = e.target.dataset.tab;
    this.props.changeTabItem(key);
  };
  renderTabItem(): any {
    let tabs = this.props.tabs;
    return tabs.map((item: any) => {
      let { name, key } = item;
      let itemCls = `btn-item ${key}`; //Tab的键值区分每个Tab样式
      let activeCls = `tab-icon${
        this.props.activeKey === key ? " active" : ""
      }`;
      return (
        <div className={itemCls} key={generateKey()} onClick={this.tabClick}>
          <NavLink to={`/${key}`}>
            <i className={activeCls} data-tab={key} />
            <div className="btn-name" data-tab={key}>
              {name}
            </div>
          </NavLink>
        </div>
      );
    });
  }
  render(): any {
    return <div className="bottom-bar">{this.renderTabItem()}</div>;
  }
}
export default connect(
  (state: IState) => {
    return {
      tabs: state.tabReducer.tabs,
      activeKey: state.tabReducer.activeKey
    };
  },
  actions
)(BottomBar);
