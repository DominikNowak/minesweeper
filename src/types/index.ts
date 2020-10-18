export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  hidden,
  visible,
  flagged,
}

export type Cell = { value: CellValue; state: CellState };

export enum Face {
  smile = "😃",
  oh = "😮",
  lost = "😵",
  won = "😎",
  redFlag = "🚩",
  explosion = "💥",
  bomb = "💣",
}
