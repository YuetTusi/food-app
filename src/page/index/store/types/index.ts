/**
 * @description 外卖列表
 */
interface IFoodList {
  foodList: Array<any>;
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
}

export { IState, ITabs, ICategory, IFoodList };
export default IState;
