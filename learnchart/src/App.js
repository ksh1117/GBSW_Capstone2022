import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

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
