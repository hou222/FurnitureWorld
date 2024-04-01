import { useState } from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Nav from "./Nav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <header>
      <HeaderTop />
      <Nav isOpen={isOpen} handleOpen={handleOpen} />
      <HeaderMiddle handleOpen={handleOpen} />
    </header>
  );
}

export default Header;
