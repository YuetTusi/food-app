import * as React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Category from "../Category/Category";
import FoodList from "../FoodList/FoodList";

/**
 * @description 首页组件
 */
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Category />
        <FoodList />
      </div>
    );
  }
}
export default Home;
