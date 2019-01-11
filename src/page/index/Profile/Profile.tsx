import * as React from "react";
import "./Profile.scss";

/**
 * @description 个人心中页
 */
class Profile extends React.Component {
  render(): any {
    return (
      <div className="profile">
        <div className="main">
          <img
            className="avatar"
            src="http://i.waimai.meituan.com/static/img/default-avatar.png"
          />
          <div className="name">小明</div>
        </div>
        <div className="content">
          <ul>
            <li className="address">
              <span>收货地址管理</span>
            </li>
            <li className="money">
              <span>商家代金券</span>
            </li>
          </ul>
          <ul>
            <li className="email">
              <span>意见反馈</span>
            </li>
            <li className="question">
              <span>常见问题</span>
            </li>
          </ul>
          <ul>
            <li className="center">
              <strong>客服电话：011-09777</strong>
            </li>
            <li className="center">
              <span>服务时间：9:00 - 23:00</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
