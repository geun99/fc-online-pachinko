import styled from "styled-components";

interface TabProps {
  isActive: boolean;
  handleTabActive: () => void;
  label: number;
}

const Tab = ({ isActive, handleTabActive, label }: TabProps) => {
  return (
    <TabStyle isActive={isActive} onClick={handleTabActive}>
      {label + " X " + label}
    </TabStyle>
  );
};

const TabStyle = styled.button<{ isActive: boolean }>`
  width: 8rem;
  height: 3rem;
  font-size: 1.25rem;
  margin: 2rem;
  background-color: ${({ isActive }) => (isActive ? "green" : "gray")};
  border: none;
  border-radius: 0.25rem;
`;

export default Tab;
