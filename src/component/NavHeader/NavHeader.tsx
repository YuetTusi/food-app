import * as React from "react";
import "./NavHeader.scss";
interface IProps {
  title: String;
}

class NavHeader extends React.Component<IProps> {
  render(): any {
    return (
      <div className="navheader">
        <i className="back-icon" />
        <div className="title">{this.props.title}</div>
        <div className="more"></div>
      </div>
    );
  }
}
export default NavHeader;
