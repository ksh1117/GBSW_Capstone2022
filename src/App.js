import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return(
    <div id="root">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Signup/>
    </div>
  )
}

export default App;
