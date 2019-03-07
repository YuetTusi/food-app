/**
 * 评价打分
 */
interface IScore {
  scoring: any;
}

/**
 * @description 购物车
 */
interface IShopBar {
  foodList: Array<any>;
  shippingFee: number; //额外配送费
  showCartList: boolean; //是否显示购物车列表
}

/**
 * @description 详情页左侧大分类菜单
 */
interface IMenu {
  foodList: Array<any>;
  currentFoodIndex: number;
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
  shopBarReducer: IShopBar;
  scoreReducer: IScore;
}

/**
 * @description Action类型
 */
interface IActionType {
  type: string;
  payload: any;
}

export { IActionType, ITabBar, IMenu, IShopBar, IScore };
export default IState;
