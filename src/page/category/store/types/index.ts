/**
 * @description 查询分类State
 */
interface IHeader {
  //查询分类
  buttonList: Array<any>;
  //当前激活项
  active: String;
  //分类
  categoryFilterList: Array<any>;
  //排序
  sortTypeList: Array<any>;
  //筛选
  activityFilterList: Array<any>;
}

interface IState {
  headerReducer: any;
}

export { IHeader, IState };
export default IState;
