import React from "react";
import { Chart, Point, Table } from "../components";
import { useAppContext } from "../context";
import { PointType } from "../models";
import "../styles/home.css";

export const Home: React.FC = () => {
  const { points } = useAppContext();

  return (
    <div className="home-container">
      <h2>CHART</h2>
      <Chart>
        {points.map((point: PointType, index: number) => (
          <Point
            key={`${point.id}-${point.label}-${point.x}-${point.y}-${index}`}
            id={point.id}
            x={point.x}
            y={point.y}
            label={point.label}
          />
        ))}
      </Chart>
      <Table />
    </div>
  );
};
