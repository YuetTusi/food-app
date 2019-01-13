/**
 * @description 查询分类State
 */
interface IHeader {
  //查询分类
  buttonList: Array<any>;
  //当前激活项
  active: String;
}

interface IState {
  headerReducer: any;
}

export { IHeader, IState };
export default IState;
