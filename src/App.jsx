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
      nameP: "Study Gold Chair",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: true,
    },
    {
      id: 205454,
      image: "src/assets/chair4.png",
      nameP: "Study Chair",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair5.png",
      nameP: "Grey Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair6.png",
      nameP: "Comfortable Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair7.png",
      nameP: "Arm Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair8.png",
      nameP: "Brown Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair9.png",
      nameP: "Black Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair10.png",
      nameP: "Green Couch",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair11.png",
      nameP: "Blue Couch",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair12.png",
      nameP: "Blue Couch Chair",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair13.png",
      nameP: "Brown Chair",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 205754,
      image: "src/assets/chair14.png",
      nameP: "Orange sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
  ];
  const [color, setColor] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <MyContext.Provider
        value={{ color, setColor, products, searchInput, setSearchInput }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="product" element={<ProductPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
