import * as React from "react";
import "./FoodList.scss";
import { connect } from "react-redux";
import { IState, IFoodList } from "../store/types";
import foodListAction from "../store/actions/food-list";
import FoodListItem from "../FoodListItem/FoodListItem";
// import Loading from "../../../component/Loading/Loading";
import { generateKey } from "../../../common/tools";
import { dropdownLoad } from "../../../common/dropdownload";
import ScrollView from "../../../component/ScrollView/ScrollView";

interface IProps extends IFoodList {
  queryFoodListData: any;
}
interface IStates {
  isNoData: boolean; //无数据提示
}

/**
 * @description 外卖列表组件
 */
class FoodList extends React.Component<IProps, IStates> {
  constructor(props: any) {
    super(props);
    this.handleScrollLoad = this.handleScrollLoad.bind(this);
  }
  state = {
    isNoData: false
  };
  componentDidMount(): void {
    this.props.queryFoodListData(this.props.foodData.page_index);
  }
  componentWillUnmount(): void {
    // window.removeEventListener("scroll", this.handleScrollLoad);
  }
  //滚动加载
  handleScrollLoad(e: any) {
    
    if (this.props.foodData.poi_has_next_page) {
      this.props.queryFoodListData(this.props.pageIndex + 1);
      this.setState({ isNoData: false });
    } else {
      this.setState({ isNoData: true });
    }
  }
  renderFoodList(): any {
    if (this.props.foodData.poilist) {
      return this.props.foodData.poilist.map((item: any) => {
        return <FoodListItem {...item} key={generateKey()} />;
      });
    } else {
      return null;
    }
  }
  render(): any {
    return (
      <React.Fragment>
        <div className="food-list">
          <ScrollView
            loadCallback={this.handleScrollLoad}
            isNoData={this.state.isNoData}
          >
            {this.renderFoodList()}
          </ScrollView>
        </div>
      </React.Fragment>
    );
  }
}
export default connect(
  (state: IState) => ({
    foodData: state.foodListReducer.foodData,
    filterData: state.foodListReducer.filterData,
    pageIndex: state.foodListReducer.pageIndex
  }),
  foodListAction
)(FoodList);
