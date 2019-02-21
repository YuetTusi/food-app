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

/**
 * @description 外卖列表
 */
interface IFoodList {
  foodData: any;
}

interface IState {
  headerReducer: any;
  foodListReducer: IFoodList;
}

export { IHeader, IFoodList, IState };
export default IState;
