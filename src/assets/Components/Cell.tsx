import styled from "styled-components";

interface CellProps {
  value: string;
  idx: number;
  revealed: boolean;
  color: string;
}

const colors = {
  blue: "#00606D",
  red: "#7B343D",
  yellow: "#895800",
};

type colorType = "blue" | "red" | "yellow";

const Cell = ({ value, idx, revealed, color }: CellProps) => {
  const colorValue: colorType = color as colorType;

  return revealed ? (
    <CellStyle color={colorValue}>{value}</CellStyle>
  ) : (
    <CellStyle color={colorValue}>{idx}</CellStyle>
  );
};

const CellStyle = styled.div<{ color: colorType }>`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => colors[color]};
`;

export default Cell;
