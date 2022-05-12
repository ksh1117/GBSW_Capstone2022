import './App.css';
import Mainpage from './Mainpage';
import Signup from './SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    /*<div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/a" element={<Mainpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>*/

    <div>
      <Mainpage />
    </div>
  );
}

export default App;
