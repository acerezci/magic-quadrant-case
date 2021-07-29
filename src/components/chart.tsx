import React from "react";
import "../styles/chart.css";

export const Chart = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div ref={ref} className="chart-container">
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
    </div>
  );
});

interface Props {
  children: React.ReactNode;
}
