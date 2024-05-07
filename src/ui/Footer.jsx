import Logo from "./Logo";

function Footer() {
  return (
    <footer /* className="bg-[#2b3445]" */ className="bg-gray-300 py-7 px-4">
      <Logo />
      <p className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
        voluptatum, nisi officia voluptatibus fugiat harum quia modi ipsa
        tempora, non expedita! Exercitationem dolores iusto a, molestias rerum
        hic doloribus neque.
      </p>
      <div className="flex flex-row">
        <img
          src="/src/assets/playstore.png"
          alt="playstore"
          className="w-[160px] h-[50px]"
        />
        <img
          src="/src/assets/appstore.png"
          alt="appstore"
          className="w-[160px] h-[50px]"
        />
      </div>
      <div>
        <h1>About Us</h1>
        <ul>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Our Cares</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
