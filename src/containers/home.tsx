import React, { RefObject } from "react";
import { Chart, Point } from "../components";
import { PointsType, PointType } from "../models";
import "../styles/home.css";

export const Home: React.FC = () => {
  const points: PointsType = [
    { label: "label1", x: 0, y: 0 },
    { label: "label2", x: 20, y: 15 },
    { label: "label3", x: 30, y: 40 },
    { label: "label4", x: 120, y: 130 },
  ];
  const [{ chartX, chartY }, setChartOffset] = React.useState({ chartX: 0, chartY: 0 });
  const chartRef: RefObject<HTMLDivElement> = React.useRef(null);

  React.useEffect(() => {
    setChartOffset({
      chartX: Number(chartRef.current?.getBoundingClientRect().x),
      chartY: Number(chartRef.current?.getBoundingClientRect().y),
    });
  }, []);

  return (
    <div className="home-container">
      <h2>CHART</h2>
      <Chart ref={chartRef}>
        {points.map((point: PointType, index: number) => (
          <Point
            key={`${point.label}-${point.x}-${point.y}-${index}`}
            x={point.x}
            y={point.y}
            label={point.label}
            chartX={chartX}
            chartY={chartY}
          />
        ))}
      </Chart>
    </div>
  );
};
