function Logo({ onClick }) {
  return (
    <div
      className=" flex flex-col  border-2 justify-center w-11 h-11 lg:w-14 lg:h-14 rounded-full border-[#2b3445] items-center lg:absolute lg:top-0 lg:bottom-0 lg:my-auto lg:left-6"
      onClick={onClick}
    >
      <img src="src/assets/market1.png" alt="market" />
    </div>
  );
}

export default Logo;
