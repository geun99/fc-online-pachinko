import { createGlobalStyle } from "styled-components";
import Header from "./assets/Components/Header";
import Tabs from "./assets/Components/Tabs";
import { useState } from "react";
import Board from "./assets/Components/Board";
import { createBoard } from "./assets/utils/createBoard";
import ResetButton from "./assets/Components/ResetButton";

export type tabType = 4 | 5 | 7;

function App() {
  const [activeTab, setActiveTab] = useState<tabType>(7);

  const [Board4, setBoard4] = useState<string[][]>(createBoard(4));
  const [Board5, setBoard5] = useState<string[][]>(createBoard(5));
  const [Board7, setBoard7] = useState<string[][]>(createBoard(7));

  const [revealed4, setRevealed4] = useState<boolean[][]>(
    Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => false))
  );
  const [revealed5, setRevealed5] = useState<boolean[][]>(
    Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false))
  );
  const [revealed7, setRevealed7] = useState<boolean[][]>(
    Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => false))
  );

  type RevealBoardType = revealed4 | revealed5 | revealed7;

  const clickCellHandler4 = (x: number, y: number) => {
    setRevealed4((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
  };

  const clickCellHandler5 = (x: number, y: number) => {
    setRevealed5((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
  };

  const clickCellHandler7 = (x: number, y: number) => {
    setRevealed7((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
  };

  const resetBoard = () => {
    if (activeTab === 7) setBoard7(createBoard(7));
    if (activeTab === 5) setBoard5(createBoard(5));
    if (activeTab === 4) setBoard4(createBoard(4));
  };

  return (
    <>
      <AppStyle />
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="boards">
        {activeTab == 7 && (
          <Board
            board={Board7}
            revealed={revealed7}
            onClick={clickCellHandler7}
          />
        )}
        {activeTab == 5 && (
          <Board
            board={Board5}
            revealed={revealed5}
            onClick={clickCellHandler5}
          />
        )}
        {activeTab == 4 && (
          <Board
            board={Board4}
            revealed={revealed4}
            onClick={clickCellHandler4}
          />
        )}
      </div>
      <ResetButton onClick={resetBoard} />
    </>
  );
}

const AppStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Pretendard-Regular', sans-serif;
    color:white;
}
  body {
    background-color: #282c34;
    text-align: center;    
  }

  .boards {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: flex;
  align-content: center;
  justify-content: center;
`;

export default App;
