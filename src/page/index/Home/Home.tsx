import * as React from "react";
import "./Home.scss";
import Header from "../Header/Header";

/**
 * @description 首页组件
 */
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}
export default Home;
