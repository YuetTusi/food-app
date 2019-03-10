import * as React from "react";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";
import restaurantAction from "../store/actions/restaurant";
import IState, { IRestaurant } from "../store/types";
import "./Restaurant.scss";

interface IProps extends IRestaurant {
  //查询商家数据
  queryRestaurant: Function;
}

class Restaurant extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.queryRestaurant();
  }
  renderDiscount(): any {
    let $li = null;
    let { discounts } = this.props;
    if (discounts && discounts.length > 0) {
      $li = discounts.map((item: any) => {
        return (
          <li key={generateKey()}>
            {item.icon_url ? <img src={item.icon_url} /> : <span />}
            <div>
              <span>{item.info}</span>
            </div>
          </li>
        );
      });
      return <ul>{$li}</ul>;
    } else {
      return <ul />;
    }
  }
  render(): any {
    return (
      <div className="restaurant">
        <div className="section">
          <ul>
            <li>
              <i className="tel" />
              <div>
                <label />
                <span>{this.props.callCenter}</span>
              </div>
            </li>
            <li>
              <i className="address" />
              <div>
                <label>商家地址：</label>
                <span>{this.props.address}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">
          <ul>
            <li>
              <i className="time" />
              <div>
                <label>配送时间：</label>
                <span>{this.props.shippingTime}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="section">{this.renderDiscount()}</div>
      </div>
    );
  }
}
export default connect(
  (state: IState): IRestaurant => {
    return {
      callCenter: state.restaurantReducer.callCenter,
      address: state.restaurantReducer.address,
      shippingTime: state.restaurantReducer.shippingTime,
      discounts: state.restaurantReducer.discounts
    };
  },
  restaurantAction
)(Restaurant);
