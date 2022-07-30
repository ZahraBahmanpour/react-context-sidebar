import Sidebar from "../components/sidebar/Sidebar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./Team";
function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
