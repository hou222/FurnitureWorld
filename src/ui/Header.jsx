import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

function Header({ color }) {
  return (
    <header>
      <HeaderTop color={color} />
      <HeaderMiddle color={color} />
    </header>
  );
}

export default Header;
