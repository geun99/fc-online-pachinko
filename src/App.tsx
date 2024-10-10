import { createGlobalStyle } from "styled-components";
import Header from "./assets/Components/Header";
import Tabs from "./assets/Components/Tabs";
import { useState } from "react";
import Board from "./assets/Components/Board";
import { createBoard } from "./assets/utils/createBoard";
import ResetButton from "./assets/Components/ResetButton";
import RemainCounts from "./assets/Components/RemainCounts";
import CollectedCount from "./assets/Components/CollectedCount";

export type tabType = 4 | 5 | 7;

export interface RewardType {
  SSS: number;
  SS: number;
  S: number;
  A: number;
  B?: number;
  C?: number;
}

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

  const [remains4, setRemains4] = useState<RewardType>({
    SSS: 1,
    SS: 2,
    S: 4,
    A: 9,
  });

  const [remains5, setRemains5] = useState<RewardType>({
    SSS: 1,
    SS: 2,
    S: 4,
    A: 6,
    B: 12,
  });

  const [remains7, setRemains7] = useState<RewardType>({
    SSS: 1,
    SS: 2,
    S: 4,
    A: 6,
    B: 16,
    C: 20,
  });

  const [collected, setCollected] = useState<RewardType>({
    SSS: 0,
    SS: 0,
    S: 0,
    A: 0,
    B: 0,
    C: 0,
  });

  const clickCellHandler4 = (x: number, y: number) => {
    setRevealed4((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
    setRemains4((prevRemain) => {
      const newRemain = { ...prevRemain };
      const key = Board4[x][y] as keyof typeof prevRemain;
      newRemain[key] -= 1;
      return newRemain;
    });
    setCollected((prevCollected) => {
      const newCollected = { ...prevCollected };
      const key = Board4[x][y] as keyof typeof newCollected;
      newCollected[key] += 1;
      return newCollected;
    });
  };

  const clickCellHandler5 = (x: number, y: number) => {
    setRevealed5((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
    setRemains5((prevRemain) => {
      const newRemain = { ...prevRemain };
      const key = Board5[x][y] as keyof typeof prevRemain;
      newRemain[key] -= 1;
      return newRemain;
    });
    setCollected((prevCollected) => {
      const newCollected = { ...prevCollected };
      const key = Board5[x][y] as keyof typeof newCollected;
      newCollected[key] += 1;
      return newCollected;
    });
  };

  const clickCellHandler7 = (x: number, y: number) => {
    setRevealed7((prevReveald) => {
      const newRevealed = [...prevReveald];
      newRevealed[x] = [...newRevealed[x]];
      newRevealed[x][y] = true;
      return newRevealed;
    });
    setRemains7((prevRemain) => {
      const newRemain = { ...prevRemain };
      const key = Board7[x][y] as keyof typeof prevRemain;
      newRemain[key] -= 1;
      return newRemain;
    });
    setCollected((prevCollected) => {
      const newCollected = { ...prevCollected };
      const key = Board7[x][y] as keyof typeof newCollected;
      newCollected[key] += 1;
      return newCollected;
    });
  };

  const resetBoard = () => {
    if (activeTab === 7) {
      setBoard7(createBoard(7));
      setRevealed7(
        Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => false))
      );
      setRemains7({
        SSS: 1,
        SS: 2,
        S: 4,
        A: 6,
        B: 16,
        C: 20,
      });
    }
    if (activeTab === 5) {
      setBoard5(createBoard(5));
      setRevealed5(
        Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false))
      );

      setRemains5({
        SSS: 1,
        SS: 2,
        S: 4,
        A: 6,
        B: 12,
      });
    }
    if (activeTab === 4) {
      setBoard4(createBoard(4));
      setRevealed4(
        Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => false))
      );
      setRemains4({
        SSS: 1,
        SS: 2,
        S: 4,
        A: 9,
      });
    }
  };

  const resetCollected = () => {
    setCollected({
      SSS: 0,
      SS: 0,
      S: 0,
      A: 0,
      B: 0,
      C: 0,
    });
  };

  return (
    <>
      <AppStyle />
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main">
        <div className="remains">
          {activeTab == 7 && <RemainCounts remains={remains7} />}
          {activeTab == 5 && <RemainCounts remains={remains5} />}
          {activeTab == 4 && <RemainCounts remains={remains4} />}
        </div>
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
        <CollectedCount collections={collected} onClick={resetCollected} />
      </main>

      <ResetButton onClick={resetBoard} value="빙고판 초기화" />
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
  .main {
    display: flex;
    align-content: center;
    justify-content: space-around;
  }

  
`;

export default App;
