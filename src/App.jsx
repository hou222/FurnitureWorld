import { useRef, useState } from "react";
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
import NewProduct from "./Features/category/NewProduct";
import TopSell from "./Features/category/TopSell";

function App() {
  const products = [
    {
      id: 1,
      image: chair1,
      nameP: "Study Gold Chair",
      brand: "Angie Sofa",
      rating: 3,
      reaction: 16,
      newPrice: 138,
      oldPrice: 0,
      newProd: false,
    },
    {
      id: 2,
      image: chair4,
      nameP: "Study Chair",
      brand: "Maiden Home",
      rating: 4,
      reaction: 25,
      newPrice: 138,
      oldPrice: 146,
      newProd: false,
    },
    {
      id: 3,
      image: chair5,
      nameP: "Grey Sofa",
      brand: "interior Define",
      rating: 5,
      reaction: 9,
      newPrice: 120,
      oldPrice: 150,
      newProd: true,
    },
    {
      id: 4,
      image: chair6,
      nameP: "Comfortable Sofa",
      brand: "Angie Sofa",
      rating: 3,
      reaction: 38,
      newPrice: 131,
      oldPrice: 1450,
      newProd: false,
    },
    {
      id: 5,
      image: chair7,
      nameP: "Arm Sofa",
      brand: "interior Define",
      rating: 3,
      reaction: 5,
      newPrice: 126,
      oldPrice: 0,
      newProd: true,
    },
    {
      id: 6,
      image: chair8,
      nameP: "Brown Sofa",
      brand: "Joybird",
      rating: 5,
      reaction: 11,
      newPrice: 118,
      oldPrice: 130,
      newProd: false,
    },
    {
      id: 7,
      image: chair9,
      nameP: "Black Sofa",
      brand: "Maiden Home",
      rating: 3,
      reaction: 7,
      newPrice: 110,
      oldPrice: 123,
      newProd: false,
    },
    {
      id: 8,
      image: chair10,
      nameP: "Green Couch",
      brand: "Angie Sofa",
      rating: 4,
      reaction: 32,
      newPrice: 129,
      oldPrice: 0,
      newProd: false,
    },
    {
      id: 9,
      image: chair11,
      nameP: "Blue Couch",
      brand: "Maiden Home",
      rating: 3,
      reaction: 18,
      newPrice: 170,
      oldPrice: 186,
      newProd: true,
    },
    {
      id: 10,
      image: chair12,
      nameP: "Blue Couch Chair",
      brand: "interior Define",
      rating: 4,
      reaction: 8,
      newPrice: 100,
      oldPrice: 0,
      newProd: true,
    },
    {
      id: 11,
      image: chair13,
      nameP: "Brown Chair",
      brand: "Joybird",
      rating: 3,
      reaction: 5,
      newPrice: 151,
      oldPrice: 170,
      newProd: true,
    },
    {
      id: 13,
      image: chair14,
      nameP: "Orange sofa",
      brand: "Angie Sofa",
      rating: 4,
      reaction: 9,
      newPrice: 190,
      oldPrice: 0,
      newProd: true,
    },
  ];
  const [cartProducts, setCartProducts] = useState([]);

  const [color, setColor] = useState(true);
  const ref = useRef();
  return (
    <div>
      <MyContext.Provider
        value={{
          color,
          setColor,
          products,
          cartProducts,
          setCartProducts,
          ref,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="search/:query" element={<Search />} />
              <Route path="/category/top" element={<TopSell />} />
              <Route path="/category/new" element={<NewProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
