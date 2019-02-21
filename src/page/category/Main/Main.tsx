import * as React from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import NavHeader from "../../../component/NavHeader/NavHeader";
import FoodList from "../FoodList/FoodList";

// import actions from "../store/actions";

/**
 * @description 主页
 */
class Main extends React.Component<any> {
  render(): any {
    return (
      <React.Fragment>
        <NavHeader title="分类" />
        <Header />
        <FoodList />
      </React.Fragment>
    );
  }
}
// export default connect(
//   (state: any) => {
//     return state;
//   },
//   actions
// )(Main);
export default Main;
