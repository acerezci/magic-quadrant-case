import React from "react";
import "../styles/chart.css";

export const Chart: React.FC = ({ children }) => {
  return (
    <div className="chart-container">
      <span className="chart-text chart-left-text">Ability To Execute --&gt;</span>
      <div className="chart-area-label-container">
        <div>
          <span>Area 1</span>
        </div>
        <div>
          <span>Area 2</span>
        </div>
        <div>
          <span>Area 3</span>
        </div>
        <div>
          <span>Area 3</span>
        </div>
      </div>
      {children}
      <span className="chart-text chart-bottom-text">Completeness Of Vision --&gt;</span>
    </div>
  );
};
