import { Link } from "react-router-dom";
// import image
import img1 from "../img/home-img-1.jpg"

function Banner({ title, text, img }) {
  return (
    <div className="max-sm:mb-0">
      <div className="container">
        <div className="banner-container flex h-[30rem] max-lg:h-[26rem] max-md:h-[25rem] overflow-hidden flex-row-reverse max-sm:m-0">
          <div className="text-side w-[50%] max-sm:w-[100%] text-start max-sm:text-center flex flex-col justify-center lg:p-[8rem] max-lg:p-[30px] max-sm:p-[40px] bg-[#E9E9E9]">
            <div className="text">
              <h2 className="text-[1.5rem] font-[600] mb-[1.5rem]">BE THE FIRST IN LINE</h2>
              <p className="text-[1rem] text-gray-600">RECEIVE LATEST UPDATES</p>
              <div className="flex max-md:justify-center">
                <input type="text" placeholder="Email address" className=" text-[1rem] font-semibold p-[12px] max-md:p-[10px] mt-[2rem] w-[18rem] max-md:w-[12rem] outline-none"/>
                <button className="bg-black text-white text-[1rem] font-bold p-[12px] max-md:p-[10px] mt-[2rem] cursor-pointer transition-all duration-75 ">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="img-side w-[50%] text-end bg-[#E9E9E9] max-sm:hidden">
            <img className="w-[100%] h-[100%] object-cover" src={img1} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;