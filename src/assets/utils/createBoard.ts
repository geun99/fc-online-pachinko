// util/createBoard.ts
export const createBoard = (size: number): string[][] => {
  const board: string[][] = Array.from({ length: size }, () =>
    Array(size).fill(null)
  );

  if (size === 7) {
    // 7x7 보드에서 'C' 배치
    placeCIn7x7(board);
  } else {
    // 4x4 또는 5x5 보드에서 랜덤하게 글자 배치
    const lettersToPlace = getLettersToPlace(size);
    const remainingLetters = shuffleArray(lettersToPlace);

    let index = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (index < remainingLetters.length) {
          board[i][j] = remainingLetters[index++];
        }
      }
    }
  }

  return board;
};
const placeCIn7x7 = (board: string[][]) => {
  const selectedIndices = selectNonAdjacentIndices(20, 49); // 1~49 중 서로 연속하지 않는 20개의 인덱스를 선택

  selectedIndices.forEach((index) => {
    const row = Math.floor(index / 7); // 인덱스를 7x7 배열의 행과 열로 변환
    const col = index % 7;
    board[row][col] = "C";
  });

  // 나머지 빈칸에 글자 채우기
  fillRemainingLetters(board);
};

// 1~49 범위에서 연속되지 않는 인덱스를 선택하는 함수
const selectNonAdjacentIndices = (count: number, size: number): number[] => {
  const indices: number[] = [];
  const availableIndices = Array.from({ length: size }, (_, i) => i);

  while (indices.length < count && availableIndices.length > 0) {
    const index = Math.floor(Math.random() * availableIndices.length);
    const selectedIndex = availableIndices[index];

    // 선택된 인덱스가 연속되지 않도록 확인
    if (
      !indices.includes(selectedIndex - 1) &&
      !indices.includes(selectedIndex + 1)
    ) {
      indices.push(selectedIndex);
      availableIndices.splice(index, 1); // 사용된 인덱스를 제거
    } else {
      // 연속된 인덱스를 발견했을 때, 사용 가능한 인덱스에서 제거
      availableIndices.splice(index, 1);
    }

    // 선택할 수 있는 인덱스가 없을 경우 종료
    if (availableIndices.length === 0 && indices.length < count) {
      break; // 더 이상 선택할 수 없으므로 루프 종료
    }
  }

  return indices;
};

// 남은 위치에 글자 배치하는 함수
const fillRemainingLetters = (board: string[][]) => {
  const lettersToPlace = getLettersToPlace(7); // 7x7 보드에 배치할 글자 가져오기
  const remainingLetters = shuffleArray(lettersToPlace);

  let index = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null && index < remainingLetters.length) {
        board[i][j] = remainingLetters[index++];
      }
    }
  }
};

// 사이즈에 따라 배치할 글자 배열을 반환하는 함수
const getLettersToPlace = (size: number): string[] => {
  const letterCounts: Record<string, number> = {
    SSS: 1,
    SS: 2,
    S: size === 4 ? 4 : 4,
    A: size === 4 ? 9 : 6,
    B: size === 4 ? 0 : size === 5 ? 12 : 16,
    C: 0,
  };

  const lettersToPlace: string[] = [];
  for (const letter of Object.keys(letterCounts)) {
    for (let i = 0; i < letterCounts[letter]; i++) {
      lettersToPlace.push(letter);
    }
  }

  return lettersToPlace;
};
// 배열을 무작위로 섞는 함수
const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
