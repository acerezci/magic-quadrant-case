import React from "react";
import { AppContextModel, PointsType, PointType } from "../models";

export const AppContext = React.createContext<AppContextModel>({ points: [] } as any);
export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider: React.FC<{ data?: PointsType }> = ({ children, data }) => {
  const [points, setPoints] = React.useState<PointsType>(data || []);

  const updatePoints = (point: PointType) => {
    setPoints((prevState: PointsType) => {
      return prevState.map((_point: PointType) => {
        if (_point.id === point.id) {
          _point.x = point.x;
          _point.y = point.y;
        }

        return _point;
      });
    });
  };

  const deletePoint = (point: PointType) => {
    setPoints((prevState: PointsType) =>
      prevState.filter((_point: PointType) => _point.id !== point.id),
    );
  };

  const contextValue: AppContextModel = {
    points,
    updatePoints,
    deletePoint,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
