import { useState } from "react";
import { MyContext } from "./MyContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import { ScrollToTop } from "./utils/ScrollToTop";
import ProductPage from "./Features/product/ProductPage";

function App() {
  const products = [
    {
      id: 205454,
      image: "src/assets/chair1.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: true,
    },
    {
      id: 205454,
      image: "src/assets/chair4.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205454,
      image: "src/assets/chair3.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: true,
    },
    {
      id: 205454,
      image: "src/assets/chair4.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205454,
      image: "src/assets/chair2.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: true,
    },
    {
      id: 205454,
      image: "src/assets/chair3.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205454,
      image: "src/assets/chair1.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205454,
      image: "src/assets/chair3.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205454,
      image: "src/assets/chair2.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: true,
    },
  ];
  const [color, setColor] = useState(true);

  return (
    <div>
      <MyContext.Provider value={{ color, setColor, products }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="product" element={<ProductPage />} />
              {/* <Route path="product" element={<Products />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
