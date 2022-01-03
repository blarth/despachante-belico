
import MainPage from "../MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
