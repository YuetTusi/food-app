import * as React from "react";
import "moment/locale/zh-cn";
import Moment from "react-moment";
import Star from "../Star/Star";
import { generateKey } from "../../../common/tools";

import "./CommentListItem.scss";

interface IProps {
  //评论
  comment: string;
  //打分
  order_comment_score: number;
  //用户名
  user_name: string;
  //头像
  user_pic_url: string;
  //上传图片
  comment_pics: Array<any>;
  //评论时间（毫秒数）
  comment_time: number;
  //配送时间
  ship_time: number;
  //评价标签
  comment_labels: Array<any>;
}

class CommentListItem extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  //渲染评价标签,如果有
  renderLabels(labels: Array<any>) {
    let dom = null;
    if (labels && labels.length > 0) {
      dom = labels.map((item: any) => {
        return (
          <li key={generateKey()}>
            <em>{item.content}</em>
          </li>
        );
      });
      return <ul className="labels-ul">{dom}</ul>;
    } else {
      return <ul />;
    }
  }
  //渲染评价图片，如果有
  renderPictures(pics: Array<any>) {
    let dom = null;
    if (pics && pics.length > 0) {
      dom = pics.map((item: any) => {
        return (
          <li key={generateKey()}>
            <img src={item.url} />
          </li>
        );
      });
      return <ul className="pics-ul">{dom}</ul>;
    } else {
      return <ul />;
    }
  }
  renderListItem() {
    return (
      <div className="comment-item">
        <div className="avatar">
          {this.props.user_pic_url ? (
            <img src={this.props.user_pic_url} />
          ) : (
            <img src="images/avatar.jpg" />
          )}
        </div>
        <div className="detail">
          <div className="name-bar">
            <span className="name">{this.props.user_name}</span>
            <span className="comment-time">
              <Moment locale="zh-cn" format="YYYY.M.D">
                {Number(this.props.comment_time + "000")}
              </Moment>
            </span>
          </div>
          <div className="ship-time">
            <div>
              <Star score={this.props.order_comment_score} />
            </div>
            <div>{this.props.ship_time}分钟送达</div>
          </div>
          <div>{this.renderPictures(this.props.comment_pics)}</div>
          <div className="comment">{this.props.comment}</div>
          <div>{this.renderLabels(this.props.comment_labels)}</div>
        </div>
      </div>
    );
  }
  render(): any {
    return <React.Fragment>{this.renderListItem()}</React.Fragment>;
  }
}
export default CommentListItem;
