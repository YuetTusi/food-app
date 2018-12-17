import * as React from "react";
import "./FoodListItem.scss";

interface IProps {
  id: string;
  name: string; //外卖名
  pic_url: string;
  mt_delivery_time: string; //配送时间
  distance: string; //配送距离
  month_sale_num: number; //月销售量
  min_price_tip: string; //起送价
}

/**
 * @description 外卖列表的每一项
 */
class FoodListItem extends React.Component<IProps> {
  render(): any {
    return (
      <div className="food-list-item scale-1px-bottom" data-id={this.props.id}>
        <div className="food-img">
          <img src={this.props.pic_url} alt={this.props.name} />
          <i className="brand">品牌</i>
        </div>
        <div className="food-content">
          <div className="title">{this.props.name}</div>
          <div className="row">
            <div className="score">
              <span>5星</span>
              <span>
                月售{" "}
                {this.props.month_sale_num > 999
                  ? "999+"
                  : this.props.month_sale_num}
              </span>
            </div>
            <div className="sale-and-time">
              <span>{this.props.mt_delivery_time}</span>
              <span className="split">|</span>
              <span>{this.props.distance}</span>
            </div>
          </div>
          <div className="row">
            <div className="price-tip">{this.props.min_price_tip}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodListItem;
