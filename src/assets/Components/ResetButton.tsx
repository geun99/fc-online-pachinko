import styled from "styled-components";

interface resetButtonProps {
  onClick: () => void;
}

const ResetButton = ({ onClick }: resetButtonProps) => {
  return <ResetButtonStyle onClick={onClick}>빙고판 초기화</ResetButtonStyle>;
};

const ResetButtonStyle = styled.button`
  width: 12rem;
  height: 3rem;
  font-size: 1.25rem;
  margin: 1rem;
  background-color: #eee;
  border: none;
  border-radius: 0.25rem;
  color: black;
`;

export default ResetButton;
