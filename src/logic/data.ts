export interface TestCase {
  board: string[][];
  word: string;
  expected: boolean;
}

const randomLetter = () => {
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  const index = Math.floor(Math.random() * letters.length)
  return letters[index]
}

export const generateBoard = (rows: number, cols: number) => {
  const board = []
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = []
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      row.push(randomLetter())
    }
    board.push(row)
  }
  return board
}

export const CASE_1: TestCase = {
  board: [
    ['C', 'A', 'B', 'O'],
    ['Q', 'Q', 'R', 'N'],
    ['P', 'C', 'A', 'X'],
    ['X', 'Y', 'Z', 'Q'],
  ],
  word: "CARBON",
  expected: true,
};

export const CASE_2: TestCase = {
  board: [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'M', 'O', 'J'],
    ['K', 'L', 'M', 'N'],
  ],
  word: "MOMO",
  expected: false,
};

export const CASE_3: TestCase = {
  board: [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'M', 'O', 'J'],
    ['K', 'L', 'M', 'N'],
  ],
  word: "A",
  expected: true,
};

export const CASE_4: TestCase = {
  board: [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'M', 'O', 'J'],
    ['K', 'L', 'M', 'N'],
  ],
  word: "X",
  expected: false,
};