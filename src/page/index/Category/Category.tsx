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
    return this.props.items.slice(0, 8).map(
      (item: any): any => {
        return (
          <div className="category-item" key={generateKey()}>
            <img className="category-img" src={item.url} alt={item.name} />
            <div className="category-text">{item.name}</div>
          </div>
        );
      }
    );
  }
  render(): any {
    return <div className="category clearfix">{this.renderCategory()}</div>;
  }
}
export default connect(
  (state: IState) => ({
    items: state.categoryReducer.items
  }),
  categoryAction
)(Category);
