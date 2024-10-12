export const createBoard = (size: number): string[][] => {
  const board: string[][] = Array.from({ length: size }, () =>
    Array(size).fill(null)
  );

  if (size === 7) {
    placeCIn7x7(board);
  } else {
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
  const selectedIndices = selectNonAdjacentIndices(20, 49);

  selectedIndices.forEach((index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;
    board[row][col] = "C";
  });

  fillRemainingLetters(board);
};

const selectNonAdjacentIndices = (count: number, size: number): number[] => {
  const indices: number[] = [];
  const availableIndices = Array.from({ length: size }, (_, i) => i);

  while (indices.length < count && availableIndices.length > 0) {
    const index = Math.floor(Math.random() * availableIndices.length);
    const selectedIndex = availableIndices[index];

    if (
      !indices.includes(selectedIndex - 1) &&
      !indices.includes(selectedIndex + 1)
    ) {
      indices.push(selectedIndex);
      availableIndices.splice(index, 1);
    } else {
      availableIndices.splice(index, 1);
    }

    if (availableIndices.length === 0 && indices.length < count) {
      break;
    }
  }

  return indices;
};

const fillRemainingLetters = (board: string[][]) => {
  const lettersToPlace = getLettersToPlace(7);
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

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
