import * as React from "react";
import "./SearchBar.scss";

/**
 * @description 头组件顶部的搜索栏
 */
class SearchBar extends React.Component {
  render(): any {
    return (
      <div className="search-bar">
        <div className="location">
          <i className="location-icon" />
          <span>北京市</span>
          <i className="arrow-icon" />
        </div>
        <div className="search">
          <i className="search-icon" />
          <div className="input">汉堡</div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
