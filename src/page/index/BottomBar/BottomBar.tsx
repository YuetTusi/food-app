import "./BottomBar.scss";
import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import actions from "../store/actions";
import { IState, ITabs } from "../store/types";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";
// declare function withRouter(Component: any): any;
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
    // let key = e.target.dataset.tab;
    // console.log(this.props);
    // this.props.changeTabItem(key);
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
          <NavLink to={`/${key}`} replace={true} className={itemCls} key={generateKey()} onClick={this.tabClick}>
            <i className={activeCls} data-tab={key} />
            <div className="btn-name" data-tab={key}>
              {name}
            </div>
          </NavLink>
      );
    });
  }
  render(): any {
    return <div className="bottom-bar">{this.renderTabItem()}</div>;
  }
}

// export default withRouter(BottomBar as any);

export default withRouter(connect(
  (state: IState) => {
    return {
      tabs: state.tabReducer.tabs,
      activeKey: state.tabReducer.activeKey
    };
  },
  actions
)(BottomBar) as any);
