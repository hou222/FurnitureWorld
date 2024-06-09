import market2 from "../assets/market2.png";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

function Footer() {
  return (
    <footer className="bg-[#222935] py-7 px-4 xl:py-14 xl:px-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col gap-7">
        <div className="flex justify-center items-center w-11 h-11 lg:w-14 lg:h-14 rounded-full border-white border-2">
          <img src={market2} alt="logo" />
        </div>
        <p className="text-sm text-[#AEB4BE]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          voluptatum, nisi officia voluptatibus fugiat harum quia modi ipsa
          tempora, non expedita! Exercitationem dolores iusto a, molestias rerum
          hic doloribus neque.
        </p>
        <div className="flex flex-row gap-4">
          <div className=" bg-[#161d2b] px-3 py-1 rounded-sm text-white flex flex-row gap-2 items-center cursor-pointer">
            <img
              src={playstore}
              alt="playstore"
              className="w-[26px] h-[26px]"
            />
            <div className="flex flex-col">
              <p className="text-[10px] font-semibold">Get it on</p>
              <p className="font-bold text-[17px]">Google Play</p>
            </div>
          </div>
          <div className=" bg-[#161d2b] px-3 py-1 rounded-sm text-white flex flex-row gap-2 items-center cursor-pointer">
            <img src={appstore} alt="appstore" className="w-[26px] h-[26px]" />
            <div className="flex flex-col">
              <p className="text-[10px] font-semibold">Download on the</p>
              <p className="font-bold text-[17px]">App Store</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold py-3">About Us</h1>
        <ul className="text-[#AEB4BE] flex flex-col gap-2 ">
          <li className="cursor-pointer hover:text-white">Careers</li>
          <li className="cursor-pointer hover:text-white">Our Stores</li>
          <li className="cursor-pointer hover:text-white">Our Cares</li>
          <li className="cursor-pointer hover:text-white">
            Terms & Conditions
          </li>
          <li className="cursor-pointer hover:text-white">Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold py-3">Customer Care</h1>
        <ul className="text-[#AEB4BE] flex flex-col gap-2 ">
          <li className="cursor-pointer hover:text-white">Help Center</li>
          <li className="cursor-pointer hover:text-white">Track Your Order</li>
          <li className="cursor-pointer hover:text-white">
            Corporate & Bulk Purchasing
          </li>
          <li className="cursor-pointer hover:text-white">Returns & Refunds</li>
          <li className="cursor-pointer hover:text-white">Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold py-3">Contact Us</h1>
        <ul className="text-[#AEB4BE] flex flex-col gap-2 ">
          <li>70 Washington Square South, New York, NY 10012, United States</li>
          <li>Email: uilib.help@gmail.com</li>
          <li>Phone: +1 1123 456 780</li>
        </ul>
        <div>
          <ul className="flex flex-row gap-3 py-4">
            <li className="bg-[#161d2b] p-2 rounded-full">
              <img
                src={facebook}
                alt="facebook"
                className="w-[12px] h-[12px]"
              />
            </li>
            <li className="bg-[#161d2b] p-2 rounded-full">
              <img src={twitter} alt="twitter" className="w-[12px] h-[12px]" />
            </li>
            <li className="bg-[#161d2b] p-2 rounded-full">
              <img src={youtube} alt="youtube" className="w-[12px] h-[12px]" />
            </li>
            <li className="bg-[#161d2b] p-2 rounded-full">
              <img src={google} alt="google" className="w-[12px] h-[12px]" />
            </li>
            <li className="bg-[#161d2b] p-2 rounded-full">
              <img
                src={instagram}
                alt="instgram"
                className="w-[12px] h-[12px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
