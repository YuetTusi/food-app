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
}

export { IState, ITabs, ICategory };
export default IState;
