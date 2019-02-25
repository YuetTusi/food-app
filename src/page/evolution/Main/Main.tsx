import * as React from "react";
import NavHeader from "../../../component/NavHeader/NavHeader";
import { generateKey } from "../../../common/tools";
import "./Main.scss";
import { setFlagsFromString } from "v8";

interface IProps {}

class Main extends React.Component<IProps> {
  state = {
    score: 5
  };
  constructor(props: any) {
    super(props);
    this.starClick = this.starClick.bind(this);
  }
  starClick(e: any): void {
    let { score } = e.target.dataset;
    // score = Number.parseInt(score);
    this.setState({ score });
  }
  /**
   * 菜品打分（1~5分）
   * @param score 分数值
   */
  renderStar(): any {
    let stars: Array<any> = [];
    for (let i = 0; i < this.state.score; i++) {
      stars.push(
        <i onClick={this.starClick} data-score={i + 1} key={generateKey()} />
      );
    }
    for (let j = stars.length; j < 5; j++) {
      stars.push(
        <i
          className="gray"
          onClick={this.starClick}
          data-score={j + 1}
          key={generateKey()}
        />
      );
    }
    return stars;
  }
  render(): any {
    return (
      <div className="evolution">
        <NavHeader title="评价" />
        <div className="panel">
          <div className="star">{this.renderStar()}</div>
          <textarea maxLength={140} placeholder="亲，菜品如何？请您评价" />
          <div className="food-name">菜品名称</div>
        </div>
        <button className="btn-commit">提交评价</button>
      </div>
    );
  }
}
export default Main;
