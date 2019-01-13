import * as React from "react";
import actions from "../store/actions/header";
import { connect } from "react-redux";
import { IState, IHeader } from "../store/types";
import { generateKey } from "../../../common/tools";
import "./Header.scss";

interface IProps extends IHeader {
  //切换分类
  changeActiveCategory: any;
}

class Header extends React.Component<IProps> {
  //切换分类
  categoryButtonClick = (type: string): void => {
    this.props.changeActiveCategory(type);
  };
  //查询分类数据
  fetchCategoryData(type: string): any {
    console.log(type);
  }
  renderCategoryButtonList = (): any => {
    let { buttonList } = this.props;
    return buttonList.map(item => {
      let activeCls = this.props.active === item.key ? "active" : "";
      return (
        <div
          className={`button ${item.key} ${activeCls}`}
          key={generateKey()}
          onClick={() => {
            this.categoryButtonClick(item.key);
          }}
        >
          {item.text}
        </div>
      );
    });
  };
  render(): any {
    this.renderCategoryButtonList();
    return (
      <div className="category-button">{this.renderCategoryButtonList()}</div>
    );
  }
}
export default connect(
  (state: IState) => {
    return {
      buttonList: state.headerReducer.buttonList,
      active: state.headerReducer.active
    };
  },
  actions
)(Header);
