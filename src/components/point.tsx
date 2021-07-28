import React, { MouseEvent, DragEvent } from "react";
import { PointType } from "../models";
import "../styles/point.css";

export const Point: React.FC<PointType> = ({ label, x, y }) => {
  const [{ dx, dy }, setOffset] = React.useState({ dx: x, dy: y });
  const [startX, setStartX] = React.useState<number>(0);
  const [startY, setStartY] = React.useState<number>(0);
  const [showLabel, setShowLabel] = React.useState(false);

  const onMouseDown = (e: MouseEvent) => {
    setStartX(e.pageX - dx);
    setStartY(e.pageY - dy);
  };

  const onDragOverCapture = (e: DragEvent) => {
    e.preventDefault();
    console.log(e);
    let newDx = e.pageX - startX;
    let newDy = e.pageY - startY;

    // if (newDx < pointSettings.startingPointX) {
    //   newDx = pointSettings.startingPointX;
    // }

    // if (newDy < pointSettings.startingPointY) {
    //   newDy = pointSettings.startingPointY;
    // }

    // if (newDy > chartSettings.height - pointSettings.height - chartSettings.borderWidth - 1) {
    //   newDy = chartSettings.height - pointSettings.height - chartSettings.borderWidth - 1;
    // }

    // if (newDx > chartSettings.width - pointSettings.width - chartSettings.borderWidth - 1) {
    //   newDx = chartSettings.width - pointSettings.width - chartSettings.borderWidth - 1;
    // }

    setOffset({ dx: newDx, dy: newDy });
  };

  return (
    <div
      className="point-container"
      style={{
        transform: `translate3d(${dx}px, ${dy}px, 0)`,
      }}
      draggable
      onMouseOver={() => setShowLabel(true)}
      onMouseOut={() => setShowLabel(false)}
      onMouseDown={onMouseDown}
      onDragOverCapture={onDragOverCapture}>
      {showLabel && <span className="label">{label}</span>}
    </div>
  );
};
