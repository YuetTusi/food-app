/**
 * @description 订单列表
 */
interface IOrder {
  pageIndex: any;
  hasNextPage: any;
  orderList: Array<any>;
}

/**
 * @description 外卖列表
 */
interface IFoodList {
  foodData: any;
}

/**
 * @description 外卖分类State
 */
interface ICategory {
  items: Array<any>;
}

/**
 * @description 标签页State
 */
interface ITabs {
  tabs: any;
  activeKey: any;
}

/**
 * @description 状态树
 */
interface IState {
  tabReducer: ITabs;
  categoryReducer: ICategory;
  foodListReducer: IFoodList;
  orderReducer: IOrder;
}

export { IState, ITabs, ICategory, IFoodList, IOrder };
export default IState;
