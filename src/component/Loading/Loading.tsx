import * as React from "react";
import "./Loading.scss";

interface IProps {
  isNoData: boolean;
}

function Loading(props: IProps): any {
  let { isNoData } = props;
  if (isNoData) {
    return <div className="loading">- 我是有底线的 -</div>;
  } else {
    return <div className="loading">加载中, 请稍等...</div>;
  }
}

export default Loading;
