import { useState } from "react";
import { MyContext } from "./MyContext";
import AppLayout from "./ui/AppLayout";
import Cart from "./Features/cart/Cart";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";

function App() {
  const [color, setColor] = useState(true);
  return (
    <div>
      <MyContext.Provider value={{ color, setColor }}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
