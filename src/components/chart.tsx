import React from "react";
import "../styles/chart.css";

export const Chart: React.FC = ({ children }) => {
  return <div className="chart-container">{children}</div>;
};
