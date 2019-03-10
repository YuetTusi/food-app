import * as React from "react";
import CommentListItem from "../CommentListItem/CommentListItem";
import IState, { ICommentList } from "../store/types";
import commentListAction from "../store/actions/commentList";
import { connect } from "react-redux";
import "./CommentList.scss";
import { generateKey } from "../../../common/tools";

interface IProps extends ICommentList {
  //查询外卖列表数据（分页）
  queryCommentList: Function;
}

class CommentList extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {
    this.props.queryCommentList(0);
  }
  renderCommentList() {
    return this.props.comments.map((item: any) => {
      return <CommentListItem {...item} key={generateKey()} />;
    });
  }
  render(): any {
    return <div className="comment-list">{this.renderCommentList()}</div>;
  }
}
export default connect(
  (state: IState): ICommentList => {
    return {
      comments: state.commentListReducer.comments
    };
  },
  commentListAction
)(CommentList);
