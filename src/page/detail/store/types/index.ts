interface ITabBar {
  tabs: Array<any>;
  activeKey: string;
}

interface IState {
  tabBarReducer: ITabBar;
}

export { ITabBar };
export default IState;
