export interface PointType {
  label: string;
  x: number;
  y: number;
  id: number;
}

export type PointsType = PointType[];

export interface AppContextModel {
  points: PointsType;
  updatePoints: (point: PointType) => void;
  deletePoint: (point: PointType) => void;
}
