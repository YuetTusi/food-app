import * as React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";
let bannerImagePath = require("./images/banner_meituan.jpg");

/**
 * 首页页头（搜索栏&Banner）
 */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <SearchBar />
        <img className="banner-img" src={bannerImagePath} />
      </div>
    );
  }
}
export default Header;

//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg
