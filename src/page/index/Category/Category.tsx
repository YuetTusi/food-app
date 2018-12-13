import * as React from "react";
import { connect } from "react-redux";
import categoryAction from "../store/actions/category";
import { IState, ICategory } from "../store/types";
import "./Category.scss";
import { any } from "prop-types";
import { generateKey } from "../../../common/tools";

interface IProps extends ICategory {
  queryCategoryData: any;
}

class Category extends React.Component<IProps> {
  componentDidMount(): void {
    //查询外卖分类
    this.props.queryCategoryData();
  }
  renderCategory(): any {
    return this.props.items.map(
      (item: any): any => {
        return <div key={generateKey()}>{item.name}</div>;
      }
    );
  }
  render(): any {
    return <div className="category">{this.renderCategory()}</div>;
  }
}
export default connect(
  (state: IState) => ({
    items: state.categoryReducer.items
  }),
  categoryAction
)(Category);
