import styled from "styled-components";
import bg from "../../../public/bgImg.png";
import { VALUE_COLORS } from "../utils/constants";
import { useEffect, useState } from "react";

interface ModalProps {
  value: string;
  onClick: () => void;
}

const Modal = ({ value, onClick }: ModalProps) => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
    const timeOut = setTimeout(() => setAnimate(false), 1000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <ModalStyle value={value} animate={animate}>
      <div className="box">
        <p>{value}</p>
      </div>
      <button onClick={onClick}>확인</button>
    </ModalStyle>
  );
};

const ModalStyle = styled.div<{ value: string; animate: boolean }>`
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
      color: ${({ value }) => VALUE_COLORS[value as keyof typeof VALUE_COLORS]};
      font-size: 8rem;
      font-weight: bolder;
      transform: translateY(-3.5rem);
      ${({ animate }) =>
        animate &&
        `animation: scaleAnimation 1s ease-in forwards;
      `}
    }
  }

  @keyframes scaleAnimation {
    0% {
      transform: translateY(-3.5rem) scale(1.5);
    }
    100% {
      transform: translateY(-3.5rem) scale(1);
    }
  }
`;

export default Modal;
