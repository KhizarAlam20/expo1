import * as React from "react";
import Svg, { G, Rect, Line } from "react-native-svg";
const Add = (props) => (
  <Svg
    width={62}
    height={62}
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Frame 5">
      <Rect
        x={2}
        y={-2}
        width={58}
        height={58}
        rx={23}
        transform="matrix(1 0 0 -1 0 58)"
        fill="#232222"
      />
      <Rect
        x={2}
        y={-2}
        width={58}
        height={58}
        rx={23}
        transform="matrix(1 0 0 -1 0 58)"
        stroke="#B4ABAB90"
        strokeWidth={6}
      />
      <G id="Group 1">
        <Line
          id="Line 1"
          x1={31.5}
          y1={19}
          x2={31.5}
          y2={43}
          stroke="white"
          strokeWidth={3}
        />
        <Line
          id="Line 2"
          x1={19}
          y1={30.5}
          x2={43}
          y2={30.5}
          stroke="white"
          strokeWidth={3}
        />
      </G>
    </G>
  </Svg>
);
export default Add;
