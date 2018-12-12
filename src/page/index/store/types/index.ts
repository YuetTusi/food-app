interface ITabs {
  tabs: any;
  activeKey: any;
}
interface IState {
  tabReducer: ITabs;
}

export { IState, ITabs };
export default IState;
