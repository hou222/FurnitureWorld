import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";
import HeaderBottom from "./HeaderBottom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <header>
      <HeaderTop />
      <HeaderMiddle handleOpen={handleOpen} />
      <Nav isOpen={isOpen} handleOpen={handleOpen} />
      <HeaderBottom />
    </header>
  );
}

export default Header;
