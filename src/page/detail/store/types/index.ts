/**
 * @description
 */
interface IMenu {
  foodList: Array<any>;
}

/**
 * @description 标签页
 */
interface ITabBar {
  tabs: Array<any>;
  activeKey: string;
}

interface IState {
  tabBarReducer: ITabBar;
  menuReducer: IMenu;
}

export { ITabBar, IMenu };
export default IState;
