import './App.css';
import Mainpage from './Mainpage';
import Page from './Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    /*<div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/a" element={<Page />}></Route>
        </Routes>
      </BrowserRouter>
    </div>*/

    <div>
      <Mainpage />
    </div>
  );
}

export default App;
