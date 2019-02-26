import * as React from "react";
import IState, { IMenu } from "../store/types";
import menuAction from "../store/actions/menu";
import { connect } from "react-redux";
import { generateKey } from "../../../common/tools";
import "./Menu.scss";

interface IProps extends IMenu {
  //查询左侧菜品列表
  queryFoodList: any;
}

class Menu extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.queryFoodList();
  }
  renderLeftMenu(): any {
    return this.props.foodList.map((item: any) => {
      let { icon, name } = item;
      if (icon) {
        return (
          <li key={generateKey()}>
            <img src={icon} />
            <span>{name}</span>
          </li>
        );
      } else {
        return <li key={generateKey()}>{name}</li>;
      }
    });
  }
  render(): any {
    return (
      <div className="detail-menu">
        <div className="menu-left-panel">
          <div className="menu-left-scroll">
            <ul>
              {this.renderLeftMenu()}
            </ul>
          </div>
        </div>
        <div className="menu-right-panel">右侧</div>
      </div>
    );
  }
}
export default connect(
  (state: IState): IMenu => {
    return { foodList: state.menuReducer.foodList };
  },
  menuAction
)(Menu);
