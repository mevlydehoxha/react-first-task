import './App.css';
import Home from './Home.js';
import { BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom';
import HomeCards from './HomeCards';
  

function App() {
  return (
    <div>
      <BrowserRouter>
      <ul>
          <li>
            <Link className="link" to="/">First Page</Link>
          </li>
          <li>
            <Link className="link" to="/cards">Second Page</Link>
           </li>
      </ul>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cards" element={<HomeCards/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

