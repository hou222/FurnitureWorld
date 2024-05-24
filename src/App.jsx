import { useState } from "react";
import { MyContext } from "./MyContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import { ScrollToTop } from "./utils/ScrollToTop";
import ProductPage from "./Features/product/ProductPage";
import Search from "./Features/search/Search";
import chair1 from "./assets/chair1.png";
import chair4 from "./assets/chair4.png";
import chair5 from "./assets/chair5.png";
import chair6 from "./assets/chair6.png";
import chair7 from "./assets/chair7.png";
import chair8 from "./assets/chair8.png";
import chair9 from "./assets/chair9.png";
import chair10 from "./assets/chair10.png";
import chair11 from "./assets/chair11.png";
import chair12 from "./assets/chair12.png";
import chair13 from "./assets/chair13.png";
import chair14 from "./assets/chair14.png";

function App() {
  const products = [
    {
      id: 1,
      image: chair1,
      nameP: "Study Gold Chair",
      newPrice: 138.0,
      oldPrice: 0,
      newProd: true,
    },
    {
      id: 2,
      image: chair4,
      nameP: "Study Chair",
      newPrice: 138.0,
      oldPrice: 146.0,
      newProd: false,
    },
    {
      id: 3,
      image: chair5,
      nameP: "Grey Sofa",
      newPrice: 120.0,
      oldPrice: 150.0,
      newProd: false,
    },
    {
      id: 4,
      image: chair6,
      nameP: "Comfortable Sofa",
      newPrice: 131.0,
      oldPrice: 1450.0,
      newProd: false,
    },
    {
      id: 5,
      image: chair7,
      nameP: "Arm Sofa",
      newPrice: 126.0,
      oldPrice: 0,
      newProd: false,
    },
    {
      id: 6,
      image: chair8,
      nameP: "Brown Sofa",
      newPrice: 118.0,
      oldPrice: 130.0,
      newProd: false,
    },
    {
      id: 7,
      image: chair9,
      nameP: "Black Sofa",
      newPrice: 110.0,
      oldPrice: 123.0,
      newProd: false,
    },
    {
      id: 8,
      image: chair10,
      nameP: "Green Couch",
      newPrice: 129.0,
      oldPrice: 0,
      newProd: false,
    },
    {
      id: 9,
      image: chair11,
      nameP: "Blue Couch",
      newPrice: 170.0,
      oldPrice: 186.0,
      newProd: false,
    },
    {
      id: 10,
      image: chair12,
      nameP: "Blue Couch Chair",
      newPrice: 100.0,
      oldPrice: 0,
      newProd: false,
    },
    {
      id: 11,
      image: chair13,
      nameP: "Brown Chair",
      newPrice: 151.0,
      oldPrice: 170.0,
      newProd: false,
    },
    {
      id: 13,
      image: chair14,
      nameP: "Orange sofa",
      newPrice: 190.0,
      oldPrice: 0,
      newProd: false,
    },
  ];
  const [color, setColor] = useState(true);
  //const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <MyContext.Provider value={{ color, setColor, products }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="search/:query" element={<Search />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
