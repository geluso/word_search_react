import { TestCase } from "./data";
import { hasWord } from "./wordSearch"

export const runTest = (testCase: TestCase) => {
  const {board, word, expected } = testCase;
  const { hasMatch, path } = hasWord(board, word);  
  if (hasMatch !== expected) {
    return false;
  }
  return true;
}