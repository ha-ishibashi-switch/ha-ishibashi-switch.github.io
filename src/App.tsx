import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Survey from "./pages/Survey";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
