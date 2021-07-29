import React from "react";
import { useAppContext } from "../context";
import { PointType } from "../models";
import "../styles/table.css";

export const Table: React.FC = () => {
  const { points, deletePoint } = useAppContext();

  return (
    <div className="table-container">
      <h2>Points Table</h2>
      <div className="table-item table-header">
        <div>Name</div>
        <div>X</div>
        <div>Y</div>
        <div>Delete</div>
      </div>
      {points?.map((point: PointType, index: number) => (
        <div className="table-item" key={`${point.label}-${point.x}-${point.y}-${index}`}>
          <div>{point.label}</div>
          <div>{point.x}</div>
          <div>{point.y}</div>
          <div onClick={() => deletePoint(point)} className="delete-button">
            X
          </div>
        </div>
      ))}
    </div>
  );
};
