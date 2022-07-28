import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

import './App.css'

// Import Components
import Usershome from "./Pages/Home/Usershome";
import Qrcode from "./Test/Qrcode";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Usershome /> } />
              <Route path="/test" element={<Qrcode />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
