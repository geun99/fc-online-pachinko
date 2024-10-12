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
  blue: "4.79rem",
  red: "6.9rem",
  yellow: "8.75rem",
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
      <img
        src={backgroundImages[color as keyof typeof backgroundImages]}
        alt={colorValue}
      />
      <p>{idx}</p>
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

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:hover {
      animation: bounce 1.5s ease-in-out infinite;
    }
  }

  p {
    position: absolute;
    color: black;
  }

  @keyframes bounce {
    0%,
    20% {
      transform: translateY(0);
    }
    15% {
      transform: translateY(-5px);
    }
    10% {
      transform: translateY(0);
    }
    5% {
      transform: translateY(-10px);
    }
  }
`;

export default Cell;
