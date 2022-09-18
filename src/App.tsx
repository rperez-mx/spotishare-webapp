import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import './App.css'
function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={code? <Dashboard /> : <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
