import styled from "styled-components";

interface resetButtonProps {
  onClick: () => void;
  value: string;
}

const ResetButton = ({ onClick, value }: resetButtonProps) => {
  return <ResetButtonStyle onClick={onClick}>{value}</ResetButtonStyle>;
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
  cursor: pointer;
`;

export default ResetButton;
