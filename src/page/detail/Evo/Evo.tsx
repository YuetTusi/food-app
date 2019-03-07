import * as React from "react";
import Score from "../Score/Score";
import "./Evo.scss";

class Evo extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render(): any {
    return (
      <div>
        <Score />
      </div>
    );
  }
}
export default Evo;
