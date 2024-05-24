import market1 from "../assets/market1.png";

function Logo({ onClick }) {
  return (
    <div
      className=" flex flex-col  border-2 justify-center w-11 h-11 lg:w-14 lg:h-14 rounded-full border-[#2b3445] items-center lg:absolute lg:top-0 lg:bottom-0 lg:my-auto lg:left-6 cursor-pointer"
      onClick={onClick}
    >
      <img src={market1} alt="market" />
    </div>
  );
}

export default Logo;
