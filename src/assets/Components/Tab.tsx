import styled from "styled-components";
import { BACKGROUND_COLORS, BOARD_NAME } from "../utils/constants";

interface TabProps {
  isActive: boolean;
  handleTabActive: () => void;
  label: 4 | 5 | 7;
}

const Tab = ({ isActive, handleTabActive, label }: TabProps) => {
  return (
    <TabStyle label={label} isActive={isActive} onClick={handleTabActive}>
      {BOARD_NAME[label]}
    </TabStyle>
  );
};

const TabStyle = styled.button<{ isActive: boolean; label: 4 | 5 | 7 }>`
  width: 8rem;
  height: 3rem;
  font-size: 1.25rem;
  margin: 2rem;
  background-color: ${({ isActive, label }) =>
    isActive ? BACKGROUND_COLORS[label] : "gray"};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export default Tab;
