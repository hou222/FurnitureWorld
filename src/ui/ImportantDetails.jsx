import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";
import chair5 from "../assets/chair5.png";

function ImportantDetails() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 py-10 px-3 xl:px-0 gap-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center py-4 px-7 lg:px-8 bg-[#fafafa]">
        <div className="flex flex-col gap-1">
          <p className="">Modern Furniture.</p>
          <p className="font-bold text-4xl text-[#4BB4B4]">Big Sale</p>
          <p className="font-semibold text-xl">UP TO 50% OFF</p>
          <a href="#" className="text-[#4BB4B4] underline">
            Shop Now
          </a>
        </div>
        <img
          src={chair1}
          alt="chair"
          className="w-[120px] h-[140px] lg:w-[150px] lg:h-[170px] xl:w-[200px] xl:h-[240px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-4 sm:px-4 bg-[#fafafa]">
        <div className="flex flex-col justify-center items-center gap-1 px-3">
          <p className="">Sofa Collection</p>
          <p className="font-bold text-2xl text-[#4BB4B4]">UP TO 60% OFF</p>

          <a href="#" className="text-[#4BB4B4] underline">
            Shop Now
          </a>
        </div>
        <img
          src={chair2}
          alt="chair"
          className="w-[280px] h-[150px] lg:w-[330px] lg:h-[190px] xl:w-[400px] xl:h-[220px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center py-4 sm:px-4 bg-[#fafafa] row-span-2">
        <div className="flex flex-col justify-center items-center gap-1 px-3 ">
          <p className="font-semibold text-2xl">Winter Offer!</p>
          <p className="font-bold text-4xl text-[#4BB4B4]">50% OFF</p>
          <p>All kind of Furniture Items</p>
          <a href="#" className="text-[#4BB4B4] underline">
            Shop Now
          </a>
        </div>
        <img src={chair3} alt="chair" />
      </div>
      <div className="flex justify-between items-center py-4 px-7 lg:px-8 bg-[#fafafa] ">
        <div className="flex flex-col gap-1">
          <p className="text-sm">Modern & Comfortable</p>
          <p className="font-bold text-2xl text-[#4BB4B4] w-[100px] xl:w-full">
            Chair Collection
          </p>

          <a href="#" className="text-[#4BB4B4] underline">
            Shop Now
          </a>
        </div>
        <img
          src={chair4}
          alt="chair"
          className="w-[120px] h-[130px] md:w-[190px] md:h-[200px] lg:w-[220px] lg:h-[230px]"
        />
      </div>

      <div className="flex justify-between items-center py-4 px-7 lg:px-8 bg-[#fafafa]">
        <div className="flex flex-col gap-1">
          <p className="text-sm">December New!</p>
          <p className="font-bold text-2xl text-[#4BB4B4]">Sofa Chair</p>
          <a href="#" className="text-[#4BB4B4] underline">
            Shop Now
          </a>
        </div>
        <img
          src={chair5}
          alt="chair"
          className="w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
        />
      </div>
    </div>
  );
}

export default ImportantDetails;
