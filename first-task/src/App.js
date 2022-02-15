import './App.css';
import Home from './Home.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeCards from './HomeCards';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cards" element={<HomeCards/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
