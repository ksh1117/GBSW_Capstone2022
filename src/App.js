import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { FirstPage } from "./pages/FirstPage";
import { Mainpage } from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Mainpage" element={<Mainpage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
