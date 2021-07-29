import React from "react";
import { Home } from "../containers";
import { AppContextProvider } from "../context";
import { PointsType } from "../models";

export const App: React.FC = () => {
  const points: PointsType = [
    { id: 0, label: "label1", x: 0, y: 0 },
    { id: 1, label: "label2", x: 20, y: 15 },
    { id: 2, label: "label3", x: 30, y: 40 },
    { id: 3, label: "label4", x: 120, y: 130 },
  ];

  return (
    <AppContextProvider data={points}>
      <Home />
    </AppContextProvider>
  );
};
