import React, { useState } from 'react';
import './App.css';
import WordSearchGrid from './components/WordSearchGrid';
import { CASE_1, generateBoard } from './logic/data';
import { runTest } from './logic/test';

function App() {
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(5)
  const [board, setBoard] = useState(CASE_1.board)
  const [word, setWord] = useState('')
  return (
    <div className="App">
        <WordSearchGrid word={word} board={board} />

        <div className='search-input'>
          <input type="text" value={word} onChange={(ev) => setWord(ev.target.value)}/>
          <button onClick={() => {
            console.log(`RESULT: ${runTest(CASE_1) ? 'PASS! 🎉' : 'FAIL... 😢'}`);
          }}>Search</button>
        </div>

        <div className='search-input'>
          <input name="rows" value={rows} type="number" min={5} step={1} onChange={(ev) => setRows(parseInt(ev.target.value))}/>
          <input name="cols" value={cols} type="number" min={5} step={1} onChange={(ev) => setCols(parseInt(ev.target.value))}/>
          <button onClick={() => { setBoard(generateBoard(rows, cols)) }}>New Board</button>
        </div>
    </div>
  );
}

export default App;
