import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Survey202608 from "./pages/Survey/Survey202608";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/202608" element={<Survey202608 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
