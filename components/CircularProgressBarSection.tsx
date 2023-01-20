import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

interface PropType {
  text: string;
  percentage: number;
}

function CircularProgressBarSection(prop: PropType) {
  const props = {
    percent: prop.percentage,
    colorSlice: "#191923",
    colorCircle: "#191923",
    fontColor: "white",
    fontSize: "1.6rem",
    fontWeight: 400,
    size: 50,
    stroke: 5,
    strokeBottom: 0,
    speed: 160,
    cut: 0,
    rotation: -90,
    opacity: 0,
    fill: "transparent",
    unit: "%",
    textPosition: "0.35em",
    animationOff: false,
    strokeDasharray: "360",
    inverse: false,
    round: false,
    number: true,
    linearGradient: ["#fbbb14"],
  };

  return (
    <div className="CircularProgressBar">
      <CircularProgressBar {...props} />
      <p className="text-white pt-5 flex justify-center">{prop.text}</p>
    </div>
  );
}

export default CircularProgressBarSection;
