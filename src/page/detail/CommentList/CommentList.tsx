import * as React from "react";
import ScrollPanel from "../../../component/ScrollPanel/ScrollPanel";
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
  /**
   * @description 下拉滚动下一页
   */
  fetchNextPage() {
    if (this.props.hasNextPage) {
      let nextPage = this.props.pageIndex + 1;
      this.props.queryCommentList(nextPage);
    }
  }
  renderCommentList() {
    return this.props.comments.map((item: any) => {
      return <CommentListItem {...item} key={generateKey()} />;
    });
  }
  render(): any {
    return (
      <div className="comment-list">
        <ScrollPanel
          domName=".comment-list"
          loadCallback={() => {
            this.fetchNextPage();
          }}
          isNoData={!this.props.hasNextPage}
        >
          {this.renderCommentList()}
        </ScrollPanel>
      </div>
    );
  }
}
export default connect(
  (state: IState): ICommentList => {
    return {
      comments: state.commentListReducer.comments,
      hasNextPage: state.commentListReducer.hasNextPage,
      pageIndex: state.commentListReducer.pageIndex
    };
  },
  commentListAction
)(CommentList);
