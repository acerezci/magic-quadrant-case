import React from "react";
import { AppContextModel, PointsType, PointType } from "../models";
import { addPointToLocalStorage } from "../service";

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

    addPointToLocalStorage([...points, point]);
  };

  const deletePoint = (point: PointType) => {
    setPoints((prevState: PointsType) =>
      prevState.filter((_point: PointType) => _point.id !== point.id),
    );
  };

  const addPoint = async (point: PointType) => {
    const maxId = points.reduce((acc, _point) => (acc = acc > _point.id ? acc : _point.id), 0);
    point.id = maxId + 1;

    await setPoints([...points, point]);

    addPointToLocalStorage([...points, point]);
  };

  const contextValue: AppContextModel = {
    points,
    updatePoints,
    deletePoint,
    addPoint,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
