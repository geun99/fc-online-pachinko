import styled from "styled-components";

import son from "../../../public/son.png";
import papa from "../../../public/papa.png";
import mom from "../../../public/mom.png";

interface CellProps {
  value: string;
  idx: number;
  revealed: boolean;
  color: string;
  onClick: () => void;
}

const colors = {
  blue: "#00606D",
  red: "#7B343D",
  yellow: "#895800",
};

export const valueColors = {
  SSS: "#FF4696",
  SS: "#8237CD",
  S: "#437AFF",
  A: "#319127",
  B: "#C46623",
  C: "#676767",
};

const backgroundImages = {
  blue: papa,
  red: mom,
  yellow: son,
};

const cellSize = {
  blue: "5rem",
  red: "7.25rem",
  yellow: "9.2195rem",
};

type colorType = "blue" | "red" | "yellow";

const Cell = ({ value, idx, revealed, color, onClick }: CellProps) => {
  const colorValue: colorType = color as colorType;

  return revealed ? (
    <CellStyle color={colorValue} revealed={revealed} value={value}>
      {value}
    </CellStyle>
  ) : (
    <CellStyle onClick={onClick} color={colorValue}>
      {idx}
    </CellStyle>
  );
};

const CellStyle = styled.div<{
  color: colorType;
  revealed?: boolean;
  value?: string;
}>`
  width: ${({ color }) => cellSize[color]};
  height: ${({ color }) => cellSize[color]};
  display: flex;
  border-radius: 1rem;
  align-items: ${({ revealed }) => (revealed ? "center" : "end")};
  justify-content: center;
  color: ${({ value }) => (value ? "white" : "black")};

  background-color: ${({ color, value }) =>
    value
      ? valueColors[value as keyof typeof valueColors] || colors[color]
      : colors[color]};

  font-size: ${({ color, value }) => {
    if (color === "blue") return value ? "2.5rem" : "2.25rem";
    if (color === "red") return value ? "3.75rem" : "2.5rem";
    if (color === "yellow") return value ? "4.75rem" : "3.25rem";
    return "2rem";
  }};

  font-weight: bold;
  cursor: ${({ revealed }) => (revealed ? "default" : "pointer")};

  background-image: ${({ revealed, color }) =>
    revealed ? "none" : `url(${backgroundImages[color]})`};

  background-size: cover;
  background-position: center;
`;

export default Cell;
