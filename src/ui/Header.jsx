import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

function Header({ color }) {
  //const scroll = useScroll();

  return (
    <header className="sticky top-0 right-0 left-0 z-20 bg-white ">
      <HeaderTop color={color} />
      <HeaderMiddle color={color} />
    </header>
  );
}

export default Header;
