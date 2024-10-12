import styled from "styled-components";

import son from "../../../public/son.png";
import papa from "../../../public/papa.png";
import mom from "../../../public/mom.png";
import { BORDERS, COLORS, VALUE_COLORS } from "../utils/constants";

interface CellProps {
  value: string;
  idx: number;
  revealed: boolean;
  color: string;
  isHint: boolean;
  onClick: () => void;
}

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

const Cell = ({ value, idx, revealed, color, isHint, onClick }: CellProps) => {
  const colorValue: colorType = color as colorType;

  return revealed ? (
    <CellStyle color={colorValue} revealed={revealed} value={value}>
      {value}
    </CellStyle>
  ) : (
    <CellStyle onClick={onClick} color={colorValue} isHint={isHint}>
      <img
        src={backgroundImages[color as keyof typeof backgroundImages]}
        alt={colorValue}
      />
      <p>{idx}</p>
      {isHint && color === "blue" && (
        <HintBox>
          <span>B등급 이상</span>
        </HintBox>
      )}
    </CellStyle>
  );
};

const CellStyle = styled.div<{
  color: colorType;
  revealed?: boolean;
  value?: string;
  isHint?: boolean;
}>`
  position: relative;
  width: ${({ color }) => cellSize[color]};
  height: ${({ color }) => cellSize[color]};
  display: flex;
  border-radius: 1rem;
  align-items: ${({ revealed }) => (revealed ? "center" : "end")};
  justify-content: center;
  border: ${({ isHint, color }) =>
    isHint && color == "blue" && "2px solid #ECFF08"};
  font-weight: bolder;
  background-color: ${({ color, value }) =>
    value
      ? VALUE_COLORS[value as keyof typeof VALUE_COLORS] || COLORS[color]
      : COLORS[color]};
  font-size: ${({ color, value }) => {
    if (color === "blue") return value ? "2.5rem" : "2.25rem";
    if (color === "red") return value ? "3.75rem" : "2.5rem";
    if (color === "yellow") return value ? "4.75rem" : "3.25rem";
    return "2rem";
  }};
  cursor: ${({ revealed }) => (revealed ? "default" : "pointer")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(123, 132, 19, 0.5);
    border-radius: 1rem;
    opacity: ${({ isHint, color }) => (color === "blue" && isHint ? 1 : 0)};
    pointer-events: none;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isHint }) =>
      isHint ? "105%" : "100%"}; // 수정된 부분: 조건부 너비 설정

    &:hover {
      animation: bounce 1.5s ease-in-out infinite;
    }
  }

  p {
    position: absolute;
    color: black;
    text-shadow: ${({ color }) =>
      `-1px -1px 0 ${BORDERS[color]}, 1px -1px 0 ${BORDERS[color]}, -1px 1px 0 ${BORDERS[color]}, 1px 1px 0 ${BORDERS[color]}`};
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

const HintBox = styled.span`
  position: absolute;
  bottom: -5%;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  background-color: yellow;
  width: 105%;
  height: 27.5%;
  border-radius: 0rem 0rem 1rem 1rem;
  display: flex;
  align-content: center;
  justify-content: center;

  span {
    color: black;
    transform: translateY(0.125rem);
  }
`;

export default Cell;
