import * as React from "react";
import IState, { IMenu } from "../store/types";
import menuAction from "../store/actions/menu";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";
import "./Menu.scss";

interface IProps extends IMenu {
  //查询左侧菜品列表
  queryFoodList: any;
  //切换当前显示的菜品
  changeCurrentFood: any;
  //增加菜品数量
  addFoodCount: any;
  //减少菜品数量
  minusFoodCount: any;
}

class Menu extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.queryFoodList();
  }
  /**
   * 点击的左侧菜品
   * @param index 索引值
   */
  foodClick(index: number): void {
    this.props.changeCurrentFood(index);
  }
  /**
   * @description 添加菜品数量
   * @param id 菜品id
   */
  addFoodClick(id: string): any {
    this.props.addFoodCount(id);
  }
  /**
   * @description 删除菜品数量
   * @param id 菜品id
   */
  minusFoodClick(id: string): any {
    this.props.minusFoodCount(id);
  }
  /**
   * 渲染添加&删除购物车按钮
   * @param item 菜品数据对象
   */
  renderCartButton(item: any): any {
    let buttonJsx: any = null;
    // console.log(item.id);
    if (item.chooseCount) {
      buttonJsx = (
        <React.Fragment>
          <i
            className="minus"
            onClick={(e: any) => {
              this.minusFoodClick(item.id);
            }}
          />
          <span>{item.chooseCount}</span>
          <i
            className="add"
            onClick={(e: any) => {
              this.addFoodClick(item.id);
            }}
          />
        </React.Fragment>
      );
    } else {
      buttonJsx = (
        <React.Fragment>
          <i
            className="add"
            onClick={(e: any) => {
              this.addFoodClick(item.id);
            }}
          />
        </React.Fragment>
      );
    }
    return buttonJsx;
  }
  /**
   * @description 渲染某个菜品下的明细列表
   */
  renderCurrentFoodList(): any {
    let { currentFoodIndex, foodList } = this.props;

    if ((foodList as Array<any>).length === 0) {
      return <div className="item-food">加载中...</div>;
    }

    let { spus } = this.props.foodList[currentFoodIndex];
    if (spus) {
      return spus.map((item: any) => {
        return (
          <div className="item-food" key={generateKey()}>
            <div>
              <img src={item.picture} />
            </div>
            <div className="info">
              <span className="name">{item.name}</span>
              <span className="desc">{item.description}</span>
              <span className="good">{item.praise_content}</span>
              <span className="price">
                <em>¥{item.min_price}</em>
                <span>/份</span>
              </span>
            </div>
            <div className="cart-buttons">{this.renderCartButton(item)}</div>
          </div>
        );
      });
    } else {
      return <div>暂无菜品</div>;
    }
  }
  /**
   * @description 渲染左侧菜品列表
   */
  renderLeftMenu(): any {
    return this.props.foodList.map((item: any, index: number) => {
      let { icon, name } = item;
      if (icon) {
        return (
          <li
            key={generateKey()}
            data-index={index}
            onClick={(e: any) => {
              this.foodClick(index);
            }}
          >
            <img src={icon} />
            <span>{name}</span>
          </li>
        );
      } else {
        return (
          <li
            key={generateKey()}
            data-index={index}
            onClick={(e: any) => {
              this.foodClick(index);
            }}
          >
            {name}
          </li>
        );
      }
    });
  }
  render(): any {
    return (
      <div className="detail-menu">
        <div className="menu-left-panel">
          <div className="menu-left-scroll">
            <ul>{this.renderLeftMenu()}</ul>
          </div>
        </div>
        <div className="menu-right-panel">
          <div className="menu-right-scroll">
            {this.renderCurrentFoodList()}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  (state: IState): IMenu => {
    return {
      foodList: state.menuReducer.foodList,
      currentFoodIndex: state.menuReducer.currentFoodIndex
    };
  },
  menuAction
)(Menu);
