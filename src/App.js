import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {Main} from './components/Main/Main';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link>Main</Link>
      </nav>
    </BrowserRouter>
  );
}

export default App;
