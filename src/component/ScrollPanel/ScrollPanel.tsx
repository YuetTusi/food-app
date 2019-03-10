import * as React from "react";
import Loading from "../Loading/Loading";
import { pullUpLoad } from "./pullUpLoad";
import { throttle } from "../../common/tools";

interface IProps {
  loadCallback: any; //加载数据的回调（由调用者传入）
  isNoData: any; //是否还有数据（由调用者传入）
  domName: any; //滚动元素名
}

/**
 * @description 上拉滚动加载公共组件
 */
class ScrollPanel extends React.Component<IProps> {
  componentDidMount(): void {
    //节流
    let loadHandle = throttle(this.props.loadCallback, 500);
    let dom = this.getDOM();
    //滚动时触发
    dom.addEventListener("scroll", (e: any) => {
      //dropdownLoad每上拉到底就会执行回调
      //如果传入的isNoData为true，说明数据全部加载

      pullUpLoad(e, dom, () => {
        loadHandle();
      });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.loadCallback);
  }
  getDOM(): any {
    let name = this.props.domName;
    if (name.startsWith(".")) {
      return document.getElementsByClassName(name.substring(1))[0];
    } else {
      return document.getElementById(name.substring(1));
    }
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

export default ScrollPanel;
