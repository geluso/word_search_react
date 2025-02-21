export interface TestCase {
  board: string[][];
  word: string;
  expected: boolean;
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