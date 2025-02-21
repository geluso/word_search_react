import React, { useState } from 'react';
import './App.css';
import WordSearchGrid from './components/WordSearchGrid';
import { CASE_1 } from './logic/data';
import { runTest } from './logic/test';

function App() {
  const [word, setWord] = useState('')
  return (
    <div className="App">
        <WordSearchGrid word={word} board={CASE_1.board} />
        <div className='search-input'>
          <input type="text" value={word} onChange={(ev) => setWord(ev.target.value)}/>
          <button onClick={() => {
            console.log(`RESULT: ${runTest(CASE_1) ? 'PASS! 🎉' : 'FAIL... 😢'}`);
          }}>Search</button>
        </div>
    </div>
  );
}

export default App;
