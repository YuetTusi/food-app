import * as React from "react";
import "./ShopBar.scss";
import IState, { IShopBar } from "../store/types";
import shopBarAction from "../store/actions/shopBar";
import menuAction from "../store/actions/menu";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";

interface IProps extends IShopBar {
  queryShippingFee: Function;
  toggleCartList: Function;
  //增加购物车外卖数量
  addFoodCount: Function;
  //减少购物车外卖数量
  minusFoodCount: Function;
  //清空购物车
  resetFoodCount: Function;
}

class ShopBar extends React.Component<IProps> {
  /**
   * @description 查询额外配送费
   */
  componentDidMount() {
    return this.props.queryShippingFee();
  }
  addFoodCountClick(id: string) {
    this.props.addFoodCount(id);
    let isEmpty: boolean = this.isEmptyCart();
    this.props.toggleCartList(!isEmpty);
  }
  minusFoodCountClick(id: string) {
    this.props.minusFoodCount(id);
    let isEmpty: boolean = this.isEmptyCart();
    this.props.toggleCartList(!isEmpty);
  }
  /**
   * 清空购物车
   */
  clearCartClick() {
    this.props.resetFoodCount();
    this.props.toggleCartList(false);
  }
  /**
   * @description 购物车是否为空
   */
  isEmptyCart(): boolean {
    let isEmpty: boolean = true;
    let foodList: Array<any> = this.props.foodList || [];
    if (foodList.length == 0) {
      return true;
    } else {
      for (let i = 0; i < foodList.length; i++) {
        let spus = foodList[i].spus || [];
        for (let j = 0; j < spus.length; j++) {
          if (spus[j].chooseCount && spus[j].chooseCount > 0) {
            isEmpty = false;
            break;
          }
        }
        break;
      }
    }
    return isEmpty;
  }
  /**
   * @description 隐藏&显示购物车列表
   */
  toggleCartListClick() {
    if (!this.isEmptyCart()) {
      //购物车里有内容才可切换
      this.props.toggleCartList(!this.props.showCartList);
    }
  }
  /**
   * @description 计算总价及数量
   */
  calcTotalPrice(): object {
    let total: number = 0;
    let num: number = 0;
    let foodList: Array<any> = this.props.foodList || [];
    for (let i = 0; i < foodList.length; i++) {
      let spus: Array<any> = foodList[i].spus || [];
      for (let j = 0; j < spus.length; j++) {
        if (spus[j].chooseCount && spus[j].chooseCount > 0) {
          total += spus[j].min_price * spus[j].chooseCount;
          num += spus[j].chooseCount;
        }
      }
    }
    return { total, num };
  }
  /**
   * @description 渲染购物车列表
   */
  renderCartList(): any {
    let dom: Array<any> = [];
    let foodList = this.props.foodList || [];
    for (let i = 0; i < foodList.length; i++) {
      let spus = foodList[i].spus || [];
      for (let j = 0; j < spus.length; j++) {
        if (spus[j].chooseCount && spus[j].chooseCount > 0) {
          dom.push(
            <li key={generateKey()}>
              <span className="name">{spus[j].name}</span>
              <span>¥{spus[j].chooseCount * spus[j].min_price}</span>
              <div className="buttons">
                <a
                  className="add"
                  onClick={() => this.addFoodCountClick(spus[j].id)}
                />
                <span>{spus[j].chooseCount}</span>
                <a
                  className="remove"
                  onClick={() => this.minusFoodCountClick(spus[j].id)}
                />
              </div>
            </li>
          );
        }
      }
    }

    return dom;
  }
  render(): any {
    let { total, num }: any = this.calcTotalPrice();
    return (
      <div className="shop-bar">
        <div
          className="cart-list"
          style={{ display: this.props.showCartList ? "block" : "none" }}
        >
          <div className="title" onClick={() => this.clearCartClick()}>
            <i />
            <span>清空购物车</span>
          </div>
          <ul className="cart-ul">{this.renderCartList()}</ul>
        </div>
        <div className="bottom-bar">
          <div className="cart-icon" onClick={() => this.toggleCartListClick()}>
            <div className="red-dot">{num}</div>
          </div>
          <div className="price">
            <div className="total">合计：¥{total}</div>
            <div className="send">客外配送费：¥{this.props.shippingFee}</div>
          </div>
          <a className="pay">去结算</a>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: IState): IShopBar => {
    return {
      foodList: state.menuReducer.foodList,
      shippingFee: state.shopBarReducer.shippingFee,
      showCartList: state.shopBarReducer.showCartList
    };
  },
  { ...shopBarAction, ...menuAction }
)(ShopBar);
