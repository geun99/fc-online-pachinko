import { createGlobalStyle } from "styled-components";
import Header from "./assets/Components/Header";
import Tabs from "./assets/Components/Tabs";
import { useState } from "react";
import Board from "./assets/Components/Board";
import { createBoard } from "./assets/utils/createBoard";
import ResetButton from "./assets/Components/ResetButton";
import RemainCounts from "./assets/Components/RemainCounts";
import CollectedCount from "./assets/Components/CollectedCount";
import Modal from "./assets/Components/Modal";
import { DEFAULT_COUNTS, EMPTY_COUNT } from "./assets/utils/constants";

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

  const [boards, setBoards] = useState({
    4: createBoard(4),
    5: createBoard(5),
    7: createBoard(7),
  });

  const [revealed, setRevealed] = useState({
    4: Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => false)),
    5: Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false)),
    7: Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => false)),
  });

  const [hint, setHint] = useState<boolean[][]>(
    Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => false))
  );

  const [remains, setRemains] = useState<{
    4: RewardType;
    5: RewardType;
    7: RewardType;
  }>(DEFAULT_COUNTS);
  const [collected, setCollected] = useState<RewardType>(EMPTY_COUNT);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");

  const openModal = (value: string) => {
    setIsModalOpen(true);
    setModalValue(value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clickCellHandler = (x: number, y: number) => {
    const boardKey = activeTab as keyof typeof remains;
    const cellValue = boards[boardKey][x][y];
    openModal(cellValue);

    if (cellValue === "C") {
      setHint((prevHint) => {
        const newHint = [...prevHint];
        const idx = x * 7 + y;
        const prevIdx = idx - 1;
        const nextIdx = idx + 1;
        const boardSize = boards[boardKey][x].length;

        if (
          prevIdx >= 0 &&
          !revealed[boardKey][Math.floor(prevIdx / boardSize)][
            prevIdx % boardSize
          ]
        ) {
          newHint[Math.floor(prevIdx / boardSize)][prevIdx % boardSize] = true;
        }

        if (
          nextIdx < boardSize * boardSize &&
          !revealed[boardKey][Math.floor(nextIdx / boardSize)][
            nextIdx % boardSize
          ]
        ) {
          newHint[Math.floor(nextIdx / boardSize)][nextIdx % boardSize] = true;
        }

        return newHint;
      });
    }

    setRevealed((prevRevealed) => {
      const newRevealed = { ...prevRevealed };
      newRevealed[boardKey][x][y] = true;
      return newRevealed;
    });

    setRemains((prevRemains) => {
      const newRemain = { ...prevRemains[boardKey] };
      const key = boards[boardKey][x][y] as keyof typeof newRemain;
      newRemain[key] -= 1;
      return { ...prevRemains, [boardKey]: newRemain };
    });

    setCollected((prevCollected) => {
      const newCollected = { ...prevCollected };
      const key = boards[boardKey][x][y] as keyof typeof newCollected;
      newCollected[key] += 1;
      return newCollected;
    });
  };

  const resetBoard = () => {
    setBoards((prevBoards) => ({
      ...prevBoards,
      [activeTab]: createBoard(activeTab),
    }));

    setRevealed((prevRevealed) => {
      const newRevealed = { ...prevRevealed };
      newRevealed[activeTab] = Array.from({ length: activeTab }, () =>
        Array.from({ length: activeTab }, () => false)
      );
      return newRevealed;
    });

    setRemains((prevRemains) => ({
      ...prevRemains,
      [activeTab]: DEFAULT_COUNTS[activeTab],
    }));
  };

  const resetCollected = () => {
    setCollected(EMPTY_COUNT);
  };

  return (
    <>
      <AppStyle />
      {isModalOpen && <Modal value={modalValue} onClick={closeModal} />}
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main">
        <div className="remains">
          <RemainCounts remains={remains[activeTab]} />
        </div>
        <div className="boards">
          <Board
            board={boards[activeTab]}
            revealed={revealed[activeTab]}
            hint={hint}
            onClick={clickCellHandler}
          />
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
  font-weight: bolder;
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
