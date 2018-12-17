import * as React from "react";
import "./FoodListItem.scss";
import { generateKey } from "../../../common/tools";

interface IProps {
  id: string;
  name: string; //外卖名
  pic_url: string;
  mt_delivery_time: string; //配送时间
  distance: string; //配送距离
  month_sale_num: number; //月销售量
  min_price_tip: string; //起送价
  brand_type: number; //品牌类型
  wm_poi_score: number; //打分分值（星星）
  delivery_type: number; //美团专送
  discounts2: Array<any>; //商家活动
}

/**
 * @description 外卖列表的每一项
 */
class FoodListItem extends React.Component<IProps> {
  //品牌标签
  renderBrand(brand: any): any {
    if (brand) {
      return <i className="brand">品牌</i>;
    } else {
      return <i className="brand new">新到</i>;
    }
  }
  //星星打分
  renderStar(score: number): Array<any> {
    let stars = [],
      fullStar = 0,
      halfStar = 0,
      grayStar = 5;
    if (score) {
      let [n, m] = score.toString().split(".");
      fullStar = parseInt(n); //满星的数量
      halfStar = parseInt(m) > 5 ? 1 : 0; //半星的数量
      grayStar = 5 - fullStar - halfStar; //灰星数量
      for (let i = 0; i < fullStar; i++) {
        stars.push(<i className="full-star" key={generateKey()} />);
      }
      for (let j = 0; j < halfStar; j++) {
        stars.push(<i className="full-star" key={generateKey()} />);
      }
      for (let k = 0; k < grayStar; k++) {
        stars.push(<i className="gray-star" key={generateKey()} />);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        stars.push(<i className="gray-star" key={generateKey()} />);
      }
    }
    return stars;
  }
  //美团专送标签
  renderMeituanTag(deliveryType: number): any {
    if (deliveryType) {
      return <div className="tag">美团专送</div>;
    } else {
      return null;
    }
  }
  //商家活动
  renderOthers(discounts2: Array<any>): any {
    let others: Array<any> = [];
    discounts2.forEach(item => {
      others.push(
        <li key={generateKey()}>
          <img src={item.icon_url} />
          <span>{item.info}</span>
        </li>
      );
    });
    return others;
  }
  render(): any {
    return (
      <div className="food-list-item scale-1px-bottom" data-id={this.props.id}>
        <div className="food-img">
          <img src={this.props.pic_url} alt={this.props.name} />
          {this.renderBrand(this.props.brand_type)}
        </div>
        <div className="food-content">
          <div className="title">{this.props.name}</div>
          <div className="row">
            <div className="score">
              <span className="star">
                {this.renderStar(this.props.wm_poi_score)}
              </span>
              <span>
                月售
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
            {this.renderMeituanTag(this.props.delivery_type)}
          </div>
          <div className="row">
            <ul>{this.renderOthers(this.props.discounts2)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodListItem;
