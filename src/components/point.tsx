import React, { DragEvent, RefObject } from "react";
import { ChartPosition, PointType } from "../models";
import "../styles/point.css";

// chartX and chartY were defined for point's edge

export const Point: React.FC<PointType & ChartPosition> = ({ label, x, y, chartX, chartY }) => {
  const [{ dx, dy }, setOffset] = React.useState({ dx: x, dy: y });
  const [startX, setStartX] = React.useState<number>(0);
  const [startY, setStartY] = React.useState<number>(0);
  const [showLabel, setShowLabel] = React.useState(false);
  const pointRef: RefObject<HTMLDivElement> = React.useRef(null);
  const elementX = Number(pointRef.current?.getBoundingClientRect().x) || 0;
  const elementY = Number(pointRef.current?.getBoundingClientRect().y) || 0;

  const onMouseDown = () => {
    setStartX(elementX - dx);
    setStartY(elementY - dy);
  };

  const onDragEnd = (e: DragEvent) => {
    e.preventDefault();
    const newDx = e.pageX - startX;
    const newDy = e.pageY - startY;

    setOffset({ dx: newDx, dy: newDy });
  };

  const onMouseOut = () => {
    setShowLabel(false);
  };

  const onMouseOver = () => {
    setShowLabel(true);
  };

  return (
    <div
      ref={pointRef}
      className="point-container"
      style={{
        transform: `translate3d(${dx}px, ${dy}px, 0)`,
      }}
      draggable
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseDown={onMouseDown}
      onDragEnd={onDragEnd}>
      {showLabel && <span className="label">{label}</span>}
    </div>
  );
};
