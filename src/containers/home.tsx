import React from "react";
import { Chart, Point } from "../components";
import { PointsType, PointType } from "../models";
import "../styles/home.css";

export const Home: React.FC = () => {
  const points: PointsType = [
    { label: "label1", x: 0, y: 0 },
    { label: "label2", x: 30, y: 30 },
    { label: "label3", x: 60, y: 60 },
    { label: "label4", x: 90, y: 90 },
  ];
  return (
    <div className="home-container">
      <h2>CHART</h2>
      <Chart>
        {points.map((point: PointType, index: number) => (
          <Point
            key={`${point.label}-${point.x}-${point.y}-${index}`}
            x={point.x}
            y={point.y}
            label={point.label}
          />
        ))}
      </Chart>
    </div>
  );
};
