import * as React from "react";
import { generateKey } from "../../../common/tools";
import "./Star.scss";

interface IProps {
  score: number;
}

// export interface Props {
//     name: string;
//     enthusiasmLevel?: number;
//   }

//   function Hello({ name, enthusiasmLevel = 1 }: Props) {
//     if (enthusiasmLevel <= 0) {
//       throw new Error('You could be a little more enthusiastic. :D');
//     }

//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {enthusiasmLevel}
//         </div>
//       </div>
//     );
//   }

/**
 * @description 五星评价组件
 * @param score 分数值（0-5的浮点数）
 */
function Star({ score }: IProps) {
  let dom: any = [];
  let i: number = 0;
  while (i < Math.floor(score)) {
    dom.push(<i className="golden" key={generateKey()} />);
    i++;
  }
  if (score % i > 0) {
    dom.push(<i className="half" key={generateKey()} />);
    i++;
  }
  while (i < 5) {
    dom.push(<i className="gray" key={generateKey()} />);
    i++;
  }

  return <div className="five-star">{dom}</div>;
}

export default Star;
