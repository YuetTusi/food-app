import * as React from "react";
import "./ShopBar.scss";

class ShopBar extends React.Component {
  render(): any {
    return (
      <div className="shop-bar">
        <div className="bottom-bar">
          <div className="cart-icon">
            <div className="red-dot">1</div>
          </div>
          <div className="price">
            <div className="total">合计：¥80</div>
            <div className="send">配送费：¥0</div>
          </div>

          <a className="pay">去结算</a>
        </div>
      </div>
    );
  }
}

export default ShopBar;
