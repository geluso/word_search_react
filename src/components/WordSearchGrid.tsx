import React from 'react'
import { Coord, hasWord, isCoordInPath } from '../logic/wordSearch'

function isHighlighted(rowIndex: number, colIndex: number, path: Coord[]): boolean {
  for (let i = 0; i < path.length; i++){
    const cell = path[i]
    if (cell.rowIndex === rowIndex && cell.colIndex === colIndex) {
      return true;
    }
  }
  return false
}

export default function WordSearchGrid({ word, board }: { word: string, board: string[][] }) {
  const { hasMatch, path } = hasWord(board, word.toUpperCase())
  return <div>
    <h1>Word Search</h1>
    <div className='word-search-grid'>
      {board.map((row, rowIndex) => {
        return <div key={rowIndex}>
          {row.map((col, colIndex) => {
            return <span key={colIndex} className={'cell' + (isHighlighted(rowIndex, colIndex, path) ? ' highlight': '')}>{col}</span>
          })}
        </div>
      })}
    </div>
  </div>
}