import * as React from "react";
import "./Order.scss";
import { connect } from "react-redux";
import { IState, IOrder } from "../store/types";
import orderAction from "../store/actions/order";
import { generateKey } from "../../../common/tools";

interface IProps extends IOrder {
  queryOrderData: any;
}

/**
 * @description 订单列表页
 */
class Order extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentWillMount(): void {
    this.props.queryOrderData();
  }
  //渲染订单中的菜品列表
  renderProductList(data: Array<any>): any {
    if (data && data.length > 0) {
      return data.map(item => {
        return (
          <li key={generateKey()}>
            <div>{item.product_name}</div>
            <div>×{item.product_count}</div>
          </li>
        );
      });
    }
  }
  //渲染评论按钮，只没有评论时才显示
  renderComment(isComment: number): any {
    if (isComment === 0) {
      return (
        <div className="comment">
          <div className="comment-button">评价</div>
        </div>
      );
    }
  }
  renderOrderList(): any {
    if (this.props.orderList) {
      return this.props.orderList.map(item => {
        return (
          <div className="order-item" key={generateKey()}>
            <div className="order-row">
              <div className="order-left">
                <img src={item.poi_pic} />
              </div>
              <div className="order-right">
                <div className="caption">
                  <span className="text">{item.poi_name}</span>
                  <span className="status">{item.status_description}</span>
                </div>
                <div className="products">
                  <ul>{this.renderProductList(item.product_list)}</ul>
                </div>
                {this.renderComment(item.is_comment)}
                
                <div className="total">
                  <div>
                    总计{item.product_count}个菜 实付
                    <strong>￥{item.total}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div />;
    }
  }
  render(): any {
    return (
      <div className="order">
        <div className="title">订单</div>
        {this.renderOrderList()}
      </div>
    );
  }
}
export default connect(
  //注意 此处的返回值不要使用any，否则引用组件时会报没有传入组件改属性
  (state: IState) => {
    return {
      orderList: state.orderReducer.orderList
    };
  },
  orderAction
)(Order);
