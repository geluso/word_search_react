export type Coord = {
  rowIndex: number
  colIndex: number
}

export type HasWordResult = {
  hasMatch: boolean
  path: Coord[]
}

export type Direction = {
  deltaRow: number
  deltaCol: number
}
const LEFT: Direction = { deltaRow: 0, deltaCol: -1 }
const RIGHT: Direction = { deltaRow: 0, deltaCol: 1 }
const UP: Direction = { deltaRow: -1, deltaCol: 0 }
const DOWN: Direction = { deltaRow: 1, deltaCol: 0 }

const addCoords = (initial: Coord, direction: Direction): Coord => {
  return {
    rowIndex: initial.rowIndex + direction.deltaRow,
    colIndex: initial.colIndex + direction.deltaCol
  }
}

export const isCoordInPath = (path: Coord[], coord: Coord): boolean => {
  for (let i = 0; i < path.length; i++) {
    const pathCoord = path[i]
    if (pathCoord.rowIndex === coord.rowIndex && pathCoord.colIndex === coord.colIndex) {
      return true
    }
  }
  return false
}

const isValidStep = (
    board: string[][], currentCoord: Coord, direction: Direction, path: Coord[]
  ): { isValid: boolean, nextCoord?: Coord } => {
    const nextCoord = addCoords(currentCoord, direction)

    // Is the next coordinate a valid index on the board?
    if (
      nextCoord.rowIndex < 0 ||
      nextCoord.colIndex < 0 ||
      nextCoord.rowIndex >= board.length ||
      nextCoord.colIndex >= board[nextCoord.rowIndex].length ||
      isCoordInPath(path, nextCoord)
    ) {
      return { isValid: false, nextCoord: undefined }
    }
    return { isValid: true, nextCoord }
}

export const hasWord = (board: string[][], word: string): HasWordResult => {
  if (word.length === 0) return { hasMatch: false, path: [] };
  console.log('hasWord searching for', word)
  const hasMatch = false;
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    for (let colIndex = 0; colIndex < board[rowIndex].length; colIndex++) {
      const initialCoord = { rowIndex, colIndex }
      console.log('exploring', initialCoord)
      const result = hasWordExplore(board, word, initialCoord, '', [], 0)
      if (result.hasMatch) {
        return result
      }
    }
  }
  return { hasMatch: false, path: [] };
}

const hasWordExplore = (
    board: string[][], word: string, currentCoord: Coord, buffer: string, path: Coord[],
    safety: number
  ): { path: Coord[], hasMatch: boolean } => {
    if (buffer.length > word.length) return { path, hasMatch: false }
    const currentChar = board[currentCoord.rowIndex][currentCoord.colIndex]
    const nextBuffer = buffer + currentChar
    path.push(currentCoord)

    console.log(nextBuffer, path)
    if (nextBuffer === word) {
      return { path, hasMatch: true }
    }

    if (!word.startsWith(nextBuffer)) {
      path.pop()
      return { path, hasMatch: false }
    }

    const steps = [LEFT, RIGHT, UP, DOWN]
    for (let i = 0; i < steps.length; i++) {
      const step = isValidStep(board, currentCoord, steps[i], path)
      if (step.isValid && step.nextCoord) {
        const result = hasWordExplore( board, word, step.nextCoord, nextBuffer, path, safety + 1)
        if (result.hasMatch) {
          return result
        }
      }
    }

    return { path, hasMatch: false }
}