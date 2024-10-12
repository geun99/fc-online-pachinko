import styled from "styled-components";
import { valueColors } from "./Cell";
import bg from "../../../public/bg_section1.jpg";
interface ModalProps {
  value: string;
  onClick: () => void;
}

const Modal = ({ value, onClick }: ModalProps) => {
  return (
    <ModalStyle value={value}>
      <div className="box">
        <p>{value}</p>
      </div>
      <button onClick={onClick}>확인</button>
    </ModalStyle>
  );
};

const ModalStyle = styled.div<{ value: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  button {
    width: 13rem;
    height: 3rem;
    background-color: black;
    color: #04824b;
    border: 1px solid #04824b;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .box {
    width: 50rem;
    height: 25rem;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    display: flex;
    font-size: 5rem;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    position: relative;
    margin-bottom: 2rem;

    p {
      color: ${({ value }) => valueColors[value as keyof typeof valueColors]};
      font-size: 15rem;
      font-weight: bolder;
    }
  }
`;

export default Modal;
