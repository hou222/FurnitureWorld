import { useState } from "react";
import { MyContext } from "./MyContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [color, setColor] = useState(true);
  return (
    <div>
      <MyContext.Provider value={{ color, setColor }}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
