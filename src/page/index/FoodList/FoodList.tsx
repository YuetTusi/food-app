import * as React from "react";
import "./FoodList.scss";
import { connect } from "react-redux";
import { IState, IFoodList } from "../store/types";
import foodListAction from "../store/actions/food-list";
import FoodListItem from "../FoodListItem/FoodListItem";
import { generateKey } from "../../../common/tools";

interface IProps extends IFoodList {
  queryFoodListData: any;
}

/**
 * @description 外卖列表组件
 */
class FoodList extends React.Component<IProps> {
  componentDidMount(): void {
    this.props.queryFoodListData();
  }
  renderFoodList(): any {
    return this.props.foodList.map(item => {
      return <FoodListItem {...item} key={generateKey()} />;
    });
  }
  render(): any {
    return (
      <div className="food-list">
        <h4>- 附近商家 -</h4>
        <div>{this.renderFoodList()}</div>
      </div>
    );
  }
}
export default connect(
  (state: IState) => ({
    foodList: state.foodListReducer.foodList
  }),
  foodListAction
)(FoodList);
