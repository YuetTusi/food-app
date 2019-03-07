import * as React from "react";
import scoreAction from "../store/actions/score";
import IState, { IScore, IActionType } from "../store/types";
import { connect } from "react-redux";
import Star from "../Star/Star";
import "./Score.scss";

interface IProps extends IScore {
  //查询外卖打分
  queryScoring: Function;
}
/**
 * @description 评价页上面的外卖打分组件
 */
class Score extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.queryScoring();
  }
  /**
   * @description 渲染打分区域内容
   */
  renderScoring(): any {
    let dom: any = null;
    if (this.props.scoring) {
      dom = (
        <div className="scoring-panel">
          <div className="scroing-left">
            <div className="num">{this.props.scoring.commentScore}</div>
            <div className="text">商家评价</div>
          </div>
          <div className="scroing-center">
            <div>
              <span>口味</span>
              <Star score={this.props.scoring.foodScore} />
              <small>{this.props.scoring.foodScore}</small>
            </div>
            <div>
              <span>包装</span>
              <Star score={this.props.scoring.packScore} />
              <small>{this.props.scoring.packScore}</small>
            </div>
          </div>
          <div className="scroing-right">
            <div className="num">{this.props.scoring.deliveryScore}</div>
            <div className="text">配送评价</div>
          </div>
        </div>
      );
    } else {
      dom = <div className="scroing" />;
    }
    return dom;
  }
  render() {
    return <div className="score">{this.renderScoring()}</div>;
  }
}
export default connect(
  (state: IState): IScore => {
    return {
      scoring: state.scoreReducer.scoring
    };
  },
  scoreAction
)(Score);
