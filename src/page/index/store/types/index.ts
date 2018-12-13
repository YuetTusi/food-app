/**
 * 标签页State
 */
interface ITabs {
  tabs: any;
  activeKey: any;
}

/**
 * 状态树
 */
interface IState {
  tabReducer: ITabs;
}

export { IState, ITabs };
export default IState;
