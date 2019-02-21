import * as React from "react";
import Loading from "../Loading/Loading";
import { dropdownLoad } from "../../common/dropdownload";
import { throttle } from "../../common/tools";

interface IProps {
  loadCallback: any; //加载数据的回调（由调用者传入）
  isNoData: any; //是否还有数据（由调用者传入）
}

/**
 * @description 上拉滚动加载公共组件
 */
class ScrollView extends React.Component<IProps> {
  componentDidMount(): void {
    //节流
    let loadHandle = throttle(this.props.loadCallback, 500);
    //滚动时触发
    window.addEventListener("scroll", e => {
      //dropdownLoad每上拉到底就会执行回调
      //如果传入的isNoData为true，说明数据全部加载
      dropdownLoad(e, () => {
        loadHandle();
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.loadCallback);
  }
  render() {
    return (
      <div>
        {this.props.children}
        <Loading isNoData={this.props.isNoData} />
      </div>
    );
  }
}

export default ScrollView;
