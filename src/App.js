import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
   
     <>
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
