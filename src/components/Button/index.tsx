import React from "react";
import "./index.scss";
import { CellState, CellValue } from "../../types";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

export const Button: React.FC<ButtonProps> = ({ row, col, state, value }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span role="img" aria-label="Explosion">
            💥
          </span>
        );
      }
      if (value !== CellValue.none) {
        return <span>{value}</span>;
      }
    } else if (state === CellState.flagged) {
      return (
        <span role="img" aria-label="Flag">
          🚩
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
    >
      {renderContent()}
    </div>
  );
};
