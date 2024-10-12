import styled from "styled-components";
import Cell from "./Cell";
import { BACKGROUND_COLORS } from "../utils/constants";

interface BoardProps {
  board: string[][];
  revealed: boolean[][];
  hint: boolean[][];
  onClick: (x: number, y: number) => void;
}

const Board = ({ board, revealed, hint, onClick }: BoardProps) => {
  let color = "";
  if (board.length === 7) color = "blue";
  else if (board.length === 5) color = "red";
  else if (board.length === 4) color = "yellow";
  return (
    <BoardStyle size={board.length}>
      {board.map((row, rowIdx) => {
        return row.map((_, colIdx) => {
          return (
            <Cell
              value={board[rowIdx][colIdx]}
              idx={rowIdx * board.length + (colIdx + 1)}
              revealed={revealed[rowIdx][colIdx]}
              color={color}
              key={colIdx}
              isHint={hint[rowIdx][colIdx]}
              onClick={() => {
                onClick(rowIdx, colIdx);
              }}
            />
          );
        });
      })}
    </BoardStyle>
  );
};

const BoardStyle = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ size }) =>
    BACKGROUND_COLORS[size as keyof typeof BACKGROUND_COLORS]};
`;

export default Board;
