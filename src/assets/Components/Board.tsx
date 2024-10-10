import styled from "styled-components";
import Cell from "./Cell";

interface BoardProps {
  board: string[][];
  revealed: boolean[][];
  onClick: (x: number, y: number) => void;
}

const backgroundColor = {
  7: "#14423D",
  5: "#612533",
  4: "#674600",
};

const Board = ({ board, revealed, onClick }: BoardProps) => {
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
    backgroundColor[size as keyof typeof backgroundColor]};
`;

export default Board;
