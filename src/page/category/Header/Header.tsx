import * as React from "react";
import actions from "../store/actions/header";
import { connect } from "react-redux";
import { IState, IHeader } from "../store/types";
import { generateKey } from "../../../common/tools";
import config from "../config";
import "./Header.scss";

interface IProps extends IHeader {
  //切换分类
  changeActiveCategory: any;
  //查询分类数据
  queryCategoryFilter: any;
}

class Header extends React.Component<IProps> {
  componentWillMount() {
    this.fetchCategoryData();
  }
  //切换分类
  categoryButtonClick = (type: string): void => {
    if (this.props.active === type) {
      this.props.changeActiveCategory("");
    } else {
      this.props.changeActiveCategory(type);
    }
  };
  //查询分类数据
  fetchCategoryData(): any {
    this.props.queryCategoryFilter();
  }
  renderInnerFilter(subData: Array<any>): any {
    if (subData && subData.length > 0) {
      let li = subData.map(item => {
        let cls = item.active ? "inner-li active" : "inner-li";
        return (
          <li key={generateKey()} className={cls}>
            {item.icon ? <img src={item.icon} /> : ""}
            <span>{item.name}</span>
          </li>
        );
      });
      return <ul className="inner-ul">{li}</ul>;
    } else {
      return [];
    }
  }
  //渲染分类内层类目
  renderInnerCategory(subData: Array<any>): any {
    if (subData && subData.length > 0) {
      let li = subData.map(item => {
        let cls = item.active ? "inner-li active" : "inner-li";
        return (
          <li key={generateKey()} className={cls}>
            {item.icon ? <img src={item.icon} /> : ""}
            <span>
              {item.name} ({item.quantity})
            </span>
          </li>
        );
      });
      return <ul className="inner-ul">{li}</ul>;
    } else {
      return [];
    }
  }
  //全部分类
  renderCategoryFilter(data: Array<any>): any {
    return data.map(item => {
      return (
        <ul className="outer-ul" key={generateKey()}>
          <li className="outer-li">
            <span>{item.name}</span>
            <em>{item.quantity}</em>
          </li>
          <li>{this.renderInnerCategory(item.sub_category_list)}</li>
        </ul>
      );
    });
  }
  //综合排序
  renderSortType(data: Array<any>): any {
    let li = data.map(item => {
      let cls = item.active ? "sort-li active" : "sort-li";
      return (
        <li className={cls} key={generateKey()}>
          {item.name}
        </li>
      );
    });
    return <ul className="sort-ul">{li}</ul>;
  }
  //筛选
  renderActivityFilter(data: Array<any>): any {
    return data.map(item => {
      return (
        <ul className="outer-ul" key={generateKey()}>
          <li className="outer-li">
            <span>{item.group_title}</span>
          </li>
          <li>{this.renderInnerFilter(item.items)}</li>
        </ul>
      );
    });
  }
  //根据key值来渲染面板内容
  renderPanelContent(categoryKey: string): any {
    switch (categoryKey) {
      case config.CATEGORY_KEY.categories:
        return this.renderCategoryFilter(this.props.categoryFilterList); //全部分类
      case config.CATEGORY_KEY.sort:
        return this.renderSortType(this.props.sortTypeList); //综合排序
      case config.CATEGORY_KEY.filter:
        return this.renderActivityFilter(this.props.activityFilterList); //筛选
      default:
        return "暂无数据";
    }
  }
  //渲染3个分类面板
  renderCategoryPanel(buttonList: Array<any>): any {
    return buttonList.map(item => {
      let cls = `panel ${item.key} ${
        item.key === this.props.active ? "show" : ""
      }`;
      return (
        <div className={cls} key={generateKey()}>
          {this.renderPanelContent(item.key)}
        </div>
      );
    });
  }
  //渲染分类条件按钮栏
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
    return (
      <React.Fragment>
        <div className="category-button">{this.renderCategoryButtonList()}</div>
        <div className="panel-root">
          {this.renderCategoryPanel(this.props.buttonList)}
        </div>
      </React.Fragment>
    );
  }
}
export default connect(
  (state: IState) => {
    return {
      buttonList: state.headerReducer.buttonList,
      active: state.headerReducer.active,
      //全部分类
      categoryFilterList: state.headerReducer.categoryFilterList,
      //综合排序
      sortTypeList: state.headerReducer.sortTypeList,
      //筛选
      activityFilterList: state.headerReducer.activityFilterList
    };
  },
  actions
)(Header);
