import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useContext } from "react";
import { MyContext } from "../MyContext";

function AppLayout() {
  const { ref } = useContext(MyContext);
  return (
    <div>
      <Header />
      <Outlet ref={ref} />
      <Footer />
    </div>
  );
}

export default AppLayout;
