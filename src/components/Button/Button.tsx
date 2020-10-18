import React from "react";
import "./Button.scss";
import { CellState, CellValue, Face } from "../../types";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
}

export const Button: React.FC<ButtonProps> = ({
  row,
  col,
  onClick,
  onContext,
  state,
  value,
}) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="Explosion">
            {Face.explosion}
          </span>
        );
      }
      if (value !== CellValue.none) {
        return <span>{value}</span>;
      }
    } else if (state === CellState.flagged) {
      return (
        <span role="img" aria-label="Flag">
          {Face.redFlag}
        </span>
      );
    }
    return null;
  };

  return (
    <div
      className={`Button ${
        state === CellState.visible ? "visible" : ""
      } value-${value}`}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {renderContent()}
    </div>
  );
};
