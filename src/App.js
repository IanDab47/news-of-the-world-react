import { Routes, Route } from 'react-router-dom';
import './App.css';

import Display from './components/pages/Display';
import Landing from './components/pages/Landing';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;