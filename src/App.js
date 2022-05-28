import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { FirstPage } from "./firstPage";
import { Test } from "./Test"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
